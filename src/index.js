"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./db/database"));
const main_routes_1 = __importDefault(require("./routes/main.routes"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const User_1 = __importDefault(require("./models/User"));
const Mine_1 = __importDefault(require("./models/Mine"));
const Claim_1 = __importDefault(require("./models/Claim"));
const app = (0, express_1.default)();
const PORT = 3002;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/api/v1", main_routes_1.default);
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: '*',
    }
});
io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);
    socket.on("liveUpdate", (_a) => __awaiter(void 0, [_a], void 0, function* ({ type, data }) {
        const user = yield User_1.default.findById(data.userId);
        if (!user) {
            io.emit("userNotFounded", "this is not valid userId");
            return;
        }
        if (type == "mine") {
            const mine = yield Mine_1.default.findOne({ userId: user === null || user === void 0 ? void 0 : user._id });
            if (!mine) {
                io.emit("mineNotValid", "this is not valid Mine");
                return;
            }
            io.emit("getLiveUpdate", { type, data: { username: user === null || user === void 0 ? void 0 : user.username, email: user === null || user === void 0 ? void 0 : user.email, mineAmount: mine === null || mine === void 0 ? void 0 : mine.amount } });
        }
        else {
            const claim = yield Claim_1.default.findById(data === null || data === void 0 ? void 0 : data.claimId);
            if (!claim) {
                io.emit("claimNotValid", "this is not valid claim");
                return;
            }
            io.emit("getLiveUpdate", { type, data: { username: user === null || user === void 0 ? void 0 : user.username, email: user === null || user === void 0 ? void 0 : user.email, mineAmount: claim === null || claim === void 0 ? void 0 : claim.amount } });
        }
    }));
    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
});
server.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, database_1.default)();
    console.log(`Server running on http://localhost:${PORT}`);
}));

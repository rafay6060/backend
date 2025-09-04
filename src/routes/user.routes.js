"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const express_1 = require("express");
const authController_1 = require("../controller/authController");
const mineCoinController_1 = require("../controller/mineCoinController");
const depositController_1 = require("../controller/depositController");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/profiles/'); // Make sure this folder exists
    },
    filename: function (req, file, cb) {
        const ext = path_1.default.extname(file.originalname);
        cb(null, `${Date.now()}-${file.fieldname}.${ext}`);
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    }
    else {
        cb(new Error('Only image files are allowed!'), false);
    }
};
exports.upload = (0, multer_1.default)({ storage, fileFilter });
const UserRoute = (0, express_1.Router)();
UserRoute.post('/register', authController_1.register);
UserRoute.post('/login', authController_1.login);
UserRoute.post('/sentOtp', authController_1.sentOtp);
UserRoute.post('/verifyOtp', authController_1.verifyOtp);
UserRoute.get("/byId/:id", authController_1.getUserById);
UserRoute.get("/startMine/:id", mineCoinController_1.startMine);
UserRoute.post("/claim", mineCoinController_1.claim);
UserRoute.get("/depositById/:id", depositController_1.getAllDepositsByUser);
UserRoute.post("/mailVerify", authController_1.sendMailOtp);
UserRoute.post("/updatePassword", authController_1.updatePassword);
UserRoute.get("/getAllUser", authController_1.getAllUser);
UserRoute.post("/withdraw", authController_1.createWithdraw);
UserRoute.post("/reStake", authController_1.reStakeCoin);
UserRoute.patch('/update/:id', exports.upload.single('image'), authController_1.update);
exports.default = UserRoute;

import cors from 'cors';
import express from 'express';
import connectDb from './db/database';
import MainRoute from './routes/main.routes';
import http from 'http';
import { Server, Socket } from 'socket.io';
import User from './models/User';
import Mine from './models/Mine';
import Claim from './models/Claim';
// import { prisma } from './db/prisma';

const app = express();
const PORT = 3002;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Serve static files (uploaded images)
app.use('/uploads', express.static('uploads'));

app.use("/api/v1", MainRoute);


const server = http.createServer(app);


const io = new Server(server, {
    cors: {
        origin: '*',
    }
});




io.on('connection', (socket: Socket) => {
    console.log(`Client connected: ${socket.id}`);
    socket.on("liveUpdate", async ({ type, data }: { type: "mine" | "claim", data: { userId: string, claimId?: string } }) => {
        const user = await User.findById(data.userId);
        if (!user) {
            io.emit("userNotFounded", "this is not valid userId");
            return;
        }

        if (type == "mine") {
            const mine = await Mine.findOne({ userId: user?._id });
            if (!mine) {
                io.emit("mineNotValid", "this is not valid Mine");
                return;
            }

            io.emit("getLiveUpdate", { type, data: { username: user?.username, email: user?.email, mineAmount: mine?.amount } });
        } else {
            const claim = await Claim.findById(data?.claimId);
            if (!claim) {
                io.emit("claimNotValid", "this is not valid claim");
                return;
            }
            io.emit("getLiveUpdate", { type, data: { username: user?.username, email: user?.email, mineAmount: claim?.amount } });
        }
    });

    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
});


server.listen(PORT, async () => {
    await connectDb();
    // Removed auto-creation of analytics views as requested
    console.log(`Server running on http://localhost:${PORT}`);
});


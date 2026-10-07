const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/chatapp")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log("MongoDB error:", error);
    });

// Message schema
const messageSchema = new mongoose.Schema({
    username: String,
    message: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model("Message", messageSchema);

// Socket connection
io.on("connection", (socket) => {

    console.log("User connected:", socket.id);

    // User joins chat
    socket.on("joinChat", (username) => {
        socket.username = username;

        console.log(`${username} joined the chat`);

        socket.emit("joined", `Welcome ${username}`);
    });

    // Receive message
    socket.on("sendMessage", async (data) => {

        const newMessage = new Message({
            username: data.username,
            message: data.message
        });

        await newMessage.save();

        // Send message to all users
        io.emit("receiveMessage", newMessage);
    });

    // User disconnect
    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

// Get previous messages
app.get("/messages", async (req, res) => {

    const messages = await Message
        .find()
        .sort({ createdAt: 1 });

    res.json(messages);
});

server.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
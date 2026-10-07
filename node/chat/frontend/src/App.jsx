import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {

    const [username, setUsername] = useState("");
    const [joined, setJoined] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    // Load old messages
    useEffect(() => {

        fetch("http://localhost:5000/messages")
            .then(response => response.json())
            .then(data => {
                setMessages(data);
            });

        // Receive new message
        socket.on("receiveMessage", (newMessage) => {
            setMessages(prev => [...prev, newMessage]);
        });

        return () => {
            socket.off("receiveMessage");
        };

    }, []);

    // Join chat
    const joinChat = () => {

        if (username.trim() === "") {
            alert("Enter username");
            return;
        }

        socket.emit("joinChat", username);

        setJoined(true);
    };

    // Send message
    const sendMessage = () => {

        if (message.trim() === "") {
            return;
        }

        socket.emit("sendMessage", {
            username: username,
            message: message
        });

        setMessage("");
    };

    return (
        <div style={{ padding: "30px" }}>

            <h1>Simple Chat Application</h1>

            {!joined ? (
                <div>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <button onClick={joinChat}>
                        Join Chat
                    </button>
                </div>
            ) : (

                <div>

                    <h2>Welcome, {username}</h2>

                    <div
                        style={{
                            border: "1px solid black",
                            height: "300px",
                            overflowY: "scroll",
                            padding: "10px"
                        }}
                    >

                        {messages.map((msg, index) => (
                            <p key={index}>
                                <strong>{msg.username}:</strong>{" "}
                                {msg.message}
                            </p>
                        ))}

                    </div>

                    <br />

                    <input
                        type="text"
                        placeholder="Type message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <button onClick={sendMessage}>
                        Send
                    </button>

                </div>
            )}

        </div>
    );
}

export default App;
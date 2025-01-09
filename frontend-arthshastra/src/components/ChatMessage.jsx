import React from "react";
import ChatbotIcon from "./ChatbotIcon";

const ChatMessage = ({chat}) => {
    return (
        <div>
            <div className={`message ${chat.role === "model" ? 'bot' : 'user'}-message`}>
                {chat.role === "model" && <ChatbotIcon />}
                <p className='message-text'>{chat.text}</p>
            </div>
        </div>
    )
}

export default ChatMessage;
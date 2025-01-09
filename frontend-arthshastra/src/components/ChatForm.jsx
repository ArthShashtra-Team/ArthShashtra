import React from 'react';
import { useRef } from 'react';

const ChatForm = ({chatHistory, setChatHistory, generateBotResponse }) => {
    const inputRef = useRef();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage) return;

        inputRef.current.value = "";

        //Update Chat history with user Message
        setChatHistory(history => [...history, { role: "user", text: userMessage}]);
        console.log(userMessage);

        
        setTimeout(() => {
            // Add a Thinking... PlaceHolder for thr bot's Response
            setChatHistory((history) => [...history, {role: "model", text: "Thinking..."}]);
            
            // Call the function to generate the bot's Response
            generateBotResponse([...chatHistory, { role: "user", text: userMessage }]);
        }, 600);
        
    };
    return(
        <form action="#" className='chat-form' onSubmit={handleFormSubmit}>
                        <input ref={inputRef} type='text' placeholder='Message....' className='message-input' required />
                        <button className="material-symbols-outlined">keyboard_arrow_up</button>
                    </form>
    );
}

export default ChatForm;
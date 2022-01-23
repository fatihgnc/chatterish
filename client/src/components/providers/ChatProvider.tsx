import React, { useContext, useEffect, useState } from 'react';
import { Message } from '../../models/Message';
import { ChatServiceClient } from '../../proto/ChatterishServiceClientPb';
import { ChatMessage, Username } from '../../proto/chatterish_pb';
import { ErrorContext } from './ErrorProvider';
import { UserContext } from './UserProvider';

type ChatContextObj = {
    messages: Message[];
    sendMessage: (
        message: string,
        sender: string,
        receiver: string,
        time: string
    ) => Promise<void>;
};

export const ChatContext = React.createContext<ChatContextObj>({
    messages: [],
    sendMessage: async () => {},
});

const chatClient = new ChatServiceClient('http://localhost:8080');

const ChatContextProvider: React.FC = (props) => {
    const userCtx = useContext(UserContext);
    const errCtx = useContext(ErrorContext);
    const [messages, setMessages] = useState<any[]>([]);

    useEffect(() => {
        if (userCtx.isAuth) {
            const receiveMessageReq = new Username();

            receiveMessageReq.setUsername(userCtx.user?.username as string);

            try {
                const receiveStream =
                    chatClient.receiveMessage(receiveMessageReq);

                receiveStream.on('data', (chunk: any) => {
                    const msgObj = chunk.toObject();

                    const msg = new Message(
                        msgObj.sender,
                        msgObj.time,
                        msgObj.msg,
                        msgObj.receiver
                    );

                    setMessages((prevMessages) => [...prevMessages, msg]);
                });
            } catch (error: any) {
                errCtx.setError(error.message);
            }
        }
    }, [errCtx, userCtx.user?.username, userCtx.isAuth]);

    console.log(messages);

    const sendMessage = async (
        message: string,
        sender: string,
        receiver: string,
        time: string
    ) => {
        const sendMessageReq = new ChatMessage();

        sendMessageReq.setMsg(message);
        sendMessageReq.setSender(sender);
        sendMessageReq.setTime(time);
        sendMessageReq.setReceiver(receiver);

        try {
            console.log('sending message');
            await chatClient.sendMessage(sendMessageReq, {});
            console.log('message sent');
        } catch (error: any) {
            errCtx.setError(error.message);
        }
    };

    const ctxValue: ChatContextObj = {
        messages,
        sendMessage,
    };

    return (
        <ChatContext.Provider value={ctxValue}>
            {props.children}
        </ChatContext.Provider>
    );
};

export default ChatContextProvider;

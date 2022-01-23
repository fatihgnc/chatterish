import { Close, Send } from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatMessage from '../chat/ChatMessage';
import { ChatContext } from '../providers/ChatProvider';
import { UserContext } from '../providers/UserProvider';
import MainContentWrapper from '../ui/MainContentWrapper';

const ChatScreen = () => {
    const userCtx = useContext(UserContext);
    const chatCtx = useContext(ChatContext);

    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (!userCtx.isAuth) {
            return navigate('/login');
        }

        (async () => {
            try {
                await userCtx.refreshToken();
            } catch (error) {
                console.log(error);
            }
        })();
    }, [navigate, userCtx, chatCtx]);

    return (
        <MainContentWrapper bg='bg-gray-900'>
            <div className='bg-gray-800 text-white py-4 px-6 font-semibold sm:text-sm lg:text-lg tracking-wider relative'>
                chatting with{' '}
                <span className='text-blue-500 tracking-widest'>
                    {userCtx.receiver}
                </span>
                <button
                    className='cursor-pointer flex items-center justify-center absolute top-[50%] translate-y-[-50%] right-5'
                    onClick={(e) => {
                        userCtx.removeUserFromMatchPool();
                        navigate('/');
                    }}>
                    <Close />
                </button>
            </div>
            <div className='h-[65vh] overflow-y-auto'>
                <div className='bg-gray-900 p-5 text-white'>
                    {chatCtx.messages.length > 0
                        ? chatCtx.messages.map((messageObj, index) => {
                              return (
                                  <div key={index}>
                                      <ChatMessage
                                          date={messageObj.time}
                                          message={messageObj.message}
                                          sender={messageObj.sender}
                                      />
                                  </div>
                              );
                          })
                        : null}
                </div>
            </div>
            <div className='flex'>
                <input
                    type='text'
                    placeholder='type your message'
                    className='flex-1 border-none'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    className='font-semibold bg-white opacity-90 sm:text-sm lg:text-lg sm:px-2 lg:px-5 py-1 flex items-center justify-center sm:gap-1 lg:gap-3'
                    onClick={async (e) => {
                        const date = new Date();
                        const localeDate = date.toLocaleTimeString();
                        await chatCtx.sendMessage(
                            message,
                            userCtx.sender as string,
                            userCtx.receiver as string,
                            localeDate
                        );

                        setMessage('');
                    }}>
                    <Send fontSize='small' />
                    Send
                </button>
            </div>
        </MainContentWrapper>
    );
};

export default ChatScreen;

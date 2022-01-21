import { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';

const ChatMessage: React.FC<{
    message: string;
    sender: string;
    date: string;
}> = (props) => {
    const userCtx = useContext(UserContext);
    const currentUsername = userCtx.user?.username;

    return (
        <div
            className={`flex flex-col  max-w-[50%] px-4 py-2 rounded-2xl mb-4 ${
                currentUsername === props.sender
                    ? 'rounded-bl-none bg-white opacity-95'
                    : 'rounded-br-none bg-gray-800 ml-auto'
            }`}>
            <p
                className={`sm:text-[14px] lg:text-[17px]  text-gray-900 p-0 m-0 leading-[1.20] tracking-[0.05em] ${
                    currentUsername === props.sender
                        ? 'text-black'
                        : 'text-white'
                }`}>
                {props.message}
            </p>
            <div className='text-right'>
                <small className='sm:text-[10px] lg:text-base text-blue-500 tracking-widest'>
                    {props.date}
                </small>
            </div>
        </div>
    );
};

export default ChatMessage;

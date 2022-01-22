import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';
import MainContentWrapper from '../ui/MainContentWrapper';

const LoginForm = () => {
    const userCtx = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [psw, setPsw] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await userCtx.signIn(username, psw);
    };

    return (
        <MainContentWrapper bg='bg-gray-900'>
            <div className='sm:px-5 xl:px-8 py-8 text-white'>
                <h1 className='text-2xl pb-4'>Login Form</h1>
                <form onSubmit={handleSubmit} className='sm:p-4 xl:p-10'>
                    <div className='mb-4 flex flex-col xl:gap-3 overflow-hidden'>
                        <label
                            htmlFor='username'
                            className='text-white xl:text-lg sm:text-base sm:w-11/12 xl:w-1/12 sm:mb-2 xl:mb-0 min-w-fit'>
                            Username/Email
                        </label>
                        <input
                            id='username'
                            placeholder='Enter username or e-mail...'
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            className='flex-1 w-full'
                        />
                    </div>
                    <div className='mb-5 flex flex-col xl:gap-3 overflow-hidden'>
                        <label
                            htmlFor='password'
                            className='text-white xl:text-lg sm:text-base sm:w-11/12 xl:w-1/12 sm:mb-2 xl:mb-0 min-w-fit'>
                            Password
                        </label>
                        <input
                            id='password'
                            type='password'
                            placeholder='Enter your password...'
                            onChange={(e) => setPsw(e.target.value)}
                            value={psw}
                            className='flex-1 w-full'
                        />
                    </div>
                    <div className='flex justify-between'>
                        <button
                            className='py-2 xl:text-xl sm:text-base'
                            onClick={(e) => navigate('/register')}>
                            Don't have an account? <strong>Register</strong>
                        </button>
                        <button className='bg-white text-black px-3 py-2 font-semibold tracking-widest mt-4 sm:text-sm xl:text-base'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </MainContentWrapper>
    );
};

export default LoginForm;

import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';
import MainContentWrapper from '../ui/MainContentWrapper';

const EditInfoScreen = () => {
    const search = useLocation().search;
    const params = new URLSearchParams(search);

    const query = params.get('editKey');

    const userCtx = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (!userCtx.isAuth) {
            navigate('/login');
        }
    }, [userCtx.isAuth, navigate]);

    const [psw, setPsw] = useState('');
    const [confPsw, setConfPsw] = useState('');
    const [email, setEmail] = useState('');
    const [pswError, setPswError] = useState('');

    const handlePasswordChange = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (psw !== confPsw) {
            return setPswError("Passwords don't match");
        }

        await userCtx.updatePassword(psw, confPsw);

        setPswError('');
        setPsw('');
        setConfPsw('');
    };

    const handleEmailChange = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (email.trim().length < 10 && !email.includes('@')) {
            return;
        }

        await userCtx.updateEmail(email);

        setPswError('');
        setEmail('');
    };

    let content;

    if (query === 'password') {
        content = (
            <div className='p-6'>
                <div>
                    <label
                        htmlFor='password'
                        className='text-white xl:text-xl tracking-widest inline-block mb-4 sm:text-base'>
                        New password:
                    </label>
                    <input
                        type='password'
                        placeholder='enter new password'
                        id='password'
                        value={psw}
                        onChange={(e) => setPsw(e.target.value)}
                        className='block w-full'
                    />
                </div>
                <div className='mt-5'>
                    <label
                        htmlFor='confPassword'
                        className='text-white xl:text-xl tracking-widest inline-block mb-4 sm:text-base'>
                        Confirm password:
                    </label>
                    <input
                        type='password'
                        placeholder='confirm password'
                        id='confPassword'
                        value={confPsw}
                        onChange={(e) => setConfPsw(e.target.value)}
                        className='block w-full'
                    />
                    {pswError ? (
                        <small className='text-red-300 inline-block mt-2'>
                            {pswError}
                        </small>
                    ) : null}
                </div>
                <div className='mt-5 flex justify-end'>
                    <button
                        type='submit'
                        onClick={handlePasswordChange}
                        className='bg-gray-700 uppercase text-white px-4 py-2 block sm:text-sm lg:text-md tracking-widest'>
                        Save
                    </button>
                </div>
            </div>
        );
    } else if (query === 'email') {
        content = (
            <div className='p-6'>
                <label
                    htmlFor='email'
                    className='text-white xl:text-xl tracking-widest inline-block mb-4 sm:text-base'>
                    New email:
                </label>
                <input
                    type='email'
                    placeholder='enter new email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='block w-full'
                />
                <div className='mt-5 flex justify-end'>
                    <button
                        type='submit'
                        className='bg-gray-700 uppercase text-white px-4 py-2 block sm:text-sm lg:text-md tracking-widest '
                        onClick={handleEmailChange}>
                        Save
                    </button>
                </div>
            </div>
        );
    }

    return <MainContentWrapper bg='bg-gray-900'>{content}</MainContentWrapper>;
};
export default EditInfoScreen;

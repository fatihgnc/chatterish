import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';
import MainContentWrapper from '../ui/MainContentWrapper';

const UserInfoScreen = () => {
    const userCtx = useContext(UserContext);

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
    }, [userCtx.isAuth, navigate, userCtx]);

    return (
        <MainContentWrapper bg='bg-gray-900'>
            <div className='lg:px-6 py-1'>
                <h1 className='text-2xl text-white px-4 py-3 tracking-widest font-bold border-b-2 border-solid border-white mb-3'>
                    Your Info
                </h1>
                <div className='mb-2 text-white px-6 py-2'>
                    <span className='text-lg font-semibold'>Username</span>
                    <p className='text-blue-500'>{userCtx.user?.username}</p>
                </div>
                <div className='mb-2 text-white px-6 py-2'>
                    <span className='text-lg font-semibold'>Password</span>
                    <p
                        className='text-blue-500 text-ellipsis w-1/10 whitespace-nowrap overflow-hidden'
                        title={userCtx.user?.password}>
                        {userCtx.user?.password}
                    </p>
                </div>
                <div className='mb-2 text-white px-6 py-2'>
                    <span className='text-lg font-semibold'>E-mail</span>
                    <p className='text-blue-500'>{userCtx.user?.email}</p>
                </div>
                <div className='mb-2 text-white px-6 py-2'>
                    <span className='text-lg font-semibold'>Nationality</span>
                    <p className='text-blue-500'>{userCtx.user?.nationality}</p>
                </div>
                <div className='mb-2 text-white px-6 py-2'>
                    <span className='text-lg font-semibold'>Birthdate</span>
                    <p className='text-blue-500'>{userCtx.user?.birthdate}</p>
                </div>
            </div>
        </MainContentWrapper>
    );
};

export default UserInfoScreen;

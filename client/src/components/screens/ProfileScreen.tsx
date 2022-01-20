import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';
import MainContentWrapper from '../ui/MainContentWrapper';

const ProfileScreen = () => {
    const userCtx = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userCtx.isAuth) {
            navigate('/login');
        }
        (async () => {
            await userCtx.refreshToken();
        })();
    }, [userCtx.isAuth, navigate, userCtx]);

    return (
        <MainContentWrapper bg='bg-gray-900'>
            <div className='px-4 py-2'>
                <Link
                    to='/userInfo'
                    className='block text-blue-500 underline px-4 py-2 font-semibold sm:text-md lg:text-xl tracking-widest cursor-pointer'>
                    Show my info
                </Link>
                <Link
                    to='/editProfile?editKey=password'
                    className='block text-blue-500 underline px-4 py-2 font-semibold sm:text-md lg:text-xl tracking-widest cursor-pointer'>
                    Change password
                </Link>
                <Link
                    to='/editProfile?editKey=email'
                    className='block text-blue-500 underline px-4 py-2 font-semibold sm:text-md lg:text-xl tracking-widest cursor-pointer'>
                    Change email
                </Link>
            </div>
        </MainContentWrapper>
    );
};

export default ProfileScreen;

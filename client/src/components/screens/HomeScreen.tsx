import { Start } from '@mui/icons-material';
import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';
import MainContentWrapper from '../ui/MainContentWrapper';

const HomeScreen = () => {
    const userCtx = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (userCtx.isAuth) {
            (async () => {
                try {
                    await userCtx.refreshToken();
                } catch (error) {
                    console.log(error);
                }
            })();
        }
    }, [userCtx.isAuth, navigate, userCtx]);

    const homeContent = userCtx.isAuth ? (
        <MainContentWrapper bg='bg-gray-900'>
            <div className='text-white px-4 py-2 w-full gap-5 h-full flex flex-col'>
                <h1 className='font-semibold text-2xl px-3 py-2'>
                    Match history
                </h1>
                <div className='rounded-sm w-auto h-4/5 overflow-y-auto'>
                    <div className='overflow-x-hidden px-8 py-4'>
                        <div className='mb-2'>
                            <p className='text-xl'>
                                You matched with{' '}
                                <span className='text-blue-500 font-semibold cursor-pointer'>
                                    Jarren Smith
                                </span>
                            </p>
                            <small className='text-gray-400 text-base'>
                                17.7.2022
                            </small>
                        </div>
                        <div className='mb-2'>
                            <p className='text-xl'>
                                You matched with{' '}
                                <span className='text-blue-500 font-semibold cursor-pointer'>
                                    Jarren Smith
                                </span>
                            </p>
                            <small className='text-gray-400 text-base'>
                                17.7.2022
                            </small>
                        </div>
                        <div className='mb-2'>
                            <p className='text-xl'>
                                You matched with{' '}
                                <span className='text-blue-500 font-semibold cursor-pointer'>
                                    Jarren Smith
                                </span>
                            </p>
                            <small className='text-gray-400 text-base'>
                                17.7.2022
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </MainContentWrapper>
    ) : (
        <MainContentWrapper bg='bg-gray-900'>
            <div className='sm:w-2/3 xl:w-3/4 mx-auto my-5 sm:p-2 xl:p-5 sm:text-md xl:text-2xl text-white bg-gray-900 opacity-95'>
                <h1 className='sm:text-lg xl:text-3xl sm:mb-2 xl:mb-5 uppercase'>
                    Welcome to Chatterish!
                </h1>
                This app will be your bridge to the outside world. Not the{' '}
                <span className='font-semibold border border-x-0 border-t-0 border-b-1 border-solid border-orange-400'>
                    neighborhood
                </span>
                , but the whole world!
            </div>
            <div className='flex sm:flex-col xl:flex-row w-1/2 xl:w-3/4 mx-auto gap-5'>
                <div className='bg-slate-100 flex-1 h-auto flex items-center justify-evenly flex-col rounded-xl lg:py-5 sm:drop-shadow-md xl:drop-shadow-xl '>
                    <span className='sm:text-lg xl:text-2xl font-semibold sm:p-2 xl:p-3'>
                        Interactive
                    </span>
                    <p className='flex-1 text-center w-2/3 sm:text-sm xl:text-lg'>
                        Interactive as you can keep in touch with the people you
                        like.
                    </p>
                </div>
                <div className='bg-slate-100 flex-1 flex items-center justify-evenly flex-col rounded-xl lg:py-5 sm:drop-shadow-md xl:drop-shadow-xl'>
                    <span className='sm:text-lg xl:text-2xl font-semibold sm:p-2 xl:p-3'>
                        Social
                    </span>
                    <p className='flex-1 text-center w-2/3 sm:text-sm xl:text-lg'>
                        You can socialize yourself with others from all around
                        the world.
                    </p>
                </div>
                <div className='bg-slate-100 flex-1 flex items-center justify-evenly flex-col rounded-xl lg:py-5 sm:drop-shadow-lg xl:drop-shadow-xl '>
                    <span className='sm:text-lg xl:text-2xl font-semibold sm:p-2 xl:p-3'>
                        Instructive
                    </span>
                    <p className='flex-1 text-center w-2/3 sm:text-sm xl:text-lg'>
                        You can learn about another languages as well as you can
                        teach yours.
                    </p>
                </div>
            </div>
            <Link
                to='/login'
                className='bg-indigo-800 text-white sm:w-auto lg:w-96 mx-auto sm:px-5 sm:py-2 lg:px-10 lg:py-4 rounded-lg duration-300 hover:bg-gray-800 uppercase flex gap-3 justify-center items-center sm:text-sm lg:text-base drop-shadow-lg tracking-widest my-10'>
                <Start />
                Get Started
            </Link>
        </MainContentWrapper>
    );

    return homeContent;
};

export default HomeScreen;

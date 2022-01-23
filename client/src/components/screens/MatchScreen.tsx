import MainContentWrapper from '../ui/MainContentWrapper';
import { Button } from '@mui/material';
import { Shuffle } from '@mui/icons-material';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../providers/UserProvider';
import { useNavigate } from 'react-router-dom';

const MatchScreen = () => {
    const [isMatching, setIsMatching] = useState(false);
    const userCtx = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userCtx.isAuth) {
            return navigate('/login');
        }

        userCtx.addUserToMatchPool();

        (async () => {
            try {
                await userCtx.refreshToken();
            } catch (error) {
                console.log(error);
            }

            if (isMatching) {
                try {
                    await userCtx.matchUser();
                    navigate('/chat');
                } catch (error) {
                    console.log(error);
                }
            }
        })();
    }, [userCtx.isAuth, navigate, userCtx, isMatching]);

    return (
        <MainContentWrapper bg='bg-none'>
            <div className='bg-gray-900 text-white sm:w-9/12 xl:w-1/2 mx-auto h-[200px] grid place-items-center rounded-2xl'>
                <span className='sm:text-base xl:text-2xl font-semibold'>
                    {isMatching ? 'Matching...' : 'Start Matching!'}
                </span>
                {/* <span>Currently Matching: {userCtx.matchingUsersCount}</span> */}
                <Button
                    onClick={(e) => setIsMatching((prevState) => !prevState)}
                    startIcon={!isMatching ? <Shuffle /> : null}
                    variant='contained'
                    color='primary'
                    sx={{
                        bgcolor: 'background.paper',
                        paddingX: 4,
                        paddingY: 0.4,
                        ':hover': {
                            backgroundColor: '#111',
                        },
                    }}>
                    {isMatching ? (
                        <img
                            src='spinner-44px.svg'
                            alt='spinner'
                            width={36}
                            height={36}
                        />
                    ) : (
                        'Match'
                    )}
                </Button>
            </div>
        </MainContentWrapper>
    );
};

export default MatchScreen;

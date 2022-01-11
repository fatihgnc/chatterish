import MainContentWrapper from '../ui/MainContentWrapper';
import { Button } from '@mui/material';
import { Shuffle } from '@mui/icons-material';
import { useState } from 'react';

const MatchScreen = () => {
    const [isMatching, setIsMatching] = useState(false);

    return (
        <MainContentWrapper bg='bg-none'>
            <div className='bg-gray-900 text-white sm:w-9/12 xl:w-1/2 mx-auto h-[200px] grid place-items-center rounded-2xl'>
                <span className='sm:text-base xl:text-2xl font-semibold'>
                    {isMatching ? 'Matching...' : 'Start Matching!'}
                </span>
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

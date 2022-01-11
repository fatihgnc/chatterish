import MainContentWrapper from '../ui/MainContentWrapper';

const ProfileScreen = () => {
    return (
        <MainContentWrapper>
            <div>
                <h1 className='text-3xl text-white px-6 py-4'>Profile</h1>
            </div>
            <div className='sm:p-8 xl:p-10'>
                <div className='mb-3 flex sm:flex-col xl:flex-row items-center xl:gap-5 overflow-hidden'>
                    <label
                        htmlFor='username'
                        className='text-white xl:text-lg sm:text-base sm:w-11/12 xl:w-1/12 sm:mb-2 xl:mb-0'>
                        Username
                    </label>
                    <input
                        className='flex-1 w-full'
                        type='text'
                        id='username'
                        value='fatihthebach'
                    />
                </div>
                <div className='mb-3 flex sm:flex-col xl:flex-row items-center xl:gap-5 overflow-hidden'>
                    <label
                        htmlFor='password'
                        className='text-white xl:text-lg sm:text-base sm:w-11/12 xl:w-1/12 sm:mb-2 xl:mb-0'>
                        Password
                    </label>
                    <input
                        className='flex-1 w-full'
                        type='text'
                        id='password'
                        value='fatih12345!'
                    />
                </div>
                <div className='mb-3 flex sm:flex-col xl:flex-row items-center xl:gap-5 overflow-hidden'>
                    <label
                        htmlFor='email'
                        className='text-white xl:text-lg sm:text-base sm:w-11/12 xl:w-1/12 sm:mb-2 xl:mb-0'>
                        E-mail
                    </label>
                    <input
                        className='flex-1 w-full'
                        type='email'
                        id='email'
                        value='gnc.fath@gmail.com'
                    />
                </div>
                <div className='mb-3 flex sm:flex-col xl:flex-row items-center xl:gap-5 overflow-hidden'>
                    <label
                        htmlFor='country'
                        className='text-white xl:text-lg sm:text-base sm:w-11/12 xl:w-1/12 sm:mb-2 xl:mb-0'>
                        Country
                    </label>
                    <input
                        className='flex-1 w-full'
                        type='text'
                        id='country'
                        value='Turkey'
                    />
                </div>
                <div className='mb-3 flex sm:flex-col xl:flex-row items-center xl:gap-5 overflow-hidden'>
                    <label
                        htmlFor='birthdate'
                        className='text-white xl:text-lg sm:text-base sm:w-11/12 xl:w-1/12 sm:mb-2 xl:mb-0'>
                        Birthdate
                    </label>
                    <input
                        className='flex-1 w-full'
                        type='date'
                        id='birthdate'
                        value='2021-06-06'
                    />
                </div>
                <div className='text-right'>
                    <button className='bg-white text-gray-900 xl:px-10 py-1 mt-6 sm:w-full xl:w-fit  font-bold uppercase tracking-widest inline-block duration-300 hover:bg-gray-600 hover:text-white transition-all sm:text-sm xl:text-lg ml-1'>
                        Save
                    </button>
                </div>
            </div>
        </MainContentWrapper>
    );
};

export default ProfileScreen;

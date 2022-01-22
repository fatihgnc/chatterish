import {
    Home,
    Logout,
    Person,
    Shuffle,
    Login,
    PersonAddRounded,
} from '@mui/icons-material';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';

const Nav = () => {
    const userCtx = useContext(UserContext);

    const navContent = userCtx.isAuth ? (
        <nav className='mt-4 px-4 py-5 flex flex-col gap-4'>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    !isActive
                        ? 'flex gap-2 text-white p-4 hover:bg-neutral-100 hover:text-black ease-in-out duration-300 transition-all cursor-pointer rounded-full'
                        : 'bg-neutral-100 flex gap-2 text-black p-4 ease-in-out duration-300 transition-all cursor-pointer rounded-full'
                }
                title='go to home page'>
                <Home />
            </NavLink>
            <NavLink
                to='/match'
                className={({ isActive }) =>
                    !isActive
                        ? 'flex gap-2 text-white p-4 hover:bg-neutral-100 hover:text-black ease-in-out duration-300 transition-all cursor-pointer rounded-full'
                        : 'bg-neutral-100 flex gap-2 text-black p-4 ease-in-out duration-300 transition-all cursor-pointer rounded-full'
                }
                title='go to match page'>
                <Shuffle />
            </NavLink>
            <NavLink
                to='profile'
                className={({ isActive }) =>
                    !isActive
                        ? 'flex gap-2 text-white p-4 hover:bg-neutral-100 hover:text-black ease-in-out duration-300 transition-all cursor-pointer rounded-full'
                        : 'bg-neutral-100 flex gap-2 text-black p-4 ease-in-out duration-300 transition-all cursor-pointer rounded-full'
                }
                title='go profile page'>
                <Person />
            </NavLink>
            <button
                title='logout'
                className='flex gap-2 text-white p-4 hover:bg-neutral-100 hover:text-black ease-in-out duration-300 transition-all cursor-pointer rounded-full'
                onClick={async (e) => await userCtx.logOut()}>
                <Logout />
            </button>
        </nav>
    ) : (
        <nav className='mt-4 px-4 py-5 flex flex-col gap-4'>
            <NavLink
                to='/'
                className={({ isActive }) =>
                    !isActive
                        ? 'flex gap-2 text-white p-4 hover:bg-neutral-100 hover:text-black ease-in-out duration-300 transition-all cursor-pointer rounded-full'
                        : 'bg-neutral-100 flex gap-2 text-black p-4 ease-in-out duration-300 transition-all cursor-pointer rounded-full'
                }
                title='go to home page'>
                <Home />
            </NavLink>
            <NavLink
                to='login'
                className={({ isActive }) =>
                    !isActive
                        ? 'flex gap-2 text-white p-4 hover:bg-neutral-100 hover:text-black ease-in-out duration-300 transition-all cursor-pointer rounded-full'
                        : 'bg-neutral-100 flex gap-2 text-black p-4 ease-in-out duration-300 transition-all cursor-pointer rounded-full'
                }
                title='go login page'>
                <Login />
            </NavLink>
            <NavLink
                to='register'
                className={({ isActive }) =>
                    !isActive
                        ? 'flex gap-2 text-white p-4 hover:bg-neutral-100 hover:text-black ease-in-out duration-300 transition-all cursor-pointer rounded-full'
                        : 'bg-neutral-100 flex gap-2 text-black p-4 ease-in-out duration-300 transition-all cursor-pointer rounded-full'
                }
                title='go register page'>
                <PersonAddRounded />
            </NavLink>
        </nav>
    );

    return <aside className='w-max h-screen bg-gray-900'>{navContent}</aside>;
};

export default Nav;

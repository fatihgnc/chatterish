import { Outlet } from 'react-router-dom';
import Nav from '../layout/Nav';
import MainLayout from './MainLayout';

const Wrapper: React.FC = (props) => {
    return (
        <div className='w-screen h-screen relative flex'>
            <Nav />
            <MainLayout>
                <Outlet />
            </MainLayout>
        </div>
    );
};

export default Wrapper;

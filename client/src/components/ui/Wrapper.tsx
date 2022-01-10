import { Outlet } from 'react-router-dom';
import Nav from '../layout/Nav';
import MainContentWrapper from './MainContentWrapper';

const Wrapper: React.FC = (props) => {
    return (
        <div className='w-screen h-screen relative flex'>
            <Nav />
            <MainContentWrapper>
                <Outlet />
            </MainContentWrapper>
        </div>
    );
};

export default Wrapper;

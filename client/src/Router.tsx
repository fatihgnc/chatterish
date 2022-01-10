import { Route, Routes } from 'react-router-dom';
import HomeScreen from './components/screens/HomeScreen';
import MatchScreen from './components/screens/MatchScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import Wrapper from './components/ui/Wrapper';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Wrapper />}>
                <Route index element={<HomeScreen />} />
                <Route path='match' element={<MatchScreen />} />
                <Route path='profile' element={<ProfileScreen />} />
            </Route>
        </Routes>
    );
};

export default Router;

import { Route, Routes } from 'react-router-dom';
import HomeScreen from './components/screens/HomeScreen';
import LoginScreen from './components/screens/LoginScreen';
import MatchScreen from './components/screens/MatchScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import Wrapper from './components/ui/Wrapper';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Wrapper />}>
                <Route index element={<HomeScreen />} />
                <Route path='match' element={<MatchScreen />} />
                <Route path='profile' element={<ProfileScreen />} />
                <Route path='login' element={<LoginScreen />} />
                <Route path='register' element={<RegisterScreen />} />
            </Route>
        </Routes>
    );
};

export default Router;

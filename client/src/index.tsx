import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ChatContextProvider from './components/providers/ChatProvider';
import ErrorContextProvider from './components/providers/ErrorProvider';
import UserContextProvider from './components/providers/UserProvider';
import './index.css';

const theme = createTheme({
    palette: {
        background: {
            paper: '#000',
        },
    },
});

ReactDOM.render(
    <BrowserRouter>
        <ErrorContextProvider>
            <UserContextProvider>
                <ChatContextProvider>
                    <ThemeProvider theme={theme}>
                        <App />
                    </ThemeProvider>
                </ChatContextProvider>
            </UserContextProvider>
        </ErrorContextProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
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
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

import React, { useContext, useEffect } from 'react';
import { ErrorContext } from './components/providers/ErrorProvider';
import Router from './Router';

function App() {
    const errCtx = useContext(ErrorContext);

    useEffect(() => {
        if (errCtx.error) {
            alert(errCtx.error);
            errCtx.clearError();
        }
    }, [errCtx.error, errCtx]);

    return <Router />;
}

export default App;

import React, { useState } from 'react';

type ErrorContextObj = {
    error: any;
    setError: (err: string) => void;
    clearError: () => void;
};

export const ErrorContext = React.createContext<ErrorContextObj>({
    error: '',
    setError: (err: string) => {},
    clearError: () => {},
});

const ErrorContextProvider: React.FC = (props) => {
    const [err, setErr] = useState<string | null>(null);

    const ctxValue: ErrorContextObj = {
        error: err,
        setError: (err: string) => setErr(err),
        clearError: () => setErr(null),
    };

    return (
        <ErrorContext.Provider value={ctxValue}>
            {props.children}
        </ErrorContext.Provider>
    );
};

export default ErrorContextProvider;

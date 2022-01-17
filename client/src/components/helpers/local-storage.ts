export const getTokenFromLS = () => localStorage.getItem('token');
export const saveTokenInLS = (token: string) =>
    localStorage.setItem('token', token);
export const removeTokenFromLS = () => localStorage.removeItem('token');

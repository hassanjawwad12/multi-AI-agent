import React, { createContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthCheck } from '../functions/authCheck'; // import your action
import { checkUserAuth } from '../functions/middleware';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.checkAuth.isAuthenticated); 

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(setAuthCheck(true));
        }
    }, [dispatch]);

    const login = async () => {
        const token = await checkUserAuth();
        if(token){
            localStorage.setItem('token', token);
            dispatch(setAuthCheck(true));
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        dispatch(setAuthCheck(false));
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
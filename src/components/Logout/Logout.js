import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import * as authService from '../../services/authService';
import { AuthContext } from "../../contexts/AuthContext";
import { isAuth } from "../../hoc/routeGuards";


const Logout = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                navigate('/login');
            })
    }, []);

    return null;
};

export default isAuth(Logout);
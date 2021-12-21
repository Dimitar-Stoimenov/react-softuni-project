import { useContext } from 'react';
import { Navigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

export const isAuth = (Component) => {

    const WrapperComponent = (props) => {
        const { user } = useContext(AuthContext);
        const isAuthenticated = Boolean(user?._id);

        return isAuthenticated
            ? <Component {...props} />
            : <Navigate to="/login" />
    }

    return WrapperComponent;
}

export const isVendor = (Component) => {

    const WrapperComponent = (props) => {
        const { user } = useContext(AuthContext);

        return user.isVendor
            ? <Component {...props} />
            : <Navigate to="/forbidden" />
    }

    return WrapperComponent;
}
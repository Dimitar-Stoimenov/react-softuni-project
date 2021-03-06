import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';
import { isGuestOnly } from "../../hoc/routeGuards";

const Register = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let { email, password, repass, isVendor } = Object.fromEntries(new FormData(e.currentTarget));

        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

        if (!regex.test(email)) {
            return alert('Invalid email address')
        }

        if (password !== repass) {
            return alert('Passwords don\'t match!');
        }

        if (isVendor) {
            isVendor = true;
        } else {
            isVendor = false;
        }

        authService.register(email, password, isVendor)
            .then(authData => {
                login(authData);

                navigate('/');
            });
    };

    return (
        <div className="container py-5">
            <div className="col-md-4 col-md-offset-4">
                <form className="col-md-9 m-auto" method="POST" onSubmit={registerSubmitHandler}>
                    <div className="row">
                        <div className="form-group">
                            <input className="form-control" autoFocus placeholder="E-mail" name="email" type="text" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Password" name="password" type="password" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Repeat password" name="repass" type="password" />
                        </div>
                    </div>

                    <div className="checkbox">
                        <label>
                            <p></p>
                            <input name="isVendor" type="checkbox" /> Register as a vendor
                        </label>
                    </div>

                    <div className="row">
                        <div className="col text-start mt-2">
                            <button type="submit" className="btn btn-success btn-lg px-3">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default isGuestOnly(Register);
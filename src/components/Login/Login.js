import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import * as authService from '../../services/authService';

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
                login(authData);

                navigate('/');
            })
            .catch(err => {
                //TODO: show notification
                console.log(err.message);
            })
    };

    return (
        <div className="container py-5">
            <div className="col-md-4 col-md-offset-4">
                <form onSubmit={onLoginHandler} className="col-md-9 m-auto" method="POST" role="form">
                    <div className="row">
                        <div className="form-group">
                            <input className="form-control" autoFocus placeholder="E-mail" name="email" type="text" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" placeholder="Password" name="password" type="password" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col text-start mt-2">
                            <p></p>
                            <button type="submit" className="btn btn-success btn-lg px-3">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
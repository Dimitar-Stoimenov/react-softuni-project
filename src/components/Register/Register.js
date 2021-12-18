import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import * as authService from '../../services/authService';

const Register = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    // const onLoginHandler = (e) => {
    //     e.preventDefault();

    //     let formData = new FormData(e.currentTarget);

    //     let email = formData.get('email');
    //     let password = formData.get('password');

    //     authService.login(email, password)
    //         .then((authData) => {
    //             login(authData);

    //             navigate('/dashboard');
    //         })
    //         .catch(err => {
    //             //TODO: show notification
    //             console.log(err.message);
    //         })
    // };

    return (
        <div className="container py-5">
            <div className="col-md-4 col-md-offset-4">
                <form className="col-md-9 m-auto" method="POST" role="form">
                    <div className="row">
                        <div class="form-group">
                            <input class="form-control" autoFocus placeholder="E-mail" name="email" type="text" />
                        </div>
                        <div class="form-group">
                            <input class="form-control" placeholder="Password" name="password" type="password" />
                        </div>
                        <div class="form-group">
                            <input class="form-control" placeholder="Repeat password" name="repass" type="password" />
                        </div>
                    </div>

                    <div class="checkbox">
			    	    	<label>
                                <p></p>
			    	    		<input name="vendor" type="checkbox"/> Register as a vendor
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

export default Register;
import { Link } from 'react-router-dom';

const GuestNavigation = () => {

    return (
        <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
            <div className="flex-fill">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/catalog">Catalog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>
                    <p></p>
                    <li className="nav-item bg-light rounded-pill">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className="nav-item bg-light rounded-pill">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>


                </ul>
            </div>

        </div>
    );
};

export default GuestNavigation;
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const UserNavigation = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
            <div className="flex-fill">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/catalog">Catalog</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to={`/profile/${user._id}/orders`}>My Orders</Link>
                    </li>
                    <li className="nav-item bg-light rounded-pill">
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar align-self-center d-flex">
                <Link className="nav-icon position-relative text-decoration-none" to="#">
                    <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
                </Link>
                <Link className="nav-icon position-relative text-decoration-none" to={`/profile/${user._id}`}>
                    <i className="fa fa-fw fa-user text-dark mr-3"></i>
                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
                </Link>
            </div>
        </div>
    );
};

export default UserNavigation;
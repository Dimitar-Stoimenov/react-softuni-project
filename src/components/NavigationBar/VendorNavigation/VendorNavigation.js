import { Link } from 'react-router-dom';

const VendorNavigation = ({
    user,
}) => {

    return (
        <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
            <div className="flex-fill">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/create">Create Item</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/my-items">My Items</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar align-self-center d-flex">
                
                <Link className="nav-icon position-relative text-decoration-none" to={`/profile/${user.id}`}>
                    <i className="fa fa-fw fa-user text-dark mr-3"></i>
                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
                </Link>
            </div>
        </div>
    );
};

export default VendorNavigation;
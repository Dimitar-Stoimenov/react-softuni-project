import { Link } from 'react-router-dom';

const NavigationBar = ({
    user,
    isAuthenticated,
    isVendor,
}) => {
    let guestNavigation = (
        <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
            <div className="flex-fill">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about.html">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="shop.html">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="navbar align-self-center d-flex">
                <a className="nav-icon position-relative text-decoration-none" href="#">
                    <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
                </a>
                <a className="nav-icon position-relative text-decoration-none" href="#">
                    <i className="fa fa-fw fa-user text-dark mr-3"></i>
                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
                </a>
            </div>
        </div>
    );

    let userNavigation = (
        <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
            <div className="flex-fill">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about.html">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="shop.html">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="navbar align-self-center d-flex">
                <a className="nav-icon position-relative text-decoration-none" href="#">
                    <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
                </a>
                <a className="nav-icon position-relative text-decoration-none" href="#">
                    <i className="fa fa-fw fa-user text-dark mr-3"></i>
                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
                </a>
            </div>
        </div>
    );

    let vendorNavigation = (
        <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
            <div className="flex-fill">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about.html">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="shop.html">Shop</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="navbar align-self-center d-flex">
                <a className="nav-icon position-relative text-decoration-none" href="#">
                    <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
                </a>
                <a className="nav-icon position-relative text-decoration-none" href="#">
                    <i className="fa fa-fw fa-user text-dark mr-3"></i>
                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"></span>
                </a>
            </div>
        </div>
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow">
            <div className="container d-flex justify-content-between align-items-center">

                <Link className="navbar-brand text-success logo h1 align-self-center" to="/">
                    Zay
                </Link>

                {isAuthenticated
                    ? isVendor
                        ? vendorNavigation
                        : userNavigation
                    : guestNavigation}

            </div>
        </nav>
    );
};

export default NavigationBar;
import { Link } from 'react-router-dom';
import GuestNavigation from './GuestNavigation/GuestNavigation';
import UserNavigation from './UserNavigation/UserNavigation';
import VendorNavigation from './VendorNavigation/VendorNavigation';

const NavigationBar = ({
    user,
    isAuthenticated,
    isVendor,
}) => {
    let navClassList = "navbar navbar-expand-lg navbar-light shadow";
    let divClassList = "container d-flex justify-content-between align-items-center";
    let linkClassList = "navbar-brand text-success logo h1 align-self-center";

    return (
        <nav className={navClassList}>
            <div className={divClassList}>

                <Link className={linkClassList} to="/">
                    Zay
                </Link>

                {isAuthenticated
                    ? isVendor
                        ? <VendorNavigation />
                        : <UserNavigation />
                    : <GuestNavigation />}

            </div>
        </nav>
    );
};

export default NavigationBar;
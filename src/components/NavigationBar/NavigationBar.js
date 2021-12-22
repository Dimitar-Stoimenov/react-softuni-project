import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import GuestNavigation from './GuestNavigation/GuestNavigation';
import UserNavigation from './UserNavigation/UserNavigation';
import VendorNavigation from './VendorNavigation/VendorNavigation';

const NavigationBar = () => {
    const { user } = useContext(AuthContext);

    let navClassList = "navbar navbar-expand-lg navbar-light shadow";
    let divClassList = "container d-flex justify-content-between align-items-center";
    let linkClassList = "navbar-brand text-success logo h1 align-self-center";

    return (
        <nav className={navClassList}>
            <div className={divClassList}>

                <Link className={linkClassList} to="/">
                    ThinkTech
                </Link>

                {user.email
                    ? user.isVendor
                        ? <VendorNavigation />
                        : <UserNavigation />
                    : <GuestNavigation />}

            </div>
        </nav>
    );
};

export default NavigationBar;
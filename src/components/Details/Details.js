import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';

import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";
import * as productService from '../../services/productService';

import "./Details.css";

const Details = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { addToCart } = useContext(CartContext);
    const [item, setItem] = useState({});
    const { itemId } = useParams();
    const [voted, setVoted] = useState(false);

    useEffect(() => {
        productService.getOne(itemId)
            .then(itemResult => {
                setItem(itemResult);
                window.scrollTo(0, 0);
            });
    }, [itemId])

    const addToCartHandler = (e) => {
        e.preventDefault();

        addToCart(item);
    }

    const deleteHandler = (e) => {
        e.preventDefault();

        if (window.confirm('Are you sure you want to delete this item?')) {
            productService.destroy(itemId, user.accessToken)
                .then(() => {
                    navigate('/catalog');
                });
        }
    };

    const UserFormComponent = () => {
        return (
            <form method="POST">
                <div className="row pb-3">
                    <div className="col d-grid">
                        <button onClick={(e) => { e.preventDefault(); addToCartHandler(e); showNotification(); }} type="submit" className="btn btn-success btn-lg" name="submit"
                            value="addtocard">Add To Cart</button>
                    </div>
                </div>
            </form>
        );
    }

    const VendorFormComponent = () => {
        return (
            <div>
                <div className="row pb-3">
                    <div className="col d-grid">
                        <Link to={`/catalog/${item._id}/edit`}>
                            <button className="btn btn-success btn-lg" name="submit"
                                value="addtocard">Edit</button>
                        </Link>
                    </div>
                    <div className="col d-grid">
                        <button onClick={deleteHandler} className="btn btn-success btn-lg" name="submit"
                            value="addtocard">Delete</button>
                    </div>
                </div>
            </div>
        );
    }

    const onRatingClick = (e) => {
        let rating = (e.currentTarget.value);

        if (hasUserVoted()) {
            setVoted(true);
            return alert('You have already voted for this item!');
        }

        setVoted(true);
        productService.pushRating(item, rating, user);
    }

    const hasUserVoted = () => {
        if (typeof item.voters !== undefined) {
            if (item.voters.length > 0) {
                return item.voters.includes(user._id);
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    const showNotification = () => {
        NotificationManager.success(`${item.name} has been added to your cart!`, "", 2500);
    };

    return (
        <section className="bg-light">
            <div className="container pb-5">
                <div className="row">
                    <div className="col-lg-5 mt-5">
                        <div className="card mb-3">
                            <img className="card-img img-fluid" src={item.image} alt="Card image cap"
                                id="product-detail" />
                        </div>

                    </div>
                    <div className="col-lg-7 mt-5">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="h2">{item.name}</h1>
                                <p className="h3 py-2">$ {item.price}</p>

                                {user.email && !user.isVendor
                                    ? <>
                                        <form className={voted ? 'hidden' : undefined} action="" method="POST">
                                            <div className="rating">
                                                <input onClick={onRatingClick} type="radio" name="rating" value="5" id="5" />
                                                <label htmlFor="5">☆</label>
                                                <input onClick={onRatingClick} type="radio" name="rating" value="4" id="4" />
                                                <label htmlFor="4">☆</label>
                                                <input onClick={onRatingClick} type="radio" name="rating" value="3" id="3" />
                                                <label htmlFor="3">☆</label>
                                                <input onClick={onRatingClick} type="radio" name="rating" value="2" id="2" />
                                                <label htmlFor="2">☆</label>
                                                <input onClick={onRatingClick} type="radio" name="rating" value="1" id="1" /><label htmlFor="1">☆</label>
                                                <ul className="col d-grid">Rate this product:</ul>
                                            </div>
                                        </form>
                                    </>

                                    : ''}

                                <h6>Description:</h6>
                                <p>{item.description}</p>

                                <h6>Category:</h6>
                                <p>{item.category}</p>

                                {user.email
                                    ? user.isVendor
                                        ? <VendorFormComponent />
                                        : <UserFormComponent />
                                    : ''}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Details;
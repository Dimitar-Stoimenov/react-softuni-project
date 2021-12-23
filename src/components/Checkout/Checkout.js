import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { create } from "../../services/orderService";
import { isAuth } from "../../hoc/routeGuards";

import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";
import CheckoutCard from "./CheckoutCard/CheckoutCard";
import './Checkout.css';

const Checkout = () => {
    const { cart, resetCart } = useContext(CartContext);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const createSubmitHandler = (e) => {
        e.preventDefault();

        let token = user.accessToken;
        let userId = user._id;
        let itemList = cart.itemList;
        let price = cart.totalPrice;

        create(userId, itemList, price, token)
            .then(orderData => {
                resetCart();
                navigate('/order-complete');
            })
    }

    return (
        <div className="container">
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-md-9">
                        <div className="ibox">
                            <div className="ibox-title">
                                <span className="pull-right">(<strong>{cart.itemCount}</strong>) items</span>
                                <h5>Items in your cart</h5>
                            </div>

                            {cart.cartItems.length > 0
                                ? cart.cartItems.map(x => <CheckoutCard key={(cart.cartItems.indexOf(x) + 1) * Math.random(.52)} item={x} />)
                                : <p>No products added yet.</p>
                            }

                        </div>

                    </div>
                    <div className="col-md-3">
                        <div className="ibox">
                            <div className="ibox-title">
                                <h5>Cart Summary</h5>
                            </div>
                            <div className="ibox-content">
                                <span>
                                    Total
                                </span>
                                <h2 className="font-bold">
                                    $ {cart.totalPrice}.00
                                </h2>

                                <hr />

                                <div className="m-t-sm">
                                    <div className="btn-group">
                                        <a onClick={createSubmitHandler} className="btn btn-primary btn-sm"><i className="fa fa-shopping-cart"></i> Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ibox">
                            <div className="ibox-title">
                                <h5>Support</h5>
                            </div>
                            <div className="ibox-content text-center">
                                <h3><i className="fa fa-phone"></i> +359-888-123-456</h3>
                                <span className="small">
                                    Please contact us if you have any questions. We are available 24h.
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default isAuth(Checkout);
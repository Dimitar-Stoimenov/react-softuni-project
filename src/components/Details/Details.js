import "./Details.css";

import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as productService from '../../services/productService';
import { AuthContext } from "../../contexts/AuthContext";

const Details = () => {
    //TODO: add rating system
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [item, setItem] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        productService.getOne(itemId)
            .then(itemResult => {
                setItem(itemResult);
            });
    }, [itemId]);

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
        //TODO: add to cart on click
        return (
            <form method="POST">
                <div className="row pb-3">
                    <div className="col d-grid">
                        <button type="submit" className="btn btn-success btn-lg" name="submit"
                            value="addtocard">Add To Cart</button>
                    </div>
                </div>
            </form>
        );
    }

    const VendorFormComponent = () => {
        //TODO: edit
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

                                {/* <form action="" method="POST">
                                    { needs onChange click }
                                    <div className="rating">
                                        <input type="radio" name="rating" value="5" id="5" />
                                        <label for="5">☆</label>
                                        <input type="radio" name="rating" value="4" id="4" />
                                        <label for="4">☆</label>
                                        <input type="radio" name="rating" value="3" id="3" />
                                        <label for="3">☆</label>
                                        <input type="radio" name="rating" value="2" id="2" />
                                        <label for="2">☆</label>
                                        <input type="radio" name="rating" value="1" id="1" /><label for="1">☆</label>
                                        <ul className="col d-grid">Rate this product:</ul>
                                    </div>
                                </form> */}

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
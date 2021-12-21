import "./Details.css";

import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as productService from '../../services/productService';
import { AuthContext } from "../../contexts/AuthContext";

const Details = () => {
    //TODO: add rating system
    // const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [item, setItem] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        productService.getOne(itemId)
            .then(itemResult => {
                setItem(itemResult);
            });
    }, [itemId]);

    const UserFormComponent = () => {
        //TODO: add to cart on click
        return (
            <form method="POST">
                <div class="row pb-3">
                    <div class="col d-grid">
                        <button type="submit" class="btn btn-success btn-lg" name="submit"
                            value="addtocard">Add To Cart</button>
                    </div>
                </div>
            </form>
        );
    }

    const VendorFormComponent = () => {
        //TODO: edit and delete
        return (
            <form method="POST">
                <div class="row pb-3">
                    <div class="col d-grid">
                        <button type="submit" class="btn btn-success btn-lg" name="submit"
                            value="addtocard">Edit</button>
                    </div>
                    <div class="col d-grid">
                        <button type="submit" class="btn btn-success btn-lg" name="submit"
                            value="addtocard">Delete</button>
                    </div>
                </div>
            </form>
        );
    }

    return (
        <section class="bg-light">
            <div class="container pb-5">
                <div class="row">
                    <div class="col-lg-5 mt-5">
                        <div class="card mb-3">
                            <img class="card-img img-fluid" src={item.image} alt="Card image cap"
                                id="product-detail" />
                        </div>

                    </div>
                    <div class="col-lg-7 mt-5">
                        <div class="card">
                            <div class="card-body">
                                <h1 class="h2">{item.name}</h1>
                                <p class="h3 py-2">$ {item.price}</p>

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
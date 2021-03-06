import { useState, useEffect } from "react";
import { getAll } from "../../services/productService";

import CatalogCard from "./CatalogCard/CatalogCard";
import calculateRating from "../../services/calculateRating";

const Create = () => {
    const [baseProducts, setBaseProducts] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAll()
            .then(res => {
                let result = res.sort((a, b) => a.name.localeCompare(b.name))
                setProducts(result);
                setBaseProducts(result);
                window.scrollTo(0, 0);
            })
    }, [])

    const onClickAll = (e) => {
        e.preventDefault();

        setProducts(baseProducts);
        window.scrollTo(0, 0);
    }

    const onClickSmartphones = (e) => {
        e.preventDefault();

        let myData = [].concat(baseProducts);
        let result = myData.filter(x => 'Smartphones' == x.category);
        setProducts(result);
        window.scrollTo(0, 0);
    }

    const onClickSmartwatches = (e) => {
        e.preventDefault();

        let myData = [].concat(baseProducts);
        let result = myData.filter(x => 'Smartwatches' == x.category);
        setProducts(result);
        window.scrollTo(0, 0);
    }

    const onClickAccessories = (e) => {
        e.preventDefault();

        let myData = [].concat(baseProducts);
        let result = myData.filter(x => 'Accessories' == x.category);
        setProducts(result);
        window.scrollTo(0, 0);
    }

    const onSortingChange = (e) => {
        let myData = [].concat(products);
        let result = [];

        switch ((e.target[e.target.selectedIndex].id)) {
            case 'byName':
                result = myData.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'byPriceLowest':
                result = myData.sort((a, b) => a.price - (b.price));
                break;
            case 'byPriceHighest':
                result = myData.sort((a, b) => b.price - (a.price));
                break;
            default:
                result = myData.sort((a, b) => {
                    let aRating = calculateRating(a);
                    let bRating = calculateRating(b);

                    if (bRating === aRating) {
                        return b.voters.length - a.voters.length;
                    }

                    return bRating - aRating;
                });
                break;
        }

        setProducts(result);
        window.scrollTo(0, 0);
    }

    return (
        <div className="container py-5">
            <div className="row">

                <div className="col-lg-3">
                    <h1 className="h2 pb-4">Categories</h1>
                    <ul className="list-unstyled templatemo-accordion">
                        <li className="pb-3">
                            <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="" onClick={onClickAll}>
                                All
                            </a>

                        </li>
                        <li className="pb-3">
                            <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="" onClick={onClickSmartphones}>
                                Smartphones
                            </a>

                        </li>
                        <li className="pb-3">
                            <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="" onClick={onClickSmartwatches}>
                                Smartwatches
                            </a>

                        </li>
                        <li className="pb-3">
                            <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="" onClick={onClickAccessories}>
                                Accessories
                            </a>

                        </li>
                        <p></p>
                        <p>Sort by:</p>
                        <div className="col-md-6 pb-4">
                            <select className="form-control" onChange={onSortingChange}>
                                <option id="byName">A to Z</option>
                                <option id="byPriceLowest">Price (lowest to highest)</option>
                                <option id="byPriceHighest">Price (highest to lowest)</option>
                                <option id="byRatingHighest">Rating (highest to lowest)</option>
                            </select>
                        </div>
                    </ul>
                </div>

                <div className="col-lg-9">

                    <div className="row">
                        {products.length > 0
                            ? products.map(x => <CatalogCard key={x._id} item={x} />)
                            : <p>No products added yet.</p>
                        }
                    </div>

                </div>

            </div>
        </div>



    );
}

export default Create;
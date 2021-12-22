import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import MostPopularProductsCard from './MostPopularProductsCard/MostPopularProductsCard';
import { getMostPopular } from "../../services/productService";

import './MostPopularProducts.css';

const MostPopularProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getMostPopular()
            .then(result => {
                setProducts(result);
            })
    }, []);

    return (
        <section className="grеyish-background">
            <div className="container py-5">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Most Popular Products</h1>
                    </div>
                </div>
                <div className="row">

                    {products.map(x => <MostPopularProductsCard key={x._id} item={x} />)}

                </div>
            </div>
        </section>
    );
};

export default MostPopularProducts;
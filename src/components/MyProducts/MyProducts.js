import { useState, useEffect, useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';

import { getMyProducts } from "../../services/productService";

import CatalogCard from "../Catalog/CatalogCard/CatalogCard";

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);

    const token = user.accessToken;

    useEffect(() => {
        getMyProducts(token)
            .then(res => {
                let result = res.sort((a, b) => a.name.localeCompare(b.name))
                setProducts(result);
                window.scrollTo(0, 0);
            })
    }, [])

    return (
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-9">

                    <div class="row">
                        {products.length > 0
                            ? products.map(x => <CatalogCard key={x._id} item={x} />)
                            : <p>You have not added any products yet.</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProducts;
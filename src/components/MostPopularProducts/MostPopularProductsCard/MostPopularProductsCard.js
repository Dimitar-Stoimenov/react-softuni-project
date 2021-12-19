import { Link } from "react-router-dom";

const MostPopularProductsCard = ({

}) => {

    return (
        <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
                <a href="shop-single.html">
                    <img src="/img/feature_prod_01.jpg" className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                        <li>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-warning fa fa-star"></i>
                            <i className="text-muted fa fa-star"></i>
                            <i className="text-muted fa fa-star"></i>
                        </li>
                        <li className="text-muted text-right">$240.00</li>
                    </ul>
                    <a href="shop-single.html" className="h2 text-decoration-none text-dark">Gym Weight</a>
                    <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
                    </p>
                    <p className="text-muted">Reviews (24)</p>
                </div>
            </div>
        </div>
    );
};

export default MostPopularProductsCard;
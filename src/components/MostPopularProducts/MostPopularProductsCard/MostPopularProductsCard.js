import { Link } from "react-router-dom";

const MostPopularProductsCard = ({
    item,
}) => {
    //TODO: fix link to details
    return (
        <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
                <a href="shop-single.html">
                    <img src={item.image} className="card-img-top" alt="..." />
                </a>
                <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                        <li></li>
                        <li className="text-muted text-right">$ {item.price.toFixed(2)}</li>
                    </ul>
                    <a href="shop-single.html" className="h2 text-decoration-none text-dark">{item.name}</a>
                    <p className="card-text">
                        {item.description}
                    </p>
                    <p className="text-muted">Liked by {item.likes.length} {item.likes.length == 1 ? 'person' : 'people'}</p>
                </div>
            </div>
        </div>
    );
};

export default MostPopularProductsCard;
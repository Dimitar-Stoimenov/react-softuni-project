import { Link } from "react-router-dom";
import calculateRating from "../../../services/calculateRating";

const MostPopularProductsCard = ({
    item,
}) => {
    let rating = calculateRating(item);

    return (
        <div className="col-12 col-md-4 mb-4">
            <div className="card h-100">
                <Link to={`/catalog/${item._id}`}>
                    <img src={item.image} className="card-img-top" alt="..." />
                </Link >

                <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                        <li></li>
                        <li className="text-muted text-right">$ {item.price}</li>
                    </ul>
                    <span className="h2 text-decoration-none text-dark">{item.name}</span>
                    <p className="card-text">
                        {item.description}
                    </p>
                    <p className="text-muted float-end">{rating ? rating + ' rating' : 'No rating yet'}</p>
                </div>
            </div>
        </div>
    );
};

export default MostPopularProductsCard;
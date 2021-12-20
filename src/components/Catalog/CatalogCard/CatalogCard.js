import { Link } from "react-router-dom";

const CatalogCard = ({
    item,
}) => {
    return (
        <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                    <img className="card-img rounded-0 img-fluid" src={item.image} />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                            <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="card-body">
                    <p href="shop-single.html" className="h3 text-decoration-none">{item.name}</p>
                    <span className="float-start">$ {item.price.toFixed(2)}</span><span className="text-muted float-end">Liked by {item.likes?.length} people</span>
                </div>
            </div>
        </div>
    );
}

export default CatalogCard;
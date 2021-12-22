import { Link } from "react-router-dom";

const CatalogCard = ({
    item,
}) => {
    let ratingSum = item.likes[1].reduce((a, b) => Number(a) + Number(b), 0);
    let averageRatingToFixed = (ratingSum/item.likes[1].length).toFixed(2);
    let isNaNChecker = isNaN(averageRatingToFixed);

    return (
        <>
            <div className="col-md-4 d-grid">
                <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                        <img className="card-img rounded-0 img-fluid" src={item.image} />
                        <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                            <ul className="list-unstyled">
                                <Link to={`/catalog/${item._id}`}>
                                    <li><p className="btn btn-success text-white mt-2" ><i className="far fa-eye"></i></p></li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="card-body">
                        <p href="shop-single.html" className="h3 text-decoration-none">{item.name}</p>
                        <span className="float-start">$ {item.price}</span><span className="text-muted float-end">{!isNaNChecker ? averageRatingToFixed + ' rating' : 'No rating yet'}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CatalogCard;


const CatalogCard = () => {


    return (
        <div className="col-md-4">
            <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                    <img className="card-img rounded-0 img-fluid" src="assets/img/shop_01.jpg" />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                            <li><a className="btn btn-success text-white" href="shop-single.html"><i className="far fa-heart"></i></a></li>
                            <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="far fa-eye"></i></a></li>
                            <li><a className="btn btn-success text-white mt-2" href="shop-single.html"><i className="fas fa-cart-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="card-body">
                    <a href="shop-single.html" className="h3 text-decoration-none">Oupidatat non</a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <li>M/L/X/XL</li>
                        <li className="pt-2">
                            <span className="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                            <span className="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                        </li>
                    </ul>
                    <p className="text-center mb-0">$250.00</p>
                </div>

                <div class="card-body">
                    <p href="shop-single.html" class="h3 text-decoration-none">Oupidatat non</p>
                    <tc class="float-start">$250.00</tc><tc class="text-muted float-end">Liked by 11 poeple</tc>


                </div>
            </div>
        </div>
    );
}

export default CatalogCard;
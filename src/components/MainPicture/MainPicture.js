import { Link } from "react-router-dom";

const MainPicture = () => {
    return (
        <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container">
                        <div className="row p-5">
                            <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                <img className="img-fluid" src="/img/banner_img_01.jpg" alt="" />
                            </div>
                            <div className="col-lg-6 mb-0 d-flex align-items-center">
                                <div className="text-align-left align-self-center">
                                    <h1 className="h1 text-success"><b>Zay</b> eCommerce</h1>
                                    <h3 className="h2">Tiny and Perfect eCommerce Template</h3>
                                    <p>
                                        Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1).
                                        This template is 100% free provided by <a rel="sponsored" className="text-success" href="https://templatemo.com" target="_blank">TemplateMo</a> website.
                                        Image credits go to <a rel="sponsored" className="text-success" href="https://stories.freepik.com/" target="_blank">Freepik Stories</a>,
                                        <a rel="sponsored" className="text-success" href="https://unsplash.com/" target="_blank">Unsplash</a> and
                                        <a rel="sponsored" className="text-success" href="https://icons8.com/" target="_blank">Icons 8</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPicture;
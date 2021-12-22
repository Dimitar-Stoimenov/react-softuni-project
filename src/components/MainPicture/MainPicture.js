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
                                    <h1 className="h1 text-success"><b>ThinkTech</b></h1>
                                    <h3 className="h2">Deals for Everyone, Every Day.</h3>
                                    <p>
                                    Stay up to date with the latest tech trends with our fantastic range of mobile phones, smart watches and accessories!
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
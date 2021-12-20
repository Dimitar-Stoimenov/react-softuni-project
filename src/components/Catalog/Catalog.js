import { Link } from "react-router-dom";

const Create = () => {


    return (
        <div className="container py-5">
            <div className="row">

                <div className="col-lg-3">
                    <h1 className="h2 pb-4">Categories</h1>
                    <ul className="list-unstyled templatemo-accordion">
                        <li className="pb-3">
                            <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="">
                                All
                            </a>

                        </li>
                        <li className="pb-3">
                            <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="">
                                Smartphones
                            </a>

                        </li>
                        <li className="pb-3">
                            <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="">
                                Smartwatches
                            </a>

                        </li>
                        <li className="pb-3">
                            <a className="collapsed d-flex justify-content-between h3 text-decoration-none" href="">
                                Accessories
                            </a>

                        </li>
                        <p></p>
                        <p>Sort by:</p>
                        <div className="col-md-6 pb-4">
                            <select className="form-control">
                                <option>A to Z</option>
                                <option>Price (lowest to highest)</option>
                                <option>Price (highest to lowest)</option>
                            </select>
                        </div>
                    </ul>
                </div>

                <div className="col-lg-9">

                    <div className="row">
                        //TODO add card
                    </div>

                </div>

            </div>
        </div>



    );
}

export default Create;
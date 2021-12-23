import "./MyOrders.css";

const MyOrders = () => {
    return (
        <div className="row d-flex justify-content-center mt-100 mb-100">
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-body text-center">
                        <h4 className="card-title m-b-0">News Updates</h4>
                    </div>
                    <ul className="list-style-none">
                        <li className="d-flex no-block card-body"> <i className="fa fa-check-circle w-30px m-t-5"></i>
                            <div> <a href="#" className="m-b-0 font-medium p-0" data-abc="true">Version 2.5 released</a> <span className="text-muted">A new version 2.5 has been released. </span> </div>
                            <div className="ml-auto">
                                <div className="tetx-right">
                                    <h5 className="text-muted m-b-0">26</h5> <span className="text-muted font-16">FEB</span>
                                </div>
                            </div>
                        </li>
                        <li className="d-flex no-block card-body border-top"> <i className="fa fa-gift w-30px m-t-5"></i>
                            <div> <a href="#" className="m-b-0 font-medium p-0" data-abc="true">Congratulation to AAA For new investment</a> <span className="text-muted">AAA has invested $2M in MMM. we are happy to working forward with AAA.</span> </div>
                            <div className="ml-auto">
                                <div className="tetx-right">
                                    <h5 className="text-muted m-b-0">11</h5> <span className="text-muted font-16">MAR</span>
                                </div>
                            </div>
                        </li>
                        <li className="d-flex no-block card-body border-top"> <i className="fa fa-plus w-30px m-t-5"></i>
                            <div> <a href="#" className="m-b-0 font-medium p-0" data-abc="true">Hiring Android Developers</a> <span className="text-muted">We are hiring android developers to expend our mobile development team.</span> </div>
                            <div className="ml-auto">
                                <div className="tetx-right">
                                    <h5 className="text-muted m-b-0">19</h5> <span className="text-muted font-16">APR</span>
                                </div>
                            </div>
                        </li>
                        <li className="d-flex no-block card-body border-top"> <i className="fa fa-leaf w-30px m-t-5"></i>
                            <div> <a href="#" className="m-b-0 font-medium p-0" data-abc="true">Anounced New CEO</a> <span className="text-muted">We announced John kendey as new CEO of the company.</span> </div>
                            <div className="ml-auto">
                                <div className="tetx-right">
                                    <h5 className="text-muted m-b-0">20</h5> <span className="text-muted font-16">JUN</span>
                                </div>
                            </div>
                        </li>
                        <li className="d-flex no-block card-body border-top"> <i className="fa fa-question-circle w-30px m-t-5"></i>
                            <div> <a href="#" className="m-b-0 font-medium p-0" data-abc="true">New Guidelines to Employees</a> <span className="text-muted">We have realeased new guidelines to all employees</span> </div>
                            <div className="ml-auto">
                                <div className="tetx-right">
                                    <h5 className="text-muted m-b-0">15</h5> <span className="text-muted font-16">AUG</span>
                                </div>
                            </div>
                        </li>
                        <li className="d-flex no-block card-body border-top"> <i className="fa fa-plus w-30px m-t-5"></i>
                            <div> <a href="#" className="m-b-0 font-medium p-0" data-abc="true">Android App version 5.1 released</a> <span className="text-muted">We have realeased android app version 5.1. update now.</span> </div>
                            <div className="ml-auto">
                                <div className="tetx-right">
                                    <h5 className="text-muted m-b-0">19</h5> <span className="text-muted font-16">OCT</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MyOrders;
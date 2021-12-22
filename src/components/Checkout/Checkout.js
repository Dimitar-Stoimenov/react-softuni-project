import { isAuth } from "../../hoc/routeGuards";
import { Link } from "react-router-dom";

import './Checkout.css';


const Checkout = () => {


    return (
        <div className="container">
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-md-9">
                        <div className="ibox">
                            <div className="ibox-title">
                                <span className="pull-right">(<strong>5</strong>) items</span>
                                <h5>Items in your cart</h5>
                            </div>
                            <div className="ibox-content">
                                <div className="table-responsive">
                                    <table className="table shoping-cart-table">
                                        <tbody>
                                            <tr>
                                                <td width="90">
                                                    <div className="cart-product-imitation">
                                                    </div>
                                                </td>
                                                <td className="desc">
                                                    <h3>
                                                        <a href="#" className="text-navy">
                                                            Desktop publishing software
                                                        </a>
                                                    </h3>
                                                    <p className="small">
                                                        It is a long established fact that a reader will be distracted by the readable
                                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                                    </p>
                                                    <dl className="small m-b-none">
                                                        <dt>Description lists</dt>
                                                        <dd>A description list is perfect for defining terms.</dd>
                                                    </dl>

                                                    <div className="m-t-sm">
                                                        <a href="#" className="text-muted"><i className="fa fa-trash"></i> Remove item</a>
                                                    </div>
                                                </td>

                                                <td>
                                                    $180,00
                                                    <s className="small text-muted">$230,00</s>
                                                </td>
                                                
                                                <td>
                                                    <h4>
                                                        $180,00
                                                    </h4>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div className="ibox-content">
                                <div className="table-responsive">
                                    <table className="table shoping-cart-table">

                                        <tbody>
                                            <tr>
                                                <td width="90">
                                                    <div className="cart-product-imitation">
                                                    </div>
                                                </td>
                                                <td className="desc">
                                                    <h3>
                                                        <a href="#" className="text-navy">
                                                            Text editor
                                                        </a>
                                                    </h3>
                                                    <p className="small">
                                                        There are many variations of passages of Lorem Ipsum available
                                                    </p>
                                                    <dl className="small m-b-none">
                                                        <dt>Description lists</dt>
                                                        <dd>List is perfect for defining terms.</dd>
                                                    </dl>

                                                    <div className="m-t-sm">
                                                        <a href="#" className="text-muted"><i className="fa fa-trash"></i> Remove item</a>
                                                    </div>
                                                </td>

                                                <td>
                                                    $50,00
                                                    <s className="small text-muted">$63,00</s>
                                                </td>
                                                
                                                <td>
                                                    <h4>
                                                        $100,00
                                                    </h4>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div className="ibox-content">
                                <div className="table-responsive">
                                    <table className="table shoping-cart-table">

                                        <tbody>
                                            <tr>
                                                <td width="90">
                                                    <div className="cart-product-imitation">
                                                    </div>
                                                </td>
                                                <td className="desc">
                                                    <h3>
                                                        <a href="#" className="text-navy">
                                                            CRM software
                                                        </a>
                                                    </h3>
                                                    <p className="small">
                                                        Distracted by the readable
                                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                                    </p>
                                                    <dl className="small m-b-none">
                                                        <dt>Description lists</dt>
                                                        <dd>A description list is perfect for defining terms.</dd>
                                                    </dl>

                                                    <div className="m-t-sm">
                                                        <a href="#" className="text-muted"><i className="fa fa-trash"></i> Remove item</a>
                                                    </div>
                                                </td>

                                                <td>
                                                    $110,00
                                                </td>
                                                
                                                <td>
                                                    <h4>
                                                        $110,00
                                                    </h4>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div className="ibox-content">
                                <div className="table-responsive">
                                    <table className="table shoping-cart-table">

                                        <tbody>
                                            <tr>
                                                <td width="90">
                                                    <div className="cart-product-imitation">
                                                    </div>
                                                </td>
                                                <td className="desc">
                                                    <h3>
                                                        <a href="#" className="text-navy">
                                                            PM software
                                                        </a>
                                                    </h3>
                                                    <p className="small">
                                                        Readable content of a page when looking at its layout. The point of using Lorem Ipsum is
                                                    </p>
                                                    <dl className="small m-b-none">
                                                        <dt>Description lists</dt>
                                                        <dd>A description list is perfect for defining terms.</dd>
                                                    </dl>

                                                    <div className="m-t-sm">
                                                        <a href="#" className="text-muted"><i className="fa fa-trash"></i> Remove item</a>
                                                    </div>
                                                </td>

                                                <td>
                                                    $130,00
                                                </td>
                                               
                                                <td>
                                                    <h4>
                                                        $130,00
                                                    </h4>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            <div className="ibox-content">
                                <div className="table-responsive">
                                    <table className="table shoping-cart-table">

                                        <tbody>
                                            <tr>
                                                <td width="90">
                                                    <div className="cart-product-imitation">
                                                    </div>
                                                </td>
                                                <td className="desc">
                                                    <h3>
                                                        <a href="#" className="text-navy">
                                                            Photo editor
                                                        </a>
                                                    </h3>
                                                    <p className="small">
                                                        Page when looking at its layout. The point of using Lorem Ipsum is
                                                    </p>
                                                    <dl className="small m-b-none">
                                                        <dt>Description lists</dt>
                                                        <dd>A description list is perfect for defining terms.</dd>
                                                    </dl>
                                                    <div className="m-t-sm">
                                                        <a href="#" className="text-muted"><i className="fa fa-trash"></i> Remove item</a>
                                                    </div>
                                                </td>
                                                <td>
                                                    $700,00
                                                </td>
                                                
                                                <td>
                                                    <h4>
                                                        $70,00
                                                    </h4>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="ibox-content">
                                <button className="btn btn-primary pull-right"><i className="fa fa fa-shopping-cart"></i> Checkout</button>
                                <Link to="/catalog"><button className="btn btn-white"><i className="fa fa-arrow-left"></i> Continue shopping</button></Link>

                            </div>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <div className="ibox">
                            <div className="ibox-title">
                                <h5>Cart Summary</h5>
                            </div>
                            <div className="ibox-content">
                                <span>
                                    Total
                                </span>
                                <h2 className="font-bold">
                                    $390,00
                                </h2>

                                <hr />
                                
                                <div className="m-t-sm">
                                    <div className="btn-group">
                                        <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-shopping-cart"></i> Checkout</a>
                                        <a href="#" className="btn btn-white btn-sm"> Cancel</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ibox">
                            <div className="ibox-title">
                                <h5>Support</h5>
                            </div>
                            <div className="ibox-content text-center">
                                <h3><i className="fa fa-phone"></i> +359-888-123-456</h3>
                                <span className="small">
                                    Please contact with us if you have any questions. We are avalible 24h.
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default isAuth(Checkout);
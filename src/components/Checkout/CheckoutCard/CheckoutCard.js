import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../../../contexts/CartContext";

const CheckoutCard = ({
    item
}) => {
    const { removeFromCart } = useContext(CartContext);

    const onRemoveClick = (e) => {
        e.preventDefault();

        removeFromCart(item);
    }


    return (
        <div className="ibox-content">
            <div className="table-responsive">
                <table className="table shoping-cart-table">
                    <tbody>
                        <tr>
                            <td width="90">
                                <img className="cart-product-imitation" src={item.image}/>
                            </td>
                            <td className="desc">
                                <h3>
                                    <Link to={`/catalog/${item._id}`} className="text-navy">
                                        {item.name}
                                    </Link>
                                </h3>
                                <p className="small">
                                    {item.description}
                                </p>

                                <div className="m-t-sm">
                                    <a onClick={onRemoveClick} href="#" className="text-muted"><i className="fa fa-trash"></i> Remove item</a>
                                </div>
                            </td>

                            <td>
                                <h4>
                                    ${item.price}
                                </h4>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default CheckoutCard;
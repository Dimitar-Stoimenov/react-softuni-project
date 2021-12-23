import "./MyOrders.css";
import MyOrderCard from "./MyOrderCard.js/MyOrderCard";
import { useEffect, useState } from "react";
import { getMyOrders } from "../../services/orderService";
import { isAuth } from "../../hoc/routeGuards";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(async () => {
        let res = await getMyOrders(user.accessToken);

        let joined = orders.concat(res);

        setOrders(joined);
    }, []);

    return (
        <div className="row d-flex justify-content-center mt-100 mb-100">
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-body text-center">
                        <h4 className="card-title m-b-0">My Orders</h4>
                    </div>
                    <ul className="list-style-none">
                        {orders.length > 0
                            ? orders.map(x => <MyOrderCard key={(orders.indexOf(x) + 1) * Math.random(.52)} item={x} />)
                            : <p>You haven't made any orders yet.</p>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default isAuth(MyOrders);
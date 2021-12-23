const MyOrderCard = (
    { item }
) => {
    let year = item.date.slice(0, 4);
    let month = item.date.slice(5, 7);
    let day = item.date.slice(8, 10);

    return (
        <li className="d-flex no-block card-body border-top">
            <div>
                <p className="m-b-0 font-medium p-0" data-abc="true">You have ordered on {`${day}/${month}/${year}`} for a total price of $ {item.price}.</p>
            </div>
        </li>
    );
}

export default MyOrderCard;
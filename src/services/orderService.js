const url = 'http://localhost:3030/data/orders';

export async function create(userId, itemList, price, token) {
    let res = await fetch(`${url}`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({ userId, itemList, price }),
    });

    return await errorCheck(res);
}



async function errorCheck(response) {
    try {
        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            const data = await response.json();
            return data;
        } catch (err) {
            return response;
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }
}
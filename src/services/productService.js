const url = 'http://localhost:3030/data/catalog';

export async function create(name, description, price, category, image, token) {
    let res = await fetch(`${url}`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({ name, description, price, category, image }),
    });

    return await errorCheck(res);
}

export async function pushRating(item, rating, user) {
    //TODO: add functionality

    let res = await fetch(`${url}/${item.itemId}`, {
        method: 'PUT',
        headers: {
            "Content-Type": 'application/json',
            'X-Authorization': user.token,
        },
        body: JSON.stringify(item),
    });

    return await errorCheck(res);
}

export async function edit(name, description, price, category, image, token, itemId) {
    let res = await fetch(`${url}/${itemId}`, {
        method: 'PUT',
        headers: {
            "Content-Type": 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({ name, description, price, category, image }),
    });

    return await errorCheck(res);
}

export async function getAll() {
    let res = await fetch(`${url}/`);

    return await errorCheck(res);
}

export async function getOne(id) {
    let res = await fetch(`${url}/${id}`);

    return await errorCheck(res);
}

export const destroy = async (id, token) => {
    let res = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token,
        }
    })

    return await errorCheck(res);
}

export async function getMyProducts(token) {
    let res = await fetch(`${url}/my-products`, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            'X-Authorization': token,
        },
    });

    return await errorCheck(res);
}

export async function getMostPopular() {
    let res = await fetch(`${url}/most-popular`);

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
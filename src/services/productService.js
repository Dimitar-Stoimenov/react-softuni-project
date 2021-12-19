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
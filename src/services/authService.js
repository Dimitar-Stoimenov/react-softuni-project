const url = 'http://localhost:3030/users';

export const login = async (email, password) => {
    let res = await fetch(`${url}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ email, password })
    })

    return await errorCheck(res);
};

export const register = async (email, password, isVendor) => {
    let res = await fetch(`${url}/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, isVendor }),
    })

    return await errorCheck(res);
};

export const logout = (token) => {
    return fetch(`${url}/logout`, {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            'X-Authorization': token,
        }
    })
};

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
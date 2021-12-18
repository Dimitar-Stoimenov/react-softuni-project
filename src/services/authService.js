const url = 'http://localhost:3030/users';

export const login = async (email, password) => {
    let res = await fetch(`${url}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ email, password })
    })

    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
};

export const register = async (email, password, isVendor) => {
    let res = await fetch(`${url}/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, isVendor }),
    })

    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
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
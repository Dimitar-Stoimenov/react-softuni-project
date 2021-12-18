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

export const register = async (email, password) => {
    let res = await fetch(`${url}/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })

    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
};

export const logout = () => fetch(`${url}/logout`);

// export const getUser = () => {
//     let username = localStorage.getItem('username');

//     return username;
// };

// export const isAuthenticated = () => {
//     return Boolean(getUser());
// };
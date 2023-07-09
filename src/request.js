async function request(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
            'credentials': 'user-request',
            'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify(data),
    });
    if (response.ok) {
        return response.json();
    }
    throw new Error((await response.json()).message);
}

async function post(url = "", data = {}) {
    const response = await request(url, data);

    if (response.success === false) {
        throw new Error(response.message);
    }

    return response;
}

export default post;
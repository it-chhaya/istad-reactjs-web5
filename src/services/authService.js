export const register = (data) => {
    fetch(`https://api-reading.istad.co/api/v1/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
        console.log(json)
    })
}

export const login = (data) => {
    console.log(data)
}
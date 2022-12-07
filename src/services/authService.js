export const register = async (data) => {

    let response = await fetch(`https://api-reading.istad.co/api/v1/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return response;
}

export const login = async (data) => {

    let response = await fetch(`https://api-reading.istad.co/api/v1/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return response.json()
}

export const sendEmailVerification = async (data) => {
    let response = await fetch(`https://api-reading.istad.co/api/v1/auth/send-email-confirmation`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return response;
}
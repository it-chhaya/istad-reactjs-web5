import { BASE_URL } from "./constants"

export const register = async (data) => {

    const response = await fetch(`${BASE_URL}auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return response.json()
}

export const sendEmailVerification = async (emailRequest) => {

    console.log(emailRequest)

    const response = await fetch(`${BASE_URL}auth/send-email-confirmation`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailRequest)
    })

    return response.json()
}
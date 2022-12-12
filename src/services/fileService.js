import { BASE_URL } from "./constants"

export const uploadFile = async (formData) => {
    
    const response = await fetch(`${BASE_URL}files`, {
        method: 'POST',
        headers: {
            Authorization: 'Basic Y2hhbmNoaGF5YTojQ2hoYXlhMTA='
        },
        body: formData
    })

    return response.json()
}
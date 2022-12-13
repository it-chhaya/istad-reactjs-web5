import { BASE_URL } from "./constants"

export const uploadFile = async (formData) => {
    
    const response = await fetch(`${BASE_URL}files`, {
        method: 'POST',
        headers: {
            Authorization: 'Basic YWRtaW46I0NoaGF5YTEw'
        },
        body: formData
    })

    return response.json()
}
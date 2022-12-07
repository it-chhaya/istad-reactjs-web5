export const uploadFile = async (formData) => {

    const response = await fetch(`https://api-reading.istad.co/api/v1/files`, {
        method: 'POST',
        headers: {
            Authorization: 'Basic Y2hhbmNoaGF5YTojQ2hoYXlhMTA='
        },
        body: formData
    })

    return response.json()
}
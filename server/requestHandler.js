const reqSender = async (url) => {
    try {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error(res.status)
        }
        
        const data = await res.json()
        return data
    } catch (err) {
        throw err
    }
}

const resSender = (req, res, data) => {
    res.json(data)
}

module.exports = { reqSender, resSender }
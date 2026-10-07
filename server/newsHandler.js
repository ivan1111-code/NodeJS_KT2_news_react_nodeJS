const genUrl = (category) => {
    return "https://api.rss2json.com/v1/api.json?rss_url=https://www.vedomosti.ru/rss/rubric/" + category
}

const handleCount = (objData, maxCount) => {
    const items = objData.items
    const newItems = []
    for (let i = 0; i < maxCount; i++) {
        if (!items[i]) {
            break
        }
        newItems.push(items[i])
    }
    return newItems
}

const categoriesList = ["business", "politics"]

const categoriesSender = (res) => {
    res.json({
        categories: categoriesList
    })
}

module.exports = { genUrl, handleCount, categoriesSender, categoriesList }
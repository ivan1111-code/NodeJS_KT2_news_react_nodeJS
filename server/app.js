const express = require("express")
const app = express()
const cors = require("cors")

const { reqSender, resSender } = require("./requestHandler")
const { genUrl, handleCount, categoriesSender, categoriesList } = require("./newsHandler")

app.use(cors())
app.use(express.json())

app.get("/:number/news/for/:category", async (req, res) => {
    try {
        const { number, category } = req.params
        const url = genUrl(category)
        const objData = await reqSender(url)
        const items = handleCount(objData, number)
        resSender(req, res, items)
    } catch (err) {
        res.status(500).json({ error: String(err) })
    }
})

app.get("/categories", (req, res) => {
    categoriesSender(res)
})

app.listen(3000, () => {
    console.log("news server started")
})
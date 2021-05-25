const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.listen(port, () => {
    console.log(`Сервер запущен на ${port} порту`)
})
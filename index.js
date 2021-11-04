const express = require('express')
const app = express()
const port = 3000

const movieRouter = require('./router/movie-router');

app.use(express.json())
app.use(express.urlencoded());

app.use("/movies" ,movieRouter)

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})
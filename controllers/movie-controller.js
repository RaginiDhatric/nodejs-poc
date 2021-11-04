const express = require("express")
const movies = require("../repository/movies.js")

module.exports = {
    getAllMovies: async (req, res) => {
        res.status(200)
        res.json(movies)
    },
    addMovie: async (req, res) => {
        let movie = {
            id: req.body.id,
            title: req.body.title
        }
        movies.push(movie)
        res.end("Saved movie successfully!!")
    }
}

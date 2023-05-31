const router = require("express").Router()
const fs = require("fs")
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"))

//save data
router.post('./data/save', (req, res) => {
    data.save().then(
        () => {
            res.status(201).json('Data saved successfully')
        }
    ).catch(
        (error) => {
            res.status(400).json(error)
        }
    )
})

//Check the data in the database
router.get('./data/:id', (req, res) => {
    data.find().then(
        (data) => {
            res.status(200).json(data);
        }
    ).ctach(
        (error) => {
            res.status(400).json(error)
        }
    )
})

module.exports = router
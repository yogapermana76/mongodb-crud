const router = require('express').Router()
// const Book = require('../models/book')
const BookController = require('../controllers/bookController')

router.post('/add', BookController.create)
router.put('/update/:isbn', BookController.update)
router.delete('/delete/:isbn', BookController.delete)
router.get('/find', BookController.findAll)
router.get('/find/:isbn', BookController.findOne)

module.exports = router
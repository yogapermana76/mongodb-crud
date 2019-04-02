const router = require('express').Router()
// const Book = require('../models/book')
const BookController = require('../controllers/bookController')

router.post('/create', BookController.create)
// router.get('/update/:isbn', BookController.update)
router.delete('/delete/:isbn', BookController.delete)
router.get('/find', BookController.findAll)

module.exports = router
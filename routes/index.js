const router = require('express').Router()

router.get('/', (req, res) => {
  res.status(200).json('success')
})

router.use('/books', require('./book'))

module.exports = router
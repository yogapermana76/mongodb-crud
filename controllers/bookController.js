const Book = require('../models/book')

class BookController {
  static findAll(req, res) {
    Book.findAll()
      .then(books => {
        res.status(200).json(books)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static findOne(req, res) {
    Book.findOne({ isbn: req.params.isbn })
      .then(book => {
        res.status(200).json(book)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static create(req, res) {
    let newBook = {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }
    Book.create(newBook)
      .then(book => {
        res.status(201).json(book)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
  
  static delete(req, res) {
    Book.delete({
      isbn: req.params.isbn
    })
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static update(req, res) {
    Book.update({ isbn : req.params.isbn },
      { $set : {
          isbn: req.body.isbn,
          title: req.body.title,
          author: req.body.author,
          category: req.body.category,
          stock: req.body.stock
      }})
      .then(book => {
        res.status(201).json(book)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = BookController
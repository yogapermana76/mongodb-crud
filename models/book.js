const { MongoClient } = require('mongodb')
// const assert = require('assert')

// connection URL
const url = 'mongodb://localhost:27017'
// Database Name
const mongo_crud = 'mongo_crud'

class Book {
  static findAll() {
    return new Promise((resolve, reject) => {
      // use connect method to connect to the server
      const client = new MongoClient(url, { useNewUrlParser: true })
      client
        .connect()
        .then(() => {
          const db = client.db(mongo_crud)
          return db.collection('books').find().toArray()
        })
        .then(books => {
          client.close()
          resolve(books)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  static create(data) {
    return new Promise((resolve, reject) => {
      const client = new MongoClient(url, { useNewUrlParser: true })
      client
        .connect()
        .then(() => {
          const db = client.db(mongo_crud)
          return db.collection('books').insertOne(data)
        })
        .then(book => {
          resolve(book.ops)
          client.close()
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  static delete(params) {
    return new Promise((resolve, reject) => {
      const client = new MongoClient(url, { useNewUrlParser: true })
      client
        .connect()
        .then(() => {
          const db = client.db(mongo_crud)
          return db.collection('books').deleteOne(params)
        })
        .then(() => {
          client.close()
          resolve('success deleted')
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  static update(where, fields) {
    return new Promise((resolve, reject) => {
      const client = new MongoClient(url, { useNewUrlParser: true })
      client
        .connect()
        .then(() => {
          const db = client.db(mongo_crud)
          return db.collection('books').updateOne(where, fields)
        })
        .then(() => {
          resolve('success updated')
          client.close()
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

module.exports = Book
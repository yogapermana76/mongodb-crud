const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'mongoDB-phase2';

class bookController {
    static findAll(req,res){
        let client = new MongoClient(url, { useNewUrlParser: true });
        client
        .connect()
        .then(()=> {
                let db = client.db(dbName)
                let books = db.collection('books')
                return books.find({}).toArray()
            })
            .then((books)=> {
                res.status(200).json(books)
                client.close()
            })
            .catch((err)=>{
                res.status(400).json(err.message)
            })
    }

    static findOne(req,res){
        let client = new MongoClient(url, { useNewUrlParser: true })
        client
        .connect()
        .then(()=> {
            let db = client.db(dbName)
            let books = db.collection('books')
            return books.findOne({
                isbn : req.params.isbn
            })
        })
        .then(book => {
            res.status(200).json(book)
            client.close()
        })
        .catch((err)=> {
            res.status(400).json(err.message)
        })
    }

    static update(req, res){
        let client = new MongoClient(url, { useNewUrlParser: true })
        client
            .connect()
            .then(()=> {
                let db = client.db(dbName)
                let books = db.collection('books')
                // console.log(req.params)
                return books.updateOne({ isbn : req.params.isbn},
                    {$set : {
                       isbn : req.body.isbn,
                       title: req.body.author,
                       category : req.body.category,
                       stock: req.body.stock 
                    }})
            })
            .then((book)=> {
                res.status(200).json(book)
                client.close() 
            })
            .catch((err)=> {
                res.status(400).json(err.message) 
            })
    }

    static delete(req,res){
        let client = new MongoClient(url, { useNewUrlParser: true });
        client
            .connect()
            .then(()=> {
                let db = client.db(dbName)
                let books = db.collection('books')
                console.log(req.params)
                return books.deleteOne({
                    isbn : req.params.isbn
                })
            })
            .then(()=> {
                res.status(201).json(`delete success`)
                client.close()
            })
            .catch((err)=> {
                res.status(400).json(err.message)
            })
    }

    static create(req, res) {
        let client = new MongoClient(url, { useNewUrlParser: true });
        client
            .connect()
            .then(() => {
                console.log(`Connected successfully to server`)

                let db = client.db(dbName)
                let books = db.collection('books')
                return books.insertOne({
                    isbn: req.body.isbn,
                    title: req.body.title,
                    author: req.body.author,
                    category: req.body.author,
                    stock: req.body.stock
                })
            })
            .then((newBook)=> {
                res.status(201).json(newBook)
                client.close()
            })
            .catch((err) => {
                res.status(400).json(err.message)
            })
    }
}

module.exports = bookController 
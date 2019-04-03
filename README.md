# mongodb-crud
### mongodb-crud built with mongodb and Express

List of User routes:
====
**BOLD** | **HTTP** | **Header(s)**  | **Body** | **Description**
:---: | :---: | :---: | :---: | :---:
`/book/find` | GET | none | none | Get all the Book
`/book/find/:isbn` | GET | none | none | Get a single Book
`/book/add` | POST | none | none | Create a book
`/book/update/:isbn` | PUT | none | none | Update a book with a new info
`/book/delete/:isbn` | DELETE | none | none | Delete a book


```javascript
npm install
npm start
```
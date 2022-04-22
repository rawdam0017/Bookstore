const express= require('express')
const router = express.Router();
const Book = require('../model/Book')
const bookController=require("../controllers/book-controller")
// const adminAuth  = require("../controllers/auth-controller")

//this rout will provide all books 
router.get('/', bookController.getAllBooks )

//this rout will add book
router.post('/',bookController.addBook)
// router.post('/',adminAuth ,bookController.addBook)

//this rout will fined book by id 
router.get('/:id',bookController.getById)

//this rout will Update book 
router.put('/:name/category/:categoryId',bookController.UpdateBook)

//this rout will delete book 
router.delete('/:name/category/:categoryId',bookController.deleteBook)

module.exports=router;

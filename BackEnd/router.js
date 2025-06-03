const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// CRUD Routes
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.createBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router; 

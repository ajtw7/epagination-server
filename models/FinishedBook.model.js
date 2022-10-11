const {Schema, model} = require('mongoose');

const finishedBookSchema = new Schema({
    bookTitle: String,
    authorName: String,
    isbn: Number

})

const FinishedBook = model('FinishedBook', finishedBookSchema)

module.exports = FinishedBook;
const {Schema, model} = require('mongoose');

const finishedBookSchema = new Schema({
    bookTitle: String,
    authorName: Array,
    bookId: String

})

const FinishedBook = model('FinishedBook', finishedBookSchema)

module.exports = FinishedBook;
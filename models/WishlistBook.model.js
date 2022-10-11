const {Schema, model} = require('mongoose');

const wishlistBookSchema = new Schema({
    bookTitle: String,
    authorName: String,
    isbn: Number

})

const WishlistBook = model('WishlistBook', wishlistBookSchema)

module.exports = WishlistBook;
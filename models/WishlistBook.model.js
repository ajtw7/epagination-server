const {Schema, model} = require('mongoose');

const wishlistBookSchema = new Schema({
    bookTitle: String,
    authorName: Array,
    bookId: String

})

const WishlistBook = model('WishlistBook', wishlistBookSchema)

module.exports = WishlistBook;
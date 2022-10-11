const { router } = require('express');
const router = new Router();
const isLoggedIn = require('');
const User = require('../models/User.model');
const WishlistBook = require('../models/WishlistBook.model');


router.post('/profile', isLoggedIn, (req, res, next) => {
    
    const {bookTitle, authorName, isbn } = req.body

    WishlistBook.create({
        bookTitle,
        authorName,
        isbn
    })
    .then(newWLBook => {
        console.log(newWLBook._id, "new book id")
        console.log(req.session.user._id, 'userid')
        return User.findByIdAndUpdate(req.session.user._id, 
            {
                $addToSet: {watchlistBooks: newWLBook._id}
            }, { new: true })
    })
    .then(updatedUser => {
        console.log('updated user', updatedUser)
        // res.redirect('/profile')
        res.json({ message: 'New wishlist book added to user.' })
        
    })

    // router.get('/profile', (req, res, next) => {
    //     const wlBookID = req.params.
    
    //     WishlistBook.findByIdAndDelete()
    //     .then(deletedBook => {
    //         console.log(deletedBook)
    //         res.redirect('/profile')
    //     })
    // })
    
})



const express = require('express')
const router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn');
const User = require('../models/User.model');
const FinishedBook = require('../models/FinishedBook.model');


router.post('/addToReadList', isLoggedIn, (req, res, next) => {
    
    const {bookTitle, authorName, bookId } = req.body

    FinishedBook.create({
        bookTitle,
        authorName,
        bookId
    })
    .then(newFinishedBook => {
        console.log(newFinishedBook._id)
        User.findByIdAndUpdate(
            { _id: req.user._id},
            {$addToSet: {finishedBooks: newFinishedBook._id}}
            )
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    })

    // .then(updatedUser => {
    //     console.log('updated user', updatedUser)
    //     // res.redirect('/profile')
    //     res.json({ message: 'New wishlist book added to user.' })
        


    // router.get('/profile', (req, res, next) => {
    //     const wlBookID = req.params.
    
    //     WishlistBook.findByIdAndDelete()
    //     .then(deletedBook => {
    //         console.log(deletedBook)
    //         res.redirect('/profile')
    //     })
    // })

    .catch(err => {
        console.log(err)
    })
    
})

module.exports = router
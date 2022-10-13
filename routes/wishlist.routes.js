const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const User = require("../models/User.model");
const WishlistBook = require("../models/WishlistBook.model");

router.post("/addToWishlist", isLoggedIn, (req, res, next) => {
  const { bookTitle, authorName, bookId } = req.body;

  WishlistBook.create({
    bookTitle,
    authorName,
    bookId,
  })
    .then((newWLBook) => {
      console.log(newWLBook);
      User.findByIdAndUpdate(
        { _id: req.user._id },
        { $addToSet: { wishlist: newWLBook } }
      )
        .then((result) => {
          console.log(result);
        })
        .cath((err) => {
          console.log(err);
        });
      //     {
      //         $addToSet: {watchlistBooks: newWLBook._id}
      //     }, { new: true })
    })
    // .then(updatedUser => {
    //     console.log('updated user', updatedUser)
    //     // res.redirect('/profile')
    //     res.json({ message: 'New wishlist book added to user.' })

    // })
    .catch((err) => {
      console.log(err);
    });

  // router.get('/profile', (req, res, next) => {
  //     const wlBookID = req.params.

  //     WishlistBook.findByIdAndDelete()
  //     .then(deletedBook => {
  //         console.log(deletedBook)
  //         res.redirect('/profile')
  //     })
  // })
});

router.get("/", isLoggedIn, (req, res, next) => {
  WishlistBook.find({ _id: req.WishlistBook._id })
    .populate({
      path: "wishlist",
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});

module.exports = router;

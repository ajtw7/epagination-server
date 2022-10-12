const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: String,
    wishlist: [{
        type: Schema.Types.ObjectId,
        ref: "WishlistBook"
      }],
    finishedBooks: [{
        type: Schema.Types.ObjectId,
        ref: "FinishedBook"
      }]
  },
  {
    timeseries: true,
    timestamps: true,
  }
);
const User = model("User", userSchema);
module.exports = User;
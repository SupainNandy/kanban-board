const admin = require('../config/firebase')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

exports.googleLogin = async (req, res) => {
  try {
    const { token } = req.body;

    const decoded =
      await admin.auth().verifyIdToken(token);

    let user = await User.findOne({
      email: decoded.email,
    });

    if (!user) {
      user = await User.create({
        name: decoded.name,
        email: decoded.email,
        avatar: decoded.picture,
      });
    }

    const jwtToken = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.json({
      user,
      token: jwtToken,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
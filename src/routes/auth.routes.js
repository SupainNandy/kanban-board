const router = require("express").Router();

const {
  googleLogin,
} = require("../controllers/auth.controller");

router.post("/google", googleLogin);

module.exports = router;
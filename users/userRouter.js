const router = require("express").Router();

const Users = require("./userModel");
const restricted = require("../auth/restricted");

router.get("/", restricted, (req, res) => {
  Users.get()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ error: "server error", err });
    });
});

module.exports = router;

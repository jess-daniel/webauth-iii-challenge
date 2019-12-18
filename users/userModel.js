const db = require("../data/dbConfig");

const get = () => {
  return db("users");
};

module.exports = {
  get
};

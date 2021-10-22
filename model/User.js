const users = require("../data/users.json");

const list = () => users;
const getById = (id) => users.find (user => id === user.id);

module.exports = {
  list, getById
}
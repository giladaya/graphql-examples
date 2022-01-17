/**
 * Dummy data
 */

const users = [
  {
    id: "aaa",
    name: "Alice",
    age: 16,
  },
  {
    id: "bbb",
    name: "Bob",
    age: 17,
  },
  {
    id: "ccc",
    name: "Charlie",
    age: 18,
  },
  {
    id: "ddd",
    name: "Dave",
    age: 19,
  },
  {
    id: "eee",
    name: "Erin",
    age: 20,
  },
  {
    id: "fff",
    name: "Frank",
    age: 21,
  },
];

function fetchUsers() {
  return users;
}
function fetchUserById(id) {
  return users.find((user) => user.id === id);
}
module.exports = {
  fetchUsers,
  fetchUserById,
};

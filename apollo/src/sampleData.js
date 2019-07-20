/**
 * Dummy data
 */

const users = [
  {
    id: "aaa",
    name: "Alice",
    age: 16,
    friends: ["bbb", "ccc"]
  },
  {
    id: "bbb",
    name: "Bob",
    age: 17,
    friends: ["aaa"]
  },
  {
    id: "ccc",
    name: "Charlie",
    age: 18,
    friends: ["aaa", "ddd"]
  },
  {
    id: "ddd",
    name: "Dave",
    age: 19,
    friends: ["ccc"]
  },
  {
    id: "eee",
    name: "Erin",
    age: 20,
    friends: []
  },
  {
    id: "fff",
    name: "Frank",
    age: 21,
    friends: []
  }
];

function fetchUsers() {
  return users;
}
function fetchUserById(id) {
  return users.find(user => user.id === id);
}
function createUser(name, age) {
  const newId = Date.now();
  const newUser = {
    id: newId.toString(),
    name,
    age
  };
  users.push(newUser);
  return newUser;
}
module.exports = {
  fetchUsers,
  fetchUserById,
  createUser
};

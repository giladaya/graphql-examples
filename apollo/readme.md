# Demo with Apollo server 
## Start
```bash
npm i
npm start
```

## Changes
- Add `user` query
- Add `users` query
- Add `User.age` resolver
- Add `friends` query
- Add `createUser` mutation

## Queries
query {
  foo
}

query {
  users {
    name
    id
    age
    friends {
      name
    }
  }
}

mutation {
  createUser(name:"foo", age:12) {
    id
    name
    age
  }
}
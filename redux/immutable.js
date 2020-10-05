let user = {
  name: "Ivo",
  age: "23",
  company: {
    name: "SoftServe",
    workers: [1, 2, 3, 4, 5],
  },
};

let arr = [...newUser.company.workers];
let newUser = {
  ...user,
  company: {
    ...user.company, 
    workers: [user.company.workers.slice(0, 1), 21, user.company.workers.slice(1)]
  },
};

newUser.company.workers.splice(2, 1, 10);
Object.assign({}, user, { name: "Daniel" });


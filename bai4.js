const user = [
  {
    name: "John",
    age: 21,
    adress: "hcm",
  },
  {
    name: "Alex",
    age: 19,
    adress: "hcm",
  },
  {
    name: "David",
    age: 21,
    adress: "hcm",
  },
  {
    name: "Ronaldo",
    age: 38,
    adress: "hcm",
  },
  {
    name: "Messi",
    age: 46,
    adress: "hcm",
  },
];
const User = JSON.stringify(user);
const loctuoi = (User) => {
   const fillter = User.filter(user => user.age >= 18 && user.age <= 30);
   fillter.forEach(user =>{
    console.log(`Name: ${user.name}, Age:${user.age}`);
   });
};

console.log(loctuoi(user))


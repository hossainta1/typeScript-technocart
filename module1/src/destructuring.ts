{
  // Learn Destructuring the object

  const user = {
    id: 101,
    name: "Tanvir",
    email: "tanvir@example.com",
    address: {
      city: "Dhaka",
      zip: "1205",
    },
    hobbies: ["coding", "traveling", "gaming"],
  };

  const {
    name,
    address: { city: capitalCity },
  } = user; // : is Alias and we can use alias for canging oboject name

  // Learn Destructuring the object

  const users = [
    {
      id: 1,
      name: "Tanvir",
      email: "tanvir@example.com",
      age: 24,
    },
    {
      id: 2,
      name: "Rafi",
      email: "rafi@example.com",
      age: 22,
    },
    {
      id: 3,
      name: "Rakibul",
      email: "rakibul@example.com",
      age: 25,
    },
  ];


  const [firstUser] = users;
  console.log(firstUser.name)
  console.log(firstUser.email)




}

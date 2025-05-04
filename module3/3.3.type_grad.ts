{
  //tyape gard

  // How typeOf work on a type gard

  type Alphanumeric = number | string;

  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result1 = add(2, 3);
  console.log(result1);
  //

  /// ----------------in gard-------------------------
  type NormalUser = {
    name: string;
  };

  type AdminUSer = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUSer) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} & my role is ${user.role}`);
    }else{
        console.log(`My name is ${user.name} & my role is ${user}`);
    }
  };

  const normalUser: NormalUser = {
    name : 'Mr Tanvir'
  }


  const adminUser: AdminUSer = {
    name: 'Hossen',
    role: "admin"

  }

  getUser(normalUser)


















}

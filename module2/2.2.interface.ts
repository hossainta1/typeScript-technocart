{
  //

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRoll1 = User1 & { role: string };

  interface UserWithRoll2 extends User2 {
    role: string;
  }

  const user1: UserWithRoll2 = {
    name: "Tanvir",
    age: 25,
    role: "manager",
  };

  // Interface in Array

  type Roll1 = number[];

  // Aray in interface
  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber: Roll2 = [1, 2, 3, 4];



  // Function with interface alos shoe the alias type

  type Add1 = (num1: number, num2: number) => number;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add: Add2 = (num1, num2) => num1 + num2;

  //



//   Now the Question when wchin one is we are Using?
//   => Using type alias for Array &  in object we using interface but both are preferable

// // 
}

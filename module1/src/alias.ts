{
// Learn Alias


  type Student = {
    name: string;
    age: number;
    gender: string;
    phoneNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Tanvie",
    age: 19,
    gender: "Male",
    phoneNo: "01995231397",
    address: "Sonir Akhra",
  };


  const student2: Student = {
    name: "Sami",
    age: 19,
    gender: "Male",
    address: "Sonir Akhra",
  };



//  Another uses of Alias

type UserName = string;
type IsAdmin = boolean;
const useName : UserName = 'Tanvir Hossen';
const isAdmin : IsAdmin = true;



////Alias in Function
type Add = (num1 : number , num2: number) => number


const add : Add = (num1, num2) => num1 + num2








}

{
  //

  // Function with Generic

  //   const createArray = (param: string): string[] => {
  //     return [param];
  //   };

  //   const createArrayWithGeneric = <T>(param: T): T[] => {
  //     return [param];
  //   };

  //   const res1 = createArray("Banagladesh");

  //   const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  //   //   type User = { id: number; name: string }

  //   interface User1 {
  //     id: number;
  //     name: string;
  //   }

  //   const resGenericObj = createArrayWithGeneric<User1>({
  //     id: 225,
  //     name: "Tanvir",
  //   });

  //   Touple with generic

  const createArrayWi = (param: string): string[] => {
    return [param];
  };

  const createArrayWithTouple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res1 = createArrayWithTouple<string, number>("Banagladesh", 222);

  const resGeneric = createArrayWithTouple<string, {name: string}>("Bangladesh", {name: 'Tanvir'});




//   

 const courseToStudent = <T> (student: T) => {
    const course = 'Next Level web development';

    return {
        ...student,
        course
    }
 }

 const student1 =  ({
    name: 'Tanvir',
    email: 'a @gmail.com',
    devType: 'Next Level Developer',
 })


 const student2 =  ({
    name: 'Hossen',
    email: 'a @gmail.com',
    hasWatch: 'Apple watch',
 })


  
  //
}

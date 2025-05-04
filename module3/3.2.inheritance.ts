{
  // oop -inheritance

  class Person {
    name: string;
    age: string;
    address: string;

    constructor(name: string, age: string, address: string) {
      (this.name = name), (this.age = age), (this.address = address);
    }

    getSleep(sleepHoure: number) {
      console.log(`The ${this.name} sleep ${sleepHoure}`);
    }
  }

  //// student class inherit Person class object and method

  class Student extends Person {
    constructor(name: string, age: string, address: string) {
      super(name, age, address);
    }
  }


  const student1 = new Student("Tanvir", "20", "sonir akhra");
  

//   Teacher class inherit Person class object and method
   class Teacher extends Person {
     disignation : string

     constructor (name: string, age: string, address: string, disignation: string ){
        super(name, age, address,); // // calls the constructor of Person
        this.disignation = disignation
     }

     takeClass(numOfClass : number){
        console.log(`This ${this.name} will take${numOfClass}`)
     }
   }

   const teacher1 = new Teacher('Rumi' , '40', 'Md pur', 'proferros');

  //
}

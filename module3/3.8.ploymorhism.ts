{
    //polymorphism

   class Person {
    getSleep(){
        console.log('I am sleep 8 hours')
    }
   }

  class Developer extends Person{
    getSleep(){
        console.log('I am sleep 8 hours')
    }

  }


   
  const getSleepingHoure = (param : Person) => {
    param.getSleep()
  }
  const person1 = new Person();
  const person2 = new Developer();




    //
}
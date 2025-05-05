{
    //polymorphism
     class Person {

      getSleep(){
        console.log(`The man sleep 8 hours per day`)
      }
     }

     class Student extends Person{
      getSleep(){
        console.log(`The man sleep 7 hours per day`)
      }
     }


     class Developer extends Person {
      getSleep(){
        console.log(`The man sleep 5 hours per day`)
      }
     }


    //  create instance 


    const getSleepingHour = (param : Person) => {
      param.getSleep()
    }

     const person1 = new Person();
     const person2 = new Student();
     const person3 = new Developer();

     getSleepingHour(person1)



    // -------------------another example -----------------------------

    class Shape {
      getArea(): number {
        return 0;
      }
    }
  
    // pi* r* r
    class Circle extends Shape {
      radius: number;
      constructor(radius: number) {
        super();
        this.radius = radius;
      }
  
      getArea(): number {
        return Math.PI * this.radius * this.radius;
      }
    }
  
    // height * width
    class Reactangle extends Shape {
      height: number;
      width: number;
  
      constructor(height: number, width: number) {
        super();
        this.height = height;
        this.width = width;
      }
  
      getArea(): number {
        return this.height * this.width;
      }
    }
  
    const getShapeArea = (param: Shape) => {
      console.log(param.getArea());
    };
  
    const shape1 = new Shape();
    const shape2 = new Circle(10);
    const shape3 = new Reactangle(10, 20);
  
    getShapeArea(shape3);

    //
}
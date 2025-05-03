{
  /// utility types

  //pick utility

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  // omit utility

  type contactInfo = Omit<Person, "name" | "age">;

  ///Require utility

  type PersonRequired = Required<Person>;

  //   pertial

  type PersonPartial = Partial<Person>;

  // Read only
 type PersonReadOnly = Readonly<Person>

  const person1: PersonReadOnly = {
    name: "Tanvir",
    age: 54,
    contactNo: "017",
  };
//   person1.name= 'Hossen' throw erroe bcz using read only utility and thats whay object can not be modified


//  Record Type

//   type MyObj = {
//     a:string,
//     b: string

//   }

type MyObj = Record<string, string>


  const myobj: MyObj = {
    a: 'aa',
    b: 'bb',
    c: 'cc'
  }

  //
}

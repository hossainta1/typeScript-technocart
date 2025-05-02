{
    // Generic type

    type GenericType<T> = Array<T>
    //  const rollNumber : number[] = [3, 6, 4, 5];
    //  const rollNumber : Array<number> = [3, 6, 4, 5];
     const rollNumber : GenericType<number> = [3, 6, 4, 5];

    //  const mentors : string [] = ['Mr. x', 'Mr. y', 'mr. z'];
    //  const mentors : Array<string> = ['Mr. x', 'Mr. y', 'mr. z'];
     const mentors : GenericType<string> = ['Mr. x', 'Mr. y', 'mr. z'];

    //  const boolArray : boolean[] = [true, false, true];
    //  const boolArray : Array<boolean> = [true, false, true];
     const boolArray : GenericType<boolean> = [true, false, true];



     const user : GenericType<{name: string, age: number}> = [
        {
            name: 'Tanvir',
            age: 25,
        },

        {
          name: 'Robin',
          age: 32
        }
    ]



    // Generic touple

    type GenericTouple<X, Y> = [X, Y]

    const manus: GenericTouple<string, string> = ['Mr x', 'Mr y'];

    const userWithId: GenericTouple<number, {name: string, email: string}> = [1234, {name : 'Tanvir', email: 'tanvir@gmail.com'}]


   





    // 
}
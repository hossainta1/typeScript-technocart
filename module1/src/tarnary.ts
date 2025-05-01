{
  // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 20;

  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Not Adult");
  }

  const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
  console.log({isAdult})

//   nullish coalescing operator
// This use for descision make based on null and undefine 

 const isAuthenticated = null;

 const result1 = isAuthenticated ?? 'Guest';

 console.log({result1})


//  optional chaining

 type User = {
    name : string,
    address : {
        city : string,
        road: string,
        presentAddress : string,
        parmanentAddress?: string,
    }
 }


 const user: User = {
    name : 'Tanvir',
    address : {
        city: 'Dhaka',
        road: '12/ 17 sonir akhra',
        presentAddress : 'Sonir AKhra Dhaka',

    }
 }

 const permanentAddress = user?.address?.parmanentAddress ?? 'No Permanaet Addree';

 console.log({permanentAddress})



















}

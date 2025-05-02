{
    // Generic constraint with keyof operator

    type Vehical = {
        bike : string;
        car : string;
        ship: string;
    }


    type Owner = 'bike' | 'car' | 'ship' // menualy

    type Owner2 = keyof Vehical

    const person : Owner2 = 'ship'




//   Fubction
const user = {
    name : 'Tanvir',
    age: 26,
    address: 'Dhaka'
 }

 const getPropertyValue = <X, Y extends keyof X> (obj : X, key : Y) => {
    return obj [key]

 }


 const result1 = getPropertyValue(user, 'name')









    // 
}
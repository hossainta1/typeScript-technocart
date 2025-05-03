{

// mapped type
 
 const arrayOfNumbers: number[] = [1,2,3,4];

//  const arrayOfStrings: string[] = ['1', '2', '3'];

 const arrayOfStrings : string[] = arrayOfNumbers.map(number => number.toString())
 console.log(arrayOfStrings)



//  typeScript mapped type

 type FindArea = {
    height: number,
    width: number
 }

 type Height = FindArea["height"] /// This is called loopup type


 type areaString<T> = {
    [key in keyof T] : T[key]
 }

 const area1: areaString<{height: string; width: number}> = {

    height: '100',
    width: 50,

 }





















}
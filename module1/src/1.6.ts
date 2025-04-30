// Learning function

// Normal Function

// Arrow function

function add(num1: number, num2: number) : number {
  return num1 + num2;
}

add(12, 24);

// Arrow function

const addArrow = (num1 : number, num2 : number) : number => num1 + num2;


// in object if any function has then it is a method

const poorUser = {
    name: 'Tanvir',
    balance: 0,
    addBalance(balance: number): number {

        return this.balance + balance

    }
}


// Callback funtion

const arr : number[] = [1, 2, 3];

const newArray : number[] = arr.map((element : number) : number => element * element)
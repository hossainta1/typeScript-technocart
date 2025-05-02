{
  //

  // type assertion

  let anything: any;

  anything = "Next level web development";

  anything = 222;

  anything as number;

  //  Another example

  const kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const converNumber = parseFloat(value) * 1000;
      return `The converted value is : ${converNumber}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGram(1000) as number;

  const result2 = kgToGram("1000") as string;

  //  Another Example

  type CustomeError = {
    massage: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomeError).massage);
  }

  //







  
}

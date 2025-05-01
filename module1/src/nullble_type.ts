{
  // nullble type

  const searchname = (value: string | null) => {
    if (value) {
      console.log("Searching");
    } else {
      console.log("Not Searchable name");
    }
  };

  searchname(null);

  // Unknown type

  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertSpeed = (value * 1000) / 3600;

      console.log(`The Speed is ${convertSpeed} ms^-1`);
    }

    if (typeof value === "string") {
      const [result, unit] = value.split(" ");
      const convertSpeed = (parseFloat(result) * 1000) / 3600;

      console.log(`The Speed is ${convertSpeed} ms^-1`);
    }
  };

  getSpeedInMeterPerSecond(`1000 km^-1`);


//  Never type


















}

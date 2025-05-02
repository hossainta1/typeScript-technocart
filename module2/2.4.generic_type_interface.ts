{
  // interface ---- generic

  interface Developer<T, X = null> {
    name: string;
    computer: {
      name: string;
      model: string;
      releseYear: number;
    };

    smartWatch: T;
    bike?: X;
  }

  // -------------------------
  type OlioWatch = {
    brand: string;
    model: string;
  };

  const poorDeveloper: Developer<OlioWatch> = {
    name: "Tanvir",
    computer: {
      name: "Asus",
      model: "25485",
      releseYear: 2020,
    },
    smartWatch: {
      brand: "oleio",
      model: "x-2546",
    },
  };

  // -------------------

  interface AppleWatch {
    brand: string;
    model: string;
    heartTreck: boolean;
    sleepTrack: boolean;
  }

  interface Bike {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<AppleWatch, Bike> = {
    name: "Hossen",
    computer: {
      name: "Asus",
      model: "25485",
      releseYear: 2020,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "x-2546",
      heartTreck: true,
      sleepTrack: true,
    },

    bike: {
      model: "R15",
      engineCapacity: "100cc",
    },
  };

  //
}

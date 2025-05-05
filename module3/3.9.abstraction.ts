{
  // abstraction -> interface | abstract class

  // here we get idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // here the implement
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`im amd rady to go`);
    }
    stopEngine(): void {
      console.log(`Now am rasting`);
    }

    move(): void {
      console.log(`Now move to Destination`);
    }
    test() {
      console.log(`i am tesing`);
    }
  }

  const toyota = new Car1();
  toyota.startEngine();

  // --------------abstract class--------------------

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;

    abstract move(): void;
    abstract test(): void;
  }

  class toyotaCar extends Car2 {
    startEngine(): void {
      console.log(`im amd rady to go`);
    }

    stopEngine(): void {
      console.log(`Now am rasting`);
    }

    move(): void {
      console.log(`Now move to Destination`);
    }
    test() {
      console.log(`i am tesing`);
    }
  }

  //
}

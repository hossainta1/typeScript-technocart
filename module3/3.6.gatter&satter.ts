{
  /// gater and satter
  {
    //access modifier

    class BankAccount {
      public readonly id: number;
      name: string;
      protected _balance: number;

      constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
      }


    //   satter

      set deposite(amount: number) {
        this._balance = this._balance + amount;
      }

      //   public  addDeposite(amount: number){
      //         this._balance = this._balance + amount
      //     }

      // gatter

      get Balance() {
        return this._balance;
      }

      // public getBanalace(){
      //         return this._balance;
      //     }
    }

    class StudentAccount extends BankAccount {
      test() {
        this._balance;
      }
    }

    const poorAccount = new BankAccount(111, "Tanvir", 20);

    // poorAccount.addDeposite(500)

    // const myBalane = poorAccount.getBanalace(); // usinf function calll
    // console.log(myBalane)

    const myBalance = poorAccount.Balance;
    console.log(myBalance);

    //
  }

  //
}

{
    //access modifier

    class BankAccount {
       public readonly id: number;
        name: string;
       protected balance: number

        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this.balance = balance
        }

        addDeposite(amount: number){
            this.balance = this.balance + amount
        }
        getBanalace(){
            return this.balance;
        }
    }

    class StudentAccount extends BankAccount {
        test(){
            this.balance
    
        }
    }


    const poorAccount = new BankAccount (111, 'Tanvir', 20);

    poorAccount.addDeposite(500)

    const myBalane = poorAccount.getBanalace();
    console.log(myBalane)
     

    // 
}
class BankAccount {
    static id : number  = 0;
    bankAcName : string;
    private _balance : number;

    constructor(id : number , bankAcName : string , _balance : number){
        BankAccount.id = id;
        this.bankAcName = bankAcName;
        this._balance = _balance;
    }

    get getBalance() : number{
       return this._balance 
    }

    set addDepo(amount : number){
         this._balance = this._balance + amount
    }

    static increment() : number{
        return BankAccount.id = BankAccount.id + 1
    }
}

console.log(BankAccount.increment())
const newAccount = new BankAccount (21 , 'Mukut' , 25000) 
console.log(BankAccount.increment())

const knowBalance = newAccount.getBalance
 newAccount.addDepo = 25
// console.log(knowBalance)
// console.log(newAccount)
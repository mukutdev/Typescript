"use strict";
class BankAccount {
    constructor(id, bankAcName, _balance) {
        BankAccount.id = id;
        this.bankAcName = bankAcName;
        this._balance = _balance;
    }
    get getBalance() {
        return this._balance;
    }
    set addDepo(amount) {
        this._balance = this._balance + amount;
    }
    static increment() {
        return BankAccount.id = BankAccount.id + 1;
    }
}
BankAccount.id = 0;
console.log(BankAccount.increment());
const newAccount = new BankAccount(21, 'Mukut', 25000);
console.log(BankAccount.increment());
const knowBalance = newAccount.getBalance;
newAccount.addDepo = 25;
// console.log(knowBalance)
// console.log(newAccount)

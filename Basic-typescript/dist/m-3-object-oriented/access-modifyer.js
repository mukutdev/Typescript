"use strict";
class BankAccount {
    constructor(id, bankAcName, balance) {
        this.id = id;
        this.bankAcName = bankAcName;
        this.balance = balance;
    }
}
const newAccount = new BankAccount(21, 'Mukut', 25000);
console.log(newAccount);

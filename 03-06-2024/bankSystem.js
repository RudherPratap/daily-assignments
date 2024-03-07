class bankAccount {
  constructor(accountNo, accountHolder, balance = 0) {
    this.account_No = accountNo;
    this.account_Holder = accountHolder;
    this._balance = balance;
  }

  deposits(amount) {
    this._balance += amount;
    console.log(`Deposit of ${amount} is successfull. Updated balance: ${this._balance}`);
  }

  withdraw(amount) {
    if (amount <= this._balance) {
      this._balance -= amount;
      console.log(`Withdrawl of ${amount} is successfull. New balance: ${this._balance}`);
    } else {
      console.log("Non-sufficient.");
    }
  }

  displayBalance() {
    console.log(`Account Holder Name: ${this.account_Holder}`);
    console.log(`Account Number: ${this.account_No}`);
    console.log(`Balance: ${this._balance}`);
  }
}

class savingAccount extends bankAccount {
  constructor(accountNo, accountHolder, balance = 0, interestRate = 0.03, withdrawlLimit = 3000) {
    super(accountNo, accountHolder, balance);
    this.interest_Rate = interestRate
    this.withdraw_lLimit = withdrawlLimit
  }

  interests() {
    const interest = this._balance * this.interest_Rate;
    this._balance += interest;
    console.log(`New balance after interest is added: ${this._balance}`);
  }

  withdraw(amount) {
    if (amount <= this._balance) {
      if (amount > this._withdrawalLimit) {
        const penaltyFee = 0.05 * amount;
        amount += penaltyFee;
        console.log(`Penalty fee applied: $${penaltyFee}`);
      }
      super.withdraw(amount);
    } else {
      console.log("Insufficient funds. Withdrawal denied.");
    }
  }
}

const account = new bankAccount("4478012", "Angad", 4000);
account.deposits(200);
account.withdraw(300);
account.displayBalance();

console.log("\n");

const saving_Account = new savingAccount("832728", "Jhon", 3000);
saving_Account.deposits(500);
saving_Account.interests();
saving_Account.withdraw(2000);
saving_Account.withdraw(1100);
saving_Account.displayBalance();
{
    //access modifiers
    class BankAccount {
        public readonly id: number
        name: string
        protected _balance: number

        constructor(id: number, name:string, balance: number){
            this.id = id
            this.name = name
            this._balance = balance
        }

        addDeposit(amount){
            this._balance = this._balance + amount
        }

        getBalance(){
            return this._balance
        }
    }
//child accout
class StudentAccount extends BankAccount {
    test(){
        this._balance
    }
}

    const account = new BankAccount(12, 'fsdfsdf',500)
    account.addDeposit(50)
    account.getBalance()
    
}
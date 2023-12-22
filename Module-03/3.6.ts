{
    //getter & setter

    class BankAccount {
        public readonly id: number
        name: string
        protected _balance: number

        constructor(id: number, name: string, balance: number) {
            this.id = id
            this.name = name
            this._balance = balance
        }

        set Deposit (number : number){
            this._balance = this._balance + number
        }

        // addDeposit(amount) {
        //     this._balance = this._balance + amount
        // }

        get Balance(){
            return this._balance
        } 

        // getBalance() {
        //     return this._balance
        // }
    }


    const account = new BankAccount(12, 'fsdfsdf', 500)
    account.Deposit = 100

    const myBalance = account.Balance
    // account.addDeposit(50)
    // account.getBalance()
}
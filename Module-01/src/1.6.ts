{
    //function
    //normal function
    function add(num1 : number, num2 : number = 22) : number {
        return num1 + num2;
    }

    add(2)

    //arrow function

    const addArrow = (num1 : number, num2 : number) : number =>{
        return num1 + num2
    }

    const poorUser = {
        name: 'hasan',
        balance: 0,
        addBalance(balance:number) : number{
            return this.balance + balance
        }
    }

    const numbers : number[] = [1,5,6]
    const number : number[] = numbers.map((e : number) : number => e * e)
    console.log('number')
}
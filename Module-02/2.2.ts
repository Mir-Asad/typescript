{
    //interface
    type User1 = {
        name: string
        age: number
    }

    type UserWithId = User1 & {role: string}

    const newUser : UserWithId = {
        name: 'hasan',
        age: 24,
        role: 'admin'
    } 

    interface User2 {
        name: string
        age: number
    }

    interface UserWithRole extends User2 {
        id:number
    }

    const idUser : UserWithRole =  {
        name: 'khan',
        age: 25,
        id: 55
    }

    // interface in array
    interface Roll {
        [index:number] : number
    }

    type Add = (num1: number, num2: number) => number
    interface Add2 {
        (num1: number, num2: number) : number
    }

    const add : Add2 = (num1, num2)=>{
        return num1 + num1
    }
}
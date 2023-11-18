{
    //type alias
    // delclare type
    type Student = {
        name: string;
        age: number;
        gender: string;
        address: string;
        contactNo?: number
    }

    const student1: Student = {
        name: 'hasan',
        age: 45,
        gender: 'male',
        address: 'feni'
    }
    const student2: Student= {
        name: 'khan',
        age: 455,
        gender: 'female',
        address: 'feni2'
    }

    type UserName = string

    const users : UserName = 'dfsdfsd'

    //type alias in function
    type AddFunc =(num1 : number,num2 : number) => number
    
    const add  : AddFunc= (num1, num2)=> num1 + num2
    add(63,55)
    }

   

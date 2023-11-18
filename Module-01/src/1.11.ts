{
    //ternary operator & Optional Chaining
    const age : number = 19

    // if(age > 18){
    //     console.log('adult')
    // }
    // else{
    //     console.log('not adult')
    // }

    const isAdult = age > 18 ? 'adult' : 'not adult'
    // console.log({isAdult})

    //nullish coalescing operator

    const isAdmin = 55
    const result1 = isAdmin ?? 'Admin'
    console.log({result1})

}
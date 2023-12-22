{
    //generic constrains using key of

    type Car = {
        name: string,
        model: string,
        price: number
    }

    type Owner = "bike" | "car" | "truck"
    type Owner2 = keyof Car

    const user = {
        name: 'mrx',
        age: 22,
        address: 'cts'
    }
    user.name
    const getPropertyValue =  <X,Y extends keyof X>(obj: X, key: Y)=> {
        return obj[key]
    }

    const result = getPropertyValue(user, 'address')
}
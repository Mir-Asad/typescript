{
    //generics with function

    const createArray = (param:string) :string[] =>{
        return [param]
    }
    // const createArrayGeneric =<T> (param:T) :T[] =>{
    //     return [param]
    // }

    // const result1 = createArray('555')
    // const res2 = createArrayGeneric<number>(22)

    const createArrayTuple =<T,Q> (param1:T, param2: Q) :[T,Q] =>{
        return [param1, param2]
    }

    const result1 = createArray('555')
    const res2 = createArrayTuple<number, string>(22,'f22')
}
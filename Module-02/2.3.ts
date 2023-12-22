{
    //generic type
    // const rollNumber:number[] = [ 255,5, 54]

    type GenericArray<T> = Array<T>

    const rollNumber: GenericArray<number> = [ 255,5, 54]
    const mentors : GenericArray<string> = ['fdsf', '5555', 'dfldsfld']
    const bull : GenericArray<boolean> = [false, true, true] 

    const user: GenericArray<{name: string, age: number}> = [
        {
            name: 'khan',
            age: 15
        },
        {
            name: 'kkja',
            age: 33
        }
    ]

    //generic tuple
    type GenericTuple<x,y> =[x,y]
    const man : GenericTuple<string,string>= ['mrx', 'mry']

    type GenericTuple2 <x,y> = [x,y]

    const userWithId2:GenericTuple2<number,{name:string,id:number}> = [123, {name: 'khan', id: 15}]
}
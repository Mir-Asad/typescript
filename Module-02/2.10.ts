{
    //mapped types
    const arrawOfNum : number[] = [1,2,2]
    // const arrayStr : string[] = ['1', '2']
    const arrayStr : string[] = arrawOfNum.map(num => num.toString())
    // console.log(arrayStr)

    type Area = {
        height: number
        wedth: number
        
    }

    type AreaStr = {
        [key in keyof Area] : string
    }

}
{
    // type assertion
    let anything : any;
    anything = 22;
    (anything as number)

    const kgToGram = (value:string | number) : string | number | undefined=>{
        if(typeof value === 'string'){
            const converted = parseFloat(value) * 1000
            return converted;
        }
        if(typeof value === 'number'){
            return value * 1000
        }
    }

    const result1 = kgToGram(1000)  as number
}
{
    //never, unknown and nullable

    // const searchName = (value : string | null) =>{
    //     if(value){
    //         console.log('searching')
    //     }
    //     else{
    //         console.log('nothing to search')
    //     }
    // }
    // searchName(null)

    // unknown type
    const getKiloToMeter = (value:unknown) =>{
        if(typeof value === 'number'){
            const meter = value * 1000
            console.log(meter)
        }   
        else if(typeof value === 'string'){
            const [kilo, unit] = value.split(' ')
            if(kilo !== 'number'){
                console.log('type number first then type meter')
            }
            const meter = parseFloat(kilo) * 1000
            console.log(meter)
        }  
        else{
            console.log('wrong input')
        }   
    }
    getKiloToMeter('lll 555')
}
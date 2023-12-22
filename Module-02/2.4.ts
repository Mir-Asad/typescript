{
    //generic with interface

    interface Developer<T,Y = null> {
        name: string;
        computer: {
            brand: string
            model: string
            release: number
        }
        smartWatch: T
        bike?: Y
    }

    const poorDev :Developer<{name: string, com: string}, string>= {
        name: 'hasan',
        computer: {
            brand: 'asus',
            model: 'sdflksdf',
            release: 2018
        },
        smartWatch: {name: 'apple', com: 'aple'},
        bike: 'STARI'
    }
}
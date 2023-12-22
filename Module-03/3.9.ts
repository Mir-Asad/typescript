{
    //abstraction
    //unsing interface

    interface Vehicle1 {
        startEngine(): void
        stopEngine(): void
        movecar(): void
    }

    class Car implements Vehicle1 {
        startEngine(): void {
            console.log('starting car')
        }

        stopEngine(): void {
            console.log('stoping car')
        }

        movecar(): void {
            console.log('moving car')
        }

        testCar() {
            console.log('testing car')
        }
    }

    // const vehile1 : Vehicle1 = {
    //     name: 'toyota',
    //     model: 'dfdsf'
    // }

    const toyotaCar = new Car()
    toyotaCar.startEngine()

    //abstract class

    abstract class Car2 {
        abstract startEngine(): void 

        abstract stopEngine(): void 

        abstract movecar(): void 

        testCar() {
            console.log('testing car')
        }
    }

    class toyotaCar2 extends Car2 {
        startEngine(): void {
            console.log('sdfsdf')
        }

        stopEngine(): void {
            console.log('sto')
        }
        movecar(): void {
            console.log('moving')
        }
    }

    // const honda = new Car2()
    
}
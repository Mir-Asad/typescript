{
    //statics

    class Counter {
        static count : number = 0

        increament(){
            return (Counter.count = Counter.count + 1)
        }

        decreament(){
            return (Counter.count = Counter.count - 1)
        }
        // increament(){
        //     return (this.count = this.count + 1)
        // }

        // decreament(){
        //     return (this.count = this.count - 1)
        // }
    }

    const ins1 = new Counter() //differnt memory
    console.log(ins1.increament())

    const ins2 = new Counter() //different memory
    console.log(ins2.increament())
}
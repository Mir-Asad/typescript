{
    //oop -- class
    class Animal {
        // public name: string
        // public species: string
        // public sound: string

        constructor(public name: string, public species: string, public sound: string){
            // this.name = name
            // this.species = species
            // this.sound = sound
        }

        makeSound(){
            console.log(`${this.name} says ${this.sound}`)
        }
    }

    const dog = new Animal("dog", "indian","gew")
    const cat = new Animal("cat", "bd", "mew")
    console.log(dog)
}
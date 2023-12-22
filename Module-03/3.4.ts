{
    //Type guard using Instance

    class Animal {
        name: string
        species: string

        constructor(name: string, species: string){
            this.name = name
            this.species = species
        }

        makeSound(){
            console.log('im maming sound')
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string){
            super(name, species)
        }

        makeBark(){
            console.log('im barking')
        }
    }
    class Cat extends Animal {
        constructor(name: string, species: string){
            super(name, species)
        }

        makeMeaw(){
            console.log('im meawing')
        }
    }

    //instance of in smart way

    const isDog = (animal : Animal) : animal is Dog =>{
        return animal instanceof Dog
    }
    const isCat = (animal : Animal) : animal is Cat =>{
        return animal instanceof Cat
    }

    const getAnimal = (animal : Animal) =>{
        if(isDog(animal)){
            animal.makeBark()
        }
        else if(isCat(animal)){
            animal.makeMeaw()
        }
        else{
            animal.makeSound()
        }
        
    }

 

    const dog = new Dog('dog bah', 'dog')
    const cat = new Cat('catu', 'cat')

    getAnimal(cat)
    
}
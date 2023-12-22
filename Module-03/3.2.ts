{
    //oop---inheritance
    class Person {
        name: string
        age: number
        address: string

        constructor(name: string, age: number, address: string) {
            this.name = name
            this.age = age
            this.address = address
        }

        getSleep(hour: number) {
            console.log(`${this.name} sleep for ${hour}`)
        }
    }

    // using parent
    class Student extends Person {

        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }


    }

    //using parent and own properties
    class Teacher extends Person {
        designation: string

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation
        }

        takeClass(classes: number) {
            console.log(`${this.name} sleep for ${classes}`)
        }
    }

    const student1 = new Student('hasan', 15, 'khan')
    const teacher1 = new Teacher('hasan', 15, 'khan', 'math')
}
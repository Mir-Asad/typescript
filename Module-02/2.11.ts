{
    //utility types
    //pick type
    type Person = {
        name: string
        age: number
        email?: string
        contactNo: number
    }
    type Name = Pick<Person, "name">
    type NameAge = Pick<Person, "name" | "age">

    //omit
    type ContactInfo = Omit<Person, "name" | "age">

    //require
    type PersonRequire = Required<Person>

    //partial
    type PersonPartial = Partial<Person>

    //readonly
    type PersonReadOnly = Readonly<Person>
    const person1 : PersonReadOnly = {
        name: 'mu',
        age: 55,
        contactNo: 5555
    } 
    // person1.age = 55

    //record type
    // type MyObj = {
    //     a : string
    //     b : string
    // }
    type MyObj = Record<string,string>
    const obj1 : MyObj = {
        a : 'dfdsf',
        b : 'dsfds'
    }

    const emptyObj : Record<string, unknown> = {

    } 
}
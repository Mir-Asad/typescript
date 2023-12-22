{
    //type guards

    //typeOf --->type guard

    type Alphanumeric = string | number
    const add = (param1: Alphanumeric, param2: Alphanumeric) : Alphanumeric =>{
        if(typeof param1 === 'number' && typeof param2 == 'number'){
            return param1 + param2
        }
        else{
            return param1.toString() + param2.toString()
        }
         
    }

    // in guard
    type NormalUser = {
        name : string
    }

    type AdminUser = {
        name: string
        role: "admin"
    }

    const getUser = (user: NormalUser | AdminUser)=>{
        if('role' in user){
            console.log(user.role)
        }
        else{
            console.log(user.name)
        }
    }

    const normalUser : NormalUser = {
        name: 'khan'
    }
    const adminUser : AdminUser = {
        name: 'khan2',
        role: 'admin'
    }

    getUser(normalUser)
}
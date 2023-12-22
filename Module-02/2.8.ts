{
    //asynchronous typescript
    //basic promise
    const createPromise = ()=>{
        return new Promise<string>((resolve, reject) =>{
            const data : string = "jhjj"

            if(data){
                resolve(data)
            }
            else{
                reject('failed to load data')
            }
        })
    }
    const showData = async()=>{
        const data = await createPromise()
        console.log(data)
    }
    showData()

    const getUsers = async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        console.log(users)
    }
}
{
    //spread operator
    const bros1: string[] = ['firoz', 'bablu', 'khan', 'kla']
    const bros2: string[] = ['nahid', 'rag', 'fae', 'sdfd']
    bros1.push(...bros2)
    console.log(bros1)

    const mentors = {
        typeScript: 'persian',
        redux: 'firoz',
        next: 'nahid',
        moongoose: 'o ondf'
    }
    const mentors2 = {
        prisma: 'persian',
        js: 'firoz',
        dbms: 'nahid',
        html: 'o ondf'
    }

    const allMentors = {
        ...mentors,
        ...mentors2
    }

    //rest operator
    const greetFriend = (...f : string[])=>{
       f.forEach((friend : string)=>{
        console.log(`hi ${friend}`)
       })
    }

    greetFriend('bablul', 'kskflds', 'dfdsflsd', 'dfsdlf')
}



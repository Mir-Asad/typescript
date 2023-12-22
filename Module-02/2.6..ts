{
    //constrains
    const addCourse = <T extends {id: number, name: string}> (student: T)=>{
        const course = 'next levet'
        return {
            ...student,
            course
        }
    }

    const mishu = addCourse({id:22,name:'hasan'})
    const mishu2 = addCourse({name:'mishu', role: 'khan', id:55})
}
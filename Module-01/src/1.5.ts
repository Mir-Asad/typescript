{
    //object type
    let user: {
        // readonly company: string   cna't modify if declared as readOnly
        company: 'medicon'  //literal type
        name: string;
        middleName?: string; //optional type
        lastName: string;
        isMarried?: boolean
    } = {
        company: 'medicon',
        name: 'hasan',
        lastName: 'khan',
        isMarried: true
    }
//    user.company = 'fdsf'
}

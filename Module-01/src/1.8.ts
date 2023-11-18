{
    //destructuring
    const user = {
        id: 345,
        name: {
            firstName: 'mir',
            middleName: 'hasan',
            lastName: 'khan',
        },
        contactNo: '55544',
        address: 'feni'
    }
    const { id, name: {middleName : midname} } = user;

    // array destructuring
    const myFriends = ['lsdfk', 'sdfslfsldf', 'new']
    const [,,...c] = myFriends;
    const hello = myFriends[2]
}
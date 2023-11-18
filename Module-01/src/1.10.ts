{
    // union & intersection types

    //union type
    type FrontEndDeveloper = 'fakibazDev' | 'pakaDev'
    type FullStackDev = 'juniorDev' | 'ExpertDev'
    type Developer = FrontEndDeveloper | FullStackDev

    const newDev : FrontEndDeveloper = 'pakaDev';
    
    type User = {
        name: string;
        email: string;
        gender: 'male' | 'female';
        bloodGroup: 'o-' | 'A+' | 'B+';
    }

    const newUser : User = {
        name: 'khan',
        email: 'khan@gmail.com',
        gender: 'female',
        bloodGroup: 'A+'
    }

    // intersection type
    type JuniorDeveloper = {
        skills: string[],
        designation1: 'JuniorDev'
    }
    type BackEndDeveloper = {
        skills: string[],
        designation2: 'BackendDev'
    }

    type FullStackDeveloper = JuniorDeveloper & BackEndDeveloper;
    const paknaDev : FullStackDeveloper = {
        skills: ['html', 'css'],
        designation1: 'JuniorDev',
        designation2: 'BackendDev'
    }
}
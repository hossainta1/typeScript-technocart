{

// unio type

// type FrontendDeveloper = 'fakibajDeveloper' | 'Junior developer'
// type FullstackDeveloper = 'FrontendDeveloper' | 'expertDeveloper'

// type Developer = FrontendDeveloper | FullstackDeveloper

// const newDeveloper : FrontendDeveloper = 'Junior developer'


// type Student = {
//     name: string,
//     age: number,
//     gender: 'Male' | 'Female',
//     phoneNo?: string,
//     address: string,
//   };


//   const newStudent : Student = {
//     name: 'Tanvir',
//     age : 20,
//     gender : 'Male',
//     address : 'Sonir Akhra'
//   }

//Intersection in typeScript

type FrontendDeveloper = {
    skills: string[],
    designation1 : 'Frontend Developer',
    

}
type BackendDeveloper = {
    skills: string[];
    designation2 : 'Backend Developer',


}


type FullStackDeveloper = FrontendDeveloper & BackendDeveloper


const fullstackDeveloper : FullStackDeveloper = {
    skills : ['HTML', 'CSS', 'Express'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
}






























}
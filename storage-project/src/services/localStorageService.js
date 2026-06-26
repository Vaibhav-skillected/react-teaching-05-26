import { cache } from "react";

const STUDENT_KEY = "students";

export const getStudents = () => {

  const data =
  localStorage.getItem(STUDENT_KEY);

  return data ? JSON.parse(data) : [];
};

export const saveStudents = (students) => {

  localStorage.setItem(
    STUDENT_KEY,
    JSON.stringify(students)
  );
};

//browser storage -> local, session , cookies, caches , Indexdb
//cokkies -> 4kb -> expiry based
//autghentication , session trecking -> browser stores it,
//browser automatically send cookies
//document.cookie ="name= Skillected";



//session storage -> 5 mb -> until tab close 


//local storage -> 5mb -> permant 


//caches -> 100 mb -> until cleard
//open website -> download filed -> stored in caches -> open again ->existiung caches file

//cache storage api
//caches.keys().then(data=> {
//  console.log(data)});

//add in caches
//caches.open("my-cache").then(cache=>{
//   cache.add("https://jsonplaceholder.typicode.com/users");
// });

//read from caches
// caches.match(
//   "website"
// ).then(response =>{
//   console.log(response);
// })

//benifits -> faster loading, reduce internet usage , offline access
//better user experiennce 

//browser cache -> automatic create 
//cache storage api -> manual create 




//indexedb -> 1gb -> permenent

//const req = indexdDB.open("Student", 1);


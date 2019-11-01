import React from 'react';
import './file2.js';
import file2 from './file2.js';
let person ={firstName: file2.firstName,lastName: file2.lastName, gender: file2.gender, email: file2.email}
function App2(){
    const{firstName,email} = person;
    return(
        <div>
        <p>{firstName} {email}</p>
        <p>{console.log(firstName,email)}</p>
        <p>Hej</p>
        <p>Hej</p>
        </div>
    )
}

    
export default App2;
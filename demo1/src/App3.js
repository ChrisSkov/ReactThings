import React from "react";
import file2, { names } from "./file2";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson(props) {
  //  let props = {firstName: file2.names.firstName, lastName: file2.names.lastName, email: file2.names.email}
  return (
    <div>
      <h1>Hello {props.firstName}</h1>
      <h1>Hello {props.lastName}</h1>
      <h1>Hello {props.email}</h1>
    </div>
  );
}
function App() {
  return (

    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <WelcomePerson firstName = {file2.firstName}/>
    </div>
  );
}
export default App;
//export default Welcome;

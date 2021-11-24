import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar />
      <Home firstName={user.name} location={user.city}/>
      <About biography={user.bio} github={user.links.github} linkedin={user.links.linkedin}/> import {} from "module"
    </div>
  );
}


export default App;

// firstName={user.name} location={user.city} 

// userBio={user.bio}

// GitHub={user.links.github} LinkedIn={user.links.linkedin}
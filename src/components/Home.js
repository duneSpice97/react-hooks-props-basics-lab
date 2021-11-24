import React from "react";


function Home(props) {
  return (
    <div id="home">
      <h1>{props.firstName} is a Web Developer from {props.location}</h1>
    </div>
  );
}

export default Home;

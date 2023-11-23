import React from "react";
import SignOut from "../SignOut/SignOut.js";
import Login from "../Login/Login.js";
import RegisterHead from "../RegisterHead/RegisterHead.js"

const Head = ({changeStation}) =>{

  return(
    <div className="bg-blue shadow-3 w-100 pa3 mb5 ">
        <div className="App2 pr5">
          <input type="checkbox" className="mr3 toggle"/>
          <SignOut/>
          <Login changeStation={changeStation}/>
          <RegisterHead changeStation={changeStation}/>
        </div>
    </div>
  );
};

export default Head;
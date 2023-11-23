import React from "react";

const RegisterHead = ({changeStation}) => {
  return (
    <div className="ml2">
      <a href="#" className="link b black hover-moon-gray pa3" onClick={()=>changeStation("register")} >Register</a>
    </div>
  );
}

export default RegisterHead;
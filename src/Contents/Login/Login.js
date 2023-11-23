import React from "react";

const Login = ({changeStation}) => {
  return (
    <div className="ml2">
      <a href="#" className="link b black hover-moon-gray" onClick={()=>changeStation("signin")} >Login</a>
    </div>
  );
}

export default Login;
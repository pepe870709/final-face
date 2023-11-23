import React, { createElement } from "react";
import { useState , useEffect} from "react";


const SignOn = (props) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const changeEmail= (e) => {
    setEmail(e.target.value);
    //console.log(email)
  }

  const changePass = (e) => {
    setPassword(e.target.value);
    //console.log(password)
  }

  const submitData = () => {

    const e = document.getElementById('staticEmail').value;
    const p = document.getElementById('inputPassword').value

    //setEmail(e);
    //setPassword(p);

    console.log(email + '   y   ' + password) 
    
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email : e,
        password : p,
      }
      )
    })
    .then(resp => resp.json())
    .then(data => {
      if(data === 'success'){
        props.click('home');
      }else{
        const pp = <h1>clubmed</h1>;
        const node = document.createElement('label');
        const para = document.createTextNode('We didn\'t recognize your email or password. Please try again');
        node.appendChild(para);
        node.setAttribute('style', 'background-color:#FF5D5D; color:white;');
        const vari = document.getElementById('h1Id');
        if(vari.hasChildNodes())vari.removeChild(vari.children[0]);
        document.getElementById('h1Id').appendChild(node)
      }
    })
    
  }
     
  const style = {
    width: "30%",
    padding: "5px",
  }
  return(
    <div id="mainDiv" style={style} className="br3 shadow-3">
      <div id="h1Id"></div>
      <div className="mb-3 row">
        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input type="text" onChange={changeEmail} className="form-control-plaintext" id="staticEmail" placeholder="email@example.com"/>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input type="password" onChange={changePass} className="form-control" id="inputPassword"/>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="col-auto pb3">
          <button type="submit" className="btn btn-info btn-sm" onClick={() => submitData()}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default SignOn;
import React from "react";

const Register = (props) => {

  const submitData = () => {

    const n = document.getElementById('staticUserName').value;
    const e = document.getElementById('staticEmail').value;
    const p = document.getElementById('inputPassword').value
    const pc = document.getElementById('inputConfirmedPassword').value
    

    console.log(n + '   y   ' + e + '  y  ' + p) 
    
    fetch('http://localhost:3001/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name : n,
        email : e,
        password : p,
      }
      )
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      if(data != 'error'){
        props.click('home');
      }else{
        console.log('ass')
        /*const pp = <h1>clubmed</h1>;
        const node = document.createElement('label');
        const para = document.createTextNode('We didn\'t recognize your email or password. Please try again');
        node.appendChild(para);
        node.setAttribute('style', 'background-color:#FF5D5D; color:white;');
        const vari = document.getElementById('h1Id');
        if(vari.hasChildNodes())vari.removeChild(vari.children[0]);
        document.getElementById('h1Id').appendChild(node)*/
      }
    })
    
  }

  const style = {
    width: "30%",
    padding: "5px",
  }

  return(
    <div style={style} className="br3 shadow-3">
      <div className="mb-3 row">
        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">User Name</label>
        <div className="col-sm-10">
          <input type="text" className="form-control-plaintext" id="staticUserName" placeholder="email@example.com"/>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input type="text" className="form-control-plaintext" id="staticEmail" placeholder="email@example.com"/>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword"/>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Confirm Password</label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputConfirmedPassword"/>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="col-auto pb3">
          <button type="submit" className="btn btn-info btn-sm" onClick={() => submitData()}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Register;

import React from "react";
import "./input.css"

const Input = ({click}) =>{

  return(
    <div className="div flex bg-light-blue mw7 center pa2 pl7 pr7 br2-ns ba b--black-10 pt3">
      
        <input className="mr1 pa1 w6 f6 f5-l bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns h1" type="text" onChange={click}/>
        <input className="f6 f5-l mr1 pa1 tc bg-black-70 hover-bg-blue br3 white pointer w-100 w-25-m w-50-l br2-ns br--right-ns h2" type="submit" value="Submit" onClick={click}/>
      
    </div>
    )
};


export default Input;
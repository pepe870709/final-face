import React from "react";
import { useRef, useEffect, useState } from 'react';
import './Imagen.css';

const Imagen = ({url, coor}) => {

const frameRef = useRef();
const imgRef = useRef();

const widthImg = document.getElementById('imgMain') ? document.getElementById('imgMain').height : 300;
console.log(widthImg);
//console.log(imgRef.current.);


/*useEffect(() => {
  
  const divframe = document.createElement("div");

  divframe.className = "divframe"
  divframe.style.width = `${coor.oneFace.w}px`;
  divframe.style.height = `${coor.oneFace.h * imgRef.current.height}px`;
  divframe.style.border = "3px solid #f32177";
  divframe.style.backgroundColor = "transparent";
  divframe.style.position = "absolute";
  divframe.style.left = `${coor.oneFace.x}px`;
  divframe.style.top = `${coor.oneFace.y * imgRef.current.height}px`;


  //console.log(document.getElementById('imgMain').width +"y"+ document.getElementById('imgMain').height);

  document.getElementById('frame').appendChild(divframe);

  console.log(divframe)

  return () => {
    if(document.getElementById('frame')){
    document.getElementById('frame').removeChild(divframe);
    }
  }
});

/*document.getElementById('frame').appendChild(<div style={{width:"50px", height:"50px", border:"3px solid #f32177", backgroundColor:"transparent", position:"absolute"}}></div>);*/  
  return(
      <div className="absolute" ref={frameRef} id="frame">
          <img id="imgMain" ref={imgRef} src={url} alt="Imagen could not be reached" width={"700"}/>
          {<div className="divframe" style={{
            width: `${coor.oneFace.w}px`, 
            height: `${coor.oneFace.h * widthImg}px`, 
            border: "3px solid rgb(243, 33, 119)", 
            backgroundColor: "transparent", 
            position:"absolute", 
            left: `${coor.oneFace.x}px`, 
            top: `${coor.oneFace.y * widthImg}px`
            }}></div>}   
      </div>
  );
}

export default Imagen;
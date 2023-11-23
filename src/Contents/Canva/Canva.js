import React from "react";
import { useRef, useEffect } from 'react';
import Imagen from '../Imagen/Imagen.js';

const Canva = (props) => {

  const canvaRef = useRef(null);
 
  
  useEffect(() => {
    const canvas = canvaRef.current;
    const context = canvas.getContext('2d');
    //var img = new Image();
    var img = document.getElementById('imgMain');
    img.src = props.url;
    console.log(img.width, img.height);
    //img.onload = function(){
      //context.drawImage(img, 0, 0);
      //context.beginPath();
      /*context.lineWidth = "2";
      context.strokeStyle = "red";
      const [a,b,c,d] = [5,5,290,140];
      for(let i = 1; i < 4; i++ ){
        context.rect(a/i, b/i, c/i, d/i);
        context.stroke();
      }*/
      img.onload = function() {
        //const canvas = document.getElementById("myCanvas");
        //const ctx = canvas.getContext("2d");
        //const img = document.getElementById("scream");
        context.drawImage(img, 0, 0, 300, 150);
      };
    }
  )
  return(
    <canvas id="myCanvas" ref={canvaRef} style={{border: "1px solid grey", width:"100%", height:"100%"}}></canvas>
  );
}

export default Canva;
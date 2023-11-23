import './App.css';
import Input from './Contents/input/Input.js';
import Imagen from './Contents/Imagen/Imagen.js';
import SignOut from './Contents/SignOut/SignOut.js';
import Login from './Contents/Login/Login.js';
import Logo from './Contents/Logo/Logo.js';
import Canva from './Contents/Canva/Canva.js';
import SignOn from './Contents/SignOn/SignOn.js';
import Head from './Contents/Head/Head.js';
import Register from './Contents/Register/Register.js';
import { useState , useEffect } from 'react';


/*const PAT = '0a731558d9fd4cd6ac28e0de00bf2473';
const USER_ID = 'clarifai';       
const APP_ID = 'main';
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';    
const IMAGE_URL = '';*/





function App() {

  const [route, setRoute] = useState();
  const [booly, setBooly] = useState(false);
  const [station, setStation] = useState("signin");
  const [arrayFaces, setArrayFaces] = useState([]);
  const [oneFace, setOneFace] = useState({w: 0,h: 0,x: 0,y: 0})

  /*if(arrayFaces.length > 0){
    console.log("pp  " + arrayFaces.flat()[0].br);
    console.log(arrayFaces.flat().length);
    console.log(arrayFaces.flat());
  }*/

  useEffect(()=>{

    let count = true;
    
    
      fetch('http://localhost:3001/')
      .then(response => response.json())
      .then((r) => {
        if(count){
          console.log('pp   '+ r.id)
        }
      })
    

    async function fetchD (){
      const resp = await fetch('http://localhost:3001/');
      const data = await resp.json();
      if(count){
        console.log('cc     ' + data.email)
      }
    }

    fetchD();

    return()=>{
      count = false;
    }

  })

  const calc = (object) =>{
    const w = Math.trunc(Math.abs((object.rc - object.lc) * 700));
    const h = Math.abs(object.br - object.tr);
    const x = Math.trunc(object.lc * 700);
    const y = object.tr;
    return {w,h,x,y};
  }

  const Change = (e) => {
    setBooly(false);
    e.type === 'click' ? (route ? aux() : alert("Enter an URL")) :
    (setRoute(e.target.value));

    function aux(){

      setBooly(true);/*
      const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": route
                    }
                }
            }
        ]
    });
    
    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };
    
    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
        .then(response => response.json())
        .then(res => {
          let arrAux = [];
          console.log(res.outputs[0].data.regions);
          res.outputs[0].data.regions.map(e => {
            const pos = {
              br : e.region_info.bounding_box.bottom_row,
              lc : e.region_info.bounding_box.left_col,
              rc : e.region_info.bounding_box.right_col,
              tr : e.region_info.bounding_box.top_row,
            };
            arrAux.push(pos); 
          })
          
          const ppp = calc(arrAux[0]);
          setOneFace({
            w : ppp.w,
            h : ppp.h,
            x : ppp.x,
            y : ppp.y,
          })
          setArrayFaces([...arrayFaces,arrAux]);
        })
        .catch(error => console.log('error', error))*/


        fetch('http://localhost:3001/imagenClarifai', 
          {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              url: route
            })
          }
        )
          .then(resp => resp.json())
          .then(data => {
            const ppp = calc(data[0]);
            setOneFace({
              w : ppp.w,
              h : ppp.h,
              x : ppp.x,
              y : ppp.y,
            })
          })   
    }
    ;
  }

  const changeStation = (x) => { 
    console.log(x) 
    setStation(x);
  }


  return (
    <div>{ station === "home" ? (
    <div className="flex flex-column justify-center content-center">
          <Head changeStation={changeStation}/>
      <div className="App3 mt1 flex flex-column">
        <div className="mb3">
          <Logo/>
        </div>
        <div className="br3 shadow-3 pa2 w-90 flex justify-around">
          <Input click={Change}/>        
        </div>
      </div>
      <div className="App3 content-center pa4">
      {booly ? (
        <div className="">
          <Imagen url={route} coor={{oneFace}}/> 
        </div>
      ) : <>waiting url</>}
      </div>
      </div>
      )      
      : 
     (<>

      <Head changeStation={changeStation}/>
      {station === "signin" ? 
      <div className="d-flex justify-content-center align-items-center" style={{height : "300px"}}>
        <SignOn click={changeStation}/>
      </div>
      : 
      <div className="d-flex justify-content-center align-items-center" style={{height: "300px"}}>
        <Register click={changeStation}/>
      </div>}
      </>
     )
    }
    </div>
  );
}

export default App;
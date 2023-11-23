function triangulo(n){
  for (let i = 0; i < n; i++){
    let line = '';
    for(let j = 0; j < n-(i+1); j++){
      line += '_';
    }
    for(let k = 0; k < 1+(i*2); k++){
      line += '*';
    }
    console.log(line);
  }
}

triangulo(9);

console.time('start');

function triangulo(n){
  for (let i = 0; i < n; i++){
    let line = '';
    for(let j = 0; j < i; j++){
      line += '_';
    }
    for(let k = 0; k < ((n-i)*2)-(i+1); k++){
      line += '*';
    }
    console.log(line);
  }
}

triangulo(9);

console.timeEnd('start');

//---------------Santa -1 Floor---------------------------------------------------
const b = ['(',')',')','(','(','(',')',')','(',]

function Santa(chain){
  let num = 0;
  let outcome = '';
  for(let i = 0; i < chain.lenght; i++){
    if(num === -1) {
      outcome = i
      break;
    }
    else if(chain[i] === '('){
      num++;
    }
    else{
      num--;
    }
  }
  return outcome;
}

Santa(b);
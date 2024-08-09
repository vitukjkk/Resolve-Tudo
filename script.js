// VARIÁVEIS

let body = document.getElementById("body");
let geralBar = document.getElementById("geralcalc");
let resultado = 0;
let module = 0;

const numberPermitidos = "0123456789+-/*,.()";

var currentBar;

// FUNCTIONS
// MANAGE

function getCurrentInput() {
  switch(module) {  
    case 1: {
      currentBar = geralcalc;
      break;
    }
    case 2: {
      currentBar = mathcalc; 
      break;
    }
    case 3: {
      currentBar = cientificcalc; 
      break;
    }
    case 4: {
      currentBar = financecalc; 
      break;
    }
    case 5: {
      currentBar = graphiccalc; 
      break;
    }
    case 6: {
      currentBar = staticcalc; 
      break;
    }
    case 7: {
      currentBar = datecalc; 
      break;
    }
    case 8: {
      currentBar = engcalc; 
      break;
    }
  }
}

// BUTTONS

// GERAL

function somarButton() {
    const valor = geralBar.value;
    if(valor[valor.length - 1] === "+") return alert("Você já digitou o + !");
    geralBar.value += "+";
}

function subButton() {
    const valor = geralBar.value;
    if(valor[valor.length - 1] === "-") return alert("Você já digitou o - !");
    geralBar.value += "-";
}

function divButton() {
    const valor = geralBar.value;
    if(valor[valor.length - 1] === "/") return alert("Você já digitou o / !");
    geralBar.value += "/"; 
}

function multButton() {
    const valor = geralBar.value;
    if(valor[valor.length - 1] === "*") return alert("Você já digitou o * !");
    geralBar.value += "*"; 
}

// MATH

function raizButton() {
  const valor = mathcalc.value;
  if(valor === "") return alert("Não há mais nada a apagar!");
  let resultado = Math.sqrt(valor);
  mathcalc.value = resultado;
}

// VARIABLES

function equalButton() {
  try {
    getCurrentInput();
    resultado = eval(currentBar.value);
    currentBar.value = resultado;
  }
  catch(e) {
    alert(`Ocorreu esse erro na expressão: ${e.Message}, tente novamente!`);
  }
}

function dotButton() {
  getCurrentInput();
  const valor = currentBar.value;
  if(valor[valor.length - 1] === ".") return alert("Você já digitou o . !");
  currentBar.value += "."; 
}

function leftParButton() {
  getCurrentInput();
  currentBar.value += "(";
}

function rightParButton() {
  getCurrentInput();
  currentBar.value += ")";
}

function clearButton() {
  getCurrentInput();
  currentBar.value = "";
}

function apagarButton() {
    getCurrentInput();
    const valor = currentBar.value;
    if(valor === "") return alert("Não há mais nada a apagar!");
    let lastChar = valor.length - 1;
}
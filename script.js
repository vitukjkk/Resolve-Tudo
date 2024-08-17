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
      currentBar = geralBar;
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

function raizButton() {
  const valor = geralBar.value;
  if(valor[valor.length - 1] === "*") return alert("Você já digitou o * !");
  geralBar.value += "*"; 
}

// MATH

function raizButton() {
  const valor = mathcalc.value;
  if(valor <= 0) return alert("Não pode calcular raiz de 0 ou números negativos!");
  let resultado = Math.sqrt(valor);
  mathcalc.value = resultado;
}

function potencyButton() {
  var valor = Number(mathcalc.value);
  if(valor === 0 || valor === 1) return alert(`O valor da base ${valor} elevada a qualquer potência é igual a ${valor}`);
  var potencia = Number(prompt("Insira a potência que será elevada: "));
  if(potencia === 1) return alert("Qualquer número elevado e 1 é igual a ele mesmo"); 
  if(potencia  < 0) return alert("Você não pode elevar números a expoentes negativos!");
  var resultado = 1;
  for(let i = 0; i < potencia - 1; i++) {
    if(resultado === 1) {
      resultado = valor * valor;      
    }
    else {
      resultado *= valor;
    }
  }
  mathcalc.value = resultado;
}

function percButton() {
  var valor = Number(mathcalc.value);
  if(valor === 0) return alert("Em cálculos de porcentagem você não pode começar com 0!");
  var porcentagem = Number(prompt("Insira quantos % você deseja calcular"));
  var resultado = valor * (porcentagem / 100);
  mathcalc.value = resultado;
}

function moduleButton() {
  var modulado = Number(mathcalc.value);
  var modulador = Number(prompt("Insira por quanto você quer dividir"));
  var resultado = modulado % modulador;
  mathcalc.value = resultado;
}

function factorButton() {
  var valor = Number(mathcalc.value);
  if (valor < 0) return alert("Você não pode calcular o fatorial de números negativos!");
  if (valor === 0 || valor === 1) return alert(`O fatorial de ${valor} é 1!`);

  let resultado = 1;
  for (let i = valor; i > 1; i--) {
    resultado *= i;
  }
 mathcalc.value = resultado;
}

// FINANCEIRA

function jurosSimples() {
  var capital = Number(financecalc.value);
  if (capital <= 0) return alert("Você não pode calcular juros de números negativos ou zero!");
  var taxa = Number(prompt("Insira a taxa de juros (não coloque %)"));
  var taxaType = Number(prompt("Insira a recorrência:\n[1] Diário\n[2] Mensal\n[3] Anual"));
  var tempo = Number(prompt("Insira o período"));
  var tempoType = Number(prompt("Insira a recorrência:\n[1] Diário\n[2] Mensal\n[3] Anual"));
  var resultado = 0;
  try {
    switch(tempoType) {
      case 1: // DIÁRIO
        switch(taxaType) {
          case 1:
            resultado = (capital * taxa) * tempo;
            break;
          case 2:
            
            break;
          case 3:
            break;
        }
        break;
      case 2: // MENSAL
        switch(taxaType) {
          case 1:
            
            break;
          case 2:
            break;
          case 3:
            break;
        }
        break;
      case 3: // ANUAL
        switch(taxaType) {
          case 1:
            break;
          case 2:
            break;
          case 3:
            break;
        }
        break;
    }
  }
  catch(e) {
    alert(`Os dados foram inseridos no formato incorreto! Tente novamente, por favor.\nLOG: ${e.Message}`);
  }
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
  alert(lastChar);
}




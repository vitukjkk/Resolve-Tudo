// VARIÁVEIS

let body = document.getElementById("body");
let geralBar = document.getElementById("geralcalc");
let resultado = 0;
let module = 0;

const numberPermitidos = "0123456789+-/*,.()";

var currentBar;

var financecalc = document.getElementById("financecalc");

var currentOption = 0;

var taxaInput = document.getElementById("taxaInput");
var taxaSelect = document.getElementById("taxaSelect");

var timeInput = document.getElementById("timeInput");
var timeSelect = document.getElementById("timeSelect");

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

function getDiasMes() {
  const dataAtual = new Date();
  const mes = dataAtual.getMonth() + 1;
  const ano = dataAtual.getFullYear();
  switch(mes) {
      case 1:
          mes = 31;
          break;
      case 2:
          if(ano % 400 === 0) {
              mes = 29;
              break;
          }
          else {
              mes = 28;
              break;
          }
          break;
      case 3:
          mes = 31;
          break;
      case 4:
          mes = 3;
          break;
      case 5:
          mes = 31;
          break;
      case 6:
          mes = 30;
          break;
      case 7:
          mes = 31;
          break;
      case 8:
          mes = 31;
          break;
      case 9:
          mes = 30;
          break;
      case 10:
          mes = 31;
          break;
      case 11:
          mes = 30;
          break;
      case 12:
          mes = 31;
          break;
  }
  return mes;
}

class convertTime {
constructor(capital, taxa, tempo) {
  this.capital = document.getElementById("financecalc");
  this.taxa = taxa;
  this.tempo = tempo;
  taxa /= 100;
  try {
    switch(currentOption) {
      case 1:
        switch(Number(timeSelect.value)) {
          case 1: // DIÁRIO
            switch(Number(taxaSelect.value)) {
              case 1:
                financecalc.value = (capital * taxa) * tempo;                  break;
              case 2:
                financecalc.value = (capital * taxa) * (tempo / 30);
                break;
              case 3:
                financecalc.value = (capital * taxa) * (tempo / 360);
                break;
            }
            break;
          case 2: // MENSAL
            switch(Number(taxaSelect.value)) {
              case 1:
                financecalc.value = (capital * taxa) * (tempo / 30);
                break;
              case 2:
                financecalc.value = (capital * taxa) * tempo;
                break;
              case 3:
                financecalc.value = (capital * (taxa / 12)) * tempo;
                break;
            }
            break;
          case 3: // ANUAL
            switch(Number(taxaSelect.value)) {
              case 1:
                financecalc.value = capital * (taxa * 360) * tempo;
                break;
              case 2:
                financecalc.value = capital * taxa * (tempo * 12);
                break;
              case 3:
                financecalc.value = (capital * taxa) * tempo;
                break;
            }
            break;
        }
        break;
      case 2:
        switch(Number(timeSelect.value)) {
          case 1: // DIÁRIO
            switch (Number(taxaSelect.value)) {
              case 1:
                financecalc.value = capital * (1 + taxa) ** tempo;
                break;
              case 2:
                financecalc.value = capital * (1 + taxa / 30) ** tempo;
                break;
              case 3:
                financecalc.value = capital * (1 + taxa / 360) ** tempo;
                break;
            }
            break;
          case 2: // Mensal
            switch (Number(taxaSelect.value)) {
              case 1:
                financecalc.value = capital * (1 + taxa) ** (tempo * 12); 
                break;
              case 2:
                financecalc.value = capital * (1 + taxa) ** tempo;
                break;
              case 3:
                financecalc.value = capital * (1 + taxa / 12) ** tempo;
                break;
            }
            break;
          case 3: // Anual
            switch (Number(taxaSelect.value)) {
              case 1:
                financecalc.value = capital * (1 + taxa) ** (tempo * 360); 
                break;
              case 2:
                financecalc.value = capital * (1 + taxa / 12) ** tempo;
                break;
              case 3:
                financecalc.value = capital * (1 + taxa) ** tempo;
                break;
            }
            break;
        }
        break;
    }
  }
  catch(e) {
    alert(`Os dados foram inseridos no formato incorreto! Tente novamente, por favor.\nLOG: ${e.message}`);
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
  if(capital <= 0) return alert("Você não pode fazer operações com números negativos ou zero!");
  if(taxaInput.value <= 0) return alert("Você não pode calcular sem taxa!");
  if(timeInput.value <= 0) return alert("Você não pode calcular sem tempo!");
  currentOption = 1;
  const converter = new convertTime(capital, taxaInput.value, timeInput.value);
}

function jurosCompostos() {
  var capital = Number(financecalc.value);
  if(capital <= 0) return alert("Você não pode fazer operações com números negativos ou zero!");
  if(taxaInput.value <= 0) return alert("Você não pode calcular sem taxa!");
  if(timeInput.value <= 0) return alert("Você não pode calcular sem tempo!");
  currentOption = 2;
  const converter = new convertTime(capital, taxaInput.value, timeInput.value);
}

function valorPresente() {
  try {
    var capital = Number(financecalc.value);
    if (capital <= 0) return alert("Você não pode calcular juros de números negativos ou zero!"); 
    var valorPresente = Number(prompt("Insira o valor do valor futuro"));
    var taxa = Number(prompt("Insira a taxa (não insira %)"));
    var tempo = Number(prompt("Insira o tempo (apenas números)"));
    var resultado = valorPresente / (1 + taxa)**tempo;
    financecalc.value = resultado;
  }
  catch(e) {
    alert(`Ocorreu um erro no cálculo! Verifique se você seguiu todas as orientações certas :)\n${e.Message}`);
  }
}

function valorFuturo() {
  try {
    var capital = Number(financecalc.value);
    if (capital <= 0) return alert("Você não pode calcular juros de números negativos ou zero!"); 
    var valorFuturo = Number(prompt("Insira o valor do valor futuro"));
    var taxa = Number(prompt("Insira a taxa (não insira %)"));
    var tempo = Number(prompt("Insira o tempo (apenas números)"));
    var resultado = valorFuturo / (1 + taxa)**tempo;
    financecalc.value = resultado;
  }
  catch(e) {
    alert(`Ocorreu um erro no cálculo! Verifique se você seguiu todas as orientações certas :)\n${e.Message}`);
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




// FUNCTIONS

// MANAGE

function defineVariables() {
  let body = document.getElementById("body");
  let geralBar = document.getElementById("geralcalc");
  let resultado = 0;
  let module = 0;

  const numberPermitidos = "0123456789+-/*,.()";

  var currentBar;

  var currentOption = 0;

  var financecalc = document.getElementById("financecalc");

  var taxaInput = document.getElementById("taxaInput");
  var taxaSelect = document.getElementById("taxaSelect");
  
  var timeInput = document.getElementById("timeInput");
  var timeSelect = document.getElementById("timeSelect");
}

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
      timeInput.value = null;
      taxaInput.value = null;
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
    defineVariables();
    this.capital = document.getElementById("financecalc");
    this.taxa = taxa;
    this.tempo = tempo;
    taxa /= 100;
    try {
      switch (currentOption) {
        case 1: // JUROS SIMPLES
          //alert("opa mestre");
          switch(parseInt(timeSelect.value)) {
            case 1: // DIÁRIO
              switch (parseInt(taxaSelect.value)) { 
                case 1:
                  financecalc.value = (capital * taxa) * tempo;
                  break;
                case 2:
                  financecalc.value = (capital * taxa) * (tempo / 30);
                  break;
                case 3:
                  financecalc.value = (capital * taxa) * (tempo / 360);
                  break;
              }
              break;
            case 2: // MENSAL
              switch (parseInt(taxaSelect.value)) { 
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
              switch (parseInt(taxaSelect.value)) { 
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
        case 2: // JUROS COMPOSTOS
          switch (parseInt(timeSelect.value)) { 
            case 1: // DIÁRIO
              switch (parseInt(taxaSelect.value)) { 
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
              switch (parseInt(taxaSelect.value)) { // Convert taxaSelect.value to integer
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
              switch (parseInt(taxaSelect.value)) { // Convert taxaSelect.value to integer
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
        case 3: { // VALOR PRESENTE
          switch (parseInt(timeSelect.value)) { 
            case 1: // DIÁRIO
              switch (parseInt(taxaSelect.value)) { 
                case 1:
                  financecalc.value = capital / (1 + taxa) ** tempo;
                  break;
                case 2:
                  financecalc.value = capital / (1 + (taxa / 30)) ** tempo;
                  break;
                case 3:
                  financecalc.value = capital / (1 + (taxa / 360)) ** tempo;
                  break;
              }
              break;
            case 2: // Mensal
              switch (parseInt(taxaSelect.value)) { 
                case 1:
                  financecalc.value = capital / (1 + taxa) ** (tempo * 12);
                  break;
                case 2:
                  financecalc.value = capital / (1 + taxa) ** tempo;
                  break;
                case 3:
                  financecalc.value = capital / (1 + taxa / 12) ** tempo;
                  break;
              }
              break;
            case 3: // Anual
              switch (parseInt(taxaSelect.value)) { // Convert taxaSelect.value to integer
                case 1:
                  financecalc.value = capital / (1 + taxa) ** (tempo * 360);
                  break;
                case 2:
                  financecalc.value = capital / (1 + (taxa / 12)) ** tempo;
                  break;
                case 3:
                  financecalc.value = capital / (1 + taxa) ** tempo;
                  break;
              }
              break;
          }  
          break;
        }
        case 4: { // VALOR FUTURO
          switch (parseInt(timeSelect.value)) { 
            case 1: // DIÁRIO
              switch (parseInt(taxaSelect.value)) { 
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
              switch (parseInt(taxaSelect.value)) { // Convert taxaSelect.value to integer
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
              switch (parseInt(taxaSelect.value)) { // Convert taxaSelect.value to integer
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
    } catch (e) {
      alert(`Os dados foram inseridos no formato incorreto! Tente novamente, por favor.\nLOG: ${e.message}`);
    }
  }
}


// BUTTONS

// FIXES

function equalButton() {
  try {
    defineVariables();
    getCurrentInput();
    resultado = eval(currentBar.value);
    currentBar.value = resultado;
  }
  catch(e) {
    alert(`Ocorreu esse erro na expressão: ${e.Message}, tente novamente!`);
  }
}

function dotButton() {
  defineVariables();
  getCurrentInput();
  const valor = currentBar.value;
  if(valor[valor.length - 1] === ".") return alert("Você já digitou o . !");
  currentBar.value += "."; 
}

function leftParButton() {
  defineVariables();
  getCurrentInput();
  currentBar.value += "(";
}

function rightParButton() {
  defineVariables();
  getCurrentInput();
  currentBar.value += ")";
}

function clearButton() {
  defineVariables();
  getCurrentInput();
  currentBar.value = "";
}

function apagarButton() {
  defineVariables();
  getCurrentInput();
  const valor = currentBar.value;
  if(valor === "") return alert("Não há mais nada a apagar!");
  let lastChar = valor.length - 1;
  alert(lastChar);
}

// GERAL

function somarButton() {
  defineVariables();
  const valor = geralcalc.value;
  if(valor[valor.length - 1] === "+") return alert("Você já digitou o + !");
  geralcalc.value += "+";
}

function subButton() {
  defineVariables();
  const valor = geralcalc.value;
  if(valor[valor.length - 1] === "-") return alert("Você já digitou o - !");
  geralcalc.value += "-";
}

function divButton() {
  defineVariables();
  const valor = geralcalc.value;
  if(valor[valor.length - 1] === "/") return alert("Você já digitou o / !");
  geralcalc.value += "/"; 
}

function multButton() {
  defineVariables();
  const valor = geralcalc.value;
  if(valor[valor.length - 1] === "*") return alert("Você já digitou o * !");
  geralcalc.value += "*"; 
}

function raizButton() {
  defineVariables();
  const valor = geralcalc.value;
  if(valor[valor.length - 1] === "*") return alert("Você já digitou o * !");
  geralcalc.value += "*"; 
}

// MATH

function raizButton() {
  defineVariables();
  const valor = mathcalc.value;
  if(valor <= 0) return alert("Não pode calcular raiz de 0 ou números negativos!");
  let resultado = Math.sqrt(valor);
  mathcalc.value = resultado;
}

function potencyButton() {
  defineVariables();
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
  defineVariables();
  var valor = Number(mathcalc.value);
  if(valor === 0) return alert("Em cálculos de porcentagem você não pode começar com 0!");
  var porcentagem = Number(prompt("Insira quantos % você deseja calcular"));
  var resultado = valor * (porcentagem / 100);
  mathcalc.value = resultado;
}

function moduleButton() {
  defineVariables();
  var modulado = Number(mathcalc.value);
  var modulador = Number(prompt("Insira por quanto você quer dividir"));
  var resultado = modulado % modulador;
  mathcalc.value = resultado;
}

function factorButton() {
  defineVariables();
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
  defineVariables();
  var capital = Number(financecalc.value);
  if(capital <= 0) return alert("Você não pode fazer operações com números negativos ou zero!");
  if(taxaInput.value <= 0) return alert("Você não pode calcular sem taxa!");
  if(timeInput.value <= 0) return alert("Você não pode calcular sem tempo!");
  currentOption = 1;
  const converter = new convertTime(capital, taxaInput.value, timeInput.value);
}

function jurosCompostos() {
  defineVariables();
  var capital = Number(financecalc.value);
  if(capital <= 0) return alert("Você não pode fazer operações com números negativos ou zero!");
  if(taxaInput.value <= 0) return alert("Você não pode calcular sem taxa!");
  if(timeInput.value <= 0) return alert("Você não pode calcular sem tempo!");
  currentOption = 2;
  const converter = new convertTime(capital, taxaInput.value, timeInput.value);
}

function valorPresente() {
  defineVariables();
  var capital = Number(financecalc.value);
  if(capital <= 0) return alert("Você não pode fazer operações com números negativos ou zero!");
  if(taxaInput.value <= 0) return alert("Você não pode calcular sem taxa!");
  if(timeInput.value <= 0) return alert("Você não pode calcular sem tempo!");
  currentOption = 3;
  const converter = new convertTime(capital, taxaInput.value, timeInput.value);
}

function valorFuturo() {
  defineVariables();
  var capital = Number(financecalc.value);
  if(capital <= 0) return alert("Você não pode fazer operações com números negativos ou zero!");
  if(taxaInput.value <= 0) return alert("Você não pode calcular sem taxa!");
  if(timeInput.value <= 0) return alert("Você não pode calcular sem tempo!");
  currentOption = 4;
  const converter = new convertTime(capital, taxaInput.value, timeInput.value);
}
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
    currentBar.value = valor.substring(0, lastChar);
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

  // FINANCEIRA -- JUROS
  
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

// FINANCEIRA - INVESTIMENTOS

function cdbFunction() {
  defineVariables();
  var capital = Number(investimentoscalc.value);
  if(capital <= 0) return alert("Você não pode fazer operações com números negativos ou zero!");
  if(investTaxaInput.value <= 0) return alert("Você não pode calcular sem taxa!");
  if(investTimeInput.value <= 0) return alert("Você não pode calcular sem tempo!");
  if(investIRInput)
  currentOption = 5;
  const converter = new convertTime(capital, investTaxaInput.value, investTimeInput.value);
}

function lciFunction() {
  defineVariables();
}

function lcaFunction() {
  defineVariables();
}
  
  
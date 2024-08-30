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
  
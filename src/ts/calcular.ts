import '../css/index.css';

// BIBLIOTECAS

import { control } from './config';
const ss = require('simple-statistics');

// ELEMENTOS

// HEADER
const imgHeaderLogo = document.querySelector('#imgHeaderLogo') as HTMLElement;

const imgHeaderIconPages = document.querySelector('#imgHeaderIconPages') as HTMLElement;
const aHeaderPages = document.querySelectorAll<HTMLElement>('.aHeaderPages');
const divHeaderPages = document.querySelector('#divHeaderPages') as HTMLElement;

const imgHeaderIconConfig = document.querySelector('#imgHeaderIconConfig') as HTMLElement;
const imgHeaderIconSobre = document.querySelector('#imgHeaderIconSobre') as HTMLElement;

// MAIN

const calcularSelect = document.querySelector('#calcularSelect') as HTMLSelectElement;

// MODULES BUTTONS
const fundamentalButtons = document.querySelectorAll<HTMLElement>('.fundamentalButtons');

const basicaButtons = document.querySelectorAll<HTMLElement>('.basicaButtons');
const mathButtons = document.querySelectorAll<HTMLElement>('.mathButtons');
const financebuttons = document.querySelectorAll<HTMLElement>('.financebuttons');
const staticbuttons = document.querySelectorAll<HTMLElement>('.staticbuttons');

const divMainCalcular = document.querySelectorAll<HTMLElement>('.divMainCalcular');

// INPUTS
const inputCalcularMain = document.querySelector('#inputCalcularMain') as HTMLInputElement;
const inputMathSecond = document.querySelector('#inputMathSecond') as HTMLInputElement;
const inputFinanceTaxa = document.querySelector('#inputFinanceTaxa') as HTMLInputElement;
const inputFinancePeriodo = document.querySelector('#inputFinancePeriodo') as HTMLInputElement;

// VARIABLES

const inputs = [
    inputCalcularMain,
    inputMathSecond,
    inputFinanceTaxa,
    inputFinancePeriodo
]

var pagesHeaderVisible = false;

// EVENTS

divMainCalcular[0].style.display = 'block';

imgHeaderIconConfig.onclick = () => {
    window.location.href = './configuracoes.html';
}

imgHeaderIconSobre.onclick = () => {
    window.location.href = './sobre.html';

}
imgHeaderLogo.onclick = () => {
    window.location.href = './index.html';
}

imgHeaderIconPages.onpointerup = () => {
    if(pagesHeaderVisible) {
        pagesHeaderVisible = false;
        divHeaderPages.style.display = 'none';
    } else {
        pagesHeaderVisible = true;
        divHeaderPages.style.display = 'block';
    }
}

aHeaderPages.forEach((page, index) => {
    page.onclick = () => {
        switch(index) {
            case 0: // CALCULAR
                window.location.href = './calcular.html';
                break;
            case 1: // CONFIG
                window.location.href = './configuracoes.html';
                break;
            case 2: // SOBRE
                window.location.href = './sobre.html';
                break;
        }
    }
});

inputCalcularMain.min = '0';



inputs.forEach((input) => {
    input.oninput = () => {
        input.value = input.value.replace(/[^0-9\+\-\*\/\(\)\.]/g, '');
    }
});

inputCalcularMain.onkeydown = (event) => {
    if(event.key === 'Enter') {
        calcularModulo(0);
    } 
}

calcularSelect.onchange = () => {
    
    divMainCalcular.forEach((div) => {
        div.style.display = 'none';
    });

    switch(calcularSelect.value) {
        case 'basica':
            divMainCalcular[0].style.display = 'block';
            control.lastModuleShow = 0;
            break;
        case 'matematica':
            divMainCalcular[1].style.display = 'block';
            control.lastModuleShow = 1;
            break;
        case 'cientifica':
            divMainCalcular[2].style.display = 'block';
            control.lastModuleShow = 2;
            break;
        case 'financeira':
            divMainCalcular[3].style.display = 'block';
            control.lastModuleShow = 3;
            break;
        case 'grafica':
            divMainCalcular[4].style.display = 'block';
            control.lastModuleShow = 4;
            break;
        case 'estatistica':
            divMainCalcular[5].style.display = 'block';
            control.lastModuleShow = 5;
            break;
        case 'data':
            divMainCalcular[6].style.display = 'block';
            control.lastModuleShow = 6;
            break;
        case 'engenharia':
            divMainCalcular[7].style.display = 'block';
            control.lastModuleShow = 7;
            break;
    }
}

fundamentalButtons.forEach((button, index) => {
    button.onclick = () => {
        switch(index) {
            case 0: // BOTÃO APAGAR
                inputCalcularMain.value = inputCalcularMain.value.substring(0, inputCalcularMain.value.length - 1);
                break;
            case 1: // BOTÃO LIMPAR
                inputCalcularMain.value = "";
                inputMathSecond.value = "";
                break;
            case 2:
                calcularModulo(0);
                break;
        }
    }
});

basicaButtons.forEach((button, index) => {
    button.onclick = () => {
        const lastDigit = inputCalcularMain.value[inputCalcularMain.value.length - 1];
        if(lastDigit === '+' || lastDigit === '-' || lastDigit === '*' || lastDigit == '/' || lastDigit === undefined || lastDigit === "." || lastDigit === ",") return inputCalcularMain.value = inputCalcularMain.value.substring(0, inputCalcularMain.value.length - 1);

        switch(index) {
            case 0: // BOTÃO MAIS
                inputCalcularMain.value += "+";
                break;
            case 1: // BOTÃO MENOS
                inputCalcularMain.value += "-";
                break;
            case 2: // BOTÃO DIVIDIR
                inputCalcularMain.value += "/";
                break;
            case 3: // BOTÃO MULTIPLICAR
                inputCalcularMain.value += "*";
                break;
            case 4: // BOTÃO LEFT PARENTESES
                inputCalcularMain.value += "(";
                break;
            case 5: // BOTÃO RIGHT PARENTESES
                inputCalcularMain.value += ")";
                break;
            case 6: // BOTÃO PONTO
                inputCalcularMain.value += ".";
                break;
                
        }

        inputCalcularMain.focus();
    }
});

mathButtons.forEach((button, index) => {
    button.onclick = () => {
        var number = Number(inputCalcularMain.value);   
        var fator = Number(inputMathSecond.value);
        switch(index) {
            case 0: // RAIZ
                inputCalcularMain.value = Math.sqrt(number).toString();
                break;
            case 1: // EXPONENCIAÇÃO
                inputCalcularMain.value = Math.pow(number, fator).toString();
                break;     
            case 2: // PORCENTAGEM
                inputCalcularMain.value = (number * fator / 100).toString();    
            break;
            case 3: // MÓDULO
                inputCalcularMain.value = (number % fator).toString();
                break;
            case 4: // FATORIAL
                var result = 1;

                for(number; number > 1; number--) {
                    result *= number;
                }

                inputCalcularMain.value = result.toString();
                break;
        }
        inputCalcularMain.focus();
    }
});

financebuttons.forEach((button, index) => {
    button.onclick = () => {
        switch(index) {
            case 0: // JUROS SIMPLES
                const js = Number(inputCalcularMain.value) * Number(inputFinanceTaxa.value) * Number(inputFinancePeriodo.value);
                inputCalcularMain.value = js.toString();
                break;
            case 1: // JUROS COMPOSTOS
                const jc = Number(inputCalcularMain.value) * Math.pow(1 + Number(inputFinanceTaxa.value), Number(inputFinancePeriodo.value));
                inputCalcularMain.value = jc.toString();
                break;
            case 2: // VALOR PRESENTE
                const vp = Number(inputCalcularMain.value) / Math.pow(1 + Number(inputFinanceTaxa.value), Number(inputFinancePeriodo.value));
                inputCalcularMain.value = vp.toString();
                break;
            case 3: // VALOR FUTURO
                const vf = Number(inputCalcularMain.value) * Math.pow(1 + Number(inputFinanceTaxa.value), Number(inputFinancePeriodo.value));
                inputCalcularMain.value = vf.toString();
                break;
            case 4: // AMORTIZAÇÃO
                const amort = Number(inputCalcularMain.value) / ((1 - Math.pow(1 + Number(inputFinanceTaxa.value), - Number(inputFinancePeriodo.value))) / Number(inputFinanceTaxa.value));
                inputCalcularMain.value = amort.toString();
                break;
        }
        inputCalcularMain.focus();
    }
});

staticbuttons.forEach((button, index) => {
    button.onclick = () => {
        const numbers = inputCalcularMain.value.split('-').map(Number);
        switch(index) {
            case 0: // MÉDIA
                inputCalcularMain.value = ss.mean(numbers).toString();
                break;
            case 1: // MEDIANA
                inputCalcularMain.value = ss.median(numbers).toString();
                break;
            case 2: // MODA
                inputCalcularMain.value = ss.mode(numbers).toString();
                break;
            case 3: // VARIÂNCIA
                inputCalcularMain.value = ss.variance(numbers).toString();
                break;
            case 4: // DESVIO PADRÃO
                inputCalcularMain.value = ss.standardDeviation(numbers).toString();
                break;
            case 5: // COEFICIENTE DE VARIAÇÃO
                inputCalcularMain.value = ss.coefficientOfVariation(numbers).toString();
                break;
            case 6: // MÁXIMO
                inputCalcularMain.value = ss.max(numbers).toString();
                break;
            case 7: // MÍNIMO
                inputCalcularMain.value = ss.min(numbers).toString();
                break;
        }
        inputCalcularMain.focus();
    }
});

function calcularModulo(module : number) {
    switch(module) {
        case 0:
            try {
                inputCalcularMain.value = eval(inputCalcularMain.value);
            } catch(error) {
                inputCalcularMain.value = "Ocorreu um erro na expressão, reformule-a e tente novamente!";
            } 
    }
}
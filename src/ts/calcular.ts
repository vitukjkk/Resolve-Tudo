import '../css/index.css';

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

var pagesHeaderVisible = false;

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

calcularSelect.onchange = () => {
    switch(calcularSelect.value) {
        case 'basica':
            console.log('basica');
            break;
        case 'matematica':
            console.log('matematica');
            break;
        case 'cientifica':
            console.log('cientifica');
            break;
        case 'financeira':
            console.log('financeira');
            break;
        case 'grafica':
            console.log('grafica');
            break;
        case 'estatistica':
            console.log('estatistica');
            break;
        case 'data':
            console.log('data');
            break;
        case 'engenharia':
            console.log('engenharia');
            break;
    }
}
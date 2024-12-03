import '../css/index.css';

// ELEMENTOS

const imgHeaderLogo = document.querySelector('#imgHeaderLogo') as HTMLElement;

const imgHeaderIconPages = document.querySelector('#imgHeaderIconPages') as HTMLElement;
const aHeaderPages = document.querySelectorAll<HTMLElement>('.aHeaderPages');
const divHeaderPages = document.querySelector('#divHeaderPages') as HTMLElement;

const imgHeaderIconConfig = document.querySelector('#imgHeaderIconConfig') as HTMLElement;
const imgHeaderIconSobre = document.querySelector('#imgHeaderIconSobre') as HTMLElement;


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

imgHeaderIconPages.onclick = () => {
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
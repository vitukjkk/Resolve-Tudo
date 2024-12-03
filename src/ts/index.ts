import '../css/index.css';
import * as main from './main';

// ============================
// IMPORTANDO 
// ============================

// HEAD
import '../assets/icons/general/icon_main.ico';

// HEADER
import '../assets/icons/general/icon_pages.png';
import '../assets/logos/logo_Resolve_Tudo.png';
import '../assets/icons/general/icon_sobre.png';
import '../assets/icons/general/icon_config.png';

// MAIN
import '../assets/images/image_copilot.png';
import '../assets/images/image_objective.png';
import '../assets/images/image_tech.png';

// MODULES
import '../assets/icons/general/icon_arrow.png';

// CONTACTS

import '../assets/icons/social/facebook pequeno.png';
import '../assets/icons/social/github pequeno.png';
import '../assets/icons/social/ig pequeno.png';
import '../assets/icons/social/linkedin pequeno.png';
import '../assets/icons/social/pinterest pequeno.png';
import '../assets/icons/social/tik-tok pequeno.png';
import '../assets/icons/social/youtube pequeno.png';
import '../assets/icons/social/zap pequeno.png';

// CONFIGURAÇÕES

import '../assets/icons/general/icon_user.png';

// ========================
// ELEMENTS
// ========================

// HEADER

const imgHeaderIconPages = document.querySelector('#imgHeaderIconPages') as HTMLElement;
const aHeaderPages = document.querySelectorAll<HTMLElement>('.aHeaderPages');
const divHeaderPages = document.querySelector('#divHeaderPages') as HTMLElement;
const imgHeaderIconConfig = document.querySelector('#imgHeaderIconConfig') as HTMLElement;
const imgHeaderIconSobre = document.querySelector('#imgHeaderIconSobre') as HTMLElement;
// MAIN
const imgMainModulesExpand = document.querySelectorAll<HTMLElement>(".imgMainModulesExpand");
const divMainModulesContent = document.querySelectorAll<HTMLElement>(".divMainModulesContent");
const btnIndexFeedback = document.querySelector('#btnIndexFeedback') as HTMLElement;
const inputMainFeedback = document.querySelector('#inputMainFeedback') as HTMLInputElement;

// ================================
// VARIABLES
// ================================

var degArrowModule = 0;
var pagesHeaderVisible = false;
const numberPhone = '61994030749'

// ===============================
// TRIGGERS
// ===============================

imgHeaderIconConfig.onclick = () => {
    window.location.href = './configuracoes.html';
}

imgHeaderIconSobre.onclick = () => {
    window.location.href = './sobre.html';
}

btnIndexFeedback.onclick = () => {
    const message = inputMainFeedback.value;
    const url = `https://wa.me/${numberPhone}?text=Olá!%20deixo%20aqui%20meu%20feedback:%20${message}`;
    window.open(url, '_blank');
};

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

function getDisplayContent(width : number) : string {
    if(width <= 800) return 'block';
    else return 'flex';
}

function showAndHideModules() {
    imgMainModulesExpand.forEach((img, index) => {
        img.onclick = () => {
            if (degArrowModule === 0) {
                degArrowModule = 90;
                img.style.transform = `rotate(${degArrowModule}deg)`;
                if (divMainModulesContent[index]) {
                    divMainModulesContent[index].style.display = getDisplayContent(window.innerWidth);
                }
            } else {
                degArrowModule = 0;
                img.style.transform = `rotate(${degArrowModule}deg)`;
                if (divMainModulesContent[index]) {
                    divMainModulesContent[index].style.display = "none";
                }
            }
        };
    });
}

document.addEventListener('DOMContentLoaded', () => {
    main.changeTheme(); 
    
    // OCULTANDO / MOSTRANDO MÓDULOS
    showAndHideModules();
});
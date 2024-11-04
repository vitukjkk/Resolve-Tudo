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

// MAIN
import '../assets/images/image_copilot.png';
import '../assets/images/image_objective.png';
import '../assets/images/image_tech.png';

// MODULES
import '../assets/icons/general/icon_arrow.png';

// ELEMENTS

const imgMainModulesExpand = document.querySelectorAll<HTMLElement>(".imgMainModulesExpand");
const divMainModulesContent = document.querySelectorAll<HTMLElement>(".divMainModulesContent");
const btnIndexFeedback = document.querySelector('#btnIndexFeedback') as HTMLElement;
const inputMainFeedback = document.querySelector('#inputMainFeedback') as HTMLInputElement;

var degArrowModule = 0;

const numberPhone = '61994030749'

btnIndexFeedback.onclick = () => {
    const message = inputMainFeedback.value;
    const url = `https://wa.me/${numberPhone}?text=Olá!%20deixo%20aqui%20meu%20feedback:%20${message}`;
    window.open(url, '_blank');
};

function showAndHideModules() {
    imgMainModulesExpand.forEach((img, index) => {
        img.onclick = () => {
            if (degArrowModule === 0) {
                degArrowModule = 90;
                img.style.transform = `rotate(${degArrowModule}deg)`;
                if (divMainModulesContent[index]) {
                    divMainModulesContent[index].style.display = "block";
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
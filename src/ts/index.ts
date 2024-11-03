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
var deg = 0;

window.onload = () => {
    main.changeTheme();   
}

// OCULTANDO / MOSTRANDO MÓDULOS

for(const img in imgMainModulesExpand) {
    imgMainModulesExpand[img].onclick = () => {
        if(deg === 0) {
            deg = 90;
            imgMainModulesExpand[img].style.transform = `rotate(${deg}deg)`;
        } else {
            deg = 0;
            imgMainModulesExpand[img].style.transform = `rotate(${deg}deg)`;
        }
    }
}
import { cor_principal, cor_secundaria } from './config';

// DEFININDO ELEMENTOS
const body = document.body;
// DIVS
const divHeader = document.querySelector('#divHeader');
const divFooter = document.querySelector('#divFooter');
const divMainModules = document.querySelector('.divMainModules')
const divMainModulesContent = document.querySelectorAll('.divMainModulesContent')
// H
// const h2MainModules = document.querySelectorAll('.h2MainModules')
// A
const aFooterLinkGithub = document.querySelector('#aFooterLinkGithub') as HTMLElement;
// P
const pMainIntroduction = document.querySelector('#pMainIntroduction') as HTMLElement;

function changeTheme() : void {
    window.matchMedia('(prefers-color-scheme: dark)').matches ? changeColorDark() : changeColorLight();
}

function changeColorDark() : void {
    body.classList.add('darkTheme');
    // DIVS
    divHeader?.classList.add('lightTheme');
    divFooter?.classList.add('lightTheme');

    if(aFooterLinkGithub) aFooterLinkGithub.style.color = cor_secundaria;
}

function changeColorLight() : void {
    body.classList.add('lightTheme');
    // DIVS
    divHeader?.classList.add('darkTheme');
    divFooter?.classList.add('darkTheme');
    divMainModules?.classList.add('darkTheme');
    // A
    aFooterLinkGithub.style.color = cor_principal
    pMainIntroduction.style.color = cor_principal
    pMainIntroduction.style.backgroundColor = cor_secundaria
}

export {
    changeTheme,
    changeColorDark,
    changeColorLight
};
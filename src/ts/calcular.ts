import '../css/index.css';

// ELEMENTOS

const imgHeaderLogo = document.querySelector('#imgHeaderLogo') as HTMLElement;

imgHeaderLogo.onclick = () => {
    window.location.href = './index.html';
}
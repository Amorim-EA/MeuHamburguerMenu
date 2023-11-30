const botaoMenu = document.querySelector('.cabecalho_menu');
const menu = document.querySelector('.menu-lateral');
const link = document.querySelectorAll('.menu-lateral_link');

botaoMenu.addEventListener('click', () => {
  menu.classList.toggle('menu-lateral--ativo')
});

link.addEventListener('click', () => {
  link.classList.toggle('menu-lateral--ativo')
});
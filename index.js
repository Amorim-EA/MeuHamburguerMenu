const botaoMenu = document.querySelector('.cabecalho_menu');
const menu = document.querySelector('.menu-lateral');
const links = document.querySelectorAll('.menu-lateral_link');

botaoMenu.addEventListener('click', () => {
  menu.classList.toggle('menu-lateral--ativo');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(otherLink => {
      otherLink.classList.remove('menu-lateral_link--ativo');
    });

    link.classList.add('menu-lateral_link--ativo');
  });
});

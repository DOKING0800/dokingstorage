const github = document.querySelector('.github');
const instagram = document.querySelector('.instagram');
const velog = document.querySelector('.velog');
const gmail = document.querySelector('.gmail');
const age = document.querySelector('.age');


github.addEventListener('click', () => window.open('https://github.com/doking0800'));
instagram.addEventListener('click', () => window.open('https://www.instagram.com/dev.dkq/'));
velog.addEventListener('click', () => window.open('https://velog.io/@doking'));
gmail.addEventListener('click', () => window.open('mailto:dev.dkq@gmail.com'));


age.innerHTML = `<h3>나이 : ${new Date().getFullYear() - 2006}</h3>`;
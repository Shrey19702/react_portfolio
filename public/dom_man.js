const [red, green, blue] = [255, 255, 255]
// const mainPage = document.querySelector('.main-page');
var mainPage=null;
var change=null;

window.addEventListener('scroll', () => {

  if(document.querySelector('.main-page-home')){
    mainPage = document.querySelector('.main-page-home');  
    change=700;
  }
  else if(document.querySelector('.main-page-contact')){
    mainPage = document.querySelector('.main-page-contact');  
    change=100;
  }
  else if(document.querySelector('.main-page-about')){
    mainPage = document.querySelector('.main-page-about');  
    change=100;
  }
  
  let y = 1 + (window.scrollY || window.pageYOffset) / change ;
  y = y < 1 ? 1 : y ;// ensure y is always >= 1 (due to Safari's elastic scroll)
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round);
  mainPage.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})
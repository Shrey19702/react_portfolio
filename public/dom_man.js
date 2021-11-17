const [red, green, blue] = [255, 255, 255]
const heroPage = document.querySelector('.hero-page');

window.addEventListener('scroll', () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 700 ;
  y = y < 1 ? 1 : y ;// ensure y is always >= 1 (due to Safari's elastic scroll)
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round);
  heroPage.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  document.querySelector('.Navbar').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})
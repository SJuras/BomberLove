// toggle menu
function toggleMenu(){
  const sidemenu = document.querySelector(".sidemenu");
  const toggle = document.querySelector(".toggle");
  sidemenu.classList.toggle("active");
  toggle.classList.toggle("active");
}
// toggle menu END

// scroll up button
const btnScrollTop = document.querySelector('#btnScrollTop');
window.addEventListener("scroll", function(){
  btnScrollTop.classList.toggle("visible", window.scrollY > 100);
});

btnScrollTop.addEventListener("click", function(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});
// scroll up button END 

// ============creat a auto navbar scrolling=======*//
const section=document.querySelectorAll('section')
const navLink = document.querySelectorAll('header nav a')
window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = set.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id')
    if (top = offset && top < offset + height) { 
      navLink.forEach(link => { 
        links.classlis.remove('active')
        document.querySelector('header nav a[href='+id+']').classList.add('active')
      })
    }
  })

// ============creat a Sticy  navbar=======*//
const header = document.querySelector('header')
header.classList.toggle("sticky".window.scrollY > 100)
menubar.classList.remove('bx-x')
menubar.classList.remove('active')
};

// ============creat a toggle changer =======*//
let menubar = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
menubar.onclick = () => {
  menubar.classList.toggle('bx-x')
}

//============creat a  text change=======*//
var type = new Typed('.textline', {
  String:['Frontend Developer', 'Blogger', 'Student', 'Team Leader'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
  showCursor: true,
  cursorChar: '_',

})



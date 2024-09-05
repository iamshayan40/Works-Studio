// Landing Page Loader Animations
function loading() {
  var tl = gsap.timeline();

  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out",
  });
  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.5,
      duration: 0.7,
      ease: "expo.out",
    },
    "anim"
  );
  tl.to(
    "#loader h1",
    {
      delay: 0.6,
      duration: 0.7,
      color: "black",
    },
    "anim"
  );
  tl.to(
    "#loader h3",
    {
      delay: 0.6,
      duration: 0.7,
      color: "black",
    },
    "anim"
  );
  tl.to(
    "#loader #down-arrow",
    {
      delay: 0.6,
      duration: 0.7,
      color: "black",
    },
    "anim"
  );
  tl.to("#loader", {
    display: "none",
  });
  tl.to("#loader", {
    opacity: 0,
  });
}
loading();

// Locomotive Code
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

//  Back to top Button
document.querySelector("footer h2,#back-btn").addEventListener("click",function(){
  scroll.scrollTo(0);
});

//  Hover Effect
document.querySelector('#close-btn').addEventListener('click', function() {
  document.querySelectorAll('.about, .studies').forEach(function(el) {
    el.classList.toggle('hidden');
    el.classList.toggle('show');
  });
});


var elems = document.querySelectorAll("#elem");
var page2 = document.querySelector("#page2");
elems.forEach(function(ele){
  ele.addEventListener("mouseenter",function(){
    var bgimg = ele.getAttribute("data-img");
    page2.style.backgroundImage = `url(${bgimg})`;
  })
})


function toggleNavbar() {
  const about = document.getElementById("about");
  const studies = document.getElementById("studies");

  if (about.style.display === "none" || about.style.display === "") {
      about.style.display = "inline-block"; 
      studies.style.display = "inline-block";
  } else {
      about.style.display = "none";
      studies.style.display = "none";
  }
}


const menuIcon = document.getElementById('close-btn');
const nav = document.getElementById('nav');

// Toggle the menu on icon click
menuIcon.addEventListener('click', () => {
    nav.classList.toggle('show');
});
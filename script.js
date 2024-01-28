
function Navbar(){
  let navbar = document.querySelector(".Navbar");
  let menu = document.querySelector(".icons #Menu");
  let cancel = document.querySelector(".icons #Cancel");
  
  menu.addEventListener("click",function(){
    navbar.style.right = "0%";
    menu.style.display = "none";
    cancel.style.display = "initial"
  })
  cancel.addEventListener("click",function(){
    navbar.style.right = "-200%";
    menu.style.display = "initial";
    cancel.style.display = "none";
  })
}
Navbar();



// fixed -images

 
function ImageShow(){
  document.querySelector(".all-project").addEventListener("mouseenter",function(){

    document.querySelector("#fixed-image").style.display = "initial";
  })
  document.querySelector(".all-project").addEventListener("mouseleave",function(){
  
    document.querySelector("#fixed-image").style.display = "none";
  })
  
  let pimg = document.querySelectorAll(".p-part");
  pimg.forEach(function(e){
    e.addEventListener("mouseenter",function(){
      let data = e.getAttribute("data-image")
      document.querySelector("#fixed-image").style.backgroundImage = `url(${data})`;
    })
  
    e.addEventListener("mousemove",function(move){
      document.querySelector("#fixed-image").style.top = `${move.clientY}px`
      document.querySelector("#fixed-image").style.left = `${move.clientX}px`
      document.querySelector("#fixed-image").style.transform = `translate(${move.clientX*0.20}px, ${-move.clientY*0.20}px`
    })
  
  })
}
ImageShow();
// for time

function displayTime(){
  let currenttime = new Date();
  let hours = currenttime.getHours();
  let minutes = currenttime.getMinutes();
  let ampm = (hours >= 12) ? "PM" : "AM";
  // Convert 24-hour format to 12-hour format
      hours = (hours % 12) || 12;
      minutes = (minutes < 10) ? "0" + minutes : minutes;

  let timeString = hours + ":" + minutes+ " " + ampm;
   document.querySelector(".time").innerHTML = timeString;
}
setInterval(displayTime,1000)

// cursor

function cursor(){
  let cursor = document.querySelector("#cursor");

main.addEventListener("mousemove",function(dets){
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
})

document.querySelector("#about").addEventListener("mouseenter",function(){
  cursor.style.backgroundColor = "black";
})
document.querySelector("#home").addEventListener("mouseenter",function(){
  cursor.style.backgroundColor = "white";
})
}
cursor();

setTimeout(function(){
    document.querySelector("#loader").style.top="-100%"
},3200)


let tl = gsap.timeline();

tl.from(".home-nav",{
  y :-20,
  opacity:0,
  duration:.2
},1)

tl.from(".home-part h1 span",{
  stagger:.2,
  opacity:.1,

})

tl.from(".about .left",{
  scrollTrigger:{
    trigger:".about",
    scroller:"body",
    end:"50% 50%",
    scrub:true
  },
  scale:0
})
tl.from(".about .right h2",{
  scrollTrigger:{
    trigger:".about",
    scroller:"body",
    start:"top 70%",
    end:"50% 50%",
    scrub:true
  },
  stagger:.5,
  x:200,
  opacity:.1
})

tl.from(".project .line",{
  scrollTrigger:{
    trigger:".project",
    scroller:"body",
    start:"top 90%",
    end:"50% 90%",
    scrub:true
  },
  width:0,

})
tl.from(".stack .line",{
  scrollTrigger:{
    trigger:".stack",
    scroller:"body",
    start:"top 90%",
    end:"50% 90%",
    scrub:true
  },
  width:0,

})

tl.from(".stack .left-skills",{
  scrollTrigger:{
    trigger:".stack",
    scroller:"body",
    start:"top 80%",
    end:"50% 90%",
    scrub:true,
    // markers:true
  },
  x:300,
})
tl.from(".stack .right-skills",{
  scrollTrigger:{
    trigger:".stack",
    scroller:"body",
    start:"top 80%",
    end:"50% 90%",
    scrub:true,
    // markers:true
  },
  x:-300,
})

tl.from(".stack h1",{
  scrollTrigger:{
    trigger:".stack",
    scroller:"body",
    start:"top 50%",
    end:"50% 90%",
    scrub:true,
    // markers:true
  },
  scale:0
})

tl.from(".contact .circle",{
  scrollTrigger:{
    trigger:".contact",
    scroller:"body",
    start:"top 80%",
    end:"50% 90%",
    scrub:true,
    // markers:true
  },
  top:"60%",
  opacity:.5
})


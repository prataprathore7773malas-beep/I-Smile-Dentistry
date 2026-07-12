//=============================
// Loader
//=============================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

},600);

});

//=============================
// Sticky Header
//=============================

const header = document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.classList.add("sticky");

}else{

header.classList.remove("sticky");

}

});

//=============================
// Mobile Menu
//=============================

const menuBtn=document.getElementById("menu-btn");

const navbar=document.getElementById("navbar");

menuBtn.addEventListener("click",()=>{

navbar.classList.toggle("show-menu");

});

document.querySelectorAll("#navbar a").forEach(link=>{

link.addEventListener("click",()=>{

navbar.classList.remove("show-menu");

});

});

//=============================
// Smooth Scroll
//=============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

//=============================
// Active Navigation
//=============================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("#navbar ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});//=============================
// FAQ Accordion
//=============================

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

question.addEventListener("click",()=>{

faqItems.forEach(other=>{

if(other!==item){

other.querySelector(".faq-answer").style.display="none";

other.querySelector("i").className="fa-solid fa-plus";

}

});

const answer=item.querySelector(".faq-answer");

const icon=item.querySelector("i");

if(answer.style.display==="block"){

answer.style.display="none";

icon.className="fa-solid fa-plus";

}else{

answer.style.display="block";

icon.className="fa-solid fa-minus";

}

});

});

//=============================
// Reveal Animation
//=============================

const reveals=document.querySelectorAll(

".about-grid,.doctor-grid,.service-card,.gallery-grid img,.why-grid div,.review-card,.contact-box"

);

function revealElements(){

const windowHeight=window.innerHeight;

reveals.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<windowHeight-120){

el.style.opacity="1";

el.style.transform="translateY(0)";

}

});

}

reveals.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".8s ease";

});

window.addEventListener("scroll",revealElements);

revealElements();

//=============================
// Gallery Hover
//=============================

const gallery=document.querySelectorAll(".gallery-grid img");

gallery.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.05)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

//=============================
// Scroll To Top
//=============================

const scrollTopBtn=document.createElement("button");

scrollTopBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

scrollTopBtn.id="scrollTop";

document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

scrollTopBtn.style.display="flex";

}else{

scrollTopBtn.style.display="none";

}

});

scrollTopBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

//=============================
// Auto Copyright Year
//=============================

const footer=document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML=

`© ${new Date().getFullYear()} I-Smile Dentistry. All Rights Reserved.`;

}

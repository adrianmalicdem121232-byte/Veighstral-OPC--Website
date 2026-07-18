/*=========================================
VEIGHSTRAL OPC
JavaScript
=========================================*/

// ==========================
// Sticky Header
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

// ==========================
// Smooth Scroll
// ==========================

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



// ==========================
// Scroll Animation
// ==========================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

sections.forEach(section=>{

observer.observe(section);

});

// ==========================
// Back To Top Button
// ==========================

const topButton=document.createElement("button");

topButton.innerHTML="<i class='fa-solid fa-arrow-up'></i>";

topButton.id="topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.style.display="flex";

}else{

topButton.style.display="none";

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ==========================
// Floating Animation
// ==========================

const heroImage=document.querySelector(".hero-image img");

if(heroImage){

setInterval(()=>{

heroImage.classList.toggle("floating");

},1500);

}
/*=========================================
TEAM FLIP CARD
=========================================*/

const flipCards = document.querySelectorAll(".flip-card");

flipCards.forEach((card) => {

    card.addEventListener("click", function (e) {

        // Para gumana pa rin ang Phone, Email at Facebook links
        if (e.target.closest("a")) {
            return;
        }

        // Isara ang ibang cards
        flipCards.forEach((otherCard) => {

            if (otherCard !== card) {
                otherCard.classList.remove("active");
            }

        });

        // Flip current card
        card.classList.toggle("active");

    });

});

// Close kapag nag-click sa labas
document.addEventListener("click", function (e) {

    if (!e.target.closest(".flip-card")) {

        flipCards.forEach((card) => {

            card.classList.remove("active");

        });

    }

});
/*=========================
MOBILE MENU
=========================*/

const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav");

menuBtn.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("active");

});

});

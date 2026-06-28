/*==================================================
                AOS INITIALIZATION
==================================================*/

AOS.init({

    duration:1000,

    once:true,

    offset:100,

    easing:"ease-in-out"

});

/*==================================================
                TYPING EFFECT
==================================================*/

new Typed("#typing",{

    strings:[

        "Frontend Developer",

        "Java Programmer",

        "Web Designer",

        "Cyber Security Enthusiast"

    ],

    typeSpeed:70,

    backSpeed:40,

    backDelay:1800,

    loop:true

});

/*==================================================
                MOBILE MENU
==================================================*/

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-menu");

const menuIcon = document.querySelector(".menu-btn i");

menuBtn.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

    if(navMenu.classList.contains("active")){

        menuIcon.classList.replace("bx-menu","bx-x");

    }

    else{

        menuIcon.classList.replace("bx-x","bx-menu");

    }

});

/*==================================================
        CLOSE MENU AFTER CLICK
==================================================*/

document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

        menuIcon.classList.replace("bx-x","bx-menu");

    });

});

/*==================================================
                DARK MODE
==================================================*/

const themeToggle=document.getElementById("themeToggle");

const body=document.body;

const themeIcon=themeToggle.querySelector("i");

if(localStorage.getItem("theme")==="light"){

    body.classList.add("light");

    themeIcon.classList.replace("bx-moon","bx-sun");

}

themeToggle.addEventListener("click",()=>{

    body.classList.toggle("light");

    if(body.classList.contains("light")){

        localStorage.setItem("theme","light");

        themeIcon.classList.replace("bx-moon","bx-sun");

    }

    else{

        localStorage.setItem("theme","dark");

        themeIcon.classList.replace("bx-sun","bx-moon");

    }

});

/*==================================================
                HEADER SCROLL EFFECT
==================================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        header.style.background = body.classList.contains("light")

        ? "rgba(255,255,255,.88)"

        : "rgba(7,11,26,.88)";

        header.style.backdropFilter = "blur(20px)";

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";

    }

    else{

        header.style.background = body.classList.contains("light")

        ? "rgba(255,255,255,.75)"

        : "rgba(7,11,26,.70)";

        header.style.boxShadow = "none";

    }

});

/*==================================================
                ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

function activeMenu(){

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 150;

        const height = section.offsetHeight;

        if(window.scrollY >= top && window.scrollY < top + height){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll",activeMenu);

/*==================================================
                SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});

/*==================================================
                SCROLL REVEAL
==================================================*/

const revealElements = document.querySelectorAll(

".about-container,.skill-card,.project-card,.contact-card"

);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade-up");

        }

    });

},{

    threshold:0.15

});

revealElements.forEach(el=>{

    revealObserver.observe(el);

});

/*==================================================
                BUTTON HOVER EFFECT
==================================================*/

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-6px) scale(1.03)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0) scale(1)";

    });

});

/*==================================================
                CARD TILT EFFECT
==================================================*/

const cards = document.querySelectorAll(

".skill-card,.project-card,.contact-card"

);

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateX = ((y-centerY)/20);

        const rotateY = ((centerX-x)/20);

        card.style.transform=

        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform=

        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});

/*==================================================
            PROJECT IMAGE EFFECT
==================================================*/

const projectImage=document.querySelector(".project-image img");

if(projectImage){

    projectImage.addEventListener("mouseenter",()=>{

        projectImage.style.transform="scale(1.08)";

    });

    projectImage.addEventListener("mouseleave",()=>{

        projectImage.style.transform="scale(1)";

    });

}

/*==================================================
                PAGE LOADER
==================================================*/

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});

/*==================================================
            PARALLAX BACKGROUND
==================================================*/

document.addEventListener("mousemove",(e)=>{

    const moveX=(e.clientX-window.innerWidth/2)/60;

    const moveY=(e.clientY-window.innerHeight/2)/60;

    document.body.style.backgroundPosition=

    `${moveX}px ${moveY}px`;

});

/*==================================================
            SCROLL TO TOP ON RELOAD
==================================================*/

window.onbeforeunload=()=>{

    window.scrollTo(0,0);

};

/*==================================================
                RIPPLE EFFECT
==================================================*/

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("click",function(e){

        const circle=document.createElement("span");

        const diameter=Math.max(

            this.clientWidth,

            this.clientHeight

        );

        const radius=diameter/2;

        circle.style.width=diameter+"px";

        circle.style.height=diameter+"px";

        circle.style.left=

        e.clientX-

        this.getBoundingClientRect().left-

        radius+"px";

        circle.style.top=

        e.clientY-

        this.getBoundingClientRect().top-

        radius+"px";

        circle.classList.add("ripple");

        const ripple=this.getElementsByClassName("ripple")[0];

        if(ripple){

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

/*==================================================
            PERFORMANCE
==================================================*/

window.addEventListener("resize",()=>{

    AOS.refresh();

});

/*==================================================
            CONSOLE MESSAGE
==================================================*/

console.clear();

console.log(

"%c🚀 Portfolio Successfully Loaded",

"color:#00F5FF;font-size:18px;font-weight:bold;"

);

console.log(

"%cDesigned & Developed by Krish Bhuva",

"color:#7C3AED;font-size:14px;font-weight:bold;"

);
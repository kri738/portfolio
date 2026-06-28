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
                THEME TOGGLE
==================================================*/

const themeBtn = document.getElementById("themeToggle");

if(themeBtn){

    // Load saved theme
    if(localStorage.getItem("theme")==="light"){

        document.body.classList.add("light");

        themeBtn.innerHTML="<i class='bx bx-sun'></i>";

    }

    else{

        themeBtn.innerHTML="<i class='bx bx-moon'></i>";

    }

    themeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("light");

        if(document.body.classList.contains("light")){

            localStorage.setItem("theme","light");

            themeBtn.innerHTML="<i class='bx bx-sun'></i>";

        }

        else{

            localStorage.setItem("theme","dark");

            themeBtn.innerHTML="<i class='bx bx-moon'></i>";

        }

    });

}


/*==================================================
                MOBILE MENU
==================================================*/

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-menu");

if(menuBtn && navMenu){

    menuBtn.addEventListener("click",()=>{

        navMenu.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if(icon){

            if(navMenu.classList.contains("active")){

                icon.className="bx bx-x";

            }

            else{

                icon.className="bx bx-menu";

            }

        }

    });

}


/*==================================================
        CLOSE MENU AFTER CLICK
==================================================*/

document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        if(navMenu){

            navMenu.classList.remove("active");

        }

        if(menuBtn){

            const icon = menuBtn.querySelector("i");

            if(icon){

                icon.className="bx bx-menu";

            }

        }

    });

});


/*==================================================
            HEADER SCROLL EFFECT
==================================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(!header) return;

    if(window.scrollY>60){

        header.style.background="rgba(5,8,22,.92)";

        header.style.backdropFilter="blur(20px)";

        header.style.boxShadow="0 8px 30px rgba(0,0,0,.25)";

    }

    else{

        if(document.body.classList.contains("light")){

            header.style.background="rgba(255,255,255,.85)";

        }

        else{

            header.style.background="rgba(5,8,22,.75)";

        }

        header.style.boxShadow="none";

    }

});

/*==================================================
            ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

    let currentSection="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-180;
        const sectionHeight = section.offsetHeight;

        if(window.pageYOffset>=sectionTop &&
           window.pageYOffset<sectionTop+sectionHeight){

            currentSection=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + currentSection){

            link.classList.add("active");

        }

    });

});


/*==================================================
            SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});


/*==================================================
            SCROLL PROGRESS BAR
==================================================*/

const progressBar=document.createElement("div");

progressBar.id="progressBar";

document.body.appendChild(progressBar);

window.addEventListener("scroll",()=>{

    const scrollTop=document.documentElement.scrollTop;

    const scrollHeight=

    document.documentElement.scrollHeight-

    document.documentElement.clientHeight;

    const progress=(scrollTop/scrollHeight)*100;

    progressBar.style.width=progress+"%";

});


/*==================================================
            SCROLL TO TOP BUTTON
==================================================*/

const scrollBtn=document.createElement("button");

scrollBtn.id="scrollTop";

scrollBtn.innerHTML="<i class='bx bx-up-arrow-alt'></i>";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollBtn.classList.add("show");

    }

    else{

        scrollBtn.classList.remove("show");

    }

});


scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*==================================================
        SHOW BODY AFTER PAGE LOAD
==================================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

/*==================================================
            ANIMATED COUNTERS
==================================================*/

const counters=document.querySelectorAll(".counter");

let counterStarted=false;

function startCounter(){

    if(counterStarted) return;

    const statsSection=document.querySelector("#statistics");

    if(!statsSection) return;

    const triggerPoint=statsSection.offsetTop-350;

    if(window.scrollY>=triggerPoint){

        counterStarted=true;

        counters.forEach(counter=>{

            const target=+counter.dataset.target;

            let current=0;

            const increment=Math.ceil(target/120);

            function updateCounter(){

                current+=increment;

                if(current<target){

                    counter.innerText=current;

                    requestAnimationFrame(updateCounter);

                }

                else{

                    counter.innerText=target;

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll",startCounter);


/*==================================================
            CARD 3D HOVER EFFECT
==================================================*/

document.querySelectorAll(

".info-card,.feature-card,.character-card,.weapon-card,.map-card,.mode-card,.stat-card,.esports-card,.tip-card"

).forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateX=(y-rect.height/2)/18;

        const rotateY=(rect.width/2-x)/18;

        card.style.transform=

        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform=

        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    });

});


/*==================================================
            HERO FLOAT EFFECT
==================================================*/

const heroImage=document.querySelector(".hero-image img");

if(heroImage){

    let angle=0;

    function floatingHero(){

        angle+=0.02;

        heroImage.style.transform=

        `translateY(${Math.sin(angle)*8}px)`;

        requestAnimationFrame(floatingHero);

    }

    floatingHero();

}


/*==================================================
            REVEAL ON SCROLL
==================================================*/

const revealElements=document.querySelectorAll(

".glass-card,.info-card,.feature-card,.character-card,.weapon-card,.map-card,.mode-card,.gallery-item,.stat-card,.update-card,.esports-card,.tip-card,.requirement-card,.community-card,.download-card"

);

const revealObserver=new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade-up");

        }

    });

},

{

    threshold:0.15

}

);

revealElements.forEach(element=>{

    revealObserver.observe(element);

});

/*==================================================
                FAQ ACCORDION
==================================================*/

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const question=item.querySelector(".faq-question");

    question.addEventListener("click",()=>{

        faqItems.forEach(faq=>{

            if(faq!==item){

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


/*==================================================
            BUTTON RIPPLE EFFECT
==================================================*/

document.querySelectorAll(

".btn,.download-btn"

).forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        const rect=this.getBoundingClientRect();

        const size=Math.max(rect.width,rect.height);

        ripple.style.width=size+"px";
        ripple.style.height=size+"px";

        ripple.style.left=(e.clientX-rect.left-size/2)+"px";
        ripple.style.top=(e.clientY-rect.top-size/2)+"px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});


/*==================================================
            GALLERY LIGHTBOX
==================================================*/

const galleryImages=document.querySelectorAll(".gallery-item img");

if(galleryImages.length){

    const lightbox=document.createElement("div");

    lightbox.id="lightbox";

    lightbox.innerHTML=`

        <span id="closeLightbox">&times;</span>

        <img id="lightboxImg">

    `;

    document.body.appendChild(lightbox);

    const lightboxImg=document.getElementById("lightboxImg");

    const closeBtn=document.getElementById("closeLightbox");

    galleryImages.forEach(image=>{

        image.addEventListener("click",()=>{

            lightbox.classList.add("show");

            lightboxImg.src=image.src;

            lightboxImg.alt=image.alt;

        });

    });

    closeBtn.addEventListener("click",()=>{

        lightbox.classList.remove("show");

    });

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            lightbox.classList.remove("show");

        }

    });

}


/*==================================================
            ESC TO CLOSE LIGHTBOX
==================================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        const lightbox=document.getElementById("lightbox");

        if(lightbox){

            lightbox.classList.remove("show");

        }

    }

});


/*==================================================
            LAZY IMAGE LOADING
==================================================*/

const lazyImages=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver(

(entries,observer)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const image=entry.target;

            image.classList.add("loaded");

            observer.unobserve(image);

        }

    });

},

{

    threshold:0.2

}

);

lazyImages.forEach(image=>{

    imageObserver.observe(image);

});

/*==================================================
            WINDOW RESIZE
==================================================*/

window.addEventListener("resize",()=>{

    const navMenu=document.querySelector(".nav-menu");
    const menuIcon=document.querySelector(".menu-btn i");

    if(window.innerWidth>768){

        if(navMenu){

            navMenu.classList.remove("active");

        }

        if(menuIcon){

            menuIcon.className="bx bx-menu";

        }

    }

});


/*==================================================
            KEYBOARD SHORTCUTS
==================================================*/

document.addEventListener("keydown",(e)=>{

    /* Home */

    if(e.key==="Home"){

        e.preventDefault();

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }

    /* End */

    if(e.key==="End"){

        e.preventDefault();

        window.scrollTo({

            top:document.documentElement.scrollHeight,

            behavior:"smooth"

        });

    }

});


/*==================================================
        PAGE TITLE ON TAB CHANGE
==================================================*/

const originalTitle=document.title;

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        document.title="🎮 Come Back Gamer!";

    }

    else{

        document.title=originalTitle;

    }

});


/*==================================================
        DOWNLOAD BUTTON HOVER
==================================================*/

document.querySelectorAll(".download-btn").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0) scale(1)";

    });

});


/*==================================================
        REDUCED MOTION SUPPORT
==================================================*/

if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){

    document.documentElement.style.scrollBehavior="auto";

}


/*==================================================
            PRELOAD HERO IMAGE
==================================================*/

const hero=document.querySelector(".hero-image img");

if(hero){

    const preload=new Image();

    preload.src=hero.src;

}


/*==================================================
        PAGE LOADED
==================================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


/*==================================================
        CONSOLE MESSAGE
==================================================*/

console.log(

"%c🎮 Gaming Universe",
"color:#ff6b00;font-size:18px;font-weight:bold;"

);

console.log(

"%cDesigned & Developed by Krish Bhuva",
"color:#ffffff;font-size:13px;"

);


/*==================================================
        INITIALIZATION COMPLETE
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    console.log("✅ Game Page Loaded Successfully");

});
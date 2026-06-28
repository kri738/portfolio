/*==================================================
                DOM LOADED
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==============================================
                    AOS
    ==============================================*/

    AOS.init({

        duration:1000,

        once:true,

        offset:120,

        easing:"ease-in-out"

    });

    /*==============================================
                TYPING EFFECT
    ==============================================*/

    if(document.querySelector("#typing")){

        new Typed("#typing",{

            strings:[

                "Ultimate Gaming Experience",

                "Free Fire",

                "BGMI",

                "Call Of Duty",

                "Gaming Community"

            ],

            typeSpeed:60,

            backSpeed:40,

            backDelay:1500,

            smartBackspace:true,

            loop:true

        });

    }

    /*==============================================
                WELCOME POPUP
    ==============================================*/

    const popup = document.getElementById("welcomePopup");

    const exploreBtn = document.getElementById("exploreBtn");

    if(popup && exploreBtn){

        popup.style.display = "flex";

        exploreBtn.addEventListener("click",()=>{

            popup.classList.add("popup-hide");

            setTimeout(()=>{

                popup.style.display="none";

            },500);

        });

    }

    /*==============================================
                PAGE LOADED
    ==============================================*/

    window.addEventListener("load",()=>{

        document.body.classList.add("loaded");

    });

});

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

                icon.classList.remove("bx-menu");

                icon.classList.add("bx-x");

            }

            else{

                icon.classList.remove("bx-x");

                icon.classList.add("bx-menu");

            }

        }

    });

}

/*==================================================
        CLOSE MENU AFTER CLICK
==================================================*/

document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        if(icon){

            icon.classList.remove("bx-x");

            icon.classList.add("bx-menu");

        }

    });

});

/*==================================================
            STICKY HEADER
==================================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(!header) return;

    if(window.scrollY > 60){

        header.style.background = "rgba(5,8,22,.92)";

        header.style.backdropFilter = "blur(20px)";

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    }

    else{

        header.style.background = "";

        header.style.boxShadow = "none";

    }

});

/*==================================================
            ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 180;

        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop &&
           window.scrollY < sectionTop + sectionHeight){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/*==================================================
            SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target = document.querySelector(

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
                THEME TOGGLE
==================================================*/

const themeBtn = document.getElementById("themeToggle");

/* Load Saved Theme */

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light");

    if(themeBtn){

        themeBtn.innerHTML = "<i class='bx bx-sun'></i>";

    }

}

else{

    if(themeBtn){

        themeBtn.innerHTML = "<i class='bx bx-moon'></i>";

    }

}

/* Toggle Theme */

if(themeBtn){

    themeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("light");

        if(document.body.classList.contains("light")){

            localStorage.setItem("theme","light");

            themeBtn.innerHTML = "<i class='bx bx-sun'></i>";

        }

        else{

            localStorage.setItem("theme","dark");

            themeBtn.innerHTML = "<i class='bx bx-moon'></i>";

        }

    });

}

/*==================================================
                GAME SEARCH
==================================================*/

const searchInput = document.getElementById("gameSearch");

if(searchInput){

    searchInput.addEventListener("keyup",function(){

        const value = this.value.toLowerCase().trim();

        document.querySelectorAll(".game-card").forEach(card=>{

            const title = card.querySelector("h3")
                              .textContent
                              .toLowerCase();

            const tags = card.innerText.toLowerCase();

            if(title.includes(value) || tags.includes(value)){

                card.style.display = "flex";

            }

            else{

                card.style.display = "none";

            }

        });

    });

}

/*==================================================
            STATS COUNTER
==================================================*/

let counterStarted = false;

function startCounter(){

    if(counterStarted) return;

    const stats = document.querySelector(".stats");

    if(!stats) return;

    if(window.scrollY >= stats.offsetTop - 300){

        counterStarted = true;

        document.querySelectorAll(".stat-box h1").forEach(counter=>{

            const originalText = counter.innerText;

            const number = parseInt(originalText);

            const suffix = originalText.replace(number,"");

            if(isNaN(number)) return;

            let count = 0;

            const increment = Math.max(1,Math.ceil(number/80));

            function updateCounter(){

                count += increment;

                if(count < number){

                    counter.innerText = count + suffix;

                    requestAnimationFrame(updateCounter);

                }

                else{

                    counter.innerText = originalText;

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll",startCounter);

/*==================================================
                SCROLL TO TOP BUTTON
==================================================*/

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{

    if(!scrollBtn) return;

    if(window.scrollY > 500){

        scrollBtn.classList.add("show");

    }

    else{

        scrollBtn.classList.remove("show");

    }

});

if(scrollBtn){

    scrollBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/*==================================================
            SCROLL PROGRESS BAR
==================================================*/

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll",()=>{

    if(!progressBar) return;

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

});

/*==================================================
            HERO PARALLAX EFFECT
==================================================*/

const heroImage = document.querySelector(".hero-image-frame");

window.addEventListener("mousemove",(e)=>{

    if(!heroImage) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;

    const y = (window.innerHeight / 2 - e.clientY) / 40;

    heroImage.style.transform =

        `rotateY(${-x}deg)
         rotateX(${y}deg)`;

});

window.addEventListener("mouseleave",()=>{

    if(heroImage){

        heroImage.style.transform =
        "rotateX(0deg) rotateY(0deg)";

    }

});

/*==================================================
            GAME CARD HOVER
==================================================*/

document.querySelectorAll(".game-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX =

            (y - rect.height/2) / 25;

        const rotateY =

            (rect.width/2 - x) / 25;

        card.style.transform =

        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-12px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =

        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});

/*==================================================
            CLOSE POPUP WITH ESC
==================================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape"){

        const popup =
        document.getElementById("welcomePopup");

        if(popup){

            popup.classList.add("popup-hide");

            setTimeout(()=>{

                popup.style.display="none";

            },400);

        }

    }

});

/*==================================================
            WINDOW RESIZE
==================================================*/

window.addEventListener("resize",()=>{

    if(window.innerWidth > 768){

        if(navMenu){

            navMenu.classList.remove("active");

        }

        if(menuBtn){

            const icon = menuBtn.querySelector("i");

            if(icon){

                icon.className = "bx bx-menu";

            }

        }

    }

});

/*==================================================
            PERFORMANCE
==================================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

    console.log(

        "%c🎮 Gaming Universe Loaded Successfully",

        "color:#00F5FF;font-size:16px;font-weight:bold;"

    );

});

/*==================================================
                END OF FILE
==================================================*/
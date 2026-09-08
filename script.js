/* ==========================================
   LOADER ANIMATION
========================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.transition = "0.8s ease";

    }, 1200);

});


/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");

const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


/* ==========================================
   CLOSE MOBILE MENU ON LINK CLICK
========================================== */

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


/* ==========================================
   STICKY HEADER EFFECT
========================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.padding = "15px 10%";

        header.style.background =
        "rgba(8,17,31,0.95)";

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.25)";

    }

    else{

        header.style.padding = "20px 10%";

        header.style.background =
        "rgba(8,17,31,0.75)";

        header.style.boxShadow = "none";
    }

});


/* ==========================================
   ACTIVE NAVIGATION LINK
========================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 150;

        const sectionHeight =
        section.clientHeight;

        if(window.scrollY >= sectionTop){

            current =
            section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");

        }

    });

});


/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const scrollBtn =
document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        scrollBtn.style.display = "flex";

    }

    else{

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ==========================================
   TYPING ANIMATION
========================================== */

const typingElement =
document.querySelector(".typing");

const roles = [

    "Business Analyst",

    "Requirements Analyst",

    "Process Improvement Specialist",

    "Power BI Developer",

    "SQL Specialist",

    "KPI & Reporting Analyst"

];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

    const currentRole =
    roles[roleIndex];

    if(!isDeleting){

        typingElement.textContent =
        currentRole.substring(
            0,
            charIndex + 1
        );

        charIndex++;

        if(charIndex === currentRole.length){

            isDeleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;
        }

    } else {

        typingElement.textContent =
        currentRole.substring(
            0,
            charIndex - 1
        );

        charIndex--;

        if(charIndex === 0){

            isDeleting = false;

            roleIndex++;

            if(roleIndex >= roles.length){

                roleIndex = 0;
            }
        }
    }

    setTimeout(

        typeEffect,

        isDeleting ? 50 : 100

    );
}

typeEffect();
/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(

    ".skill-card, .project-card, .cert-card, .education-card, .timeline-content, .highlight-card"

);

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
    "translateY(50px)";

    element.style.transition =
    "all 0.8s ease";

    revealObserver.observe(element);

});


/* ==========================================
   ANIMATED COUNTERS
========================================== */

const counters = document.querySelectorAll(
    ".highlight-card h4"
);

let counterStarted = false;

function startCounters(){

    if(counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

        const text =
        counter.innerText;

        let target = parseInt(text);

        if(isNaN(target)) return;

        let count = 0;

        const speed = target / 60;

        const updateCounter = () => {

            count += speed;

            if(count < target){

                counter.innerText =
                Math.floor(count) +
                (text.includes("%")
                    ? "%"
                    : "+");

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.innerText = text;
            }
        };

        updateCounter();
    });

}

const aboutSection =
document.querySelector(".about");

const counterObserver =
new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                startCounters();
            }

        });

    },

    { threshold: 0.4 }

);

if(aboutSection){

    counterObserver.observe(
        aboutSection
    );
}


/* ==========================================
   PROJECT FILTER BUTTONS
========================================== */

const filterButtons =
document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove(
                "active"
            );

        });

        button.classList.add(
            "active"
        );

    });

});


/* ==========================================
   CONTACT FORM
========================================== */

const contactForm =
document.getElementById(
    "contactForm"
);

if(contactForm){

    contactForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            const button =
            document.querySelector(
                ".submit-btn"
            );

            button.innerHTML =
            '<i class="fa-solid fa-check"></i> Message Sent';

            button.style.background =
            "#00f5a0";

            setTimeout(() => {

                button.innerHTML =
                '<i class="fa-solid fa-paper-plane"></i> Send Message';

                contactForm.reset();

            }, 2500);

        }
    );
}


/* ==========================================
   MOUSE GLOW EFFECT
========================================== */

const glow = document.createElement("div");

glow.classList.add(
    "mouse-glow"
);

document.body.appendChild(glow);

document.addEventListener(
    "mousemove",
    (e) => {

        glow.style.left =
        e.clientX + "px";

        glow.style.top =
        e.clientY + "px";
    }
);


/* ==========================================
   HERO PARALLAX EFFECT
========================================== */

const heroImage =
document.querySelector(
    ".image-card"
);

document.addEventListener(
    "mousemove",
    (e) => {

        if(!heroImage) return;

        const x =
        (window.innerWidth / 2 -
        e.pageX) / 35;

        const y =
        (window.innerHeight / 2 -
        e.pageY) / 35;

        heroImage.style.transform =
        `rotateY(${x}deg)
         rotateX(${-y}deg)`;
    }
);

document.addEventListener(
    "mouseleave",
    () => {

        if(!heroImage) return;

        heroImage.style.transform =
        "rotateY(0deg) rotateX(0deg)";
    }
);


/* ==========================================
   PROJECT CARD TILT EFFECT
========================================== */

const cards =
document.querySelectorAll(
    ".project-card"
);

cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (e) => {

            const rect =
            card.getBoundingClientRect();

            const x =
            e.clientX - rect.left;

            const y =
            e.clientY - rect.top;

            const rotateX =
            ((y / rect.height)
            - 0.5) * 10;

            const rotateY =
            ((x / rect.width)
            - 0.5) * -10;

            card.style.transform =
            `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
            `;
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
            `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
            `;
        }
    );

});


/* ==========================================
   SECTION TITLE ANIMATION
========================================== */

const titles =
document.querySelectorAll(
    ".section-title"
);

const titleObserver =
new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.style.opacity =
                "1";

                entry.target.style.transform =
                "translateY(0)";
            }
        });

    },

    {
        threshold: 0.2
    }

);

titles.forEach(title => {

    title.style.opacity = "0";

    title.style.transform =
    "translateY(40px)";

    title.style.transition =
    "all 0.8s ease";

    titleObserver.observe(title);

});


/* ==========================================
   CONSOLE SIGNATURE
========================================== */

console.log(
`
=================================
 Priyanshu Namdev Portfolio
 Business Analyst | Power BI | SQL
=================================
`
);

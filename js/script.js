
const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
}


const darkmodebutton = document.querySelector("#darkmodebutton");
darkmodebutton.addEventListener("click", function (){
    document.classlist.toggle("dark-mode");

});


const projects = [
    {
        title: "Design Projects",
        description: "Best works so far",
        image: "images/Screenshot 2026-10-20 230823.png"
    },

    {
        title: "Character Design",
        description: "Character Turnaround of a character",
        image: "images/CA6_LIA PADUA.jpg"
    },
];

const projectList = document.querySelector("#projectList");

projects.forEach(function (project) {
    projectList.innerHTML += `
        <article class="project">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <img src="${project.image}" alt="${project.title}" width="300">
        </article>
    `;
});

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameError = document.querySelector("#nameError");
        const emailError = document.querySelector("#emailError");
        const messageError = document.querySelector("#messageError");

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        if (name.value.trim() === "") {
            nameError.textContent = "Please enter your name.";
        }

        if (email.value.trim() === "") {
            emailError.textContent = "Please enter your email.";
        }

        if (message.value.trim() === "") {
            messageError.textContent = "Please enter a message.";
        }
    });
}

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
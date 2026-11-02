
/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = siteNav.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );
    });

    // Close mobile navigation after selecting a page
    const navLinks = siteNav.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            siteNav.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    });
}


/* =========================================
   LOGO PROJECT INFORMATION
========================================= */

const logoProjects = [

    {
        title: "4C Radio",
        category: "Media & Brand Identity",

        description:
            "4C Radio is a fortnightly show exploring campus news, useful information and conversations with students, staff and faculty. It showcases creative talent through music, drama and other audio expressions, while reflecting the concerns of diverse communities, particularly those on the frontiers of climate and environmental change.",

        images: ["images/logo-01.png"]
    },

    {
        title: "Onella",
        category: "Experiential Marketing",

        description:
            "Onella is a conceptual boutique experiential marketing and events production agency envisioned as a future business venture. Its approach brings together strategy, concepts and design to create meaningful, buzz-worthy experiences that harness the creative possibilities of real-world brand engagement.",

        images: ["images/logo-02.png"]
    },

    {
        title: "Bloom Recovery",
        category: "Brand Identity",

        description:
            "A confidential branding project developed for Bloom Recovery. Further information about the organisation and project is withheld under a non-disclosure agreement.",

        images: ["images/logo-03.png"]
    },

    {
        title: "The Beginning",
        category: "Brand Identity",

        description:
            "A branding project for The Beginning, one of Bengaluru's wedding and event destinations. Since its soft launch in July 2020, the venue has hosted more than 350 weddings and other events, creating memorable experiences for its clients.",

        images: ["images/logo-04.jpg"]
    },

    {
        title: "Kavana Collective",
        category: "Marketing & Branding",

        description:
            "A visual identity project for Kavana Collective, a marketing agency. The project explores the development of a distinctive brand identity through visual design and creative direction.",

        images: ["images/logo-05.png"]
    },

    {
        title: "KPTA",
        category: "Brand Identity",

        description:
            "A branding project for the Karnataka Progressive Teachers Association, an organisation of teachers, professors and educators advocating for a better and more equitable education system.",

        images: ["images/Logo-06.png"]
    },

    {
        title: "PCNI 2026",
        category: "Conference Branding & Design",

        description:
            "The Popular Culture and National Identities Conference, held at CHRIST University from 25–27 June 2026, brought together international scholars to explore the intersections of media, nationalism and identity. Organised in collaboration with Routledge Taylor & Francis, Curtin University and the University of Westminster, the conference examined interdisciplinary perspectives on representation, mediatization and the cultural construction of identities.",

        images: ["images/logo-07.png"]
    }

];


/* =========================================
   LOGO PROJECT MODAL
========================================= */

const logoModal = document.getElementById("logoModal");

if (logoModal) {

    const modalTitle =
        document.getElementById("modalTitle");

    const modalCategory =
        document.getElementById("modalCategory");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalGallery =
        document.getElementById("modalGallery");

    const closeButton =
        logoModal.querySelector(".modal-close");

    const backdrop =
        logoModal.querySelector(".logo-modal-backdrop");

    const previousButton =
        document.getElementById("previousProject");

    const nextButton =
        document.getElementById("nextProject");

    const projectCounter =
        document.getElementById("projectCounter");

    const projectTriggers =
        document.querySelectorAll(".logo-trigger");

    let currentProject = 0;


    /* OPEN PROJECT */

    function openLogoProject(index) {

        // Keep project navigation within the seven projects
        currentProject =
            (index + logoProjects.length) % logoProjects.length;

        const project = logoProjects[currentProject];


        // Update project information
        modalTitle.textContent = project.title;

        modalCategory.textContent = project.category;

        modalDescription.textContent = project.description;


        // Update project counter
        projectCounter.textContent =
            String(currentProject + 1).padStart(2, "0") +
            " / " +
            String(logoProjects.length).padStart(2, "0");


        // Remove images from the previously opened project
        modalGallery.replaceChildren();


        // Display the selected project's images
        project.images.forEach((imagePath) => {

            const image = document.createElement("img");

            image.src = imagePath;

            image.alt = project.title;

            image.loading = "lazy";

            modalGallery.appendChild(image);
        });


        // Display modal
        logoModal.classList.add("active");

        logoModal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";


        // Set keyboard focus to close button
        if (closeButton) {
            closeButton.focus();
        }
    }


    /* CLOSE PROJECT */

    function closeLogoProject() {

        logoModal.classList.remove("active");

        logoModal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";
    }


    /* NEXT PROJECT */

    function showNextProject() {

        openLogoProject(currentProject + 1);
    }


    /* PREVIOUS PROJECT */

    function showPreviousProject() {

        openLogoProject(currentProject - 1);
    }


    /* PROJECT CARD CLICK EVENTS */

    projectTriggers.forEach((trigger) => {

        trigger.addEventListener("click", () => {

            const projectIndex =
                Number(trigger.dataset.project);

            openLogoProject(projectIndex);
        });
    });


    /* CLOSE BUTTON */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeLogoProject
        );
    }


    /* BACKGROUND CLICK */

    if (backdrop) {

        backdrop.addEventListener(
            "click",
            closeLogoProject
        );
    }


    /* PREVIOUS AND NEXT BUTTONS */

    if (previousButton) {

        previousButton.addEventListener(
            "click",
            showPreviousProject
        );
    }

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            showNextProject
        );
    }


    /* KEYBOARD CONTROLS */

    document.addEventListener("keydown", (event) => {

        if (!logoModal.classList.contains("active")) {
            return;
        }

        // Escape closes the modal
        if (event.key === "Escape") {

            closeLogoProject();
        }

        // Right arrow opens the next project
        if (event.key === "ArrowRight") {

            showNextProject();
        }

        // Left arrow opens the previous project
        if (event.key === "ArrowLeft") {

            showPreviousProject();
        }
    });

}

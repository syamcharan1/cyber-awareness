let currentLanguage = localStorage.getItem("language") || "en";

function updateLanguage() {

    const elements = document.querySelectorAll("[data-en]");

    elements.forEach(element => {

        if (currentLanguage === "en") {
            element.textContent = element.getAttribute("data-en");
        } else {
            element.textContent = element.getAttribute("data-te");
        }

    });

    const button = document.getElementById("languageBtn");

    if (button) {

        if (currentLanguage === "en") {
            button.textContent = "తెలుగు";
        } else {
            button.textContent = "English";
        }

    }

    document.documentElement.lang = currentLanguage;

    localStorage.setItem("language", currentLanguage);
}


function toggleLanguage() {

    currentLanguage = currentLanguage === "en"
        ? "te"
        : "en";

    updateLanguage();
}


document.addEventListener("DOMContentLoaded", () => {

    updateLanguage();

    const button = document.getElementById("languageBtn");

    if (button) {
        button.addEventListener("click", toggleLanguage);
    }

});

// Liste des langages de programmation
const languages = ["C++", "C", "Python", "SQL", "HTML"];
const introductionText = "Bonjour, je suis Alexandre Lin"; // Texte de l'introduction
let langIndex = 0;

// Fonction de typewriter fluide pour les langues
function typeWriter(elementId, text, callback) {
    const el = document.getElementById(elementId);
    let i = 0;
    el.innerHTML = ""; // Efface le texte précédent

    // Ajouter les lettres une par une
    const interval = setInterval(() => {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval); // Une fois terminé, on arrête l'animation
            if (callback) setTimeout(callback, 1500); // Appeler le callback après un délai
        }
    }, 100); // Vitesse de frappe (100 ms par lettre)
}

// Fonction pour gérer les cycles des langages
function cycleLanguages() {
    typeWriter("language", languages[langIndex], () => {
        langIndex = (langIndex + 1) % languages.length;
        cycleLanguages();
    });
}

// Démarrage des animations
window.onload = () => {
    typeWriter("introduction", introductionText, cycleLanguages);
};

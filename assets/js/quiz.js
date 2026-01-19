const optionsContainer = document.getElementById('options');
const feedback = document.getElementById('feedback');
const backBtn = document.getElementById('back-btn');

const quizData = {
    opzioni: [
        "Tutto è immobile e il cambiamento è un'illusione.",
        "Il mondo è fatto solo d'acqua e l'uomo ne è parte.",
        "Tutto scorre: l'acqua cambia e anche chi vi entra cambia.",
        "Il tempo non esiste e il passato ritorna sempre uguale."
    ],
    corretta: 2 // La terza opzione è quella giusta
};

function initQuiz() {
    quizData.opzioni.forEach((testo, index) => {
        const button = document.createElement('button');
        button.innerText = testo;
        button.classList.add('quiz-button'); // Applica lo stile del tuo CSS
        
        button.onclick = () => {
            if(index === quizData.corretta) {
                feedback.innerHTML = "<p style='color: #4CAF50; margin-top:20px;'>Corretto! Panta Rhei: tutto cambia costantemente.</p>";
                backBtn.style.display = "inline-block"; // Mostra il tasto per tornare indietro
            } else {
                feedback.innerHTML = "<p style='color: #ffafaf; margin-top:20px;'>Non è esatto. Rifletti sulla natura dell'acqua che scorre...</p>";
            }
        };
        
        optionsContainer.appendChild(button);
    });
}

initQuiz();

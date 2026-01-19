const optionsContainer = document.getElementById('options');
const feedback = document.getElementById('feedback');

// Funzione per caricare i dati dal file JSON
async function loadQuiz() {
    try {
        // Percorso relativo per uscire da /chapters/ e andare in /data/
        const response = await fetch('../data/questions.json');
        const data = await response.json();
        
        // Prendiamo la prima domanda (chapter 1)
        const currentQuiz = data[0]; 
        displayQuiz(currentQuiz);
    } catch (error) {
        console.error("Errore nel caricamento del quiz:", error);
        feedback.innerHTML = "Errore nel caricamento delle domande.";
    }
}

function displayQuiz(quiz) {
    quiz.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('quiz-button'); // Applica il tuo stile CSS
        
        button.onclick = () => {
            if (index === quiz.correct) {
                // Reindirizzamento alla pagina premio (da creare in /chapters/ o root)
                window.location.href = "premio.html"; 
            } else {
                feedback.innerHTML = "<p style='color: #ffafaf; margin-top:20px;'>Non è esatto. L'acqua scorre, prova a seguirne il flusso...</p>";
            }
        };
        
        optionsContainer.appendChild(button);
    });
}

// Avvia il caricamento
loadQuiz();

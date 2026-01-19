
fetch('/data/questions.json')
  .then(response => response.json())
  .then(data => {
    const quiz = data.chapter1;
    const container = document.getElementById('quiz-container');
    container.innerHTML = `<p>${quiz.question}</p>`;
    quiz.options.forEach((opt, index) => {
      const btn = document.createElement('button');
      btn.className = 'btn';
      btn.textContent = opt;
      btn.onclick = () => {
        if(index === quiz.correct){
          alert('Corretto! Hai sbloccato il tuo NFT.');
        } else {
          alert('Riprova!');
        }
      };
      container.appendChild(btn);
    });
  });
const optionsContainer = document.getElementById('options');
const feedbackContainer = document.getElementById('feedback');

const domande = {
    testo: "Cosa voleva comunicare Eraclito con questa metafora?",
    opzioni: [
        "Che la realtà è in continuo mutamento",
        "Che l'acqua dei fiumi scorre velocemente",
        "Che il tempo è un'illusione dei sensi",
        "Che l'uomo non deve mai bagnarsi due volte"
    ],
    corretta: 0
};

function caricaQuiz() {
    domande.opzioni.forEach((opzione, index) => {
        const btn = document.createElement('button');
        btn.innerHTML = opzione;
        btn.classList.add('quiz-button'); // Applica lo stile CSS creato sopra
        
        btn.onclick = () => controllaRisposta(index);
        optionsContainer.appendChild(btn);
    });
}

function controllaRisposta(index) {
    if (index === domande.corretta) {
        feedbackContainer.innerHTML = "Esatto. «Panta Rhei», tutto scorre.";
        feedbackContainer.style.color = "#afffaf"; // Colore tenue per il successo
    } else {
        feedbackContainer.innerHTML = "Non esattamente. Rifletti sul concetto di cambiamento.";
        feedbackContainer.style.color = "#ffafaf"; // Colore tenue per l'errore
    }
}

caricaQuiz();

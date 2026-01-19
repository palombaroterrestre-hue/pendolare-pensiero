
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

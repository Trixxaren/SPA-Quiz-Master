let questions = {}; 
let timerInterval; 

const loadQuestions = async () => { 
  try {
    const response = await fetch('questions.json');
    questions = await response.json();
    createCategoryDivs(); 
  } catch (error) {
    console.error('Fel vid laddning av frågor:', error);
  }
};

const categories = [
    { name: "Historia", description: "Frågor om viktiga historiska händelser, personer och perioder." },
    { name: "Geografi", description: "Frågor om länder, städer, floder, berg och andra geografiska kännetecken." },
    { name: "Sport", description: "Frågor om olika sporter, sportevenemang och kända atleter." },
    { name: "Film och TV", description: "Frågor om populära filmer, TV-serier, skådespelare och regissörer." },
    { name: "Vetenskap och Teknik", description: "Frågor om fysik, kemi, biologi, uppfinningar och tekniska genombrott." },
    { name: "Musik", description: "Frågor om artister, band, album, låtar och musikgenrer." },
    { name: "Kultur och litteratur", description: "Frågor om böcker, författare, konst, litterära verk och kulturella fenomen." },
    { name: "Mat och Dryck", description: "Frågor om internationell matkultur, maträtter, ingredienser och drycker." },
    { name: "Djur och Natur", description: "Frågor om djurarter, ekosystem, miljöfrågor och naturfenomen." }
];

let currentQuestions = []; 
let currentQuestionIndex = 0; 
let score = 0;
let timeLeft = 10;

const createCategoryDivs = () => {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Rensar tidigare innehåll
  
    categories.forEach((category, index) => {
      const div = document.createElement('div');
      div.classList.add('box');
      div.id = `box-${index + 1}`;
      div.innerHTML = `<strong>${category.name}</strong><br>${category.description}`;
  
      div.addEventListener('click', () => {
        startQuiz(category.name);
      });
  
      container.appendChild(div);
    });
};

loadQuestions();

// Startar quizet för en vald kategori
const startQuiz = (category) => {
    currentQuestions = questions[category]; // Hämtar frågor för vald kategori
    score = 0; 
    currentQuestionIndex = 0;

    const container = document.getElementById('container');
    container.innerHTML = ''; // Rensa tidigare innehåll

    const quizTitle = document.createElement('h2');
    quizTitle.textContent = `Quiz: ${category}`;
    container.appendChild(quizTitle);

    const quizContainer = document.createElement('div');
    quizContainer.id = 'quiz-container';
    container.appendChild(quizContainer);

    showQuestion();
};

// Visa en fråga
const showQuestion = () => {
    if (currentQuestionIndex >= currentQuestions.length) {
        finishQuiz();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<h2>Fråga ${currentQuestionIndex + 1}: ${question.question}</h2>`;

    question.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`;
        quizContainer.appendChild(label);
        quizContainer.appendChild(document.createElement('br'));
    });


    const timerDisplay = document.createElement('div');
    timerDisplay.id = 'timer';
    timerDisplay.textContent = `Tid kvar: ${timeLeft} sek`;
    quizContainer.appendChild(timerDisplay);
    startTimer(timerDisplay);

    const submitButton = document.createElement('button');
    submitButton.textContent = "Svara";
    submitButton.onclick = checkAnswer;
    quizContainer.appendChild(submitButton);
};


const startTimer = (timerDisplay) => {
    timeLeft = 10; 
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Tid kvar: ${timeLeft} sek`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval); 
            showNextQuestion(); 
        }
    }, 1000);
};


const showNextQuestion = () => { // Visa nästa fråga när tiden är slut eller användaren svarar
    const quizContainer = document.getElementById('quiz-container');
    
    const options = document.querySelectorAll('input[name="answer"]');
    options.forEach(option => option.disabled = true);

    const submitButton = document.querySelector('button');
    submitButton.remove();

    const feedback = document.createElement('div');
    feedback.id = 'feedback';

    if (timeLeft <= 0) {
        feedback.innerHTML = `<hr>Tiden är slut!<hr>`;
        feedback.style.color = 'orange';
    }

    quizContainer.appendChild(feedback);

    
    setTimeout(() => {
        currentQuestionIndex++;
        showQuestion(); 
        feedback.remove(); 
    }, 2000); // 2sek innan nästa fråga
};

const checkAnswer = () => {
    clearInterval(timerInterval); // Stoppa timern när användaren svarar

    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) return alert('Välj ett svar'); // Om inget svar är valt

    const answer = selectedOption.value;
    const correctAnswer = currentQuestions[currentQuestionIndex].answer;

    const feedback = document.createElement('div');
    feedback.id = 'feedback';

    if (answer === correctAnswer) {
        score++;
        feedback.innerHTML = '<hr>Rätt svar!<hr>';
        feedback.style.color = 'green';
    } else {
        feedback.innerHTML = `<hr>Fel svar! <br> Rätt svar: ${correctAnswer}<hr>`;
        feedback.style.color = 'red';
    }

    const quizContainer = document.getElementById('quiz-container');
    quizContainer.appendChild(feedback);

    const options = document.querySelectorAll('input[name="answer"]');
    options.forEach(option => option.disabled = true);

    const submitButton = document.querySelector('button');
    submitButton.remove();

    const nextButton = document.createElement('button');
    nextButton.textContent = "Nästa fråga";
    nextButton.onclick = () => {
        currentQuestionIndex++;
        showQuestion();
        feedback.remove();
        nextButton.remove();
    };
    
    quizContainer.appendChild(nextButton);
};

const finishQuiz = () => {
    const container = document.getElementById('container');
    let resultMessage = '';

    if (score === 5) {
        resultMessage = `Du fick ${score} rätt! <br> Du måste vara en såndära GENI!`;
    } else if (score >= 1 && score <= 4) {
        resultMessage = `<h2>Quiz Avslutat!</h2><p>Du fick ${score} av ${currentQuestions.length} rätt!</p>`;
    } else if (score === 0) {
        resultMessage = `<h2>Quiz Avslutat!</h2><p>Du fick ${score} av ${currentQuestions.length} rätt! <br> Inget geni du inte, back to school!</p>`;
    }

    container.innerHTML = resultMessage;
    const restartButton = document.createElement('button');
    restartButton.innerHTML = "<strong>Till kategorier</strong>";
    restartButton.onclick = createCategoryDivs;
    container.appendChild(restartButton);
};

createCategoryDivs();








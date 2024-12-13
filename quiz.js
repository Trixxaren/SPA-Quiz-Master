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

const questions = {
    "Historia": [
        {
            question: "Vem var Sveriges kung under andra världskriget?",
            options: ["Gustav V", "Carl XVI Gustaf", "Oscar II", "Carl XII"],
            answer: "Gustav V"
        },
        {
            question: "När började andra världskriget?",
            options: ["1939", "1941", "1914", "1945"],
            answer: "1939"
        },
        {
            question: "Vem var den första kejsaren av det romerska imperiet?",
            options: ["Julius Caesar", "Augustus", "Nero", "Titus"],
            answer: "Augustus"
        },
        {
            question: "När började första världskriget?",
            options: ["1914", "1939", "1800", "1920"],
            answer: "1914"
        },
        {
            question: "Vem var USA:s första president?",
            options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "Donald Trump"],
            answer: "George Washington"
        }
    ],
    "Geografi": [
    {
        question: "Vilket land är världens största efter yta?",
        options: ["Ryssland", "Kanada", "USA", "Kina"],
        answer: "Ryssland"
    },
    {
        question: "Vilken flod är den längsta i världen?",
        options: ["Amazonfloden", "Nilen", "Yangtze", "Mississippi"],
        answer: "Nilen"
    },
    {
        question: "Vad heter huvudstaden i Japan?",
        options: ["Seoul", "Peking", "Tokyo", "Hanoi"],
        answer: "Tokyo"
    },
    {
        question: "Vilken är världens högsta berg?",
        options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
        answer: "Mount Everest"
    },
    {
        question: "Vilket hav ligger mellan Afrika och Arabiska halvön?",
        options: ["Medelhavet", "Röda havet", "Karibiska havet", "Indiska oceanen"],
        answer: "Röda havet"
    }
    ], "Sport": [
    {
        question: "Vilken sport är Tiger Woods känd för?",
        options: ["Tennis", "Golf", "Fotboll", "Basket"],
        answer: "Golf"
    },
    {
        question: "Vilket lag vann SM guld i Allsvenskan 2018?",
        options: ["Djurgården", "Malmö", "Hammarby", "AIK"],
        answer: "AIK"
    },
    {
        question: "Vilket land har vunnit flest världscupsegrar i fotboll?",
        options: ["Brasilien", "Tyskland", "Argentina", "Italien"],
        answer: "Brasilien"
    },
    {
        question: "I vilken sport tävlar man om Stanley Cup?",
        options: ["Hockey", "Basket", "Baseboll", "Fotboll"],
        answer: "Hockey"
    },
    {
        question: "Vilket år hölls de första moderna olympiska spelen?",
        options: ["1884", "1900", "1896", "1924"],
        answer: "1896"
    }
    ], "Film och TV": [
    {
        question: "Vilken film regisserades av Steven Spielberg och handlar om en gigantisk haj?",
        options: ["Jurassic Park", "Jaws", "E.T.", "Schindler's List"],
        answer: "Jaws"
    },
    {
        question: "Vad heter karaktären som spelas av Leonardo DiCaprio i filmen 'Titanic'?",
        options: ["Jack Dawson", "Richard Parker", "Frank Abagnale", "Billy Costigan"],
        answer: "Jack Dawson"
    },
    {
        question: "Vilken TV-serie handlar om en grupp personer som överlever en zombieapokalyps?",
        options: ["The Walking Dead", "Stranger Things", "Game of Thrones", "Lost"],
        answer: "The Walking Dead"
    },
    {
        question: "Vem regisserade filmen 'Inception'?",
        options: ["Christopher Nolan", "Martin Scorsese", "Quentin Tarantino", "Ridley Scott"],
        answer: "Christopher Nolan"
    },
    {
        question: "Vilken film vann Oscar för bästa film 1994?",
        options: ["The Shawshank Redemption", "Forrest Gump", "Pulp Fiction", "Titanic"],
        answer: "Forrest Gump"
    }
], "Vetenskap och Teknik": [
    {
        question: "Vilken grundämne har kemisk beteckning H?",
        options: ["Helium", "Hidrogen", "Hafnium", "Holmium"],
        answer: "Hidrogen"
    },
    {
        question: "Vem är känd för att ha utvecklat teorin om relativitet?",
        options: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Marie Curie"],
        answer: "Albert Einstein"
    },
    {
        question: "Vad är den största planeten i vårt solsystem?",
        options: ["Mars", "Jupiter", "Saturnus", "Neptunus"],
        answer: "Jupiter"
    },
    {
        question: "Vad heter det första människoskapade föremålet som skickades till rymden?",
        options: ["Apollo 11", "Sputnik 1", "Hubble-teleskopet", "Voyager 1"],
        answer: "Sputnik 1"
    },
    {
        question: "Vem uppfann telefonen?",
        options: ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "Benjamin Franklin"],
        answer: "Alexander Graham Bell"
    }
], "Musik": [
    {
        question: "Vilken artist sjöng låten 'Thriller'?",
        options: ["Michael Jackson", "Prince", "Elvis Presley", "Madonna"],
        answer: "Michael Jackson"
    },
    {
        question: "Vilken brittisk band släppte albumet 'Abbey Road'?",
        options: ["The Rolling Stones", "The Beatles", "Queen", "Pink Floyd"],
        answer: "The Beatles"
    },
    {
        question: "Vad heter den svenska artisten som sjöng 'Dancing Queen'?",
        options: ["Ace of Base", "Roxette", "ABBA", "Zara Larsson"],
        answer: "ABBA"
    },
    {
        question: "Vilken genre är artisten Billie Eilish mest känd för?",
        options: ["Pop", "Rock", "Jazz", "Elektronisk musik"],
        answer: "Pop"
    },
    {
        question: "Vad heter den legendariska gitarristen som spelade i bandet 'The Jimi Hendrix Experience'?",
        options: ["Eric Clapton", "Jimmy Page", "Jimi Hendrix", "Mick Jagger"],
        answer: "Jimi Hendrix"
    }
], "Kultur och litteratur": [
    {
        question: "Vem skrev boken '1984'?",
        options: ["George Orwell", "J.K. Rowling", "Mark Twain", "Ernest Hemingway"],
        answer: "George Orwell"
    },
    {
        question: "Vilken bokserie handlar om en pojke som går till en magisk skola?",
        options: ["Harry Potter", "The Hunger Games", "The Lord of the Rings", "Percy Jackson"],
        answer: "Harry Potter"
    },
    {
        question: "Vilken författare skapade Sherlock Holmes-karaktären?",
        options: ["Arthur Conan Doyle", "Agatha Christie", "John Grisham", "Stephen King"],
        answer: "Arthur Conan Doyle"
    },
    {
        question: "Vem skrev romanen 'Stolthet och fördom'?",
        options: ["Jane Austen", "Charlotte Brontë", "Emily Brontë", "Charles Dickens"],
        answer: "Jane Austen"
    },
    {
        question: "Vilken konstnär är känd för att ha skapat målningen 'Mona Lisa'?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        answer: "Leonardo da Vinci"
    }
], "Mat och Dryck": [
    {
        question: "Vilken typ av ost används traditionellt för att göra pizza?",
        options: ["Cheddar", "Mozzarella", "Parmesan", "Gorgonzola"],
        answer: "Mozzarella"
    },
    {
        question: "Vad heter den italienska maträtten som består av pasta, köttfärs och tomatsås?",
        options: ["Lasagne", "Spaghetti Bolognese", "Fettuccine Alfredo", "Ravioli"],
        answer: "Spaghetti Bolognese"
    },
    {
        question: "Vilken frukt är känd för att vara den huvudsakliga ingrediensen i guacamole?",
        options: ["Tomat", "Avokado", "Citrus", "Paprika"],
        answer: "Avokado"
    },
    {
        question: "Vad är huvudingredienserna i en klassisk margarita cocktail?",
        options: ["Rom och cola", "Tequila och lime", "Vodka och apelsinlikör", "Gin och tonic"],
        answer: "Tequila och lime"
    },
    {
        question: "Vilken maträtt associeras ofta med Japan?",
        options: ["Sushi", "Tacos", "Paella", "Pasta"],
        answer: "Sushi"
    }
], "Djur och Natur": [
    {
        question: "Vilket djur är världens största däggdjur?",
        options: ["Elefant", "Blåval", "Noshörning", "Giraff"],
        answer: "Blåval"
    },
    {
        question: "Vilken fågel är känd för att kunna efterlikna ljud och röster?",
        options: ["Papegoja", "Örn", "Uggla", "Falk"],
        answer: "Papegoja"
    },
    {
        question: "Vilken är den största regnskogen på jorden?",
        options: ["Den afrikanska regnskogen", "Amazonregnskogen", "Den asiatiska regnskogen", "Boreala skogen"],
        answer: "Amazonregnskogen"
    },
    {
        question: "Vad heter världens största korallrev?",
        options: ["Great Barrier Reef", "Red Sea Coral Reef", "Kiritimati Atoll", "Aldabra Atoll"],
        answer: "Great Barrier Reef"
    },
    {
        question: "Vilken art är känd för att vara den snabbaste landdjuret?",
        options: ["Gepard", "Lejon", "Antilop", "Känguru"],
        answer: "Gepard"
    }
]

};


let currentCategory = ''; 
let currentQuestions = []; 
let currentQuestionIndex = 0; 
let score = 0;


const createCategoryDivs = () => {
    const container = document.getElementById('container'); // hittar grund id för att bygga SPA
    container.innerHTML = ''; // nollar/rensar
    

    // skapar olika div för alla olika kategorier
    categories.forEach((category, index) => {
        const div = document.createElement('div'); // skapar fler divar per kategorier som tillkommer
        div.classList.add('box'); 
        div.id = `box-${index + 1}`; // Ge divarna olika id:n
        div.innerHTML = `<strong>${category.name}</strong><br>${category.description}`; //Frontens kategori & text


        // event för att clicka sig vidare till kategori quizet
        div.addEventListener('click', () => {
            startQuiz(category.name);
        });
        
        container.appendChild(div);
    });
};

//Själva funktionen för att skapa quizet för vald kategori
const startQuiz = (category) => {
    currentCategory = category;
    currentQuestions = questions[category];  // hämtar frågor för vald kategori
    score = 0; 
    currentQuestionIndex = 0;

    const container = document.getElementById('container');
    container.innerHTML = ''; 

    // title för att kategorin ska synas när man gör quizet, ev lösa buggar med grid-boxen
    const quizTitle = document.createElement('h2');
    quizTitle.textContent = `Quiz: ${category}`;
    container.appendChild(quizTitle);

    // Div för frågorna & svaren
    const quizContainer = document.createElement('div');
    quizContainer.id = 'quiz-container';  // id:t för att kunna stylea quiz boxen
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
    quizContainer.innerHTML = `<h2>Fråga ${currentQuestionIndex + 1}: ${question.question}</h2>`; // Rensar och skapa ny fråga

    question.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="answer" value="${option}"> ${option}`; // värdet från alternativen på frågorna
        quizContainer.appendChild(label);
        quizContainer.appendChild(document.createElement('br')); //för att få lite utrymme mellan alternativen
    });

    const submitButton = document.createElement('button'); //svars knappen för frågan
    submitButton.textContent = "Svara";
    submitButton.onclick = checkAnswer;
    quizContainer.appendChild(submitButton);
};

const checkAnswer = () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked'); // letar rätt på radio buttons
    if (!selectedOption) return alert('Välj ett svar'); 

    const answer = selectedOption.value;
    const correctAnswer = currentQuestions[currentQuestionIndex].answer;

    const feedback = document.createElement('div'); // Skapar feedbacken om det är rätt/fel
    feedback.id = 'feedback'; 
    
    if (answer === correctAnswer) { //om rätt eller fel
        score++;
        feedback.innerHTML = '<hr>Rätt svar!<hr>';
        feedback.style.color = 'green';
    } else {
        feedback.innerHTML = `<hr>Fel svar! <br> Rätt svar: ${correctAnswer}<hr>`;
        feedback.style.color = 'red';
    }

    const quizContainer = document.getElementById('quiz-container');
    quizContainer.appendChild(feedback); //appendera feedbacken

    const options = document.querySelectorAll('input[name="answer"]'); // disablar knappen för att man ej ska kunna välja igen
    options.forEach(option => option.disabled = true);

    const submitButton = document.querySelector('button'); 
    submitButton.remove(); // Ta bort submitknappen

    const nextButton = document.createElement('button'); //knapp för nästa fråga
    nextButton.textContent = "Nästa fråga";
    nextButton.onclick = () => {
        currentQuestionIndex++;
        showQuestion(); // nästa fråga
        feedback.remove(); 
        nextButton.remove(); // Tar bort feedback och nästa fråga knappen
    };
    
    quizContainer.appendChild(nextButton); // Lägg till nästa fråga knappen efter feedbacken
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

    container.innerHTML = resultMessage; // slutresultatet för "spelaren"
    // container.classList.add('quiz-result-container'); buggar upp för mycket just nu då det är en grid-box från starten. återanvänd vid tillfälle
    const restartButton = document.createElement('button');
    restartButton.innerHTML = "<strong>Till kategorier</strong>";
    restartButton.onclick = createCategoryDivs;
    container.appendChild(restartButton);
};


createCategoryDivs();







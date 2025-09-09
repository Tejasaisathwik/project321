// Quiz Application JavaScript

class QuizApp {
    constructor() {
        this.currentCategory = '';
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.questions = [];
        this.selectedAnswer = null;
        this.startTime = null;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        
        this.initializeApp();
        this.loadStats();
    }

    // Quiz data for different categories
    quizData = {
        general: [
            {
                question: "What is the capital of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Perth"],
                correct: 2
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correct: 1
            },
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                correct: 3
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
                correct: 1
            },
            {
                question: "What is the smallest country in the world?",
                options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                correct: 1
            },
            {
                question: "Which element has the chemical symbol 'O'?",
                options: ["Gold", "Silver", "Oxygen", "Iron"],
                correct: 2
            },
            {
                question: "What is the longest river in the world?",
                options: ["Amazon River", "Nile River", "Mississippi River", "Yangtze River"],
                correct: 0
            },
            {
                question: "In which year did World War II end?",
                options: ["1944", "1945", "1946", "1947"],
                correct: 1
            },
            {
                question: "What is the hardest natural substance on Earth?",
                options: ["Gold", "Iron", "Diamond", "Platinum"],
                correct: 2
            },
            {
                question: "Which country has the most natural lakes?",
                options: ["Russia", "Canada", "USA", "Finland"],
                correct: 1
            }
        ],
        science: [
            {
                question: "What is the speed of light in vacuum?",
                options: ["299,792,458 m/s", "300,000,000 m/s", "299,000,000 m/s", "298,792,458 m/s"],
                correct: 0
            },
            {
                question: "What is the chemical formula for water?",
                options: ["H2O", "CO2", "NaCl", "CH4"],
                correct: 0
            },
            {
                question: "Which gas makes up about 78% of Earth's atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                correct: 2
            },
            {
                question: "What is the smallest unit of matter?",
                options: ["Molecule", "Atom", "Electron", "Proton"],
                correct: 1
            },
            {
                question: "What force keeps planets in orbit around the sun?",
                options: ["Magnetic force", "Electric force", "Gravitational force", "Nuclear force"],
                correct: 2
            },
            {
                question: "What is the pH of pure water?",
                options: ["6", "7", "8", "9"],
                correct: 1
            },
            {
                question: "Which organ in the human body produces insulin?",
                options: ["Liver", "Kidney", "Pancreas", "Heart"],
                correct: 2
            },
            {
                question: "What is the most abundant element in the universe?",
                options: ["Oxygen", "Carbon", "Helium", "Hydrogen"],
                correct: 3
            },
            {
                question: "How many bones are in an adult human body?",
                options: ["196", "206", "216", "226"],
                correct: 1
            },
            {
                question: "What is the study of earthquakes called?",
                options: ["Geology", "Seismology", "Meteorology", "Oceanography"],
                correct: 1
            }
        ],
        history: [
            {
                question: "Who was the first person to walk on the moon?",
                options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
                correct: 1
            },
            {
                question: "In which year did the Berlin Wall fall?",
                options: ["1987", "1988", "1989", "1990"],
                correct: 2
            },
            {
                question: "Who was the first President of the United States?",
                options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
                correct: 2
            },
            {
                question: "Which ancient wonder of the world was located in Alexandria?",
                options: ["Hanging Gardens", "Lighthouse of Alexandria", "Colossus of Rhodes", "Statue of Zeus"],
                correct: 1
            },
            {
                question: "The French Revolution began in which year?",
                options: ["1789", "1790", "1791", "1792"],
                correct: 0
            },
            {
                question: "Who was known as the 'Iron Lady'?",
                options: ["Queen Elizabeth II", "Margaret Thatcher", "Indira Gandhi", "Golda Meir"],
                correct: 1
            },
            {
                question: "Which empire was ruled by Julius Caesar?",
                options: ["Greek Empire", "Roman Empire", "Persian Empire", "Byzantine Empire"],
                correct: 1
            },
            {
                question: "The Great Wall of China was built to defend against which people?",
                options: ["Mongols", "Japanese", "Koreans", "Russians"],
                correct: 0
            },
            {
                question: "Who wrote the Communist Manifesto?",
                options: ["Vladimir Lenin", "Karl Marx", "Friedrich Engels", "Both Karl Marx and Friedrich Engels"],
                correct: 3
            },
            {
                question: "Which war was fought between 1914-1918?",
                options: ["World War II", "World War I", "Korean War", "Vietnam War"],
                correct: 1
            }
        ],
        sports: [
            {
                question: "How many players are on a basketball team on the court at one time?",
                options: ["4", "5", "6", "7"],
                correct: 1
            },
            {
                question: "In which sport would you perform a slam dunk?",
                options: ["Volleyball", "Tennis", "Basketball", "Baseball"],
                correct: 2
            },
            {
                question: "How often are the Summer Olympic Games held?",
                options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
                correct: 2
            },
            {
                question: "What is the maximum score possible in ten-pin bowling?",
                options: ["250", "280", "300", "350"],
                correct: 2
            },
            {
                question: "Which country has won the most FIFA World Cups?",
                options: ["Germany", "Argentina", "Brazil", "Italy"],
                correct: 2
            },
            {
                question: "In golf, what is one stroke under par called?",
                options: ["Eagle", "Birdie", "Albatross", "Bogey"],
                correct: 1
            },
            {
                question: "How many Grand Slam tournaments are there in tennis?",
                options: ["3", "4", "5", "6"],
                correct: 1
            },
            {
                question: "Which sport is played at Wimbledon?",
                options: ["Cricket", "Tennis", "Golf", "Rugby"],
                correct: 1
            },
            {
                question: "How many points is a touchdown worth in American football?",
                options: ["5", "6", "7", "8"],
                correct: 1
            },
            {
                question: "In which sport would you find a pommel horse?",
                options: ["Athletics", "Swimming", "Gymnastics", "Wrestling"],
                correct: 2
            }
        ],
        technology: [
            {
                question: "What does 'HTML' stand for?",
                options: ["Hypertext Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"],
                correct: 0
            },
            {
                question: "Who founded Microsoft?",
                options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Larry Page"],
                correct: 1
            },
            {
                question: "What does 'CPU' stand for?",
                options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Computer Processing Unit"],
                correct: 0
            },
            {
                question: "Which company developed the iPhone?",
                options: ["Samsung", "Google", "Apple", "Microsoft"],
                correct: 2
            },
            {
                question: "What does 'WWW' stand for?",
                options: ["World Wide Web", "World Wide Website", "World Web Wide", "Wide World Web"],
                correct: 0
            },
            {
                question: "In what year was Google founded?",
                options: ["1996", "1998", "2000", "2002"],
                correct: 1
            },
            {
                question: "What is the most popular programming language in 2023?",
                options: ["Java", "Python", "JavaScript", "C++"],
                correct: 2
            },
            {
                question: "What does 'AI' stand for?",
                options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Intelligence", "Algorithmic Intelligence"],
                correct: 1
            },
            {
                question: "Which social media platform is known for 280-character limit posts?",
                options: ["Facebook", "Instagram", "Twitter", "LinkedIn"],
                correct: 2
            },
            {
                question: "What is the main function of RAM in a computer?",
                options: ["Permanent storage", "Temporary storage", "Processing data", "Displaying graphics"],
                correct: 1
            }
        ],
        entertainment: [
            {
                question: "Which movie won the Academy Award for Best Picture in 2020?",
                options: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
                correct: 2
            },
            {
                question: "Who directed the movie 'Inception'?",
                options: ["Steven Spielberg", "Christopher Nolan", "Martin Scorsese", "Quentin Tarantino"],
                correct: 1
            },
            {
                question: "Which TV series features the character Walter White?",
                options: ["The Sopranos", "Breaking Bad", "Better Call Saul", "Ozark"],
                correct: 1
            },
            {
                question: "Who composed the music for 'The Lion King'?",
                options: ["Hans Zimmer", "John Williams", "Danny Elfman", "Alan Menken"],
                correct: 0
            },
            {
                question: "Which streaming service produced 'Stranger Things'?",
                options: ["Amazon Prime", "Hulu", "Netflix", "Disney+"],
                correct: 2
            },
            {
                question: "Who played Jack in the movie 'Titanic'?",
                options: ["Brad Pitt", "Leonardo DiCaprio", "Tom Cruise", "Johnny Depp"],
                correct: 1
            },
            {
                question: "Which band released the album 'Abbey Road'?",
                options: ["The Rolling Stones", "Led Zeppelin", "The Beatles", "Pink Floyd"],
                correct: 2
            },
            {
                question: "What is the highest-grossing film of all time?",
                options: ["Titanic", "Avatar", "Avengers: Endgame", "Star Wars: The Force Awakens"],
                correct: 2
            },
            {
                question: "Who created the TV series 'Game of Thrones'?",
                options: ["George R.R. Martin", "David Benioff and D.B. Weiss", "Vince Gilligan", "Ryan Murphy"],
                correct: 1
            },
            {
                question: "Which Disney movie features the song 'Let It Go'?",
                options: ["Moana", "Frozen", "Tangled", "The Little Mermaid"],
                correct: 1
            }
        ]
    };

    initializeApp() {
        this.bindEvents();
        this.showScreen('home-screen');
    }

    bindEvents() {
        // Category selection
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.startQuiz(category);
            });
        });

        // Navigation buttons
        document.getElementById('back-btn').addEventListener('click', () => {
            this.showScreen('home-screen');
            this.resetQuiz();
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        // Option buttons
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectAnswer(parseInt(e.target.dataset.optionIndex));
            });
        });

        // Results screen buttons
        document.getElementById('play-again-btn').addEventListener('click', () => {
            this.startQuiz(this.currentCategory);
        });

        document.getElementById('home-btn').addEventListener('click', () => {
            this.showScreen('home-screen');
            this.resetQuiz();
        });
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    showLoading() {
        document.getElementById('loading-overlay').classList.add('active');
    }

    hideLoading() {
        document.getElementById('loading-overlay').classList.remove('active');
    }

    startQuiz(category) {
        this.showLoading();
        
        setTimeout(() => {
            this.currentCategory = category;
            this.questions = [...this.quizData[category]];
            this.shuffleArray(this.questions);
            this.currentQuestionIndex = 0;
            this.score = 0;
            this.correctAnswers = 0;
            this.wrongAnswers = 0;
            this.startTime = Date.now();
            
            this.updateCategoryTitle(category);
            this.showScreen('quiz-screen');
            this.displayQuestion();
            this.hideLoading();
        }, 1000);
    }

    updateCategoryTitle(category) {
        const titles = {
            general: 'General Knowledge',
            science: 'Science',
            history: 'History',
            sports: 'Sports',
            technology: 'Technology',
            entertainment: 'Entertainment'
        };
        document.getElementById('category-title').textContent = titles[category];
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];

        // Shuffle options for each display
        const optionsShuffled = [...question.options];
        this.shuffleArray(optionsShuffled);

        // Store the correct answer index after shuffling
        const correctOptionText = question.options[question.correct];
        const shuffledCorrectIndex = optionsShuffled.indexOf(correctOptionText);
        question.shuffledOptions = optionsShuffled; // Save for answer verification
        question.shuffledCorrectIndex = shuffledCorrectIndex;

        // Update question text
        document.getElementById('question-text').textContent = question.question;

        // Update options buttons with shuffled options
        const optionBtns = document.querySelectorAll('.option-btn');
        optionBtns.forEach((btn, index) => {
            btn.textContent = optionsShuffled[index];
            btn.className = 'option-btn'; // Reset classes
            btn.disabled = false;
            btn.dataset.optionIndex = index; // Store index for answer selection
        });

        // Update progress
        this.updateProgress();

        // Reset selected answer
        this.selectedAnswer = null;
        document.getElementById('next-btn').disabled = true;
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        document.getElementById('progress-fill').style.width = `${progress}%`;
        document.getElementById('question-counter').textContent = `${this.currentQuestionIndex + 1}/${this.questions.length}`;
        document.getElementById('current-score').textContent = this.score;
    }

    selectAnswer(optionIndex) {
        if (this.selectedAnswer !== null) return;

        this.selectedAnswer = optionIndex;
        const question = this.questions[this.currentQuestionIndex];
        const optionBtns = document.querySelectorAll('.option-btn');

        // Disable all buttons
        optionBtns.forEach(btn => btn.disabled = true);

        // Check if answer is correct
        const isCorrect = optionIndex === question.shuffledCorrectIndex;

        // Show selected answer
        optionBtns[optionIndex].classList.add('selected');

        setTimeout(() => {
            // Highlight correct answer
            optionBtns[question.shuffledCorrectIndex].classList.add('correct');

            if (isCorrect) {
                this.score += 10;
                this.correctAnswers++;
            } else {
                optionBtns[optionIndex].classList.add('wrong');
                this.wrongAnswers++;
            }

            this.updateProgress();
            document.getElementById('next-btn').disabled = false;
        }, 500);
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex < this.questions.length) {
            this.displayQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        const endTime = Date.now();
        const timeTaken = Math.round((endTime - this.startTime) / 1000);
        const percentage = Math.round((this.correctAnswers / this.questions.length) * 100);

        // Update results display
        document.getElementById('final-score').textContent = this.score;
        document.getElementById('total-questions').textContent = this.questions.length;
        document.getElementById('percentage').textContent = `${percentage}%`;
        document.getElementById('correct-answers').textContent = this.correctAnswers;
        document.getElementById('wrong-answers').textContent = this.wrongAnswers;
        document.getElementById('time-taken').textContent = `${timeTaken}s`;

        // Performance message
        let message = '';
        if (percentage >= 90) {
            message = 'Outstanding! You\'re a quiz master!';
        } else if (percentage >= 80) {
            message = 'Excellent work! Very impressive!';
        } else if (percentage >= 70) {
            message = 'Great job! You know your stuff!';
        } else if (percentage >= 60) {
            message = 'Good effort! Keep learning!';
        } else {
            message = 'Don\'t give up! Practice makes perfect!';
        }
        document.getElementById('performance-text').textContent = message;

        // Update stats
        this.updateStats();

        this.showScreen('results-screen');
    }

    updateStats() {
        let highScore = localStorage.getItem('quizHighScore') || 0;
        let gamesPlayed = localStorage.getItem('quizGamesPlayed') || 0;

        if (this.score > highScore) {
            highScore = this.score;
            localStorage.setItem('quizHighScore', highScore);
        }

        gamesPlayed++;
        localStorage.setItem('quizGamesPlayed', gamesPlayed);

        this.loadStats();
    }

    loadStats() {
        const highScore = localStorage.getItem('quizHighScore') || 0;
        const gamesPlayed = localStorage.getItem('quizGamesPlayed') || 0;

        document.getElementById('high-score').textContent = highScore;
        document.getElementById('games-played').textContent = gamesPlayed;
    }

    resetQuiz() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.selectedAnswer = null;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
    }
}

// Initialize the quiz app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});

// Add some fun animations and effects
document.addEventListener('DOMContentLoaded', () => {
    // Add floating animation to category cards
    const cards = document.querySelectorAll('.category-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('float-in');
    });
});

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    .float-in {
        animation: floatIn 0.6s ease-out forwards;
        opacity: 0;
        transform: translateY(30px);
    }
    
    @keyframes floatIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
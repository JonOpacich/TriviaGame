$(document).ready(function () {



    let decrement = () => {
        timeRemaining--;
        $("#time").text(`Time Remaining: ${timeRemaining}`)
        if (timeRemaining === 0) {
            clearInterval(intervalId);
            qNumber++;
            addLoss();
            newQuestion(qNumber);
            timeReset();
        }

    };

    let timeReset = () => {
        timeRemaining = 31;
        intervalId = setInterval(decrement, 1000);
    };

    let newQuestion = (i) => {
        if (qNumber === 5) {
            alert(`Final Score: ${wins}/${qNumber} 
        Thanks for playing!!`)
        }
        else {
            $('#question').text(questionArray[i].question);
            $('#btn-1').text(questionArray[i].answer[0]);
            $('#btn-2').text(questionArray[i].answer[1]);
            $('#btn-3').text(questionArray[i].answer[2]);
            $('#btn-4').text(questionArray[i].answer[3]);
            $('#questionImage').attr("src", questionArray[i].image);
        }
    }

    let addWin = () => {
        wins++
        $("#score").html(`current <br> Score:<br><span class="normal">${wins}/${qNumber}</span>`);
    }
    let addLoss = () => {
        $("#score").html(`current <br> Score:<br><span class="normal">${wins}/${qNumber}</span>`);
    }
    //first question set-up
    newQuestion(qNumber);
    timeReset();


    $('body').on("click", '.answr-btn', function () {
        clearInterval(intervalId);
        if ($(this).text() === questionArray[qNumber].correct) {
            alert("correct!");
            qNumber++;
            addWin();
            newQuestion(qNumber);
            timeReset();
        }
        else {
            alert("incorrect!");
            qNumber++;
            addLoss();
            newQuestion(qNumber);
            timeReset();
        }
    });
});

let ques1 = {
    question: 'Which class received a hero card in the witchwood expansion?',
    answer: ['Shaman', 'Paladin', 'Warlock', 'Mage'],
    correct: 'Shaman',
    image: 'assets/images/hagatha.jpg'
};
let ques2 = {
    question: "What's the name of this card?",
    answer: ['Archmage Arugal', 'Tanglefur Mystic', 'Curio Collector', 'Genn Greymane'],
    correct: 'Tanglefur Mystic',
    image: 'assets/images/mystic.jpg'
};
let ques3 = {
    question: 'What is this minions card text?',
    answer: ['The first minion you play each turn costs (1)', 'Battlecry:deal 3 damage to enemy minions', 'Adjacent minions cannot be targeted by spells or hero powers ', "On each player's turn, the first card played costs (0)"],
    correct: "On each player's turn, the first card played costs (0)",
    image: 'assets/images/aviana.png'
};
let ques4 = {
    question: 'How much does this card actually cost?',
    answer: ['3', '4', '5', '6'],
    correct: '5',
    image: 'assets/images/guardian.png'
};
let ques5 = {
    question: 'What class is this card from?',
    answer: ['Paladin', 'Warrior', 'Hunter', 'Priest'],
    correct: 'Hunter',
    image: 'assets/images/drake.png'
};
let questionArray = [ques1, ques2, ques3, ques4, ques5];

let qNumber = 0;
let currentScore = "";
let timeRemaining = 30;
let timerRunning = false;
let intervalId;
let timeOutId;
let selectedAnswer;
let wins = 0;
const RandomNumber = () => {
    return Math.floor(Math.random() * 10000) + 59;
}

const QuestionsArr = 
    [
        "What is 152 + 2345?",
        "What is 2352 + 2345?",
        "What is 1124 + 666354?",
        "What is 65432 + 29345?",
        "What is 152235 + 22345?",
        "What is 2452 - 1352?",
        "What is 42541 - 35231?",
        "What is 11241 - 66764?",
        "What is 141241 - 2?",
        "What is 13523 - 13623?",   
        "What is the value of x if x² + 2x + 1 = 0?",
        "What is the value of x if x² - 4x + 4 = 0?",
        "What is the value of x if x² - 3x - 4 = 0?",
        "What is the value of x if 2x² - 7x + 3 = 0?",
        "What is the value of x if x² + x - 2 = 0?",
        "What is the value of x if x² - 6x + 9 = 0?",
        "What is the value of x if x² + 6x + 9 = 0?",
        "What is the value of x if x² - 5x + 6 = 0?",
        "What is the value of x if x² - 8x + 16 = 0?",
        "What is the value of x if x² - 10x + 25 = 0?",
        "If you lend £500 at an 8% interest rate for 2 years, how much simple interest will you earn?",
        "If you borrow £300 at a 6% interest rate for 1 year, how much simple interest will you need to pay back?",
        "If you have £1000 and the interest rate is 5%, how much simple interest will you earn in 3 years?",
        "If you have £100 and the interest rate is 5%, how much simple interest will you earn in one year?",
        "If you have £200 and the interest rate is 4%, how much simple interest will you earn in two years?",
        "If you lend £300 at a 5% interest rate for three years, how much simple interest will you earn?",
        "If you borrow £500 at a 6% interest rate for four years, how much simple interest will you need to pay back?",
        "If you have £1000 and the interest rate is 3%, how much simple interest will you earn in five years?",
        "If you lend £2000 at a 4% interest rate for six years, what is the total amount you will earn?",
        "If you invest £500 at an annual interest rate of 6%, what is the total amount you will receive?",
        "Daniel Invests £50 at a rate of 3% compound interest for 5 years. How much money will Daniel have gained after 5 years? Round your answer to the nearest whole number.",
    ]

const AnswersArr = [
    "2497",
    "10328",
    "667478",
    "94777",
    "174580",
    "1100",
    "7310",
    "-55523",
    "141239",
    "-100",
    "-1",
    "2",
    "4",
    "4",
    "-2",
    "3",
    "-3",
    "2",
    "-4",
    "5",
    "80",
    "18",
    "150",
    "5",
    "16",
    "45",
    "120",
    "150",
    "2480",
    "590",
    "8",
]

const Question = document.getElementById("question");
const Answer = document.getElementById("answer");
const Submit = document.getElementById("submit");

let num = 0;

function Generate() {
    num = Math.floor(Math.random() * QuestionsArr.length);
    Question.innerHTML = QuestionsArr[num];
    Answer.value = "";
    Answer.focus();
}

function Check() {
    Question.innerHTML = "(Press generate for another)";
    if (Answer.value == AnswersArr[num]) {
        alert("You're correct!");
    } else {
        alert("Incorrect! The correct answer was " + AnswersArr[num] + ". Skip a turn!");
    }
}

document.getElementById("generate").onclick = Generate;
document.getElementById("submit").onclick = Check;
// Case 1: 20 emails. The official score is Scam or Legitimate. Pass with 15.

let questions = case1Questions;
let currentQuestion = 0;
let selectedAnswer = "";
let selectedClue = "";
let score = 0;
let clueScore = 0;
let records = [];
let step = "classify";
let finished = false;

const clueNames = ["Fake Sender", "Fake Urgency", "Information Requests", "No warning sign"];

function loadAttempt() {
    const data = loadProgress();
    const params = new URLSearchParams(window.location.search);

    if (params.get("retry") === "1" || data.activeCase1 === null || data.activeCase1.index >= questions.length) {
        data.activeCase1 = {
            index: 0,
            score: 0,
            clueScore: 0,
            records: [],
            step: "classify",
            selectedAnswer: "",
            selectedClue: ""
        };
        saveProgress();
    }

    const active = data.activeCase1;
    currentQuestion = active.index;
    score = active.score;
    clueScore = active.clueScore;
    records = active.records;
    step = active.step;
    selectedAnswer = active.selectedAnswer;
    selectedClue = active.selectedClue;
}

function saveAttempt() {
    const data = loadProgress();
    data.activeCase1 = {
        index: currentQuestion,
        score: score,
        clueScore: clueScore,
        records: records,
        step: step,
        selectedAnswer: selectedAnswer,
        selectedClue: selectedClue
    };
    saveProgress();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }

    const question = questions[currentQuestion];
    document.getElementById("progress-label").textContent = "Email " + (currentQuestion + 1) + " of " + questions.length;
    document.getElementById("score-label").textContent = "Score: " + score;
    document.getElementById("score-bar").style.width = Math.round((currentQuestion / questions.length) * 100) + "%";
    // The topic would give the answer away, so it only appears after both answers.
    if (step === "explain") {
        document.getElementById("category-label").textContent = "Lesson topic: " + question.category;
    } else {
        document.getElementById("category-label").textContent = "";
    }
    document.getElementById("email-from").textContent = question.sender;
    document.getElementById("email-subject").textContent = question.subject;
    document.getElementById("email-message").textContent = question.message;

    const scamButton = document.getElementById("choose-scam");
    const legitButton = document.getElementById("choose-legit");
    scamButton.disabled = step !== "classify";
    legitButton.disabled = step !== "classify";
    markChoice(scamButton, "Scam", selectedAnswer, question.correctAnswer, step !== "classify");
    markChoice(legitButton, "Legitimate", selectedAnswer, question.correctAnswer, step !== "classify");

    const clueBox = document.getElementById("clue-box");
    const nextButton = document.getElementById("next-btn");

    // Plain words for the answer: "a scam" or "a real, safe message".
    let answerWords = "a scam";
    if (question.correctAnswer === "Legitimate") {
        answerWords = "legitimate (a real, safe message)";
    }

    if (step === "classify") {
        setFeedback("feedback", "Look at who sent it, the subject, and what it asks you to do.", "tip");
        clueBox.hidden = true;
        setFeedback("clue-feedback", "", "");
        nextButton.hidden = true;
        return;
    }

    if (selectedAnswer === question.correctAnswer) {
        setFeedback("feedback", "This email is " + answerWords + ".", "good");
    } else {
        setFeedback("feedback", "This email is actually " + answerWords + ". Let's find out why.", "learn");
    }

    clueBox.hidden = false;
    const clueButtons = document.querySelectorAll(".clue-btn");
    for (let i = 0; i < clueButtons.length; i++) {
        const button = clueButtons[i];
        button.disabled = step === "explain";
        markChoice(button, button.getAttribute("data-clue"), selectedClue, question.clue, step === "explain");
    }

    if (step === "clue") {
        setFeedback("clue-feedback", "Which clue helped you decide? Pick one.", "tip");
        nextButton.hidden = true;
        return;
    }

    if (selectedClue === question.clue) {
        setFeedback("clue-feedback", question.explanation, "good");
    } else {
        setFeedback("clue-feedback", "The main clue is " + question.clue + ". " + question.explanation, "learn");
    }
    nextButton.hidden = false;
    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "See my result";
    } else {
        nextButton.textContent = "Next";
    }
}

function markChoice(button, value, pickedValue, correctValue, reveal) {
    const note = button.querySelector(".choice-note");
    const baseClass = button.getAttribute("data-base-class");
    button.className = baseClass;
    note.textContent = "";

    if (!reveal || pickedValue === "") {
        return;
    }
    if (value === correctValue) {
        button.className = baseClass + " is-correct";
        note.textContent = "Correct";
        return;
    }
    if (value === pickedValue) {
        button.className = baseClass + " is-wrong";
        note.textContent = "Your choice";
    }
}

function checkAnswer(answer) {
    if (step !== "classify") {
        return;
    }

    selectedAnswer = answer;
    const question = questions[currentQuestion];
    if (selectedAnswer === question.correctAnswer) {
        score = score + 1;
    }
    step = "clue";
    saveAttempt();
    showQuestion();
    bringIntoView("clue-box");
}

function checkClue(answer) {
    if (step !== "clue") {
        return;
    }

    selectedClue = answer;
    const question = questions[currentQuestion];
    if (selectedClue === question.clue) {
        clueScore = clueScore + 1;
    }
    step = "explain";
    saveAttempt();
    showQuestion();
    bringIntoView("clue-feedback");
    document.getElementById("next-btn").focus({ preventScroll: true });
}

function nextQuestion() {
    if (step !== "explain") {
        return;
    }

    const question = questions[currentQuestion];
    const classifyCorrect = selectedAnswer === question.correctAnswer;
    const clueCorrect = selectedClue === question.clue;

    records.push({
        heading: question.subject,
        prompt: "From: " + question.sender + " — " + question.message,
        yourAnswer: selectedAnswer,
        rightAnswer: question.correctAnswer,
        correct: classifyCorrect,
        explanation: question.explanation,
        extras: [
            {
                label: "Clue",
                yours: selectedClue,
                right: question.clue,
                correct: clueCorrect
            }
        ]
    });

    currentQuestion = currentQuestion + 1;
    selectedAnswer = "";
    selectedClue = "";
    step = "classify";
    saveAttempt();

    if (currentQuestion >= questions.length) {
        showResult();
    } else {
        showQuestion();
        bringIntoView("progress-label", "start");
        document.getElementById("choose-scam").focus({ preventScroll: true });
    }
}

function showResult() {
    if (finished) {
        return;
    }
    finished = true;

    recordCaseScore(1, score);
    const data = loadProgress();
    const passed = score >= 15;
    let message = "Nice effort. Let's learn from these answers. You can try again.";
    if (passed) {
        message = "Great detective work! You passed Case 1. Case 2 is now unlocked.";
    } else if (data.case1Passed) {
        message = "This try is below 15 out of 20. Your earlier pass still counts, so Case 2 stays open.";
    }

    data.activeCase1 = null;
    data.lastResult = {
        activity: "case1",
        title: "Case 1 — Email Check",
        score: score,
        total: 20,
        passMark: 15,
        passed: passed,
        scoreNote: "The official score uses the Scam or Legitimate answers.",
        practice: [
            { label: "Clue practice", score: clueScore, total: 20 }
        ],
        message: message,
        retryHref: "case1.html?retry=1",
        nextHref: data.case1Passed ? "case2.html?retry=1" : "",
        nextLabel: "Go to Case 2",
        records: records
    };
    saveProgress();
    window.location.href = "result.html";
}

function startCase() {
    const playPanel = document.getElementById("play-panel");
    if (!playPanel) {
        return;
    }

    loadAttempt();

    document.getElementById("choose-scam").addEventListener("click", function () {
        checkAnswer("Scam");
    });
    document.getElementById("choose-legit").addEventListener("click", function () {
        checkAnswer("Legitimate");
    });

    const clueButtons = document.querySelectorAll(".clue-btn");
    for (let i = 0; i < clueButtons.length; i++) {
        clueButtons[i].addEventListener("click", function () {
            checkClue(this.getAttribute("data-clue"));
        });
    }

    document.getElementById("next-btn").addEventListener("click", function () {
        nextQuestion();
    });

    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }
    showQuestion();
}

document.addEventListener("DOMContentLoaded", startCase);

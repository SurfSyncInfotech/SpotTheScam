// Case 2: 15 situations. Passing score is 12 out of 15.

let questions = case2Scenarios;
let currentQuestion = 0;
let selectedAnswer = "";
let score = 0;
let records = [];
let step = "choose";
let finished = false;

function loadAttempt() {
    const data = loadProgress();
    const params = new URLSearchParams(window.location.search);

    if (!caseIsOpen(2)) {
        document.getElementById("play-panel").hidden = true;
        document.getElementById("lock-panel").hidden = false;
        return false;
    }

    if (params.get("retry") === "1" || data.activeCase2 === null) {
        data.activeCase2 = {
            index: 0,
            score: 0,
            records: [],
            step: "choose",
            selectedAnswer: ""
        };
        saveProgress();
    }

    const active = data.activeCase2;
    currentQuestion = active.index;
    score = active.score;
    records = active.records;
    step = active.step;
    selectedAnswer = active.selectedAnswer;
    return true;
}

function saveAttempt() {
    const data = loadProgress();
    data.activeCase2 = {
        index: currentQuestion,
        score: score,
        records: records,
        step: step,
        selectedAnswer: selectedAnswer
    };
    saveProgress();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }

    const question = questions[currentQuestion];
    document.getElementById("progress-label").textContent = "Situation " + (currentQuestion + 1) + " of " + questions.length;
    document.getElementById("score-label").textContent = "Score: " + score;
    document.getElementById("score-bar").style.width = Math.round((currentQuestion / questions.length) * 100) + "%";
    document.getElementById("scene-title").textContent = question.title;
    document.getElementById("scene-text").textContent = question.scenario;

    const choiceRow = document.getElementById("choice-row");
    choiceRow.innerHTML = "";

    for (let i = 0; i < question.options.length; i++) {
        const option = question.options[i];
        const button = document.createElement("button");
        button.type = "button";
        button.className = "choice-btn";
        const label = document.createElement("span");
        label.className = "choice-label";
        label.textContent = option;
        button.appendChild(label);
        const note = document.createElement("span");
        note.className = "choice-note";
        button.appendChild(note);

        if (step === "explain") {
            button.disabled = true;
            if (option === question.correctAnswer) {
                button.className = button.className + " is-correct";
                note.textContent = "Correct";
            } else if (option === selectedAnswer) {
                button.className = button.className + " is-wrong";
                note.textContent = "Your choice";
            }
        } else {
            button.addEventListener("click", function () {
                checkAnswer(option);
            });
        }

        choiceRow.appendChild(button);
    }

    const nextButton = document.getElementById("next-btn");

    if (step === "choose") {
        setFeedback("feedback", "Think: Stop. Check. Ask a trusted adult.", "tip");
        nextButton.hidden = true;
        return;
    }

    if (selectedAnswer === question.correctAnswer) {
        setFeedback("feedback", question.explanation, "good");
    } else {
        setFeedback("feedback", "The safe choice is: " + question.correctAnswer + ". " + question.explanation, "learn");
    }

    nextButton.hidden = false;
    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "See my result";
    } else {
        nextButton.textContent = "Next";
    }
}

function checkAnswer(answer) {
    if (step !== "choose") {
        return;
    }

    selectedAnswer = answer;
    const question = questions[currentQuestion];
    if (selectedAnswer === question.correctAnswer) {
        score = score + 1;
    }
    step = "explain";
    saveAttempt();
    showQuestion();
    bringIntoView("feedback");
    document.getElementById("next-btn").focus({ preventScroll: true });
}

function nextQuestion() {
    if (step !== "explain") {
        return;
    }

    const question = questions[currentQuestion];
    records.push({
        heading: question.title,
        prompt: question.scenario,
        yourAnswer: selectedAnswer,
        rightAnswer: question.correctAnswer,
        correct: selectedAnswer === question.correctAnswer,
        explanation: question.explanation,
        extras: []
    });

    currentQuestion = currentQuestion + 1;
    selectedAnswer = "";
    step = "choose";
    saveAttempt();

    if (currentQuestion >= questions.length) {
        showResult();
    } else {
        showQuestion();
        bringIntoView("progress-label", "start");
    }
}

function showResult() {
    if (finished) {
        return;
    }
    finished = true;

    recordCaseScore(2, score);
    const data = loadProgress();
    const passed = score >= 12;
    let message = "Nice effort. Let's learn from these answers. You can try again.";
    if (passed) {
        message = "Great detective work! You passed Case 2. Case 3 is now unlocked.";
    } else if (data.case2Passed) {
        message = "This try is below 12 out of 15. Your earlier pass still counts, so Case 3 stays open.";
    }

    data.activeCase2 = null;
    data.lastResult = {
        activity: "case2",
        title: "Case 2 — What Would You Do?",
        score: score,
        total: 15,
        passMark: 12,
        passed: passed,
        scoreNote: "Every scenario counts toward 12 out of 15.",
        practice: [],
        message: message,
        retryHref: "case2.html?retry=1",
        nextHref: data.case2Passed ? "case3.html?retry=1" : "",
        nextLabel: "Go to Case 3",
        records: records
    };
    saveProgress();
    window.location.href = "result.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const ready = loadAttempt();
    if (!ready) {
        return;
    }

    document.getElementById("next-btn").addEventListener("click", function () {
        nextQuestion();
    });

    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }
    showQuestion();
});

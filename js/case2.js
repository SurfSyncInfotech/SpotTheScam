
let questions = [];
let currentQuestion = 0;
let selectedAnswer = "";
let score = 0;
let records = [];
let step = "choose";
let finished = false;
let bypassLock = false;

function shuffleArray(arr, seed) {
    const copy = arr.slice();
    let m = copy.length, t, i;

    let s = (seed * 9301 + 49297) % 233280;
    while (m) {
        s = (s * 9301 + 49297) % 233280;
        i = Math.floor((s / 233280) * m--);
        t = copy[m];
        copy[m] = copy[i];
        copy[i] = t;
    }
    return copy;
}

function getCurrentCycleQuestions() {
    const data = loadProgress();
    const cycle = (data.case2Cycle || 0) % 5;
    const startIndex = cycle * 20;
    return case2Scenarios.slice(startIndex, startIndex + 20);
}

function loadAttempt() {
    const data = loadProgress();
    const params = new URLSearchParams(window.location.search);
    questions = getCurrentCycleQuestions();

    if (!caseIsOpen(2) && !bypassLock) {
        document.getElementById("play-panel").hidden = true;
        document.getElementById("lock-panel").hidden = false;

        const proceedBtn = document.getElementById("proceed-anyway-btn");
        if (proceedBtn) {
            proceedBtn.onclick = function () {
                bypassLock = true;
                document.getElementById("lock-panel").hidden = true;
                document.getElementById("play-panel").hidden = false;
                initSession();
            };
        }
        return false;
    }

    initSession();
    return true;
}

function initSession() {
    const data = loadProgress();
    const params = new URLSearchParams(window.location.search);

    if (params.get("retry") === "1" || data.activeCase2 === null || data.activeCase2.index >= questions.length) {
        if (params.get("retry") === "1" && data.activeCase2 !== null) {
            data.case2Cycle = ((data.case2Cycle || 0) + 1) % 5;
            saveProgress();
            questions = getCurrentCycleQuestions();
        }

        data.activeCase2 = {
            index: 0,
            score: 0,
            records: [],
            step: "choose",
            selectedAnswer: "",
            seed: Date.now()
        };
        saveProgress();
    }

    const active = data.activeCase2;
    currentQuestion = active.index;
    score = active.score;
    records = active.records;
    step = active.step;
    selectedAnswer = active.selectedAnswer;

    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }
    showQuestion();
}

function saveAttempt() {
    const data = loadProgress();
    const seed = (data.activeCase2 && data.activeCase2.seed) || 12345;
    data.activeCase2 = {
        index: currentQuestion,
        score: score,
        records: records,
        step: step,
        selectedAnswer: selectedAnswer,
        seed: seed
    };
    saveProgress();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }

    const question = questions[currentQuestion];
    const data = loadProgress();
    const cycleNum = ((data.case2Cycle || 0) % 5) + 1;

    document.getElementById("progress-label").textContent =
        "Situation " + (currentQuestion + 1) + " of " + questions.length + " (Set " + cycleNum + " of 5)";
    document.getElementById("score-label").textContent = "Score: " + score;
    document.getElementById("score-bar").style.width = Math.round((currentQuestion / questions.length) * 100) + "%";
    document.getElementById("scene-title").textContent = question.title;
    document.getElementById("scene-text").textContent = question.scenario;

    const choiceRow = document.getElementById("choice-row");
    choiceRow.innerHTML = "";

    const seed = ((data.activeCase2 && data.activeCase2.seed) || 999) + currentQuestion;
    const shuffledOptions = shuffleArray(question.options, seed);

    for (let i = 0; i < shuffledOptions.length; i++) {
        const option = shuffledOptions[i];
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
        setFeedback("feedback", "Read carefully and pick the safest option from the 4 choices.", "tip");
        nextButton.hidden = true;
        return;
    }

    if (selectedAnswer === question.correctAnswer) {
        setFeedback("feedback", question.explanation, "good");
    } else {
        setFeedback("feedback", "A safer choice would be: \"" + question.correctAnswer + "\". " + question.explanation, "learn");
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
    const passed = score >= 15;
    let message = "Nice effort. Replay to practice with new scenarios!";
    if (passed) {
        message = "Brilliant decisions! You passed Case 2. Case 3 is now unlocked.";
    } else if (data.case2Passed) {
        message = "This try is below 15 out of 20. Your earlier pass still counts!";
    }

    data.case2Cycle = ((data.case2Cycle || 0) + 1) % 5;
    data.activeCase2 = null;
    data.lastResult = {
        activity: "case2",
        title: "Case 2 — What Would You Do Next?",
        score: score,
        total: 20,
        passMark: 15,
        passed: passed,
        scoreNote: "Every scenario counts toward 15 out of 20.",
        practice: [],
        message: message,
        retryHref: "case2.html?retry=1",
        nextHref: "case3.html?retry=1",
        nextLabel: "Proceed to Case 3",
        records: records
    };
    saveProgress();
    window.location.href = "result.html";
}

document.addEventListener("DOMContentLoaded", function () {
    loadAttempt();

    const nextBtn = document.getElementById("next-btn");
    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            nextQuestion();
        });
    }
});

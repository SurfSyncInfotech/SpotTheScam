
let questions = [];
let currentQuestion = 0;
let selectedAnswer = "";
let selectedLine = "";
let score = 0;
let lineScore = 0;
let records = [];
let step = "classify";
let finished = false;

function getCurrentCycleQuestions() {
    const data = loadProgress();
    const cycle = (data.case1Cycle || 0) % 5;
    const startIndex = cycle * 20;
    return case1Questions.slice(startIndex, startIndex + 20);
}

function loadAttempt() {
    const data = loadProgress();
    const params = new URLSearchParams(window.location.search);
    questions = getCurrentCycleQuestions();

    if (params.get("retry") === "1" || data.activeCase1 === null || data.activeCase1.index >= questions.length) {

        if (params.get("retry") === "1" && data.activeCase1 !== null) {
            data.case1Cycle = ((data.case1Cycle || 0) + 1) % 5;
            saveProgress();
            questions = getCurrentCycleQuestions();
        }

        data.activeCase1 = {
            index: 0,
            score: 0,
            lineScore: 0,
            records: [],
            step: "classify",
            selectedAnswer: "",
            selectedLine: ""
        };
        saveProgress();
    }

    const active = data.activeCase1;
    currentQuestion = active.index;
    score = active.score;
    lineScore = active.lineScore || 0;
    records = active.records;
    step = active.step;
    selectedAnswer = active.selectedAnswer;
    selectedLine = active.selectedLine || "";
}

function saveAttempt() {
    const data = loadProgress();
    data.activeCase1 = {
        index: currentQuestion,
        score: score,
        lineScore: lineScore,
        records: records,
        step: step,
        selectedAnswer: selectedAnswer,
        selectedLine: selectedLine
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
    const cycleNum = ((data.case1Cycle || 0) % 5) + 1;

    document.getElementById("progress-label").textContent =
        "Email " + (currentQuestion + 1) + " of " + questions.length + " (Set " + cycleNum + " of 5)";
    document.getElementById("score-label").textContent = "Score: " + score;
    document.getElementById("score-bar").style.width = Math.round((currentQuestion / questions.length) * 100) + "%";

    if (step === "explain") {
        document.getElementById("category-label").textContent = "Lesson topic: " + question.category;
    } else {
        document.getElementById("category-label").textContent = "";
    }

    document.getElementById("email-from").textContent = question.sender;
    document.getElementById("email-subject").textContent = question.subject;

    const bodyContainer = document.getElementById("email-body-lines");
    bodyContainer.innerHTML = "";
    const lines = question.bodyLines || [question.message];
    for (let i = 0; i < lines.length; i++) {
        const p = document.createElement("p");
        p.className = "inspectable-line";
        p.setAttribute("data-line-id", "line" + i);
        p.textContent = lines[i];
        bodyContainer.appendChild(p);
    }

    const scamButton = document.getElementById("choose-scam");
    const legitButton = document.getElementById("choose-legit");
    scamButton.disabled = step !== "classify";
    legitButton.disabled = step !== "classify";
    markChoice(scamButton, "Scam", selectedAnswer, question.correctAnswer, step !== "classify");
    markChoice(legitButton, "Legitimate", selectedAnswer, question.correctAnswer, step !== "classify");

    const emailCard = document.getElementById("email-inspect-card");
    const inspectHint = document.getElementById("inspect-hint");
    const clueBox = document.getElementById("clue-box");
    const nextButton = document.getElementById("next-btn");

    let answerWords = "a scam (suspicious)";
    if (question.correctAnswer === "Legitimate") {
        answerWords = "legitimate (safe)";
    }

    if (step === "classify") {
        emailCard.classList.remove("is-inspecting");
        if (inspectHint) inspectHint.hidden = true;
        setFeedback("feedback", "Check the sender address, subject, and message lines.", "tip");
        clueBox.hidden = true;
        setFeedback("clue-feedback", "", "");
        nextButton.hidden = true;
        resetInspectHighlights();
        return;
    }

    if (selectedAnswer === question.correctAnswer) {
        setFeedback("feedback", "Good observation! This email is indeed " + answerWords + ".", "good");
    } else {
        setFeedback("feedback", "Careful! This email is actually " + answerWords + ".", "learn");
    }

    clueBox.hidden = false;

    if (step === "clue") {

        if (question.correctAnswer === "Legitimate") {
            emailCard.classList.remove("is-inspecting");
            if (inspectHint) inspectHint.hidden = true;
            setFeedback("clue-feedback", "Since this message is legitimate, there are no suspicious lines! " + question.explanation, "good");
            step = "explain";
            saveAttempt();
            nextButton.hidden = false;
            nextButton.textContent = (currentQuestion === questions.length - 1) ? "See my result" : "Next";
            return;
        }

        emailCard.classList.add("is-inspecting");
        if (inspectHint) inspectHint.hidden = false;
        setFeedback("clue-feedback", "Now click on the suspicious line on the left (Sender, Subject, or text).", "tip");
        nextButton.hidden = true;
        return;
    }

    emailCard.classList.remove("is-inspecting");
    if (inspectHint) inspectHint.hidden = true;
    highlightInspectedLine(question);

    const isLineCorrect = (selectedLine === question.suspiciousTarget);
    if (isLineCorrect) {
        setFeedback("clue-feedback", "Spot on! That line is suspicious. " + question.explanation, "good");
    } else {
        setFeedback("clue-feedback", "Notice highlighted in green: that's the key clue. " + question.explanation, "learn");
    }

    nextButton.hidden = false;
    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "See my result";
    } else {
        nextButton.textContent = "Next";
    }
}

function resetInspectHighlights() {
    const all = document.querySelectorAll(".inspectable-row, .inspectable-line");
    all.forEach(el => {
        el.classList.remove("is-selected-correct", "is-selected-wrong");
    });
}

function highlightInspectedLine(question) {
    resetInspectHighlights();
    const correctTarget = question.suspiciousTarget;

    const all = document.querySelectorAll(".inspectable-row, .inspectable-line");
    all.forEach(el => {
        const lineId = el.getAttribute("data-line-id");
        if (lineId === correctTarget) {
            el.classList.add("is-selected-correct");
        } else if (lineId === selectedLine) {
            el.classList.add("is-selected-wrong");
        }
    });
}

function markChoice(button, value, pickedValue, correctValue, reveal) {
    const note = button.querySelector(".choice-note");
    const baseClass = button.getAttribute("data-base-class");
    button.className = baseClass;
    if (note) note.textContent = "";

    if (!reveal || pickedValue === "") {
        return;
    }
    if (value === correctValue) {
        button.className = baseClass + " is-correct";
        if (note) note.textContent = "Correct";
        return;
    }
    if (value === pickedValue) {
        button.className = baseClass + " is-wrong";
        if (note) note.textContent = "Your choice";
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

function checkLineClick(lineId) {
    if (step !== "clue") {
        return;
    }

    selectedLine = lineId;
    const question = questions[currentQuestion];
    if (selectedLine === question.suspiciousTarget) {
        lineScore = lineScore + 1;
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
    const lineCorrect = (selectedLine === question.suspiciousTarget) || (question.correctAnswer === "Legitimate");

    records.push({
        heading: question.subject,
        prompt: "From: " + question.sender + " — " + question.message,
        yourAnswer: selectedAnswer,
        rightAnswer: question.correctAnswer,
        correct: classifyCorrect,
        explanation: question.explanation,
        extras: [
            {
                label: "Suspicious line",
                yours: selectedLine || "None",
                right: question.suspiciousTarget,
                correct: lineCorrect
            }
        ]
    });

    currentQuestion = currentQuestion + 1;
    selectedAnswer = "";
    selectedLine = "";
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
    let message = "Nice effort! Review your answers and try again to cycle through new questions.";
    if (passed) {
        message = "Outstanding detective work! You passed Case 1. You can now take Case 2 or replay for new questions.";
    }

    data.case1Cycle = ((data.case1Cycle || 0) + 1) % 5;
    data.activeCase1 = null;
    data.lastResult = {
        activity: "case1",
        title: "Case 1 — Spot the Scam",
        score: score,
        total: 20,
        passMark: 15,
        passed: passed,
        scoreNote: "The official score uses the Scam or Legitimate answers.",
        practice: [
            { label: "Clue discovery", score: lineScore, total: 20 }
        ],
        message: message,
        retryHref: "case1.html?retry=1",
        nextHref: "case2.html?retry=1",
        nextLabel: "Proceed to Case 2",
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

    const emailCard = document.getElementById("email-inspect-card");
    if (emailCard) {
        emailCard.addEventListener("click", function (e) {
            const row = e.target.closest(".inspectable-row, .inspectable-line");
            if (row && step === "clue") {
                const lineId = row.getAttribute("data-line-id");
                checkLineClick(lineId);
            }
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

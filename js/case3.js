
let questions = [];
let currentQuestion = 0;
let selectedAnswer = "";
let selectedClue = "";
let selectedAction = "";
let score = 0;
let clueScore = 0;
let actionScore = 0;
let records = [];
let step = "classify";
let finished = false;
let bypassLock = false;

function getCurrentCycleQuestions() {
    const data = loadProgress();
    const cycle = (data.case3Cycle || 0) % 5;
    const startIndex = cycle * 20;
    return case3Challenges.slice(startIndex, startIndex + 20);
}

function loadAttempt() {
    const data = loadProgress();
    const params = new URLSearchParams(window.location.search);
    questions = getCurrentCycleQuestions();

    if (!caseIsOpen(3) && !bypassLock) {
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

    if (params.get("retry") === "1" || data.activeCase3 === null || data.activeCase3.index >= questions.length) {
        if (params.get("retry") === "1" && data.activeCase3 !== null) {
            data.case3Cycle = ((data.case3Cycle || 0) + 1) % 5;
            saveProgress();
            questions = getCurrentCycleQuestions();
        }

        data.activeCase3 = emptyAttempt();
        saveProgress();
    }

    const active = data.activeCase3;
    currentQuestion = active.index;
    score = active.score;
    clueScore = active.clueScore;
    actionScore = active.actionScore;
    records = active.records;
    step = active.step;
    selectedAnswer = active.selectedAnswer;
    selectedClue = active.selectedClue;
    selectedAction = active.selectedAction;

    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }
    showQuestion();
}

function emptyAttempt() {
    return {
        index: 0,
        score: 0,
        clueScore: 0,
        actionScore: 0,
        records: [],
        step: "classify",
        selectedAnswer: "",
        selectedClue: "",
        selectedAction: ""
    };
}

function saveAttempt() {
    const data = loadProgress();
    data.activeCase3 = {
        index: currentQuestion,
        score: score,
        clueScore: clueScore,
        actionScore: actionScore,
        records: records,
        step: step,
        selectedAnswer: selectedAnswer,
        selectedClue: selectedClue,
        selectedAction: selectedAction
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
    const cycleNum = ((data.case3Cycle || 0) % 5) + 1;

    document.getElementById("progress-label").textContent =
        "Message " + (currentQuestion + 1) + " of " + questions.length + " (Set " + cycleNum + " of 5)";
    document.getElementById("score-label").textContent = "Score: " + score;
    document.getElementById("score-bar").style.width = Math.round((currentQuestion / questions.length) * 100) + "%";
    document.getElementById("email-from").textContent = question.sender;
    document.getElementById("email-message").textContent = question.message;

    const scamButton = document.getElementById("choose-scam");
    const legitButton = document.getElementById("choose-legit");
    scamButton.disabled = step !== "classify";
    legitButton.disabled = step !== "classify";
    paintPicked(scamButton, "Scam", selectedAnswer, question.correctAnswer, step !== "classify");
    paintPicked(legitButton, "Legitimate", selectedAnswer, question.correctAnswer, step !== "classify");

    const clueBox = document.getElementById("clue-box");
    const actionBox = document.getElementById("action-box");
    const nextButton = document.getElementById("next-btn");

    let answerWords = "a scam (suspicious)";
    if (question.correctAnswer === "Legitimate") {
        answerWords = "legitimate (safe)";
    }

    if (step === "classify") {
        setFeedback("feedback", "Step 1: Decide if this message is a scam or legitimate.", "tip");
        clueBox.hidden = true;
        actionBox.hidden = true;
        setFeedback("clue-feedback", "", "");
        setFeedback("action-feedback", "", "");
        nextButton.hidden = true;
        return;
    }

    if (selectedAnswer === question.correctAnswer) {
        setFeedback("feedback", "That's right! This message is " + answerWords + ".", "good");
    } else {
        setFeedback("feedback", "This message is actually " + answerWords + ".", "learn");
    }

    clueBox.hidden = false;
    paintList(
        "clue-row",
        question.clueOptions,
        selectedClue,
        question.correctClue,
        step !== "clue",
        function (picked) {
            checkClue(picked);
        }
    );

    if (step === "clue") {
        setFeedback("clue-feedback", "Step 2: What is the main clue?", "tip");
        actionBox.hidden = true;
        setFeedback("action-feedback", "", "");
        nextButton.hidden = true;
        return;
    }

    if (selectedClue === question.correctClue) {
        setFeedback("clue-feedback", "Correct clue!", "good");
    } else {
        setFeedback("clue-feedback", "The key sign is: " + question.correctClue + ".", "learn");
    }

    actionBox.hidden = false;
    paintList(
        "action-row",
        question.actionOptions,
        selectedAction,
        question.correctAction,
        step === "explain",
        function (picked) {
            checkAction(picked);
        }
    );

    if (step === "action") {
        setFeedback("action-feedback", "Step 3: What is the safest action to take next?", "tip");
        nextButton.hidden = true;
        return;
    }

    if (selectedAction === question.correctAction) {
        setFeedback("action-feedback", question.explanation, "good");
    } else {
        setFeedback("action-feedback", "Safest move: \"" + question.correctAction + "\". " + question.explanation, "learn");
    }

    nextButton.hidden = false;
    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "See my result";
    } else {
        nextButton.textContent = "Next";
    }
}

function paintPicked(button, value, pickedValue, correctValue, reveal) {
    const note = button.querySelector(".choice-note");
    button.className = "choice-btn";
    if (note) note.textContent = "";

    if (!reveal || pickedValue === "") {
        return;
    }
    if (value === correctValue) {
        button.className = "choice-btn is-correct";
        if (note) note.textContent = "Correct";
        return;
    }
    if (value === pickedValue) {
        button.className = "choice-btn is-wrong";
        if (note) note.textContent = "Your choice";
    }
}

function paintList(containerId, options, pickedValue, correctValue, locked, onPick) {
    const box = document.getElementById(containerId);
    box.innerHTML = "";

    for (let i = 0; i < options.length; i++) {
        const option = options[i];
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

        if (locked) {
            button.disabled = true;
            if (option === correctValue) {
                button.className = button.className + " is-correct";
                note.textContent = "Correct";
            } else if (option === pickedValue) {
                button.className = button.className + " is-wrong";
                note.textContent = "Your choice";
            }
        } else {
            button.addEventListener("click", function () {
                onPick(option);
            });
        }

        box.appendChild(button);
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
    if (selectedClue === question.correctClue) {
        clueScore = clueScore + 1;
    }
    step = "action";
    saveAttempt();
    showQuestion();
    bringIntoView("action-box");
}

function checkAction(answer) {
    if (step !== "action") {
        return;
    }

    selectedAction = answer;
    const question = questions[currentQuestion];
    if (selectedAction === question.correctAction) {
        actionScore = actionScore + 1;
    }
    step = "explain";
    saveAttempt();
    showQuestion();
    bringIntoView("action-feedback");
    document.getElementById("next-btn").focus({ preventScroll: true });
}

function nextQuestion() {
    if (step !== "explain") {
        return;
    }

    const question = questions[currentQuestion];
    const classifyCorrect = selectedAnswer === question.correctAnswer;
    const clueCorrect = selectedClue === question.correctClue;
    const actionCorrect = selectedAction === question.correctAction;

    records.push({
        heading: "Message " + (currentQuestion + 1),
        prompt: "From: " + question.sender + " — " + question.message,
        yourAnswer: selectedAnswer,
        rightAnswer: question.correctAnswer,
        correct: classifyCorrect,
        explanation: question.explanation,
        extras: [
            { label: "Clue", yours: selectedClue, right: question.correctClue, correct: clueCorrect },
            { label: "Safe action", yours: selectedAction, right: question.correctAction, correct: actionCorrect }
        ]
    });

    currentQuestion = currentQuestion + 1;
    selectedAnswer = "";
    selectedClue = "";
    selectedAction = "";
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

    recordCaseScore(3, score);
    const data = loadProgress();
    const passed = score >= 15;
    let message = "Nice effort. Replay to practice with new challenge messages!";
    if (passed) {
        message = "Master detective work! You passed the Real-World Simulation.";
    } else if (data.case3Passed) {
        message = "This try is below 15 out of 20. Your earlier pass still counts.";
    }

    data.case3Cycle = ((data.case3Cycle || 0) + 1) % 5;
    data.activeCase3 = null;
    data.lastResult = {
        activity: "case3",
        title: "Case 3 — Real-World Simulation",
        score: score,
        total: 20,
        passMark: 15,
        passed: passed,
        scoreNote: "The official score uses the Scam or Legitimate answers.",
        practice: [
            { label: "Clue practice", score: clueScore, total: 20 },
            { label: "Safe action practice", score: actionScore, total: 20 }
        ],
        message: message,
        retryHref: "case3.html?retry=1",
        nextHref: "training.html",
        nextLabel: "Proceed to Training",
        records: records
    };
    saveProgress();
    window.location.href = "result.html";
}

document.addEventListener("DOMContentLoaded", function () {
    loadAttempt();

    document.getElementById("choose-scam").addEventListener("click", function () {
        checkAnswer("Scam");
    });
    document.getElementById("choose-legit").addEventListener("click", function () {
        checkAnswer("Legitimate");
    });
    document.getElementById("next-btn").addEventListener("click", function () {
        nextQuestion();
    });
});

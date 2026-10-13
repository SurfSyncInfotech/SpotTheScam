// Case 3: 20 challenges. The official score is Scam or Legitimate. Pass with 15.

let questions = case3Challenges;
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

function loadAttempt() {
    const data = loadProgress();
    const params = new URLSearchParams(window.location.search);

    if (!caseIsOpen(3)) {
        document.getElementById("play-panel").hidden = true;
        document.getElementById("lock-panel").hidden = false;
        return false;
    }

    if (params.get("retry") === "1" || data.activeCase3 === null || data.activeCase3.index >= questions.length) {
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
    return true;
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
    document.getElementById("progress-label").textContent = "Message " + (currentQuestion + 1) + " of " + questions.length;
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

    // Plain words for the answer: "a scam" or "a real, safe message".
    let answerWords = "a scam";
    if (question.correctAnswer === "Legitimate") {
        answerWords = "legitimate (a real, safe message)";
    }

    if (step === "classify") {
        setFeedback("feedback", "Who sent it? What does it want you to do?", "tip");
    } else if (selectedAnswer === question.correctAnswer) {
        setFeedback("feedback", "This message is " + answerWords + ".", "good");
    } else {
        setFeedback("feedback", "This message is actually " + answerWords + ".", "learn");
    }

    const clueBox = document.getElementById("clue-box");
    clueBox.hidden = step === "classify";
    if (step !== "classify") {
        drawChoiceRow("clue-row", question.clueOptions, selectedClue, question.correctClue, step === "clue", function (answer) {
            checkClue(answer);
        });
    }

    if (step === "clue") {
        setFeedback("clue-feedback", "Which clue helped you decide? Pick one.", "tip");
    } else if (step === "action" || step === "explain") {
        if (selectedClue === question.correctClue) {
            setFeedback("clue-feedback", "The main clue is " + question.correctClue + ".", "good");
        } else {
            setFeedback("clue-feedback", "The main clue is " + question.correctClue + ".", "learn");
        }
    } else {
        setFeedback("clue-feedback", "", "");
    }

    const actionBox = document.getElementById("action-box");
    actionBox.hidden = step !== "action" && step !== "explain";
    if (step === "action" || step === "explain") {
        drawChoiceRow("action-row", question.actionOptions, selectedAction, question.correctAction, step === "action", function (answer) {
            checkAction(answer);
        });
    }

    const nextButton = document.getElementById("next-btn");
    if (step === "action") {
        setFeedback("action-feedback", "What would keep you safe here? Pick one.", "tip");
        nextButton.hidden = true;
    } else if (step === "explain") {
        if (selectedAction === question.correctAction) {
            setFeedback("action-feedback", question.explanation, "good");
        } else {
            setFeedback("action-feedback", "A safe thing to do: " + question.correctAction + ". " + question.explanation, "learn");
        }
        nextButton.hidden = false;
        if (currentQuestion === questions.length - 1) {
            nextButton.textContent = "See my result";
        } else {
            nextButton.textContent = "Next";
        }
    } else {
        setFeedback("action-feedback", "", "");
        nextButton.hidden = true;
    }
}

function paintPicked(button, value, pickedValue, correctValue, showMark) {
    const note = button.querySelector(".choice-note");
    button.className = "choice-btn";
    note.textContent = "";
    if (!showMark || pickedValue === "") {
        return;
    }
    if (value === correctValue) {
        button.className = "choice-btn is-correct";
        note.textContent = "Correct";
        return;
    }
    if (value === pickedValue) {
        button.className = "choice-btn is-wrong";
        note.textContent = "Your choice";
    }
}

function drawChoiceRow(rowId, options, pickedValue, correctValue, canClick, onPick) {
    const row = document.getElementById(rowId);
    row.innerHTML = "";
    for (let i = 0; i < options.length; i++) {
        const option = options[i];
        const button = document.createElement("button");
        button.type = "button";
        button.className = "choice-btn";
        const label = document.createElement("span");
        label.className = "choice-label";
        label.textContent = option;
        button.appendChild(label);
        addChoiceHelp(button, option);
        const note = document.createElement("span");
        note.className = "choice-note";
        button.appendChild(note);
        paintPicked(button, option, pickedValue, correctValue, pickedValue !== "");
        if (canClick) {
            button.addEventListener("click", function () {
                onPick(option);
            });
        } else {
            button.disabled = true;
        }
        row.appendChild(button);
    }
}

function checkAnswer(answer) {
    if (step !== "classify") {
        return;
    }
    selectedAnswer = answer;
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
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
    if (selectedClue === questions[currentQuestion].correctClue) {
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
    if (selectedAction === questions[currentQuestion].correctAction) {
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
    records.push({
        heading: "Message " + question.id,
        prompt: "From: " + question.sender + " — " + question.message,
        yourAnswer: selectedAnswer,
        rightAnswer: question.correctAnswer,
        correct: selectedAnswer === question.correctAnswer,
        explanation: question.explanation,
        extras: [
            {
                label: "Clue",
                yours: selectedClue,
                right: question.correctClue,
                correct: selectedClue === question.correctClue
            },
            {
                label: "Safe action",
                yours: selectedAction,
                right: question.correctAction,
                correct: selectedAction === question.correctAction
            }
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
    let message = "Nice effort. Let's learn from these answers. You can try again.";
    if (passed) {
        message = "Great detective work! You passed the Real-World Challenge.";
    } else if (data.case3Passed) {
        message = "This try is below 15 out of 20. Your earlier pass still counts.";
    }

    data.activeCase3 = null;
    data.lastResult = {
        activity: "case3",
        title: "Case 3 — Real-World Challenge",
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
        nextHref: data.case3Passed ? "training.html" : "",
        nextLabel: "Go to Company Training",
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

    document.getElementById("choose-scam").addEventListener("click", function () {
        checkAnswer("Scam");
    });
    document.getElementById("choose-legit").addEventListener("click", function () {
        checkAnswer("Legitimate");
    });
    document.getElementById("next-btn").addEventListener("click", function () {
        nextQuestion();
    });

    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }
    showQuestion();
});

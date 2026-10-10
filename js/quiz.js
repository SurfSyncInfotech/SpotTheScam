// Company Quiz: 20 questions in a new order each attempt. Pass mark is 16 out of 20.

let order = [];
let picks = {};
let currentQuestion = 0;
let finished = false;

function findQuizQuestion(id) {
    for (let i = 0; i < companyQuizQuestions.length; i++) {
        if (companyQuizQuestions[i].id === id) {
            return companyQuizQuestions[i];
        }
    }
    return null;
}

function shuffleList(list) {
    const copy = list.slice();
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
    }
    return copy;
}

function loadAttempt() {
    const data = loadProgress();
    if (data.trainingAck !== true) {
        document.getElementById("play-panel").hidden = true;
        document.getElementById("lock-panel").hidden = false;
        document.getElementById("summary-btn").hidden = true;
        return false;
    }

    const params = new URLSearchParams(window.location.search);
    if (params.get("retry") === "1" || data.activeQuiz === null) {
        const ids = [];
        for (let i = 0; i < companyQuizQuestions.length; i++) {
            ids.push(companyQuizQuestions[i].id);
        }
        data.activeQuiz = {
            order: shuffleList(ids),
            index: 0,
            picks: {}
        };
        saveProgress();
    }

    order = data.activeQuiz.order;
    picks = data.activeQuiz.picks;
    currentQuestion = data.activeQuiz.index;
    return true;
}

function saveAttempt() {
    const data = loadProgress();
    data.activeQuiz = {
        order: order,
        index: currentQuestion,
        picks: picks
    };
    saveProgress();
}

function countAnswered() {
    let count = 0;
    for (let i = 0; i < order.length; i++) {
        if (picks[String(order[i])]) {
            count = count + 1;
        }
    }
    return count;
}

function allAnswered() {
    for (let i = 0; i < order.length; i++) {
        const key = String(order[i]);
        if (!picks[key]) {
            return false;
        }
    }
    return true;
}

function showQuestion() {
    const question = findQuizQuestion(order[currentQuestion]);
    const key = String(question.id);
    document.getElementById("progress-label").textContent = "Question " + (currentQuestion + 1) + " of " + order.length;
    document.getElementById("score-bar").style.width = Math.round((currentQuestion / order.length) * 100) + "%";
    document.getElementById("topic-label").textContent = "Topic: " + question.category;
    document.getElementById("summary-btn").textContent = "All my answers (" + countAnswered() + " of " + order.length + ")";
    document.getElementById("question-text").textContent = question.question;

    const choiceRow = document.getElementById("choice-row");
    choiceRow.innerHTML = "";
    for (let i = 0; i < question.options.length; i++) {
        const option = question.options[i];
        const button = document.createElement("button");
        button.type = "button";
        button.className = "choice-btn";
        if (picks[key] === option) {
            button.className = "choice-btn is-picked";
        }
        const label = document.createElement("span");
        label.className = "choice-label";
        label.textContent = option;
        button.appendChild(label);
        button.addEventListener("click", function () {
            checkAnswer(option);
        });
        choiceRow.appendChild(button);
    }

    if (currentQuestion === order.length - 1 && !allAnswered()) {
        setFeedback("feedback", "Some questions have no answer yet. Press \"All my answers\" to find them.", "tip");
    } else if (picks[key]) {
        setFeedback("feedback", "Press Next to continue, or pick a different answer.", "saved");
    } else {
        setFeedback("feedback", "Pick one answer. There is no timer.", "tip");
    }

    document.getElementById("prev-btn").hidden = currentQuestion === 0;
    const nextButton = document.getElementById("next-btn");
    const finishButton = document.getElementById("finish-btn");
    if (currentQuestion === order.length - 1) {
        nextButton.hidden = true;
    } else {
        nextButton.hidden = false;
    }
    finishButton.hidden = !allAnswered();
}

function checkAnswer(answer) {
    const key = String(order[currentQuestion]);
    picks[key] = answer;
    saveAttempt();
    showQuestion();
    if (!document.getElementById("summary-pop").hidden) {
        fillSummary();
    }
}

function nextQuestion() {
    const key = String(order[currentQuestion]);
    if (!picks[key]) {
        setFeedback("feedback", "Please pick an answer first.", "tip");
        return;
    }
    if (currentQuestion < order.length - 1) {
        currentQuestion = currentQuestion + 1;
        saveAttempt();
        showQuestion();
    }
}

function previousQuestion() {
    if (currentQuestion === 0) {
        return;
    }
    currentQuestion = currentQuestion - 1;
    saveAttempt();
    showQuestion();
}

function showResult() {
    if (finished) {
        return;
    }
    if (!allAnswered()) {
        setFeedback("feedback", "Answer every question first. Press \"All my answers\" to find the ones left.", "tip");
        return;
    }
    finished = true;

    let score = 0;
    const records = [];
    for (let i = 0; i < order.length; i++) {
        const question = findQuizQuestion(order[i]);
        const chosen = picks[String(question.id)];
        const correct = chosen === question.correctAnswer;
        if (correct) {
            score = score + 1;
        }
        records.push({
            heading: "Question " + (i + 1),
            prompt: question.question,
            yourAnswer: chosen,
            rightAnswer: question.correctAnswer,
            correct: correct,
            explanation: question.explanation,
            extras: []
        });
    }

    recordQuizScore(score);
    const data = loadProgress();
    const passed = score >= 16;
    let message = "Nice effort. Let's learn from these answers. You can try the quiz again.";
    if (passed) {
        message = "Great detective work! You passed the Company Quiz and earned the Security Certified badge.";
    }

    data.activeQuiz = null;
    data.lastResult = {
        activity: "quiz",
        title: "Company Quiz",
        score: score,
        total: 20,
        passMark: 16,
        passed: passed,
        scoreNote: "Passing score: 16 out of 20. Best score saved: " + data.quizBest + "/20.",
        practice: [],
        message: message,
        retryHref: "quiz.html?retry=1",
        nextHref: "",
        nextLabel: "",
        records: records
    };
    saveProgress();
    window.location.href = "result.html";
}

function fillSummary() {
    const list = document.getElementById("summary-list");
    list.innerHTML = "";
    for (let i = 0; i < order.length; i++) {
        const question = findQuizQuestion(order[i]);
        const chosen = picks[String(question.id)];
        const item = document.createElement("li");
        const title = document.createElement("p");
        title.className = "summary-title";
        title.textContent = (i + 1) + ". " + question.question;
        const status = document.createElement("p");
        status.className = "summary-status";
        if (chosen) {
            status.textContent = "Your answer: " + chosen;
        } else {
            status.textContent = "Not answered yet";
        }
        const jump = document.createElement("button");
        jump.type = "button";
        jump.className = "btn btn-small";
        jump.textContent = "Go to this question";
        jump.addEventListener("click", function () {
            goToQuestion(i);
        });
        item.appendChild(title);
        item.appendChild(status);
        item.appendChild(jump);
        list.appendChild(item);
    }
}

function openSummary() {
    fillSummary();
    const pop = document.getElementById("summary-pop");
    pop.hidden = false;
    // Focus the dialog itself so the list starts at the top.
    const card = pop.querySelector(".summary-card");
    card.scrollTop = 0;
    card.focus();
}

function closeSummary() {
    document.getElementById("summary-pop").hidden = true;
    document.getElementById("summary-btn").focus();
}

function goToQuestion(index) {
    currentQuestion = index;
    saveAttempt();
    closeSummary();
    showQuestion();
}

document.addEventListener("DOMContentLoaded", function () {
    const ready = loadAttempt();
    if (!ready) {
        return;
    }

    document.getElementById("next-btn").addEventListener("click", nextQuestion);
    document.getElementById("prev-btn").addEventListener("click", previousQuestion);
    document.getElementById("finish-btn").addEventListener("click", showResult);
    document.getElementById("summary-btn").addEventListener("click", openSummary);
    document.getElementById("close-summary").addEventListener("click", closeSummary);

    document.addEventListener("keydown", function (event) {
        const pop = document.getElementById("summary-pop");
        if (event.key === "Escape" && pop.hidden === false) {
            closeSummary();
        }
    });

    showQuestion();
});

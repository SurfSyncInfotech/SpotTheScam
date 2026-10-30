
function showResultPage() {
    const data = loadProgress();
    const result = data.lastResult;
    const empty = document.getElementById("empty-result");
    const panel = document.getElementById("result-panel");

    if (!result) {
        empty.hidden = false;
        panel.hidden = true;
        return;
    }

    empty.hidden = true;
    panel.hidden = false;

    document.getElementById("result-title").textContent = result.title;
    document.getElementById("result-message").textContent = result.message;
    document.getElementById("result-score").textContent = result.score + " / " + result.total;
    document.getElementById("result-pass").textContent = "You need " + result.passMark + " out of " + result.total + " to pass.";
    document.getElementById("result-note").textContent = result.scoreNote;

    const status = document.getElementById("result-status");
    if (result.passed) {
        status.textContent = "You passed!";
        status.className = "pill pill-good";
        panel.className = "result-pass";
    } else {
        status.textContent = "Not passed yet";
        status.className = "pill pill-learn";
        panel.className = "result-learn";
    }

    const practiceList = document.getElementById("practice-list");
    practiceList.innerHTML = "";
    if (result.practice && result.practice.length > 0) {
        for (let i = 0; i < result.practice.length; i++) {
            const item = result.practice[i];
            const li = document.createElement("li");
            li.textContent = item.label + ": " + item.score + " / " + item.total + " (practice only)";
            practiceList.appendChild(li);
        }
    }

    const retry = document.getElementById("retry-btn");
    retry.href = result.retryHref;
    if (result.activity === "quiz") {
        retry.textContent = "Back to Home";
        retry.href = "index.html";
    } else if (result.passed) {
        retry.textContent = "Play this case again";
    } else {
        retry.textContent = "Try again";
    }

    const next = document.getElementById("next-btn");
    if (result.nextHref) {
        next.hidden = false;
        next.href = result.nextHref;
        next.textContent = result.nextLabel;
    } else {
        next.hidden = true;
    }

    const reviewList = document.getElementById("review-list");
    reviewList.innerHTML = "";
    for (let i = 0; i < result.records.length; i++) {
        reviewList.appendChild(buildReviewItem(result.records[i], i + 1));
    }

    document.getElementById("review-btn").addEventListener("click", function () {
        const box = document.getElementById("review-box");
        const button = document.getElementById("review-btn");
        if (box.hidden) {
            box.hidden = false;
            button.textContent = "Hide my answers";
            bringIntoView("review-box", "start");
        } else {
            box.hidden = true;
            button.textContent = "See my answers";
        }
    });
}

function buildReviewItem(record, number) {
    const item = document.createElement("article");
    item.className = "review-item";

    const heading = document.createElement("h3");
    heading.textContent = number + ". " + record.heading;
    item.appendChild(heading);

    const prompt = document.createElement("p");
    prompt.textContent = record.prompt;
    item.appendChild(prompt);

    const yours = document.createElement("p");
    yours.textContent = "Your answer: " + record.yourAnswer;
    item.appendChild(yours);

    const right = document.createElement("p");
    if (record.correct) {
        right.textContent = "Correct!";
        right.className = "review-good";
    } else {
        right.textContent = "Not quite. The right answer is " + record.rightAnswer + ".";
        right.className = "review-learn";
    }
    item.appendChild(right);

    if (record.extras) {
        for (let i = 0; i < record.extras.length; i++) {
            const extra = record.extras[i];
            const line = document.createElement("p");
            if (extra.correct) {
                line.textContent = extra.label + ": " + extra.yours + " (correct)";
            } else {
                line.textContent = extra.label + ": you chose " + extra.yours + ". The right one is " + extra.right + ".";
            }
            item.appendChild(line);
        }
    }

    const why = document.createElement("p");
    why.textContent = record.explanation;
    item.appendChild(why);
    return item;
}

document.addEventListener("DOMContentLoaded", showResultPage);

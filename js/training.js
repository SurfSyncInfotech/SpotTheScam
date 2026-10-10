// The quiz stays locked until the acknowledgement box is checked.

function startTrainingPage() {
    const box = document.getElementById("ack-box");
    const startButton = document.getElementById("start-quiz");
    const continueLink = document.getElementById("continue-quiz");
    const data = loadProgress();

    box.checked = data.trainingAck === true;
    startButton.disabled = box.checked === false;

    if (data.activeQuiz !== null && data.trainingAck === true) {
        continueLink.hidden = false;
    } else {
        continueLink.hidden = true;
    }

    box.addEventListener("change", function () {
        const progress = loadProgress();
        progress.trainingAck = box.checked;
        saveProgress();
        startButton.disabled = box.checked === false;
        if (progress.activeQuiz !== null && box.checked) {
            continueLink.hidden = false;
        }
        if (!box.checked) {
            continueLink.hidden = true;
        }
    });

    startButton.addEventListener("click", function () {
        if (box.checked) {
            window.location.href = "quiz.html?retry=1";
        }
    });
}

document.addEventListener("DOMContentLoaded", startTrainingPage);

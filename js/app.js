
const storageKey = "spotTheScam";

let progressData = null;

function defaultProgress() {
    return {
        case1Best: 0,
        case1Passed: false,
        case1Bonus: false,
        case1Tried: false,
        case2Best: 0,
        case2Passed: false,
        case2Bonus: false,
        case2Tried: false,
        case3Best: 0,
        case3Passed: false,
        case3Bonus: false,
        case3Tried: false,
        xp: 0,
        badges: [],
        activeCase1: null,
        activeCase2: null,
        activeCase3: null,
        lastResult: null,
        case1Cycle: 0,
        case2Cycle: 0,
        case3Cycle: 0
    };
}

function loadProgress() {
    if (progressData !== null) {
        return progressData;
    }

    const saved = localStorage.getItem(storageKey);
    try {
        if (saved) {
            progressData = JSON.parse(saved);
            repairProgress(progressData);
        } else {
            progressData = defaultProgress();
        }
    } catch (error) {
        progressData = defaultProgress();
    }

    return progressData;
}

function repairProgress(data) {
    const fresh = defaultProgress();
    const keys = Object.keys(fresh);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (data[key] === undefined) {
            data[key] = fresh[key];
        }
    }
}

function saveProgress() {
    localStorage.setItem(storageKey, JSON.stringify(progressData));
}

function resetProgress() {
    localStorage.removeItem(storageKey);
    progressData = defaultProgress();
    saveProgress();
}

function getRank(xp) {
    if (xp >= 800) {
        return { name: "Principal", next: 0, base: 800 };
    }
    if (xp >= 500) {
        return { name: "Lead", next: 800, base: 500 };
    }
    if (xp >= 250) {
        return { name: "Specialist", next: 500, base: 250 };
    }
    if (xp >= 100) {
        return { name: "Analyst", next: 250, base: 100 };
    }
    return { name: "Beginner", next: 100, base: 0 };
}

function giveBadge(badgeId) {
    const data = loadProgress();
    if (data.badges.indexOf(badgeId) === -1) {
        data.badges.push(badgeId);
        saveProgress();
    }
}

function caseIsOpen(caseNumber) {
    const data = loadProgress();
    if (caseNumber === 1) {
        return true;
    }
    if (caseNumber === 2) {
        return data.case1Passed === true;
    }
    if (caseNumber === 3) {
        return data.case2Passed === true;
    }
    return false;
}

function addScoreXp(oldBest, newScore) {
    if (newScore > oldBest) {
        const data = loadProgress();
        const extraPoints = (newScore - oldBest) * 10;
        data.xp = data.xp + extraPoints;
        saveProgress();
    }
}

function recordCaseScore(caseNumber, score) {
    const data = loadProgress();
    const bestName = "case" + caseNumber + "Best";
    const passName = "case" + caseNumber + "Passed";
    const bonusName = "case" + caseNumber + "Bonus";
    const oldBest = data[bestName];

    addScoreXp(oldBest, score);

    if (score > data[bestName]) {
        data[bestName] = score;
    }

    data["case" + caseNumber + "Tried"] = true;

    const passMark = 15;

    if (score >= passMark) {
        data[passName] = true;
        if (data[bonusName] === false) {
            data.xp = data.xp + 50;
            data[bonusName] = true;
        }
        if (caseNumber === 1) {
            giveBadge("email-expert");
        }
        if (caseNumber === 2) {
            giveBadge("safe-choices");
        }
        if (caseNumber === 3) {
            giveBadge("real-world-ready");
        }
    }

    saveProgress();
}

function setFeedback(boxId, text, mood) {
    const box = document.getElementById(boxId);
    if (!box) {
        return;
    }
    box.textContent = text;
    if (text === "") {
        box.className = "feedback";
    } else {
        box.className = "feedback " + mood;
    }
}

function bringIntoView(elementId, where) {
    const element = document.getElementById(elementId);
    if (!element || element.hidden) {
        return;
    }

    let bottomEdge = window.innerHeight;
    const stickyBar = document.querySelector(".next-bar");
    if (stickyBar && stickyBar.offsetHeight > 0 && !stickyBar.contains(element)) {
        bottomEdge = bottomEdge - stickyBar.offsetHeight;
    }

    const box = element.getBoundingClientRect();
    const fullyVisible = box.top >= 0 && box.bottom <= bottomEdge;
    if (fullyVisible) {
        return;
    }
    let behavior = "smooth";
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        behavior = "auto";
    }
    element.scrollIntoView({ behavior: behavior, block: where || "center" });
}

const badgeCatalog = [
    { id: "email-expert", name: "Email Expert", detail: "Pass Case 1" },
    { id: "safe-choices", name: "Safe Choices", detail: "Pass Case 2" },
    { id: "real-world-ready", name: "Real-World Ready", detail: "Pass Case 3" }
];

function showDashboard() {
    const grid = document.getElementById("case-grid");
    if (!grid) {
        return;
    }

    const data = loadProgress();
    const rank = getRank(data.xp);

    document.getElementById("xp-count").textContent = String(data.xp);
    document.getElementById("rank-name").textContent = rank.name;

    const rankBar = document.getElementById("rank-bar");
    if (rank.next === 0) {
        rankBar.style.width = "100%";
        document.getElementById("rank-next").textContent = "You reached the top rank.";
    } else {
        const span = rank.next - rank.base;
        const done = data.xp - rank.base;
        const percent = Math.round((done / span) * 100);
        rankBar.style.width = percent + "%";
        document.getElementById("rank-next").textContent = "Next rank at " + rank.next + " XP";
    }

    fillCaseCard(1, data, 20, 15);
    fillCaseCard(2, data, 20, 15);
    fillCaseCard(3, data, 20, 15);
    fillSkills(data);
    fillBadges(data);
    fillOverall(data);
    fillNextStep(data);
}

function fillNextStep(data) {
    const button = document.getElementById("next-step-btn");
    const note = document.getElementById("next-step-text");
    if (!button || !note) {
        return;
    }

    const caseNames = ["", "Email Check", "What Would You Do?", "Real-World Challenge"];
    const caseTotals = [0, 20, 20, 20];

    for (let caseNumber = 1; caseNumber <= 3; caseNumber++) {
        const active = data["activeCase" + caseNumber];
        const passed = data["case" + caseNumber + "Passed"];
        const tried = data["case" + caseNumber + "Tried"];

        if (active) {
            button.textContent = "Continue Case " + caseNumber;
            button.href = "case" + caseNumber + ".html";
            note.textContent = "You stopped on question " + (active.index + 1) + " of " + caseTotals[caseNumber] + " in " + caseNames[caseNumber] + ".";
            return;
        }
        if (!passed) {
            if (tried) {
                button.textContent = "Try Case " + caseNumber + " again";
                note.textContent = caseNames[caseNumber] + " is not passed yet. 15 correct answers out of " + caseTotals[caseNumber] + " is enough.";
            } else {
                button.textContent = "Start Case " + caseNumber;
                note.textContent = caseNames[caseNumber] + " is open. It has " + caseTotals[caseNumber] + " questions.";
            }
            button.href = "case" + caseNumber + ".html?retry=1";
            return;
        }
    }

    button.textContent = "Play Case 1 again";
    button.href = "case1.html?retry=1";
    note.textContent = "Everything is finished. Replay a case if you want more practice.";
}

function fillCaseCard(caseNumber, data, total, passMark) {
    const open = caseIsOpen(caseNumber);
    const best = data["case" + caseNumber + "Best"];
    const passed = data["case" + caseNumber + "Passed"];
    const active = data["activeCase" + caseNumber];
    const status = document.getElementById("case" + caseNumber + "-status");
    const bestText = document.getElementById("case" + caseNumber + "-best");
    const bar = document.getElementById("case" + caseNumber + "-bar");
    const button = document.getElementById("case" + caseNumber + "-btn");
    const lockNote = document.getElementById("case" + caseNumber + "-lock");
    const restart = document.getElementById("case" + caseNumber + "-restart");

    if (data["case" + caseNumber + "Tried"] || best > 0) {
        let shownBest = best;
        if (shownBest > total) {
            shownBest = total;
        }
        bestText.textContent = "Best score: " + shownBest + "/" + total;
        bar.style.width = Math.round((shownBest / total) * 100) + "%";
    } else {
        bestText.textContent = "Best score: not tried yet";
        bar.style.width = "0%";
    }

    if (!open) {
        status.textContent = "Recommended after Case " + (caseNumber - 1);
        status.className = "pill pill-sun";
        button.textContent = "Start";
        button.className = "btn";
        button.removeAttribute("aria-disabled");
        button.href = "case" + caseNumber + ".html?retry=1";
        button.onclick = function (e) {
            const prevCase = caseNumber - 1;
            const confirmProceed = confirm(
                "We recommend finishing Case " + prevCase + " first to practice the core skills.\n\nDo you want to proceed to Case " + caseNumber + " anyway?"
            );
            if (!confirmProceed) {
                e.preventDefault();
                return false;
            }
        };
        lockNote.textContent = "Suggested: finish Case " + (caseNumber - 1) + " first, or start now anyway.";
        lockNote.hidden = false;
        restart.hidden = true;
        return;
    }

    button.onclick = null;
    lockNote.hidden = true;
    button.className = "btn";
    button.removeAttribute("aria-disabled");

    if (passed) {
        status.textContent = "Passed";
        status.className = "pill pill-good";
    } else if (active) {
        status.textContent = "In progress";
        status.className = "pill pill-sun";
    } else {
        status.textContent = "Ready";
        status.className = "pill";
    }

    if (active) {
        button.textContent = "Continue";
        button.href = "case" + caseNumber + ".html";
        restart.hidden = false;
        restart.href = "case" + caseNumber + ".html?retry=1";
    } else if (best > 0) {
        button.textContent = "Play Again";
        button.href = "case" + caseNumber + ".html?retry=1";
        restart.hidden = true;
    } else {
        button.textContent = "Start";
        button.href = "case" + caseNumber + ".html?retry=1";
        restart.hidden = true;
    }

    if (passed && best < passMark) {
        status.textContent = "Passed";
    }
}

function fillSkills(data) {
    setSkill("skill-email", data.case1Best, 20, data.case1Tried);
    setSkill("skill-choices", data.case2Best, 20, data.case2Tried);
    setSkill("skill-world", data.case3Best, 20, data.case3Tried);
}

function setSkill(id, score, total, tried) {
    const label = document.getElementById(id + "-label");
    const bar = document.getElementById(id + "-bar");
    if (!tried) {
        label.textContent = "Not tried yet";
        bar.style.width = "0%";
        return;
    }
    let shownScore = score;
    if (shownScore > total) {
        shownScore = total;
    }
    const percent = Math.round((shownScore / total) * 100);
    label.textContent = shownScore + "/" + total + " (" + percent + "%)";
    bar.style.width = percent + "%";
}

function fillBadges(data) {
    const earnedBox = document.getElementById("earned-badges");
    const laterBox = document.getElementById("later-badges");
    earnedBox.innerHTML = "";
    laterBox.innerHTML = "";

    let earnedCount = 0;
    for (let i = 0; i < badgeCatalog.length; i++) {
        const badge = badgeCatalog[i];
        const item = document.createElement("li");
        item.className = "badge-item";
        item.textContent = badge.name + " — " + badge.detail;
        if (data.badges.indexOf(badge.id) !== -1) {
            earnedBox.appendChild(item);
            earnedCount = earnedCount + 1;
        } else {
            item.className = "badge-item badge-wait";
            laterBox.appendChild(item);
        }
    }

    const empty = document.getElementById("no-badges");
    if (earnedCount === 0) {
        empty.hidden = false;
    } else {
        empty.hidden = true;
    }

    const laterTitle = document.getElementById("later-title");
    if (laterBox.children.length === 0) {
        laterTitle.hidden = true;
    } else {
        laterTitle.hidden = false;
    }
}

function fillOverall(data) {
    let done = 0;
    if (data.case1Passed) {
        done = done + 1;
    }
    if (data.case2Passed) {
        done = done + 1;
    }
    if (data.case3Passed) {
        done = done + 1;
    }
    document.getElementById("overall-label").textContent = done + " of 3 passed";
    document.getElementById("overall-bar").style.width = Math.round(done * 100 / 3) + "%";
}

function startResetButton() {
    const button = document.getElementById("reset-btn");
    if (!button) {
        return;
    }

    button.addEventListener("click", function () {
        const yes = confirm("This clears scores and badges saved in this browser. Continue?");
        if (yes) {
            resetProgress();
            showDashboard();
        }
    });
}

function blockLockedLinks() {
    const grid = document.getElementById("case-grid");
    if (!grid) {
        return;
    }

    grid.addEventListener("click", function (event) {
        const link = event.target.closest("a");
        if (link && link.getAttribute("aria-disabled") === "true") {
            event.preventDefault();
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    showDashboard();
    startResetButton();
    blockLockedLinks();
});

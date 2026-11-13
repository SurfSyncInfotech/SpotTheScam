
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
        return { name: "Safety Pro", next: 0, base: 800 };
    }
    if (xp >= 500) {
        return { name: "Scam Detector", next: 800, base: 500 };
    }
    if (xp >= 250) {
        return { name: "Clue Spotter", next: 500, base: 250 };
    }
    if (xp >= 100) {
        return { name: "Careful Reader", next: 250, base: 100 };
    }
    return { name: "Getting Started", next: 100, base: 0 };
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

function getEffectiveXp(data) {
    let effective = data.xp || 0;
    for (let c = 1; c <= 3; c++) {
        const active = data["activeCase" + c];
        const best = data["case" + c + "Best"] || 0;
        if (active && active.score) {
            const activePts = active.score * 10;
            const finalizedPts = best * 10;
            if (activePts > finalizedPts) {
                effective += (activePts - finalizedPts);
            }
        }
    }
    return effective;
}

function showDashboard() {
    const grid = document.getElementById("case-grid");
    if (!grid) {
        return;
    }

    const data = loadProgress();
    const effectiveXp = getEffectiveXp(data);
    const rank = getRank(effectiveXp);

    const xpCount = document.getElementById("xp-count");
    if (xpCount) xpCount.textContent = String(effectiveXp);
    const xpPointsVal = document.getElementById("xp-points-val");
    if (xpPointsVal) xpPointsVal.textContent = effectiveXp + " XP";

    const rankName = document.getElementById("rank-name");
    if (rankName) rankName.textContent = rank.name;
    const rankDisplayVal = document.getElementById("rank-display-val");
    if (rankDisplayVal) rankDisplayVal.textContent = rank.name;

    const rankBar = document.getElementById("rank-bar");
    const rankNext = document.getElementById("rank-next");
    if (rankBar && rankNext) {
        if (rank.next === 0) {
            rankBar.style.width = "100%";
            rankNext.textContent = "You reached the top rank.";
        } else {
            const span = rank.next - rank.base;
            const done = effectiveXp - rank.base;
            const percent = Math.min(100, Math.round((done / span) * 100));
            rankBar.style.width = percent + "%";
            rankNext.textContent = "Next rank at " + rank.next + " XP";
        }
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
    if (!button) {
        return;
    }

    const caseNames = ["", "Case 1 · Email Check", "Case 2 · What Would You Do?", "Case 3 · Mixed Scenarios"];
    const caseTotals = [0, 20, 20, 20];

    for (let caseNumber = 1; caseNumber <= 3; caseNumber++) {
        const active = data["activeCase" + caseNumber];
        const passed = data["case" + caseNumber + "Passed"];
        const tried = data["case" + caseNumber + "Tried"];

        if (active) {
            button.innerHTML = "Continue Case " + caseNumber + " &rarr;";
            button.href = "case" + caseNumber + ".html";
            if (note) note.textContent = "You stopped on question " + (active.index + 1) + " of " + caseTotals[caseNumber] + " in " + caseNames[caseNumber] + ".";
            return;
        }
        if (!passed) {
            if (tried) {
                button.innerHTML = "Try Case " + caseNumber + " again &rarr;";
                if (note) note.textContent = caseNames[caseNumber] + " is not passed yet. 15 correct answers out of " + caseTotals[caseNumber] + " is enough.";
            } else {
                button.innerHTML = "Start Case " + caseNumber + " &rarr;";
                if (note) note.textContent = caseNames[caseNumber] + " is open. It has " + caseTotals[caseNumber] + " questions.";
            }
            button.href = "case" + caseNumber + ".html?retry=1";
            return;
        }
    }

    button.innerHTML = "Play Case 1 again &rarr;";
    button.href = "case1.html?retry=1";
    if (note) note.textContent = "Everything is finished. Replay a case if you want more practice.";
}

function fillCaseCard(caseNumber, data, total, passMark) {
    const open = caseIsOpen(caseNumber);
    const best = data["case" + caseNumber + "Best"] || 0;
    const passed = data["case" + caseNumber + "Passed"];
    const active = data["activeCase" + caseNumber];
    const tried = data["case" + caseNumber + "Tried"];

    const status = document.getElementById("case" + caseNumber + "-status");
    const statusDisplay = document.getElementById("case" + caseNumber + "-status-display");
    const bestText = document.getElementById("case" + caseNumber + "-best");
    const bar = document.getElementById("case" + caseNumber + "-bar");
    const button = document.getElementById("case" + caseNumber + "-btn");
    const lockNote = document.getElementById("case" + caseNumber + "-lock");
    const restart = document.getElementById("case" + caseNumber + "-restart");
    const percentText = document.getElementById("case" + caseNumber + "-percent-text");

    let shownBest = best > total ? total : best;
    let cardPct = 0;
    let scoreMsg = "";

    if (active && active.index > 0) {
        cardPct = Math.round((active.index / total) * 100);
        if (shownBest > 0) {
            scoreMsg = "In progress: " + active.index + "/" + total + " (Best: " + shownBest + "/" + total + ")";
        } else {
            scoreMsg = "In progress: " + active.index + "/" + total + " completed (" + (active.score || 0) + " correct)";
        }
    } else if (tried || shownBest > 0) {
        cardPct = Math.round((shownBest / total) * 100);
        scoreMsg = "Best score: " + shownBest + "/" + total;
    } else {
        cardPct = 0;
        scoreMsg = "Best score: not tried yet";
    }

    if (bestText) bestText.textContent = scoreMsg;
    if (bar) bar.style.width = cardPct + "%";
    if (percentText) percentText.textContent = cardPct + "%";

    if (!open) {
        if (status) {
            status.textContent = "Recommended after Case " + (caseNumber - 1);
            status.className = "pill pill-sun";
        }
        if (statusDisplay) statusDisplay.textContent = "Recommended after Case " + (caseNumber - 1);
        if (button) {
            button.innerHTML = "Start &rarr;";
            button.className = "btn-case-action btn-case-light";
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
        }
        if (lockNote) {
            lockNote.textContent = "Suggested: finish Case " + (caseNumber - 1) + " first, or start now anyway.";
            lockNote.hidden = false;
        }
        if (restart) restart.hidden = true;
        return;
    }

    if (button) {
        button.onclick = null;
        button.removeAttribute("aria-disabled");
    }
    if (lockNote) lockNote.hidden = true;

    if (passed) {
        if (status) {
            status.textContent = "Passed";
            status.className = "pill pill-good";
        }
        if (statusDisplay) statusDisplay.textContent = "Passed";
    } else if (active) {
        if (status) {
            status.textContent = "In progress";
            status.className = "pill pill-sun";
        }
        if (statusDisplay) statusDisplay.textContent = "In Progress";
    } else {
        if (status) {
            status.textContent = "Ready";
            status.className = "pill";
        }
        if (statusDisplay) statusDisplay.textContent = (best > 0 ? "Started" : "Not Started");
    }

    if (button) {
        if (active) {
            button.innerHTML = "Continue &rarr;";
            button.className = "btn-case-action btn-case-dark";
            button.href = "case" + caseNumber + ".html";
            if (restart) {
                restart.hidden = false;
                restart.href = "case" + caseNumber + ".html?retry=1";
            }
        } else if (best > 0) {
            button.innerHTML = "Play Again &rarr;";
            button.className = "btn-case-action btn-case-light";
            button.href = "case" + caseNumber + ".html?retry=1";
            if (restart) restart.hidden = true;
        } else {
            button.innerHTML = "Start &rarr;";
            button.className = (caseNumber === 1 ? "btn-case-action btn-case-dark" : "btn-case-action btn-case-light");
            button.href = "case" + caseNumber + ".html?retry=1";
            if (restart) restart.hidden = true;
        }
    }
}

function fillSkills(data) {
    setSkill("skill-email", data.case1Best, 20, data.case1Tried, data.activeCase1);
    setSkill("skill-choices", data.case2Best, 20, data.case2Tried, data.activeCase2);
    setSkill("skill-world", data.case3Best, 20, data.case3Tried, data.activeCase3);
}

function setSkill(id, score, total, tried, active) {
    const label = document.getElementById(id + "-label");
    const bar = document.getElementById(id + "-bar");
    if (!label || !bar) return;

    if (active && active.index > 0) {
        const pct = Math.round((active.index / total) * 100);
        label.textContent = (active.score || 0) + "/" + active.index + " (" + pct + "% through)";
        bar.style.width = pct + "%";
        return;
    }

    if (!tried && !score) {
        label.textContent = "Not tried yet";
        bar.style.width = "0%";
        return;
    }
    let shownScore = score > total ? total : (score || 0);
    const percent = Math.round((shownScore / total) * 100);
    label.textContent = shownScore + "/" + total + " (" + percent + "%)";
    bar.style.width = percent + "%";
}

function fillBadges(data) {
    const earnedBox = document.getElementById("earned-badges");
    const laterBox = document.getElementById("later-badges");
    if (!earnedBox || !laterBox) return;
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
    if (empty) {
        empty.hidden = (earnedCount !== 0);
    }

    const laterTitle = document.getElementById("later-title");
    if (laterTitle) {
        laterTitle.hidden = (laterBox.children.length === 0);
    }
}

function fillOverall(data) {
    let done = 0;
    if (data.case1Passed) done = done + 1;
    if (data.case2Passed) done = done + 1;
    if (data.case3Passed) done = done + 1;

    const overallLabel = document.getElementById("overall-label");
    if (overallLabel) overallLabel.textContent = done + " of 3 passed";
    const overallBar = document.getElementById("overall-bar");
    if (overallBar) overallBar.style.width = Math.round(done * 100 / 3) + "%";

    const casesCompletedVal = document.getElementById("cases-completed-val");
    if (casesCompletedVal) casesCompletedVal.textContent = done + " / 3";

    // Progress Donut Circle Computation across 60 total questions
    let questionsDone = 0;
    for (let c = 1; c <= 3; c++) {
        const passed = data["case" + c + "Passed"];
        const tried = data["case" + c + "Tried"];
        const active = data["activeCase" + c];
        if (passed || tried) {
            questionsDone += 20;
        } else if (active && active.index) {
            questionsDone += active.index;
        }
    }

    let overallPercent = Math.round((questionsDone / 60) * 100);
    if (questionsDone > 0 && overallPercent === 0) {
        overallPercent = 1;
    }

    const progressPercentVal = document.getElementById("progress-percent-val");
    if (progressPercentVal) progressPercentVal.textContent = overallPercent + "%";

    const circle = document.getElementById("progress-circle-fill");
    if (circle) {
        const circumference = 301.59; // 2 * pi * 48
        const offset = circumference - (overallPercent / 100) * circumference;
        circle.style.strokeDashoffset = String(offset);
    }
}

function initMobileNav() {
    const toggle = document.getElementById("mobile-toggle");
    const nav = document.getElementById("site-nav");
    if (!toggle || !nav) {
        return;
    }
    toggle.addEventListener("click", function (e) {
        e.stopPropagation();
        const isOpen = nav.classList.toggle("mobile-open");
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    document.addEventListener("click", function (e) {
        if (!nav.contains(e.target) && !toggle.contains(e.target)) {
            nav.classList.remove("mobile-open");
            toggle.setAttribute("aria-expanded", "false");
        }
    });
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
    initMobileNav();
});

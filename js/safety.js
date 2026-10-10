// Opening the Safety Guide earns the Safety Reader badge once.

function markSafetyVisit() {
    const data = loadProgress();
    if (data.safetyVisited === false) {
        data.safetyVisited = true;
        data.xp = data.xp + 20;
        saveProgress();
        giveBadge("safety-reader");
    }
}

document.addEventListener("DOMContentLoaded", markSafetyVisit);

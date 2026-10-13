(function () {
  var button = document.getElementById("install-btn");
  var note = document.getElementById("install-note");
  var waitingPrompt = null;

  function alreadyInstalled() {
    if (window.navigator.standalone === true) return true;
    return window.matchMedia("(display-mode: standalone)").matches;
  }

  function isAppleMobile() {
    return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
  }

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
  }

  if (!button || alreadyInstalled()) return;

  button.hidden = false;

  window.addEventListener("beforeinstallprompt", function (event) {
    event.preventDefault();
    waitingPrompt = event;
    button.hidden = false;
  });

  button.addEventListener("click", function () {
    if (waitingPrompt) {
      waitingPrompt.prompt();
      waitingPrompt.userChoice.then(function (choice) {
        waitingPrompt = null;
        if (choice.outcome === "accepted") {
          button.hidden = true;
          if (note) note.hidden = true;
        }
      });
      return;
    }

    if (!note) return;
    note.hidden = false;
    if (isAppleMobile()) {
      note.textContent = "On iPhone or iPad, tap Share, then tap Add to Home Screen.";
    } else {
      note.textContent = "Open the browser menu and choose Install app, or Add to Home Screen.";
    }
  });

  window.addEventListener("appinstalled", function () {
    waitingPrompt = null;
    button.hidden = true;
    if (note) note.hidden = true;
  });
})();

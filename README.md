# Spot the Scam

Spot the Scam is a browser activity for Class 5 students (about 10–11 years old). It teaches students to notice fake emails, pressure messages, and unsafe requests.

There is no login. The app does not ask for a name, password, home address, or other personal information. It also does not include a teacher dashboard.

## How to run it

The pages can open directly, but a small local server is the better way to test.

1. Open a terminal in the `spot-the-scam` folder.
2. Start a server:

```text
python -m http.server 8080
```

3. In the browser, open `http://localhost:8080`.

If Python is not installed, you can double-click `index.html`. Progress is still saved in that browser.

## What is in the app

- **Home dashboard:** one big "Your next step" button that always points at the next thing to do, plus the three detective cases, the Safety Guide, Company Training, XP, rank, badges, and (folded away) skill stats.
- **Case 1 — Spot the Scam:** 20 emails (fake senders, fake urgency, and information requests).
- **Case 2 — What Would You Do?:** 20 situations.
- **Case 3 — Real-World Challenge:** 20 messages with a clue and a safe action.
- **Safety Guide:** Stop, Check, and Verify, plus official report links.
- **Company Training:** a labelled video placeholder, five takeaways, and an acknowledgement step.
- **Company Quiz:** 20 questions in a shuffled order, with an "All my answers" button (the Summary).
- **Result page:** score, retry, and "See my answers" review.

## How a case screen works (made for young students)

- The email or situation stays on the left; the questions are on the right. On a phone they stack.
- Each question has a numbered **Step** tag ("Step 1", "Step 2", "Step 3") so students always know where they are.
- Every choice button has a one-line helper under it, for example *Fake Sender — the email address or name looks wrong.*
- After an answer, a coloured box says **Correct!** or **Not quite** with a short explanation, and the screen scrolls to the next step by itself.
- The **Next** button is large and sticks to the bottom of the screen so it never has to be hunted for.
- The lesson topic is hidden until both answers are given, so it cannot give the answer away.

## Pass marks

The official case score uses the main answer only.

| Activity | Main answer | Pass mark |
| --- | --- | --- |
| Case 1 | Scam or Legitimate | 15 out of 20 |
| Case 2 | What would you do? | 15 out of 20 |
| Case 3 | Scam or Legitimate | 15 out of 20 |
| Company Quiz | The chosen option | 16 out of 20 |

In Case 1 and Case 3, clue answers are extra practice. In Case 3, the safe-action answer is extra practice too. Those practice scores do not decide the pass mark.

A failed try can be reviewed and retried. There is no limit on retries.

## Unlock rules

- Case 1 is open from the start.
- Case 2 opens after Case 1 is passed (15/20).
- Case 3 opens after Case 2 is passed (15/20).
- The Safety Guide is always open.
- Company Training does not depend on the detective cases.
- The Company Quiz opens after the student checks the acknowledgement box.

A later retry that scores below the pass mark does not lock a case again.

## How the simple code works

### Arrays

`js/questions.js` stores the questions in arrays. An array is a list. Case 1 uses `case1Questions`, which has 20 objects. Each object holds the sender, message, choices, correct answer, clue, and explanation.

### Answer checking

The page shows one question. When a student clicks a button, `checkAnswer()` compares the click with `correctAnswer` using `if` and `else`. A match adds 1 to `score`.

### Scoring

At the end, the app compares `score` with the pass mark. Case 1, Case 2, and Case 3 pass when `score >= 15`. The quiz passes when `score >= 16`.

### Progress saving

`loadProgress()` reads one record from `localStorage`. `saveProgress()` writes it back. `resetProgress()` clears that record after a confirmation message.

Saved items include case completion, best scores, XP, badges, training acknowledgement, and the best quiz score.

### Case unlocking

`caseIsOpen()` checks the saved pass flags. Case 2 is open only when `case1Passed` is true. Case 3 is open only when `case2Passed` is true.

## Points, ranks, and badges

- Each point above a previous best score adds 10 XP.
- The first time a case is passed adds 50 XP.
- The first time the quiz is passed adds 80 XP and the Security Certified badge.
- The first visit to the Safety Guide adds 20 XP and the Safety Reader badge.

Ranks:

- Spot The Scam: 0 XP
- Junior Detective: 100 XP
- Case Detective: 250 XP
- Senior Detective: 500 XP
- Master Detective: 800 XP

Badges: Email Expert, Safe Choices, Real-World Ready, Safety Reader, and Security Certified.

## Shared classroom devices

Progress belongs to the current browser on the current device. The app cannot tell students apart. If a different student will use the computer, use **Reset Progress** on the dashboard first.

`localStorage` does not send results to a school server and cannot make a class report.

## Company video

The training page shows a placeholder. It is not a real video. When the real video is ready, put the file in `assets/videos/` and replace the placeholder on `training.html`.

## Files

```text
spot-the-scam/
|-- index.html
|-- case1.html
|-- case2.html
|-- case3.html
|-- safety.html
|-- training.html
|-- quiz.html
|-- result.html
|-- css/
|-- js/
|-- assets/
```

Each HTML page uses its matching file in `css/`. Those files import `css/base.css`, which holds the shared colours, buttons, and layout rules. Question lists live in `js/questions.js`. Shared saving lives in `js/app.js`.

## Official safety links

The Safety Guide links to:

- https://consumer.ftc.gov/
- https://www.identitytheft.gov/
- https://www.ic3.gov/
- https://www.cisa.gov/

Students should ask a parent, teacher, or trusted adult before using those report sites.

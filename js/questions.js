// Predefined questions for Spot the Scam.
// The functions that show questions live in the case and quiz files.

const case1Questions = [
    {
        id: 1,
        category: "Fake Sender",
        sender: "prizes@game-reward-example.invalid",
        subject: "You won a free game prize!",
        message: "Hello player! StarGame Gifts picked your name. Click here to claim a free game console.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clue: "Fake Sender",
        explanation: "A pretend game company is using an untrusted address. Ask a trusted adult before you click."
    },
    {
        id: 2,
        category: "Fake Sender",
        sender: "prize-desk@school-winner-example.invalid",
        subject: "School prize waiting for you",
        message: "You won the school tablet prize. Open the link and type your student password to collect it.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clue: "Fake Sender",
        explanation: "A real school would not send a prize from an unknown address or ask for your password."
    },
    {
        id: 3,
        category: "Fake Sender",
        sender: "mrs.lee.rewards@mail-free-example.invalid",
        subject: "Message from your teacher",
        message: "This is Mrs. Lee. I need you to open this link tonight and enter the class password.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clue: "Fake Sender",
        explanation: "Someone can pretend to be a teacher. Check with the real teacher in person before you click."
    },
    {
        id: 4,
        category: "Fake Sender",
        sender: "parcel-alert@fastbox-example.invalid",
        subject: "Your parcel could not be delivered",
        message: "FastBox tried to deliver a surprise parcel. Confirm your home address in the link.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clue: "Fake Sender",
        explanation: "This delivery company is fictional, and the address is not a trusted school or family sender."
    },
    {
        id: 5,
        category: "Fake Sender",
        sender: "account-team@viewtube-example.invalid",
        subject: "ViewTube video warning",
        message: "Your ViewTube page will be hidden. Sign in through our message link to keep your videos.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clue: "Fake Sender",
        explanation: "The sender is pretending to be a video site. Do not sign in from a message link."
    },
    {
        id: 6,
        category: "Fake Sender",
        sender: "help@schoool-portel-example.invalid",
        subject: "Schoool Portel password check",
        message: "Your Schoool Portel account looks wrong. Type your password on this page so we can fix it.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clue: "Fake Sender",
        explanation: "The organization name is misspelled. That is a clue that the sender is not the real service."
    },
    {
        id: 10,
        category: "Fake Sender",
        sender: "library@riverside-school.example",
        subject: "Library book due next Friday",
        message: "Hello, the school library book on your card is due next Friday. You can return it at the library desk.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Legitimate",
        clue: "No warning sign",
        explanation: "The sender is the school library, the date is reasonable, and the message does not ask for secrets."
    },
    {
        id: 11,
        category: "Fake Urgency",
        sender: "alerts@player-zone-example.invalid",
        subject: "Your account closes in ten minutes",
        message: "Your game account closes in ten minutes. Click now and enter your password or everything will be deleted.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clue: "Fake Urgency",
        explanation: "A ten-minute threat is pressure. Stop, and ask a trusted adult instead of rushing."
    },
    {
        id: 12,
        category: "Fake Urgency",
        sender: "claim-now@gift-burst-example.invalid",
        subject: "Claim your prize immediately",
        message: "Your prize expires the second you close this message. Click immediately and send your home address.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clue: "Fake Urgency",
        explanation: "Real prizes do not disappear if you pause to check. Immediate pressure is a scam clue."
    },
    {
        id: 13,
        category: "Fake Urgency",
        sender: "rewards@pixel-play-example.invalid",
        subject: "Game reward expires tonight",
        message: "Your free game coins expire tonight. Log in through this link before midnight or they vanish.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clue: "Fake Urgency",
        explanation: "An expiring game reward is often used to make you click quickly. Check with a trusted adult."
    },
    {
        id: 14,
        category: "Fake Urgency",
        sender: "security@account-guard-example.invalid",
        subject: "We will delete your account",
        message: "If you do not reply with your password today, we will delete your account forever.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clue: "Fake Urgency",
        explanation: "Threats to delete an account are a pressure trick. Never send a password by message."
    },
    {
        id: 15,
        category: "Fake Urgency",
        sender: "warning@safe-click-example.invalid",
        subject: "Warning: act immediately",
        message: "A virus warning was found. Act immediately and install the file in this message.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clue: "Fake Urgency",
        explanation: "A fake warning that demands immediate action is unsafe. Do not install surprise files."
    },
    {
        id: 19,
        category: "Fake Urgency",
        sender: "teacher@riverside-school.example",
        subject: "Project reminder for Friday",
        message: "Please bring your science poster on Friday. If you need help, see me in class tomorrow.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Legitimate",
        clue: "No warning sign",
        explanation: "This reminder has a reasonable school deadline. It does not threaten you or ask for secrets."
    },
    {
        id: 20,
        category: "Fake Urgency",
        sender: "office@riverside-school.example",
        subject: "Class photo day next week",
        message: "Class photo day is next Wednesday. Wear your school shirt if you want to. No reply is needed.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Legitimate",
        clue: "No warning sign",
        explanation: "This is a harmless school note. There is no timer, threat, link, or request for private information."
    },
    {
        id: 21,
        category: "Information Requests",
        sender: "coach@pixel-play-example.invalid",
        subject: "Share your game password",
        message: "I can give you bonus levels. Tell me your game password so I can add them.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clue: "Information Requests",
        explanation: "Nobody needs your game password. Keep it private and tell a trusted adult."
    },
    {
        id: 22,
        category: "Information Requests",
        sender: "codes@login-helper-example.invalid",
        subject: "Send your verification code",
        message: "We sent you a one-time code. Read it to me so I can make sure you are the real owner.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clue: "Information Requests",
        explanation: "A one-time code is private. Sharing it can let someone else into the account."
    },
    {
        id: 23,
        category: "Information Requests",
        sender: "gifts@free-prize-hut-example.invalid",
        subject: "Where should we send the prize?",
        message: "You won a toy prize. Reply with your home address and a photo of your house.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clue: "Information Requests",
        explanation: "Do not send your home address for a surprise prize. Ask a trusted adult first."
    },
    {
        id: 24,
        category: "Information Requests",
        sender: "care@family-bank-example.invalid",
        subject: "Update the family bank details",
        message: "We need the family bank card number and password to send your school refund.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clue: "Information Requests",
        explanation: "Children should never share bank details. Stop and tell a parent or trusted adult."
    },
    {
        id: 29,
        category: "Information Requests",
        sender: "office@riverside-school.example",
        subject: "Field trip date",
        message: "The museum field trip is on May 12. Bring a water bottle. This note does not ask you to reply.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Legitimate",
        clue: "No warning sign",
        explanation: "This school note shares ordinary information and does not request private details."
    },
    {
        id: 30,
        category: "Information Requests",
        sender: "teacher@riverside-school.example",
        subject: "A safety reminder from class",
        message: "If any message asks for your password, photo, or address, do not reply. Tell a trusted adult.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Legitimate",
        clue: "No warning sign",
        explanation: "This message tells you to ask a trusted adult. It does not ask you to share secrets."
    }
];

const case2Scenarios = [
    {
        id: 1,
        title: "A stranger asks for a password",
        scenario: "In a game chat, a stranger says, 'Tell me your password and I will give you rare coins.'",
        options: [
            "Tell them the password",
            "Stop and tell a trusted adult",
            "Type it to be polite"
        ],
        correctAnswer: "Stop and tell a trusted adult",
        explanation: "Passwords are private. Stop and tell a parent, teacher, or trusted adult."
    },
    {
        id: 2,
        title: "A suspicious free prize",
        scenario: "A game pop-up says you won a prize, but only if you click a bright link right now.",
        options: [
            "Click the prize link",
            "Ask a trusted adult before doing anything",
            "Send your home address to claim it"
        ],
        correctAnswer: "Ask a trusted adult before doing anything",
        explanation: "A surprise prize link can be unsafe. Pause and ask a trusted adult."
    },
    {
        id: 3,
        title: "An unexpected link",
        scenario: "A message from a name you do not know says, 'Open this link to see something cool.'",
        options: [
            "Open the link right away",
            "Stop and do not open it",
            "Forward it to all your friends"
        ],
        correctAnswer: "Stop and do not open it",
        explanation: "Unexpected links can be unsafe. Leave the link closed."
    },
    {
        id: 4,
        title: "A request for your home address",
        scenario: "Someone online says they will mail you a gift if you send your home address.",
        options: [
            "Send your home address",
            "Share a photo of your house",
            "Do not share it and tell a trusted adult"
        ],
        correctAnswer: "Do not share it and tell a trusted adult",
        explanation: "Your address is private. Do not share it with someone you do not know."
    },
    {
        id: 5,
        title: "A prize that must be claimed now",
        scenario: "A message says a prize disappears in two minutes unless you click and enter your password.",
        options: [
            "Rush to click before time runs out",
            "Pause and check with a trusted adult",
            "Give your password so the prize is saved"
        ],
        correctAnswer: "Pause and check with a trusted adult",
        explanation: "A tiny timer is pressure. Take your time and check with a trusted adult."
    },
    {
        id: 6,
        title: "A verification code",
        scenario: "You receive a one-time code. A person in chat says, 'Read that code to me.'",
        options: [
            "Read the code to the person",
            "Keep the code private and tell a trusted adult",
            "Post the code in the game chat"
        ],
        correctAnswer: "Keep the code private and tell a trusted adult",
        explanation: "A verification code is a secret. Sharing it can let someone enter an account."
    },
    {
        id: 7,
        title: "Someone pretends to be a trusted adult",
        scenario: "A new chat account says, 'I am your uncle. Send the family wifi password.' You cannot see his face.",
        options: [
            "Believe them because they used a family name",
            "Check with that adult in person or by a known phone number",
            "Send the information they want"
        ],
        correctAnswer: "Check with that adult in person or by a known phone number",
        explanation: "People can pretend to be someone you trust. Check using a way you already know is real."
    },
    {
        id: 8,
        title: "A suspicious school message",
        scenario: "An email says it is from school and asks you to enter your school password on a new page tonight.",
        options: [
            "Enter your school password on the new page",
            "Ask your teacher at school before you click",
            "Reply with your phone number"
        ],
        correctAnswer: "Ask your teacher at school before you click",
        explanation: "Check school messages with a teacher. Do not type your password on a surprise page."
    },
    {
        id: 9,
        title: "A stranger asks you to keep a secret",
        scenario: "Someone online says, 'I will send you a gift, but you must keep this chat secret from your family.'",
        options: [
            "Promise to keep the secret",
            "Tell a trusted adult",
            "Hide it and delete your messages"
        ],
        correctAnswer: "Tell a trusted adult",
        explanation: "Safe people do not ask you to hide messages from a trusted adult."
    },
    {
        id: 10,
        title: "A fake support person",
        scenario: "A support pop-up says, 'I can fix your account if you send your username and password.'",
        options: [
            "Give your username and password",
            "Stop and do not share account details",
            "Send a photo of the password on your screen"
        ],
        correctAnswer: "Stop and do not share account details",
        explanation: "Support people do not need your password. Stop and tell a trusted adult."
    },
    {
        id: 11,
        title: "An unexpected download",
        scenario: "A website offers a free game file you did not search for and says, 'Download it now.'",
        options: [
            "Download the file",
            "Do not download it and ask a trusted adult",
            "Open it to see if it is fun"
        ],
        correctAnswer: "Do not download it and ask a trusted adult",
        explanation: "Unexpected downloads can be unsafe. Ask a trusted adult before you open a file."
    },
    {
        id: 12,
        title: "An unexpected attachment",
        scenario: "An email you were not expecting has a file named 'open-me'. The message says to open it quickly.",
        options: [
            "Open the attachment",
            "Leave it closed and tell a trusted adult",
            "Forward the attachment to your class"
        ],
        correctAnswer: "Leave it closed and tell a trusted adult",
        explanation: "Leave surprise attachments closed. Show the message to a trusted adult."
    },
    {
        id: 13,
        title: "A friend sends a suspicious link",
        scenario: "A friend sends a link and says, 'Click this or I will lose my game account.' The message sounds strange.",
        options: [
            "Open it because a friend sent it",
            "Ask your friend in person and tell a trusted adult if it looks odd",
            "Click it and type your password"
        ],
        correctAnswer: "Ask your friend in person and tell a trusted adult if it looks odd",
        explanation: "A friend's account can be copied or misused. Ask them in person before you click."
    },
    {
        id: 14,
        title: "An ordinary school note",
        scenario: "Your teacher hands you a printed note: 'Art class is in room 12 on Thursday.' It has no link and asks for nothing.",
        options: [
            "Worry and throw it away",
            "Read the note. It does not ask for secrets",
            "Send the teacher your password just in case"
        ],
        correctAnswer: "Read the note. It does not ask for secrets",
        explanation: "Ordinary information with no pressure and no private request can be read safely."
    },
    {
        id: 15,
        title: "You are not sure",
        scenario: "A message might be real, but you feel unsure. It asks you to click before you ask anyone.",
        options: [
            "Click now and hope",
            "Guess and share a little information",
            "Stop and ask a trusted adult"
        ],
        correctAnswer: "Stop and ask a trusted adult",
        explanation: "If you are unsure, stop. Asking a trusted adult is a smart detective move."
    },
    {
        id: 16,
        title: "A pop-up says your coins will vanish",
        scenario: "A game pop-up says, 'Your coins disappear in one minute unless you tap this link now.'",
        options: [
            "Tap the link before the minute ends",
            "Close the pop-up and tell a trusted adult",
            "Type your password so the coins stay"
        ],
        correctAnswer: "Close the pop-up and tell a trusted adult",
        explanation: "A short timer is pressure. Close the pop-up and tell a trusted adult."
    },
    {
        id: 17,
        title: "Someone wants a photo of your student ID",
        scenario: "A person in a group chat says, 'Send a photo of your student ID so I can add you to the team.'",
        options: [
            "Send the photo",
            "Do not send it and tell a trusted adult",
            "Send a photo of your home instead"
        ],
        correctAnswer: "Do not send it and tell a trusted adult",
        explanation: "A student ID is private. Do not send a photo of it to someone online."
    },
    {
        id: 18,
        title: "A code from a text message",
        scenario: "An email says, 'Type the code from the text on your family's phone so we can check it is you.'",
        options: [
            "Type the code in the email",
            "Keep the code private and tell a trusted adult",
            "Reply with the code to be helpful"
        ],
        correctAnswer: "Keep the code private and tell a trusted adult",
        explanation: "A verification code is a secret. A real helper does not need you to type it into a message."
    },
    {
        id: 19,
        title: "A classmate hands you a note at school",
        scenario: "A classmate hands you a paper note in class: 'Soccer practice is after lunch on the field.' It has no link.",
        options: [
            "Throw it away because every note is a scam",
            "Read the note. It does not ask for secrets",
            "Write your password on the note and pass it back"
        ],
        correctAnswer: "Read the note. It does not ask for secrets",
        explanation: "A paper note with a practice time and no private request can be read safely."
    },
    {
        id: 20,
        title: "A download called 'free homework help'",
        scenario: "A website says, 'Download this file for free homework help,' but your teacher never mentioned it.",
        options: [
            "Download the file",
            "Do not download it and ask your teacher",
            "Send the file to the whole class"
        ],
        correctAnswer: "Do not download it and ask your teacher",
        explanation: "An unexpected download can be unsafe. Ask your teacher before you open it."
    }
];

const case3Challenges = [
    {
        id: 1,
        sender: "prizes@star-game-gifts-example.invalid",
        message: "You won a free game console. Click here and type your game password.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clueOptions: ["Fake Sender", "Fake Urgency", "Information Requests", "No warning sign"],
        correctClue: "Fake Sender",
        actionOptions: [
            "Click the link",
            "Share your password",
            "Stop and tell a trusted adult",
            "Reply with your address"
        ],
        correctAction: "Stop and tell a trusted adult",
        explanation: "The prize comes from an unfamiliar sender. Stop and tell a trusted adult."
    },
    {
        id: 2,
        sender: "alerts@player-zone-example.invalid",
        message: "Your account will be deleted in ten minutes unless you click this link now.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clueOptions: ["Fake Sender", "Fake Urgency", "Information Requests", "No warning sign"],
        correctClue: "Fake Urgency",
        actionOptions: [
            "Click before the timer ends",
            "Pause and do not click",
            "Send your password",
            "Pay a fee in the link"
        ],
        correctAction: "Pause and do not click",
        explanation: "The short timer is pressure. Pause instead of clicking."
    },
    {
        id: 3,
        sender: "coach@pixel-play-example.invalid",
        message: "Tell me your game password and I will unlock a secret level.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clueOptions: ["Fake Sender", "Fake Urgency", "Information Requests", "No warning sign"],
        correctClue: "Information Requests",
        actionOptions: [
            "Send the password",
            "Keep your password private and tell a trusted adult",
            "Post the password in chat",
            "Send a photo of the password"
        ],
        correctAction: "Keep your password private and tell a trusted adult",
        explanation: "The message asks for a password. Keep it private and tell a trusted adult."
    },
    {
        id: 4,
        sender: "teacher@riverside-school.example",
        message: "Homework: read chapter 2 before Friday. See me in class if you need help.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Legitimate",
        clueOptions: ["Fake Sender", "Fake Urgency", "Information Requests", "No warning sign"],
        correctClue: "No warning sign",
        actionOptions: [
            "Send your password anyway",
            "Click a surprise link",
            "Read the message. No private information is needed",
            "Hide the message from your family"
        ],
        correctAction: "Read the message. No private information is needed",
        explanation: "This is a normal school reminder. You can read it without sharing secrets."
    },
    {
        id: 5,
        sender: "help@schoool-portel-example.invalid",
        message: "Schoool Portel security: open the link and enter your password.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clueOptions: ["Fake Sender", "Fake Urgency", "Information Requests", "No warning sign"],
        correctClue: "Fake Sender",
        actionOptions: [
            "Type your password in the link",
            "Do not open the link",
            "Forward your password to a friend",
            "Reply with your phone number"
        ],
        correctAction: "Do not open the link",
        explanation: "The misspelled name shows a fake sender. Do not open the link."
    },
    {
        id: 6,
        sender: "claim-now@gift-burst-example.invalid",
        message: "Your prize vanishes tonight. Claim it immediately or it is gone forever.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clueOptions: ["Fake Sender", "Fake Urgency", "Information Requests", "No warning sign"],
        correctClue: "Fake Urgency",
        actionOptions: [
            "Rush to claim it",
            "Check with a trusted adult before you act",
            "Send your home address",
            "Share a verification code"
        ],
        correctAction: "Check with a trusted adult before you act",
        explanation: "The message tries to rush you. Check with a trusted adult before you act."
    },
    {
        id: 7,
        sender: "gifts@free-prize-hut-example.invalid",
        message: "We need your home address today so the free gift can be mailed.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clueOptions: ["Fake Sender", "Fake Urgency", "Information Requests", "No warning sign"],
        correctClue: "Information Requests",
        actionOptions: [
            "Send your home address",
            "Send a photo of your house",
            "Do not share your address",
            "Post your address in a game"
        ],
        correctAction: "Do not share your address",
        explanation: "Your home address is private. Do not share it for a surprise gift."
    },
    {
        id: 8,
        sender: "library@riverside-school.example",
        message: "The library book on your card is due next Friday. Return it at the library desk.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Legitimate",
        clueOptions: ["Fake Sender", "Fake Urgency", "Information Requests", "No warning sign"],
        correctClue: "No warning sign",
        actionOptions: [
            "Reply with your password",
            "Read the message. No private information is needed",
            "Click a payment link",
            "Send your phone number"
        ],
        correctAction: "Read the message. No private information is needed",
        explanation: "The school library gave a normal due date. No private information is needed."
    },
    {
        id: 9,
        sender: "a friend account you do not recognize",
        message: "Click this link for free game coins or my account will be deleted.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clueOptions: ["Fake Sender", "Fake Urgency", "Information Requests", "No warning sign"],
        correctClue: "Fake Sender",
        actionOptions: [
            "Open the link because it says friend",
            "Ask your friend in person before opening it",
            "Type your password on the page",
            "Download the file in the link"
        ],
        correctAction: "Ask your friend in person before opening it",
        explanation: "The sender may not be your real friend. Ask them in person before opening it."
    },
    {
        id: 10,
        sender: "codes@login-helper-example.invalid",
        message: "Read me the verification code on your screen so I can prove it is you.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clueOptions: ["Fake Sender", "Fake Urgency", "Information Requests", "No warning sign"],
        correctClue: "Information Requests",
        actionOptions: [
            "Read the code out loud",
            "Never share a verification code",
            "Post the code for your class",
            "Email the code to the sender"
        ],
        correctAction: "Never share a verification code",
        explanation: "A verification code is private. Never share it in a message."
    },
    {
        id: 11,
        sender: "helper@secret-support-example.invalid",
        message: "Fix this now. Do not tell your parents or the help will stop.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clueOptions: ["Fake Sender", "Fake Urgency", "Information Requests", "No warning sign"],
        correctClue: "Fake Urgency",
        actionOptions: [
            "Keep it secret",
            "Tell a trusted adult",
            "Click as fast as you can",
            "Send a private photo"
        ],
        correctAction: "Tell a trusted adult",
        explanation: "Being told to hide a message is pressure. Tell a trusted adult."
    },
    {
        id: 12,
        sender: "office@riverside-school.example",
        message: "Tomorrow's classes are math, reading, and art. Meet in the usual rooms.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Legitimate",
        clueOptions: ["Fake Sender", "Fake Urgency", "Information Requests", "No warning sign"],
        correctClue: "No warning sign",
        actionOptions: [
            "Send bank details",
            "Open an unexpected file",
            "Read the message. No private information is needed",
            "Share your login code"
        ],
        correctAction: "Read the message. No private information is needed",
        explanation: "This timetable is ordinary school information. You can read it safely."
    },
    {
        id: 13,
        sender: "friends@chat-circle-example.invalid",
        message: "Send a private photo of your room to unlock a sticker pack.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clueOptions: ["Fake Sender", "Fake Urgency", "Information Requests", "No warning sign"],
        correctClue: "Information Requests",
        actionOptions: [
            "Send the photo",
            "Do not send a private photo",
            "Ask a stranger to keep it secret",
            "Trade the photo for a password"
        ],
        correctAction: "Do not send a private photo",
        explanation: "A sticker pack is not a reason to send a private photo."
    },
    {
        id: 14,
        sender: "billing@parcel-rush-example.invalid",
        message: "Open the attached file to see a surprise invoice and pay the fee.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clueOptions: ["Fake Sender", "Fake Urgency", "Information Requests", "No warning sign"],
        correctClue: "Fake Sender",
        actionOptions: [
            "Open the attachment",
            "Do not open the attachment",
            "Pay the fee quickly",
            "Send your address and card number"
        ],
        correctAction: "Do not open the attachment",
        explanation: "An unexpected invoice file from an unknown sender should stay closed."
    },
    {
        id: 15,
        sender: "nurse@riverside-school.example",
        message: "Please bring a water bottle for the class walk tomorrow. No reply is needed.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Legitimate",
        clueOptions: ["Fake Sender", "Fake Urgency", "Information Requests", "No warning sign"],
        correctClue: "No warning sign",
        actionOptions: [
            "Send a photo of your home",
            "Click a prize link",
            "Read the message. No private information is needed",
            "Share your password with the nurse by email"
        ],
        correctAction: "Read the message. No private information is needed",
        explanation: "The school nurse shared a simple reminder and did not ask for secrets."
    },
    {
        id: 16,
        sender: "winner-desk@random-gifts-example.invalid",
        message: "You did not enter a contest, but we picked you for a cash gift. Reply with your phone number.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clueOptions: ["Fake Sender", "Fake Urgency", "Information Requests", "No warning sign"],
        correctClue: "Fake Sender",
        actionOptions: [
            "Reply with your phone number",
            "Do not reply and tell a trusted adult",
            "Send your home address too",
            "Click the gift link"
        ],
        correctAction: "Do not reply and tell a trusted adult",
        explanation: "A prize from an unknown sender is a warning sign. You do not have to reply."
    },
    {
        id: 17,
        sender: "alerts@coin-rush-example.invalid",
        message: "Your game coins vanish in one minute. Tap this link now or they are gone.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clueOptions: ["Fake Sender", "Fake Urgency", "Information Requests", "No warning sign"],
        correctClue: "Fake Urgency",
        actionOptions: [
            "Tap the link before the minute ends",
            "Close the message and do not tap",
            "Type your password to save the coins",
            "Pay a small fee in the link"
        ],
        correctAction: "Close the message and do not tap",
        explanation: "The one-minute threat is pressure. Close the message instead of tapping."
    },
    {
        id: 18,
        sender: "team@player-club-example.invalid",
        message: "Send a photo of your student ID so I can add you to the team chat.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clueOptions: ["Fake Sender", "Fake Urgency", "Information Requests", "No warning sign"],
        correctClue: "Information Requests",
        actionOptions: [
            "Send the photo",
            "Do not send a photo of your ID",
            "Send a photo of your house instead",
            "Post the ID in the group chat"
        ],
        correctAction: "Do not send a photo of your ID",
        explanation: "A student ID is private. Do not send a photo of it to someone online."
    },
    {
        id: 19,
        sender: "codes@account-check-example.invalid",
        message: "Type the code from the text on your family's phone so we can prove it is you.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Scam",
        clueOptions: ["Fake Sender", "Fake Urgency", "Information Requests", "No warning sign"],
        correctClue: "Information Requests",
        actionOptions: [
            "Type the code in the message",
            "Keep the code private and tell a trusted adult",
            "Forward the code to a friend",
            "Reply with the code to be helpful"
        ],
        correctAction: "Keep the code private and tell a trusted adult",
        explanation: "A verification code is a secret. Keep it private and tell a trusted adult."
    },
    {
        id: 20,
        sender: "coach@riverside-school.example",
        message: "Soccer practice is after lunch on the field. Bring water. No reply is needed.",
        options: ["Scam", "Legitimate"],
        correctAnswer: "Legitimate",
        clueOptions: ["Fake Sender", "Fake Urgency", "Information Requests", "No warning sign"],
        correctClue: "No warning sign",
        actionOptions: [
            "Send your password to the coach",
            "Click a surprise prize link",
            "Read the message. No private information is needed",
            "Share a photo of your home"
        ],
        correctAction: "Read the message. No private information is needed",
        explanation: "This is a normal practice reminder from the school coach. It does not ask for secrets."
    }
];

const companyQuizQuestions = [
    {
        id: 1,
        category: "Fake Sender",
        question: "Which sender looks safest to trust?",
        options: [
            "prizes@game-reward-example.invalid",
            "library@riverside-school.example",
            "help@schoool-portel-example.invalid",
            "winner-desk@random-gifts-example.invalid"
        ],
        correctAnswer: "library@riverside-school.example",
        explanation: "The school library address matches a known school sender. The others look unfamiliar or misspelled."
    },
    {
        id: 2,
        category: "Fake Sender",
        question: "A message says it is from your teacher, but the address looks strange. What is the best clue?",
        options: [
            "The greeting is friendly",
            "The sender may be fake",
            "It uses the word school",
            "It arrived in the afternoon"
        ],
        correctAnswer: "The sender may be fake",
        explanation: "People can pretend to be a teacher. Check the sender and ask the real teacher."
    },
    {
        id: 3,
        category: "Fake Sender",
        question: "Why is a misspelled company name a warning sign?",
        options: [
            "Real names are sometimes spelled in a tricky way to fool you",
            "Short names are always scams",
            "Only long messages are safe",
            "Colors in a message prove it is real"
        ],
        correctAnswer: "Real names are sometimes spelled in a tricky way to fool you",
        explanation: "Scam senders often copy a real name and change a letter."
    },
    {
        id: 4,
        category: "Fake Sender",
        question: "You get a prize message from a company you have never heard of. What should you do?",
        options: [
            "Click because prizes are always real",
            "Stop and ask a trusted adult",
            "Send your phone number",
            "Forward it to everyone"
        ],
        correctAnswer: "Stop and ask a trusted adult",
        explanation: "An unfamiliar sender with a prize is a reason to stop and check."
    },
    {
        id: 5,
        category: "Fake Sender",
        question: "A delivery message uses a company name you do not know and asks for your address. What is the safe choice?",
        options: [
            "Send the address",
            "Pay a fee first",
            "Do not reply and tell a trusted adult",
            "Open every file attached"
        ],
        correctAnswer: "Do not reply and tell a trusted adult",
        explanation: "Do not give your address to a delivery message you cannot trust."
    },
    {
        id: 6,
        category: "Fake Urgency",
        question: "Which message uses fake urgency?",
        options: [
            "Return your library book next Friday",
            "Your account closes in ten minutes. Click now",
            "Art class is on Thursday",
            "Bring a water bottle tomorrow"
        ],
        correctAnswer: "Your account closes in ten minutes. Click now",
        explanation: "A ten-minute threat tries to stop you from thinking."
    },
    {
        id: 7,
        category: "Fake Urgency",
        question: "A prize must be claimed immediately or it vanishes. What should you do?",
        options: [
            "Take your time and check with a trusted adult",
            "Click as fast as you can",
            "Share your password so it is saved",
            "Keep the message secret"
        ],
        correctAnswer: "Take your time and check with a trusted adult",
        explanation: "Real opportunities can wait while you check. Rushing is a warning sign."
    },
    {
        id: 8,
        category: "Fake Urgency",
        question: "A message says, 'Do not tell your family.' Why is that unsafe?",
        options: [
            "Secrets make prizes bigger",
            "Safe messages do not tell you to hide them from a trusted adult",
            "Families should never hear about school",
            "Only passwords can be shared"
        ],
        correctAnswer: "Safe messages do not tell you to hide them from a trusted adult",
        explanation: "Being told to keep a secret is pressure. Tell a trusted adult."
    },
    {
        id: 9,
        category: "Fake Urgency",
        question: "Which deadline looks reasonable?",
        options: [
            "Reply in ten seconds",
            "Your account will be deleted tonight if you do not send a password",
            "Bring your poster to class on Friday",
            "Claim this gift before you blink"
        ],
        correctAnswer: "Bring your poster to class on Friday",
        explanation: "A normal class deadline gives you time and does not ask for secrets."
    },
    {
        id: 10,
        category: "Fake Urgency",
        question: "A file must be installed immediately to stop a scary warning. What is the safe action?",
        options: [
            "Install the file",
            "Do not install it and tell a trusted adult",
            "Send the file to your class",
            "Turn off the screen and type your password"
        ],
        correctAnswer: "Do not install it and tell a trusted adult",
        explanation: "Scary warnings and surprise files are a pressure trick. Do not install them."
    },
    {
        id: 11,
        category: "Information Requests",
        question: "Which information is safe to share in a surprise online message?",
        options: [
            "Your password",
            "Your home address",
            "A one-time verification code",
            "None of these"
        ],
        correctAnswer: "None of these",
        explanation: "Passwords, addresses, and codes are private. Do not put them in a surprise message."
    },
    {
        id: 12,
        category: "Information Requests",
        question: "Someone asks for the one-time code on your screen. What should you do?",
        options: [
            "Read it to them",
            "Post it in chat",
            "Keep it private and tell a trusted adult",
            "Email it to be helpful"
        ],
        correctAnswer: "Keep it private and tell a trusted adult",
        explanation: "That code can let someone else into an account. Keep it private."
    },
    {
        id: 13,
        category: "Information Requests",
        question: "A support agent asks for your password. Why should you refuse?",
        options: [
            "Real support does not need your password",
            "Passwords should be shared with helpers",
            "Only long passwords can be told to strangers",
            "A support title means the person is real"
        ],
        correctAnswer: "Real support does not need your password",
        explanation: "You can get help without saying your password."
    },
    {
        id: 14,
        category: "Information Requests",
        question: "A prize page asks for a private photo. What is the safe choice?",
        options: [
            "Send the photo",
            "Do not send it and tell a trusted adult",
            "Send a photo of your house instead",
            "Trade the photo for coins"
        ],
        correctAnswer: "Do not send it and tell a trusted adult",
        explanation: "Private photos should not be traded for prizes."
    },
    {
        id: 15,
        category: "Information Requests",
        question: "Which school message is all right to read?",
        options: [
            "Type your password on this new page tonight",
            "Send your bank card number for a refund",
            "The field trip is on May 12. Bring a water bottle",
            "Reply with your phone number to a stranger"
        ],
        correctAnswer: "The field trip is on May 12. Bring a water bottle",
        explanation: "That note gives ordinary school information and does not ask for secrets."
    },
    {
        id: 16,
        category: "Safe Online Behavior",
        question: "What are the three safety steps?",
        options: [
            "Rush, Click, Share",
            "Stop, Check, Verify",
            "Hide, Delete, Hope",
            "Copy, Send, Repeat"
        ],
        correctAnswer: "Stop, Check, Verify",
        explanation: "Stop first, check the message, then verify with a trusted adult or a known source."
    },
    {
        id: 17,
        category: "Safe Online Behavior",
        question: "A friend sends a strange link. What is a safe next step?",
        options: [
            "Open it because a friend sent it",
            "Ask your friend in person before you open it",
            "Type your password to see the page",
            "Download the file inside it"
        ],
        correctAnswer: "Ask your friend in person before you open it",
        explanation: "Ask your friend face to face. Their account may not have sent the link."
    },
    {
        id: 18,
        category: "Safe Online Behavior",
        question: "You already clicked a suspicious link. What should you do?",
        options: [
            "Keep clicking to fix it",
            "Tell a trusted adult right away",
            "Share the link so others can check it",
            "Type your password to log out"
        ],
        correctAnswer: "Tell a trusted adult right away",
        explanation: "If you already clicked, stop and tell a trusted adult. Do not type more secrets."
    },
    {
        id: 19,
        category: "Safe Online Behavior",
        question: "You feel unsure about a message. What is the best action?",
        options: [
            "Guess and share a little information",
            "Stop and ask a trusted adult",
            "Click now and hope",
            "Keep it secret"
        ],
        correctAnswer: "Stop and ask a trusted adult",
        explanation: "Being unsure is a signal to pause and ask for help."
    },
    {
        id: 20,
        category: "Safe Online Behavior",
        question: "What should you do with an unexpected attachment?",
        options: [
            "Open it quickly",
            "Leave it closed and tell a trusted adult",
            "Forward it to the class",
            "Install it if the icon looks friendly"
        ],
        correctAnswer: "Leave it closed and tell a trusted adult",
        explanation: "Unexpected files should stay closed until a trusted adult checks them."
    }
];

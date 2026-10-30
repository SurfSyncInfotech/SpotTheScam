
const case1Questions = [
    {
        "id": 1,
        "category": "Fake Sender",
        "sender": "prizes@game-reward-central.xyz",
        "subject": "You won a free game console!",
        "bodyLines": [
            "StarGame Gifts selected your student profile today.",
            "Click here to claim your free console.",
            "Offer valid until midnight."
        ],
        "message": "StarGame Gifts selected your student profile today. Click here to claim your free console. Offer valid until midnight.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "The sender domain is untrusted and completely fake."
    },
    {
        "id": 2,
        "category": "Fake Urgency",
        "sender": "support@schoolportal-help.org",
        "subject": "URGENT: Account will be deleted in 10 minutes!",
        "bodyLines": [
            "You must verify your identity within 10 minutes or your account is permanently gone.",
            "Click below to confirm your password.",
            "This cannot be undone."
        ],
        "message": "You must verify your identity within 10 minutes or your account is permanently gone. Click below to confirm your password. This cannot be undone.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line0",
        "explanation": "Scammers use false deadlines to stop you from thinking clearly or asking an adult."
    },
    {
        "id": 3,
        "category": "Information Requests",
        "sender": "support@game-passwords-help.org",
        "subject": "Please verify your current password",
        "bodyLines": [
            "We are performing routine server maintenance.",
            "Please reply with your current password so we can verify your profile.",
            "Thank you for your cooperation."
        ],
        "message": "We are performing routine server maintenance. Please reply with your current password so we can verify your profile. Thank you for your cooperation.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Legitimate organizations never ask for your secret password in an email."
    },
    {
        "id": 4,
        "category": "No warning sign",
        "sender": "library@riverside-school.org",
        "subject": "Library book due next Friday",
        "bodyLines": [
            "Friendly reminder that 'The Mystery of Island Bay' is due next Friday.",
            "You can return it to the library drop box anytime before 3 PM.",
            "Have a wonderful week of reading!"
        ],
        "message": "Friendly reminder that 'The Mystery of Island Bay' is due next Friday. You can return it to the library drop box anytime before 3 PM. Have a wonderful week of reading!",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "This is a real message from your school library. It does not ask for passwords or rush you."
    },
    {
        "id": 5,
        "category": "Fake Sender",
        "sender": "support@minecrafft-freecoins.top",
        "subject": "Rare game coins waiting for you",
        "bodyLines": [
            "Log in to your gaming account through this link to claim coins.",
            "Do not tell anyone your special code.",
            "Happy gaming!"
        ],
        "message": "Log in to your gaming account through this link to claim coins. Do not tell anyone your special code. Happy gaming!",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "Real gaming platforms never email from odd third-party domains."
    },
    {
        "id": 6,
        "category": "Fake Urgency",
        "sender": "alerts@gaming-zone-update.net",
        "subject": "Act immediately or lose your rare game skins!",
        "bodyLines": [
            "Your account has been flagged for trade violations and will be wiped in 2 hours.",
            "Log in right now to safeguard your inventory.",
            "Do not ignore this warning."
        ],
        "message": "Your account has been flagged for trade violations and will be wiped in 2 hours. Log in right now to safeguard your inventory. Do not ignore this warning.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line0",
        "explanation": "Threatening that you will lose items right away is a classic panic trick."
    },
    {
        "id": 7,
        "category": "Information Requests",
        "sender": "verify@social-parent-control.net",
        "subject": "Parent permission: enter home address and phone",
        "bodyLines": [
            "To keep your account active under safety rules, we need your parents' consent.",
            "Please fill out this form with your family address, phone number, and card details.",
            "Safety first!"
        ],
        "message": "To keep your account active under safety rules, we need your parents' consent. Please fill out this form with your family address, phone number, and card details. Safety first!",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Never share your home address or phone number with unverified senders."
    },
    {
        "id": 8,
        "category": "No warning sign",
        "sender": "mr.thompson@riverside-school.org",
        "subject": "Math homework reminder for tomorrow",
        "bodyLines": [
            "Please remember to finish problems 1 through 10 on page 42 for tomorrow's class.",
            "Bring your ruler and workbook.",
            "See you all in class tomorrow morning."
        ],
        "message": "Please remember to finish problems 1 through 10 on page 42 for tomorrow's class. Bring your ruler and workbook. See you all in class tomorrow morning.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "Your teacher is sharing normal homework reminders without suspicious links or requests."
    },
    {
        "id": 9,
        "category": "Fake Sender",
        "sender": "account-alert@robl0x-security.net",
        "subject": "Immediate security notice for your account",
        "bodyLines": [
            "We noticed someone trying to access your account.",
            "Confirm your password immediately on our portal.",
            "Failure to do so will result in ban."
        ],
        "message": "We noticed someone trying to access your account. Confirm your password immediately on our portal. Failure to do so will result in ban.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "Notice the misspelling in the sender domain name."
    },
    {
        "id": 10,
        "category": "Fake Urgency",
        "sender": "admin@videoshare-notify.com",
        "subject": "Account suspension warning: 2 hours left",
        "bodyLines": [
            "We received multiple complaints regarding your account.",
            "You have 2 hours to refute this claim before total suspension.",
            "Click here to appeal immediately."
        ],
        "message": "We received multiple complaints regarding your account. You have 2 hours to refute this claim before total suspension. Click here to appeal immediately.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line0",
        "explanation": "Artificial urgency is designed to make you act before verifying."
    },
    {
        "id": 11,
        "category": "Information Requests",
        "sender": "accounts@school-tech-support.com",
        "subject": "Tech support needs your login credentials",
        "bodyLines": [
            "We need your student username and password to upgrade your computer software tonight.",
            "Reply to this message with your details.",
            "District Tech Team."
        ],
        "message": "We need your student username and password to upgrade your computer software tonight. Reply to this message with your details. District Tech Team.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line0",
        "explanation": "IT support staff already have administrative access and will never ask for your password."
    },
    {
        "id": 12,
        "category": "No warning sign",
        "sender": "office@riverside-school.org",
        "subject": "Notice of upcoming school photo day",
        "bodyLines": [
            "School picture day will take place on Thursday next week in the gymnasium.",
            "Remember to wear your school uniform.",
            "Order forms were handed out in homeroom."
        ],
        "message": "School picture day will take place on Thursday next week in the gymnasium. Remember to wear your school uniform. Order forms were handed out in homeroom.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "School photo announcements from the school office are safe and informative."
    },
    {
        "id": 13,
        "category": "Fake Sender",
        "sender": "desk@school-winner-gifts.fun",
        "subject": "School prize waiting for you",
        "bodyLines": [
            "Congratulations on winning the annual district tablet prize.",
            "Open the link and enter your student credentials.",
            "Collect at the front office."
        ],
        "message": "Congratulations on winning the annual district tablet prize. Open the link and enter your student credentials. Collect at the front office.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "Your school does not send prizes from random external email hosts."
    },
    {
        "id": 14,
        "category": "Fake Urgency",
        "sender": "security@pass-protection.net",
        "subject": "Security breach: Update password within 15 minutes!",
        "bodyLines": [
            "A foreign login was discovered from another city.",
            "You must update your security credentials within 15 minutes.",
            "Failure to comply results in account termination."
        ],
        "message": "A foreign login was discovered from another city. You must update your security credentials within 15 minutes. Failure to comply results in account termination.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Demanding immediate password resets under panic is a phishing tactic."
    },
    {
        "id": 15,
        "category": "Information Requests",
        "sender": "admin@student-rewards-club.org",
        "subject": "Enter your student ID and secret PIN",
        "bodyLines": [
            "You have earned 200 reward points from your classroom work.",
            "Enter your student ID number and 4-digit PIN here to claim rewards.",
            "Student Rewards."
        ],
        "message": "You have earned 200 reward points from your classroom work. Enter your student ID number and 4-digit PIN here to claim rewards. Student Rewards.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Your student PIN and login details are strictly confidential."
    },
    {
        "id": 16,
        "category": "No warning sign",
        "sender": "nurse@riverside-school.org",
        "subject": "Health checkup reminder",
        "bodyLines": [
            "Annual vision and hearing screenings for Class 5 will begin next Tuesday.",
            "Please make sure you bring your glasses if you wear them.",
            "Best regards, Nurse Sarah."
        ],
        "message": "Annual vision and hearing screenings for Class 5 will begin next Tuesday. Please make sure you bring your glasses if you wear them. Best regards, Nurse Sarah.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "A routine notice from the school nurse with no requests for private account details."
    },
    {
        "id": 17,
        "category": "Fake Sender",
        "sender": "mrs.lee.rewards@mail-free-server.biz",
        "subject": "Message from your teacher Mrs. Lee",
        "bodyLines": [
            "Please open this assignment portal tonight.",
            "Log in using your classroom password.",
            "Thank you, Mrs. Lee."
        ],
        "message": "Please open this assignment portal tonight. Log in using your classroom password. Thank you, Mrs. Lee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "Anyone can type a teacher's name, but the sender domain is suspicious."
    },
    {
        "id": 18,
        "category": "Fake Urgency",
        "sender": "desk@rewards-claim-hub.com",
        "subject": "FINAL NOTICE: Claim your prize before midnight!",
        "bodyLines": [
            "This is your absolute final opportunity to claim your reward.",
            "If not claimed by midnight, your reward goes to the next student.",
            "Click here immediately."
        ],
        "message": "This is your absolute final opportunity to claim your reward. If not claimed by midnight, your reward goes to the next student. Click here immediately.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line0",
        "explanation": "'Final notice' claims for prizes you never entered are scam traps."
    },
    {
        "id": 19,
        "category": "Information Requests",
        "sender": "billing@family-mobile-share.net",
        "subject": "Confirm credit card details for billing",
        "bodyLines": [
            "We noticed a slight issue with your family mobile plan invoice.",
            "Click here and input your parent credit card number to re-verify.",
            "Mobile Billing."
        ],
        "message": "We noticed a slight issue with your family mobile plan invoice. Click here and input your parent credit card number to re-verify. Mobile Billing.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Never enter credit card or banking details through unverified email links."
    },
    {
        "id": 20,
        "category": "No warning sign",
        "sender": "coach.miller@riverside-school.org",
        "subject": "Track and field practice schedule",
        "bodyLines": [
            "Our track and field practice will meet behind the field house at 3:30 PM on Monday.",
            "Please bring your running shoes and a water bottle.",
            "Coach Miller."
        ],
        "message": "Our track and field practice will meet behind the field house at 3:30 PM on Monday. Please bring your running shoes and a water bottle. Coach Miller.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "Normal sports schedule update sent by your coach from the official school domain."
    },
    {
        "id": 21,
        "category": "Fake Sender",
        "sender": "parcel-alert@fastbox-express-fake.cc",
        "subject": "Your parcel could not be delivered",
        "bodyLines": [
            "We attempted delivery of a package to your address.",
            "Please confirm your home street in our tracker.",
            "Delivery reattempt scheduled."
        ],
        "message": "We attempted delivery of a package to your address. Please confirm your home street in our tracker. Delivery reattempt scheduled.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "The delivery company address does not belong to any legitimate post service."
    },
    {
        "id": 22,
        "category": "Fake Urgency",
        "sender": "notice@delivery-tracking-portal.com",
        "subject": "Urgent: Package will be discarded today",
        "bodyLines": [
            "Your parcel is held at our depot and will be destroyed today.",
            "Pay the $1.50 handling fee within 1 hour to release it.",
            "Delivery team."
        ],
        "message": "Your parcel is held at our depot and will be destroyed today. Pay the $1.50 handling fee within 1 hour to release it. Delivery team.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Delivery services do not discard packages within hours."
    },
    {
        "id": 23,
        "category": "Information Requests",
        "sender": "security@email-security-check.org",
        "subject": "Security verification: confirm password and recovery code",
        "bodyLines": [
            "Someone attempted to log into your mailbox.",
            "Confirm your password and 6-digit recovery code here to secure your mailbox.",
            "Mail Security."
        ],
        "message": "Someone attempted to log into your mailbox. Confirm your password and 6-digit recovery code here to secure your mailbox. Mail Security.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Two-factor authentication codes and recovery phrases must never be shared."
    },
    {
        "id": 24,
        "category": "No warning sign",
        "sender": "counselor@riverside-school.org",
        "subject": "Middle school transition workshop notice",
        "bodyLines": [
            "Join us next Wednesday for a friendly Q&A about preparing for middle school.",
            "No preparation is necessary; parents are welcome to attend.",
            "School Counseling Team."
        ],
        "message": "Join us next Wednesday for a friendly Q&A about preparing for middle school. No preparation is necessary; parents are welcome to attend. School Counseling Team.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "Helpful workshop announcement with no suspicious attachments or urgent pressure."
    },
    {
        "id": 25,
        "category": "Fake Sender",
        "sender": "security@apple-id-login-verify.info",
        "subject": "Apple ID locked due to suspicious login",
        "bodyLines": [
            "Your cloud account has been temporarily frozen.",
            "Verify your security questions now to regain access.",
            "Security team."
        ],
        "message": "Your cloud account has been temporarily frozen. Verify your security questions now to regain access. Security team.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "Notice the unofficial domain pretending to be Apple."
    },
    {
        "id": 26,
        "category": "Fake Urgency",
        "sender": "help@district-learning.org",
        "subject": "Action Required: Confirm enrollment within 1 hour",
        "bodyLines": [
            "District records require immediate student re-enrollment.",
            "You must submit your family details within 1 hour.",
            "District office."
        ],
        "message": "District records require immediate student re-enrollment. You must submit your family details within 1 hour. District office.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line0",
        "explanation": "Schools give plenty of notice for enrollment and do not threaten 1-hour deadlines."
    },
    {
        "id": 27,
        "category": "Information Requests",
        "sender": "helpdesk@district-classroom.org",
        "subject": "Teacher portal sync: enter login details",
        "bodyLines": [
            "We are updating Google Classroom synchronization for all students.",
            "Please reply with your full login email and password.",
            "Classroom Support."
        ],
        "message": "We are updating Google Classroom synchronization for all students. Please reply with your full login email and password. Classroom Support.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Teachers never ask students to email their passwords."
    },
    {
        "id": 28,
        "category": "No warning sign",
        "sender": "artclub@riverside-school.org",
        "subject": "Art club exhibition date announced",
        "bodyLines": [
            "The student art gallery will be open for viewing during lunch on Friday.",
            "Come support your classmates' pottery and painting projects.",
            "Art Department."
        ],
        "message": "The student art gallery will be open for viewing during lunch on Friday. Come support your classmates' pottery and painting projects. Art Department.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "The art teacher is sharing exhibition details without asking for personal information."
    },
    {
        "id": 29,
        "category": "Fake Sender",
        "sender": "winner@steam-promo-free.live",
        "subject": "Free Steam gift card reward",
        "bodyLines": [
            "A $50 gift voucher has been credited to your gamer wallet.",
            "Redeem your voucher code on our website.",
            "Enjoy your games!"
        ],
        "message": "A $50 gift voucher has been credited to your gamer wallet. Redeem your voucher code on our website. Enjoy your games!",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "Steam promotions will only ever come from official store domains."
    },
    {
        "id": 30,
        "category": "Fake Urgency",
        "sender": "support@cloud-backup-online.com",
        "subject": "Storage full: Your photos will be permanently deleted!",
        "bodyLines": [
            "Your cloud drive reached maximum capacity today.",
            "Your oldest photos will be permanently deleted tonight unless upgraded.",
            "Upgrade immediately."
        ],
        "message": "Your cloud drive reached maximum capacity today. Your oldest photos will be permanently deleted tonight unless upgraded. Upgrade immediately.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Legitimate services do not instantly erase your memories or photos without ample notice."
    },
    {
        "id": 31,
        "category": "Information Requests",
        "sender": "giftcards@online-gaming-store.net",
        "subject": "Redeem voucher: type your gift card code",
        "bodyLines": [
            "You were sent a $25 online gift voucher.",
            "To verify ownership, type the 16-digit code on the back of any store gift card.",
            "Gifts Dept."
        ],
        "message": "You were sent a $25 online gift voucher. To verify ownership, type the 16-digit code on the back of any store gift card. Gifts Dept.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Asking you to share gift card numbers or scratch codes is always a scam."
    },
    {
        "id": 32,
        "category": "No warning sign",
        "sender": "sciencefair@riverside-school.org",
        "subject": "Science fair project guidelines",
        "bodyLines": [
            "Guidelines and poster board dimensions for the upcoming Science Fair are now posted on the class noticeboard.",
            "Projects are due in three weeks.",
            "Mr. Davis."
        ],
        "message": "Guidelines and poster board dimensions for the upcoming Science Fair are now posted on the class noticeboard. Projects are due in three weeks. Mr. Davis.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "Educational science fair guidelines sent from your school's verified email domain."
    },
    {
        "id": 33,
        "category": "Fake Sender",
        "sender": "admin@discord-nitro-bonus.site",
        "subject": "Claim 3 months of free Discord Nitro",
        "bodyLines": [
            "Your account was selected for complimentary Nitro.",
            "Click the button below to accept the gift.",
            "Expires in 2 hours."
        ],
        "message": "Your account was selected for complimentary Nitro. Click the button below to accept the gift. Expires in 2 hours.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "Discord will never offer free Nitro from untrusted third-party sites."
    },
    {
        "id": 34,
        "category": "Fake Urgency",
        "sender": "care@photo-print-service.net",
        "subject": "Order cancellation notice - respond right now",
        "bodyLines": [
            "Your recent purchase order has encountered an error.",
            "Reply right now with your card details or face order cancellation fees.",
            "Order support."
        ],
        "message": "Your recent purchase order has encountered an error. Reply right now with your card details or face order cancellation fees. Order support.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line0",
        "explanation": "Urgent warnings demanding immediate clicks should always be treated with caution."
    },
    {
        "id": 35,
        "category": "Information Requests",
        "sender": "verify@survey-rewards-cash.com",
        "subject": "Claim survey money: enter bank account details",
        "bodyLines": [
            "Thank you for taking our quick student poll.",
            "To receive your $15 reward, enter your bank account number and branch code.",
            "Student Research."
        ],
        "message": "Thank you for taking our quick student poll. To receive your $15 reward, enter your bank account number and branch code. Student Research.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Student surveys should never request bank details or financial information."
    },
    {
        "id": 36,
        "category": "No warning sign",
        "sender": "music@riverside-school.org",
        "subject": "School band concert next Wednesday",
        "bodyLines": [
            "The spring band concert will begin at 6:30 PM next Wednesday in the auditorium.",
            "Musicians should report backstage by 6:00 PM in concert attire.",
            "Music Department."
        ],
        "message": "The spring band concert will begin at 6:30 PM next Wednesday in the auditorium. Musicians should report backstage by 6:00 PM in concert attire. Music Department.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "Standard concert announcement for students and parents from the music department."
    },
    {
        "id": 37,
        "category": "Fake Sender",
        "sender": "billing@netflix-account-issue.online",
        "subject": "Update your payment to keep streaming",
        "bodyLines": [
            "Your family subscription has been paused.",
            "Update payment information within 24 hours.",
            "Customer Care team."
        ],
        "message": "Your family subscription has been paused. Update payment information within 24 hours. Customer Care team.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "Streaming services do not contact you from unofficial web domains."
    },
    {
        "id": 38,
        "category": "Fake Urgency",
        "sender": "billing@music-tune-app.com",
        "subject": "Membership expired: Renew today to avoid penalty fee",
        "bodyLines": [
            "Your premium tier has ended and a late fee of $45 will apply tomorrow.",
            "Renew immediately by clicking this payment link.",
            "Subscription team."
        ],
        "message": "Your premium tier has ended and a late fee of $45 will apply tomorrow. Renew immediately by clicking this payment link. Subscription team.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line0",
        "explanation": "Threats of sudden penalty fees are used to pressure people into paying."
    },
    {
        "id": 39,
        "category": "Information Requests",
        "sender": "support@video-channel-verify.org",
        "subject": "Channel verification: provide recovery phone and email",
        "bodyLines": [
            "To receive your official student creator badge, we require secondary account verification.",
            "Submit your recovery phone number and backup email password.",
            "Creator Support."
        ],
        "message": "To receive your official student creator badge, we require secondary account verification. Submit your recovery phone number and backup email password. Creator Support.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Recovery details should only be managed inside your account security settings."
    },
    {
        "id": 40,
        "category": "No warning sign",
        "sender": "principal@riverside-school.org",
        "subject": "Weekly school newsletter and announcements",
        "bodyLines": [
            "Here is our weekly roundup of school news, club meetings, and lunch specials.",
            "Have a safe and restful weekend with your families.",
            "Principal Martinez."
        ],
        "message": "Here is our weekly roundup of school news, club meetings, and lunch specials. Have a safe and restful weekend with your families. Principal Martinez.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "The regular weekly newsletter keeps students informed safely without requesting data."
    },
    {
        "id": 41,
        "category": "Fake Sender",
        "sender": "help@youtube-premium-giveaway.win",
        "subject": "Free 1-year YouTube Premium access",
        "bodyLines": [
            "Unlock unlimited ad-free videos for an entire year.",
            "Verify your email address here to activate.",
            "Promotions department."
        ],
        "message": "Unlock unlimited ad-free videos for an entire year. Verify your email address here to activate. Promotions department.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "Free subscription giveaways from unknown domains are phishing scams."
    },
    {
        "id": 42,
        "category": "Fake Urgency",
        "sender": "system@student-portal-notice.org",
        "subject": "Emergency student account verification needed",
        "bodyLines": [
            "Emergency maintenance detected an invalid student token.",
            "Confirm your full legal name and password right now.",
            "IT Helpdesk."
        ],
        "message": "Emergency maintenance detected an invalid student token. Confirm your full legal name and password right now. IT Helpdesk.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Schools will talk to you or your parents directly rather than sending panicky emails."
    },
    {
        "id": 43,
        "category": "Information Requests",
        "sender": "care@online-tutoring-center.net",
        "subject": "Tutor session: confirm parental card details",
        "bodyLines": [
            "You have been awarded 4 free online math tutoring hours.",
            "To confirm your slot, enter your guardian credit card details.",
            "Learning Center."
        ],
        "message": "You have been awarded 4 free online math tutoring hours. To confirm your slot, enter your guardian credit card details. Learning Center.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Free tutoring programs do not ask students for parent payment cards."
    },
    {
        "id": 44,
        "category": "No warning sign",
        "sender": "library@riverside-school.org",
        "subject": "Lost and found items reminder",
        "bodyLines": [
            "Our lost and found bin by the cafeteria is overflowing with jackets and lunchboxes.",
            "Please check the bin before Friday if you are missing any belongings.",
            "Main Office."
        ],
        "message": "Our lost and found bin by the cafeteria is overflowing with jackets and lunchboxes. Please check the bin before Friday if you are missing any belongings. Main Office.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "Simple lost and found notice. No warning signs or requests for personal info."
    },
    {
        "id": 45,
        "category": "Fake Sender",
        "sender": "rewards@fortnite-vbucks-hub.vip",
        "subject": "Claim 5,000 free V-Bucks today",
        "bodyLines": [
            "Special seasonal bonus for dedicated players.",
            "Enter your player ID and secret PIN to claim.",
            "Battle Pass team."
        ],
        "message": "Special seasonal bonus for dedicated players. Enter your player ID and secret PIN to claim. Battle Pass team.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "Game developers do not give free currency through external domains."
    },
    {
        "id": 46,
        "category": "Fake Urgency",
        "sender": "info@competition-finalist.net",
        "subject": "Last chance: Confirm finalist status now",
        "bodyLines": [
            "You have been selected as a grand finalist in our regional draw.",
            "You must respond within 30 minutes or forfeit your placement.",
            "Contest director."
        ],
        "message": "You have been selected as a grand finalist in our regional draw. You must respond within 30 minutes or forfeit your placement. Contest director.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line0",
        "explanation": "Contest deadlines creating intense rush are designed to bait clicks."
    },
    {
        "id": 47,
        "category": "Information Requests",
        "sender": "accounts@student-id-portal.org",
        "subject": "Student ID renewal: upload passport copy",
        "bodyLines": [
            "Annual school ID cards are being printed next week.",
            "Upload a clear photo of your passport or birth certificate here.",
            "Records Office."
        ],
        "message": "Annual school ID cards are being printed next week. Upload a clear photo of your passport or birth certificate here. Records Office.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Never upload sensitive identity documents like passports over unsolicited emails."
    },
    {
        "id": 48,
        "category": "No warning sign",
        "sender": "mr.thompson@riverside-school.org",
        "subject": "Field trip permission slips due",
        "bodyLines": [
            "Friendly reminder that signed permission slips for the natural history museum trip are due by Friday.",
            "Hand them directly to your homeroom teacher.",
            "Class 5 Team."
        ],
        "message": "Friendly reminder that signed permission slips for the natural history museum trip are due by Friday. Hand them directly to your homeroom teacher. Class 5 Team.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "Standard reminder about permission slips to be signed at home by parents."
    },
    {
        "id": 49,
        "category": "Fake Sender",
        "sender": "officer@bank-security-urgent.loan",
        "subject": "Urgent alert regarding your bank card",
        "bodyLines": [
            "Unauthorized transaction detected on your debit card.",
            "Click here to block this transaction immediately.",
            "Fraud prevention desk."
        ],
        "message": "Unauthorized transaction detected on your debit card. Click here to block this transaction immediately. Fraud prevention desk.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "Banks never send urgent security links from unofficial domains."
    },
    {
        "id": 50,
        "category": "Fake Urgency",
        "sender": "service@mobile-sim-alert.com",
        "subject": "SIM card deactivation warning: Act immediately",
        "bodyLines": [
            "Your phone line has been scheduled for suspension today.",
            "Click here immediately to verify your registered identity.",
            "Network alert."
        ],
        "message": "Your phone line has been scheduled for suspension today. Click here immediately to verify your registered identity. Network alert.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line0",
        "explanation": "Service providers do not deactivate numbers with frantic short notices."
    },
    {
        "id": 51,
        "category": "Information Requests",
        "sender": "security@multiplayer-lobby.net",
        "subject": "Tournament registration: share login and 2FA code",
        "bodyLines": [
            "Congratulations on qualifying for the community championship.",
            "Submit your game username, password, and two-factor code to register.",
            "Tournament Ops."
        ],
        "message": "Congratulations on qualifying for the community championship. Submit your game username, password, and two-factor code to register. Tournament Ops.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Tournament organizers never need your account password or 2FA codes."
    },
    {
        "id": 52,
        "category": "No warning sign",
        "sender": "office@riverside-school.org",
        "subject": "Book fair visiting our campus next week",
        "bodyLines": [
            "The Scholastic Book Fair will be set up in the library all next week.",
            "Classes will visit during their scheduled library period.",
            "Library Staff."
        ],
        "message": "The Scholastic Book Fair will be set up in the library all next week. Classes will visit during their scheduled library period. Library Staff.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "Announcement of the upcoming campus book fair from the verified school address."
    },
    {
        "id": 53,
        "category": "Fake Sender",
        "sender": "alert@amazon-order-blocked.work",
        "subject": "Order suspended: confirm delivery address",
        "bodyLines": [
            "A delivery truck could not locate your apartment door.",
            "Please confirm your full address and phone number.",
            "Shipping logistics."
        ],
        "message": "A delivery truck could not locate your apartment door. Please confirm your full address and phone number. Shipping logistics.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "The sender address is not from the real shopping company."
    },
    {
        "id": 54,
        "category": "Fake Urgency",
        "sender": "alert@appstore-purchase-receipt.com",
        "subject": "Confirm unauthorized purchase within 30 minutes",
        "bodyLines": [
            "You were charged $189.99 for an in-app purchase.",
            "If you did not make this purchase, cancel it within 30 minutes here.",
            "App receipts."
        ],
        "message": "You were charged $189.99 for an in-app purchase. If you did not make this purchase, cancel it within 30 minutes here. App receipts.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Scammers invent fake charges to scare you into clicking panic links."
    },
    {
        "id": 55,
        "category": "Information Requests",
        "sender": "admin@virtual-pet-game.org",
        "subject": "Virtual pet rescue: verify account password",
        "bodyLines": [
            "Your pet needs food and supplies in the virtual world.",
            "Please type your account password to feed your pet today.",
            "Pet World."
        ],
        "message": "Your pet needs food and supplies in the virtual world. Please type your account password to feed your pet today. Pet World.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line0",
        "explanation": "Games will never ask you to re-type your password inside an email body."
    },
    {
        "id": 56,
        "category": "No warning sign",
        "sender": "nurse@riverside-school.org",
        "subject": "Cafeteria lunch menu for next month",
        "bodyLines": [
            "Next month's healthy lunch menu is now available on the school bulletin board.",
            "Vegetarian options will be served every day.",
            "Food Services Team."
        ],
        "message": "Next month's healthy lunch menu is now available on the school bulletin board. Vegetarian options will be served every day. Food Services Team.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "Informational cafeteria menu update with no external links or panic."
    },
    {
        "id": 57,
        "category": "Fake Sender",
        "sender": "support@google-drive-storage-full.pw",
        "subject": "Your cloud storage is completely full",
        "bodyLines": [
            "You have exceeded 100% of your cloud storage allowance.",
            "Purchase extra storage or your files will be deleted.",
            "Storage system."
        ],
        "message": "You have exceeded 100% of your cloud storage allowance. Purchase extra storage or your files will be deleted. Storage system.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "Cloud providers notify you through their verified app or official domain."
    },
    {
        "id": 58,
        "category": "Fake Urgency",
        "sender": "notify@school-cafeteria-card.org",
        "subject": "Cafeteria account locked: Verify balance now",
        "bodyLines": [
            "Your meal card has been disabled due to an unrecognized swipe.",
            "Re-verify your student identity right now to unfreeze.",
            "Cafeteria systems."
        ],
        "message": "Your meal card has been disabled due to an unrecognized swipe. Re-verify your student identity right now to unfreeze. Cafeteria systems.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line0",
        "explanation": "School lunch services do not lock cards without warning your guardians."
    },
    {
        "id": 59,
        "category": "Information Requests",
        "sender": "help@home-internet-safety.net",
        "subject": "Router safety check: send home Wi-Fi password",
        "bodyLines": [
            "We detected weak signals from your home broadband router.",
            "Send us your home Wi-Fi name and password so we can optimize your speeds.",
            "Network Care."
        ],
        "message": "We detected weak signals from your home broadband router. Send us your home Wi-Fi name and password so we can optimize your speeds. Network Care.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Network administrators do not ask for private home Wi-Fi keys via email."
    },
    {
        "id": 60,
        "category": "No warning sign",
        "sender": "coach.miller@riverside-school.org",
        "subject": "Spelling bee competition dates",
        "bodyLines": [
            "Round 1 of the annual school spelling bee will take place during English period next Thursday.",
            "Good luck to all student participants!",
            "English Department."
        ],
        "message": "Round 1 of the annual school spelling bee will take place during English period next Thursday. Good luck to all student participants! English Department.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "Official competition dates announcement from the academic coordinator."
    },
    {
        "id": 61,
        "category": "Fake Sender",
        "sender": "contact@social-followers-boost.click",
        "subject": "Get 10,000 free followers instantly",
        "bodyLines": [
            "Boost your profile ranking and view count today.",
            "Sign in with your social account to connect.",
            "Growth network."
        ],
        "message": "Boost your profile ranking and view count today. Sign in with your social account to connect. Growth network.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "Free follower services often harvest login credentials using fake domains."
    },
    {
        "id": 62,
        "category": "Fake Urgency",
        "sender": "update@game-launcher-patch.net",
        "subject": "Immediate patch download required to keep playing",
        "bodyLines": [
            "A mandatory security fix must be installed within 20 minutes.",
            "Download and run this patch file immediately to keep playing.",
            "Game security."
        ],
        "message": "A mandatory security fix must be installed within 20 minutes. Download and run this patch file immediately to keep playing. Game security.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Game updates happen inside the official game client, not via frantic emails."
    },
    {
        "id": 63,
        "category": "Information Requests",
        "sender": "desk@youth-sports-league.org",
        "subject": "Team roster update: enter private home address",
        "bodyLines": [
            "Updating the weekend soccer roster for all junior players.",
            "Please email back your home address and parents' mobile numbers.",
            "League Coordinator."
        ],
        "message": "Updating the weekend soccer roster for all junior players. Please email back your home address and parents' mobile numbers. League Coordinator.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Sports leagues collect contact info through signed forms with your parents, not random emails."
    },
    {
        "id": 64,
        "category": "No warning sign",
        "sender": "counselor@riverside-school.org",
        "subject": "Drama club audition schedule",
        "bodyLines": [
            "Drama club will hold open auditions for our spring play next Tuesday after school.",
            "Scripts are available in room 204.",
            "Mrs. Robinson."
        ],
        "message": "Drama club will hold open auditions for our spring play next Tuesday after school. Scripts are available in room 204. Mrs. Robinson.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "School club audition details sent through the school domain."
    },
    {
        "id": 65,
        "category": "Fake Sender",
        "sender": "care@paypal-payment-failed.rest",
        "subject": "Payment held: confirm identity now",
        "bodyLines": [
            "A payment of $89.00 is awaiting your authorization.",
            "Click here to decline or approve this charge.",
            "Billing operations."
        ],
        "message": "A payment of $89.00 is awaiting your authorization. Click here to decline or approve this charge. Billing operations.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "Payment alerts from weird domains are phishing traps."
    },
    {
        "id": 66,
        "category": "Fake Urgency",
        "sender": "notice@library-fine-collector.com",
        "subject": "Urgent overdue notice: Pay fine before police report",
        "bodyLines": [
            "Our records indicate an outstanding library balance of $120.",
            "Pay within 2 hours before this matter is escalated to local authorities.",
            "Collections desk."
        ],
        "message": "Our records indicate an outstanding library balance of $120. Pay within 2 hours before this matter is escalated to local authorities. Collections desk.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Threatening police or extreme penalties over simple fees is a common scare tactic."
    },
    {
        "id": 67,
        "category": "Information Requests",
        "sender": "support@coding-club-online.net",
        "subject": "Coding club badge: confirm account credentials",
        "bodyLines": [
            "To earn your junior python programming certificate, please provide your school portal login.",
            "We will attach your verified badge automatically.",
            "Club Lead."
        ],
        "message": "To earn your junior python programming certificate, please provide your school portal login. We will attach your verified badge automatically. Club Lead.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line0",
        "explanation": "Coding clubs do not ask you to reveal personal account credentials."
    },
    {
        "id": 68,
        "category": "No warning sign",
        "sender": "artclub@riverside-school.org",
        "subject": "Spring break dates reminder",
        "bodyLines": [
            "School will be closed next week for scheduled spring break.",
            "Classes resume on Monday, April 14th.",
            "Have a wonderful and restful break!"
        ],
        "message": "School will be closed next week for scheduled spring break. Classes resume on Monday, April 14th. Have a wonderful and restful break!",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "Routine calendar reminder about scheduled school holidays."
    },
    {
        "id": 69,
        "category": "Fake Sender",
        "sender": "team@tiktok-badge-verify.top",
        "subject": "Claim your verified creator badge",
        "bodyLines": [
            "Your creator profile qualifies for official verification.",
            "Submit your government ID copy to proceed.",
            "Verification unit."
        ],
        "message": "Your creator profile qualifies for official verification. Submit your government ID copy to proceed. Verification unit.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "Social networks do not issue badges through random email hosts."
    },
    {
        "id": 70,
        "category": "Fake Urgency",
        "sender": "warning@wifi-campus-network.org",
        "subject": "Network violation detected: Resolve immediately",
        "bodyLines": [
            "Your device violated campus acceptable use policy today.",
            "Log in right now to appeal this immediate suspension.",
            "Network security."
        ],
        "message": "Your device violated campus acceptable use policy today. Log in right now to appeal this immediate suspension. Network security.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line0",
        "explanation": "False claims of network rules violations push victims to surrender credentials."
    },
    {
        "id": 71,
        "category": "Information Requests",
        "sender": "security@school-bus-tracking.org",
        "subject": "Bus route notification: enter home location",
        "bodyLines": [
            "New smart bus tracking is now active for your school route.",
            "Enter your exact home address and time your parents leave for work.",
            "Transit Safety."
        ],
        "message": "New smart bus tracking is now active for your school route. Enter your exact home address and time your parents leave for work. Transit Safety.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Bus tracking portals do not ask children to submit private home coordinates via email."
    },
    {
        "id": 72,
        "category": "No warning sign",
        "sender": "sciencefair@riverside-school.org",
        "subject": "Parent-teacher conference schedule",
        "bodyLines": [
            "Parent-teacher conferences are scheduled for next Thursday evening and Friday morning.",
            "Appointment schedules have been mailed to parents.",
            "Administration."
        ],
        "message": "Parent-teacher conferences are scheduled for next Thursday evening and Friday morning. Appointment schedules have been mailed to parents. Administration.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "Informational scheduling note for guardians from the front office."
    },
    {
        "id": 73,
        "category": "Fake Sender",
        "sender": "prizes@game-reward-central.xyz",
        "subject": "You won a free game console!",
        "bodyLines": [
            "StarGame Gifts selected your student profile today.",
            "Click here to claim your free console.",
            "Offer valid until midnight."
        ],
        "message": "StarGame Gifts selected your student profile today. Click here to claim your free console. Offer valid until midnight.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "The sender domain is untrusted and completely fake."
    },
    {
        "id": 74,
        "category": "Fake Urgency",
        "sender": "support@schoolportal-help.org",
        "subject": "URGENT: Account will be deleted in 10 minutes!",
        "bodyLines": [
            "You must verify your identity within 10 minutes or your account is permanently gone.",
            "Click below to confirm your password.",
            "This cannot be undone."
        ],
        "message": "You must verify your identity within 10 minutes or your account is permanently gone. Click below to confirm your password. This cannot be undone.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line0",
        "explanation": "Scammers use false deadlines to stop you from thinking clearly or asking an adult."
    },
    {
        "id": 75,
        "category": "Information Requests",
        "sender": "support@game-passwords-help.org",
        "subject": "Please verify your current password",
        "bodyLines": [
            "We are performing routine server maintenance.",
            "Please reply with your current password so we can verify your profile.",
            "Thank you for your cooperation."
        ],
        "message": "We are performing routine server maintenance. Please reply with your current password so we can verify your profile. Thank you for your cooperation.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Legitimate organizations never ask for your secret password in an email."
    },
    {
        "id": 76,
        "category": "No warning sign",
        "sender": "music@riverside-school.org",
        "subject": "Robotics showcase next Thursday",
        "bodyLines": [
            "Come see the solar-powered rovers built by our fifth-grade robotics teams this Thursday in the STEM lab.",
            "Admission is free for everyone.",
            "Robotics Club."
        ],
        "message": "Come see the solar-powered rovers built by our fifth-grade robotics teams this Thursday in the STEM lab. Admission is free for everyone. Robotics Club.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "Showcase announcement from the robotics club advisor."
    },
    {
        "id": 77,
        "category": "Fake Sender",
        "sender": "support@minecrafft-freecoins.top",
        "subject": "Rare game coins waiting for you",
        "bodyLines": [
            "Log in to your gaming account through this link to claim coins.",
            "Do not tell anyone your special code.",
            "Happy gaming!"
        ],
        "message": "Log in to your gaming account through this link to claim coins. Do not tell anyone your special code. Happy gaming!",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "Real gaming platforms never email from odd third-party domains."
    },
    {
        "id": 78,
        "category": "Fake Urgency",
        "sender": "alerts@gaming-zone-update.net",
        "subject": "Act immediately or lose your rare game skins!",
        "bodyLines": [
            "Your account has been flagged for trade violations and will be wiped in 2 hours.",
            "Log in right now to safeguard your inventory.",
            "Do not ignore this warning."
        ],
        "message": "Your account has been flagged for trade violations and will be wiped in 2 hours. Log in right now to safeguard your inventory. Do not ignore this warning.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line0",
        "explanation": "Threatening that you will lose items right away is a classic panic trick."
    },
    {
        "id": 79,
        "category": "Information Requests",
        "sender": "verify@social-parent-control.net",
        "subject": "Parent permission: enter home address and phone",
        "bodyLines": [
            "To keep your account active under safety rules, we need your parents' consent.",
            "Please fill out this form with your family address, phone number, and card details.",
            "Safety first!"
        ],
        "message": "To keep your account active under safety rules, we need your parents' consent. Please fill out this form with your family address, phone number, and card details. Safety first!",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Never share your home address or phone number with unverified senders."
    },
    {
        "id": 80,
        "category": "No warning sign",
        "sender": "principal@riverside-school.org",
        "subject": "End of term assembly announcement",
        "bodyLines": [
            "Our end of term achievements assembly will take place on Friday at 2:00 PM.",
            "Families are welcome to join us in celebrating student accomplishments.",
            "Office Staff."
        ],
        "message": "Our end of term achievements assembly will take place on Friday at 2:00 PM. Families are welcome to join us in celebrating student accomplishments. Office Staff.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "Assembly date notice sent to the entire student body safely."
    },
    {
        "id": 81,
        "category": "Fake Sender",
        "sender": "account-alert@robl0x-security.net",
        "subject": "Immediate security notice for your account",
        "bodyLines": [
            "We noticed someone trying to access your account.",
            "Confirm your password immediately on our portal.",
            "Failure to do so will result in ban."
        ],
        "message": "We noticed someone trying to access your account. Confirm your password immediately on our portal. Failure to do so will result in ban.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "Notice the misspelling in the sender domain name."
    },
    {
        "id": 82,
        "category": "Fake Urgency",
        "sender": "admin@videoshare-notify.com",
        "subject": "Account suspension warning: 2 hours left",
        "bodyLines": [
            "We received multiple complaints regarding your account.",
            "You have 2 hours to refute this claim before total suspension.",
            "Click here to appeal immediately."
        ],
        "message": "We received multiple complaints regarding your account. You have 2 hours to refute this claim before total suspension. Click here to appeal immediately.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line0",
        "explanation": "Artificial urgency is designed to make you act before verifying."
    },
    {
        "id": 83,
        "category": "Information Requests",
        "sender": "accounts@school-tech-support.com",
        "subject": "Tech support needs your login credentials",
        "bodyLines": [
            "We need your student username and password to upgrade your computer software tonight.",
            "Reply to this message with your details.",
            "District Tech Team."
        ],
        "message": "We need your student username and password to upgrade your computer software tonight. Reply to this message with your details. District Tech Team.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line0",
        "explanation": "IT support staff already have administrative access and will never ask for your password."
    },
    {
        "id": 84,
        "category": "No warning sign",
        "sender": "library@riverside-school.org",
        "subject": "School spirit day: wear blue on Friday",
        "bodyLines": [
            "Friday is School Spirit Day! Show your school pride by wearing blue or gold.",
            "Let's make it a colorful and energetic day.",
            "Student Council."
        ],
        "message": "Friday is School Spirit Day! Show your school pride by wearing blue or gold. Let's make it a colorful and energetic day. Student Council.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "Fun school spirit reminder. No personal data requested."
    },
    {
        "id": 85,
        "category": "Fake Sender",
        "sender": "desk@school-winner-gifts.fun",
        "subject": "School prize waiting for you",
        "bodyLines": [
            "Congratulations on winning the annual district tablet prize.",
            "Open the link and enter your student credentials.",
            "Collect at the front office."
        ],
        "message": "Congratulations on winning the annual district tablet prize. Open the link and enter your student credentials. Collect at the front office.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "Your school does not send prizes from random external email hosts."
    },
    {
        "id": 86,
        "category": "Fake Urgency",
        "sender": "security@pass-protection.net",
        "subject": "Security breach: Update password within 15 minutes!",
        "bodyLines": [
            "A foreign login was discovered from another city.",
            "You must update your security credentials within 15 minutes.",
            "Failure to comply results in account termination."
        ],
        "message": "A foreign login was discovered from another city. You must update your security credentials within 15 minutes. Failure to comply results in account termination.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Demanding immediate password resets under panic is a phishing tactic."
    },
    {
        "id": 87,
        "category": "Information Requests",
        "sender": "admin@student-rewards-club.org",
        "subject": "Enter your student ID and secret PIN",
        "bodyLines": [
            "You have earned 200 reward points from your classroom work.",
            "Enter your student ID number and 4-digit PIN here to claim rewards.",
            "Student Rewards."
        ],
        "message": "You have earned 200 reward points from your classroom work. Enter your student ID number and 4-digit PIN here to claim rewards. Student Rewards.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Your student PIN and login details are strictly confidential."
    },
    {
        "id": 88,
        "category": "No warning sign",
        "sender": "mr.thompson@riverside-school.org",
        "subject": "Summer reading challenge list",
        "bodyLines": [
            "Here is the suggested reading list for students interested in reading mystery and adventure books.",
            "All books are available at our public library.",
            "Ms. Vance."
        ],
        "message": "Here is the suggested reading list for students interested in reading mystery and adventure books. All books are available at our public library. Ms. Vance.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "Recommended reading list from the school librarian for vacation."
    },
    {
        "id": 89,
        "category": "Fake Sender",
        "sender": "mrs.lee.rewards@mail-free-server.biz",
        "subject": "Message from your teacher Mrs. Lee",
        "bodyLines": [
            "Please open this assignment portal tonight.",
            "Log in using your classroom password.",
            "Thank you, Mrs. Lee."
        ],
        "message": "Please open this assignment portal tonight. Log in using your classroom password. Thank you, Mrs. Lee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "Anyone can type a teacher's name, but the sender domain is suspicious."
    },
    {
        "id": 90,
        "category": "Fake Urgency",
        "sender": "desk@rewards-claim-hub.com",
        "subject": "FINAL NOTICE: Claim your prize before midnight!",
        "bodyLines": [
            "This is your absolute final opportunity to claim your reward.",
            "If not claimed by midnight, your reward goes to the next student.",
            "Click here immediately."
        ],
        "message": "This is your absolute final opportunity to claim your reward. If not claimed by midnight, your reward goes to the next student. Click here immediately.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line0",
        "explanation": "'Final notice' claims for prizes you never entered are scam traps."
    },
    {
        "id": 91,
        "category": "Information Requests",
        "sender": "billing@family-mobile-share.net",
        "subject": "Confirm credit card details for billing",
        "bodyLines": [
            "We noticed a slight issue with your family mobile plan invoice.",
            "Click here and input your parent credit card number to re-verify.",
            "Mobile Billing."
        ],
        "message": "We noticed a slight issue with your family mobile plan invoice. Click here and input your parent credit card number to re-verify. Mobile Billing.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Never enter credit card or banking details through unverified email links."
    },
    {
        "id": 92,
        "category": "No warning sign",
        "sender": "office@riverside-school.org",
        "subject": "Winter coat drive collection notice",
        "bodyLines": [
            "The annual student council winter coat drive starts on Monday.",
            "Clean, gently used coats can be dropped in the donation bins in the lobby.",
            "Community Care."
        ],
        "message": "The annual student council winter coat drive starts on Monday. Clean, gently used coats can be dropped in the donation bins in the lobby. Community Care.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "Charity drive announcement for winter coats from the student council."
    },
    {
        "id": 93,
        "category": "Fake Sender",
        "sender": "parcel-alert@fastbox-express-fake.cc",
        "subject": "Your parcel could not be delivered",
        "bodyLines": [
            "We attempted delivery of a package to your address.",
            "Please confirm your home street in our tracker.",
            "Delivery reattempt scheduled."
        ],
        "message": "We attempted delivery of a package to your address. Please confirm your home street in our tracker. Delivery reattempt scheduled.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "The delivery company address does not belong to any legitimate post service."
    },
    {
        "id": 94,
        "category": "Fake Urgency",
        "sender": "notice@delivery-tracking-portal.com",
        "subject": "Urgent: Package will be discarded today",
        "bodyLines": [
            "Your parcel is held at our depot and will be destroyed today.",
            "Pay the $1.50 handling fee within 1 hour to release it.",
            "Delivery team."
        ],
        "message": "Your parcel is held at our depot and will be destroyed today. Pay the $1.50 handling fee within 1 hour to release it. Delivery team.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Delivery services do not discard packages within hours."
    },
    {
        "id": 95,
        "category": "Information Requests",
        "sender": "security@email-security-check.org",
        "subject": "Security verification: confirm password and recovery code",
        "bodyLines": [
            "Someone attempted to log into your mailbox.",
            "Confirm your password and 6-digit recovery code here to secure your mailbox.",
            "Mail Security."
        ],
        "message": "Someone attempted to log into your mailbox. Confirm your password and 6-digit recovery code here to secure your mailbox. Mail Security.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Two-factor authentication codes and recovery phrases must never be shared."
    },
    {
        "id": 96,
        "category": "No warning sign",
        "sender": "nurse@riverside-school.org",
        "subject": "Math olympiad practice session",
        "bodyLines": [
            "The math olympiad study group will review logic puzzles this Wednesday at 3:15 PM in room 108.",
            "Snacks will be provided.",
            "Math Club."
        ],
        "message": "The math olympiad study group will review logic puzzles this Wednesday at 3:15 PM in room 108. Snacks will be provided. Math Club.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "Study session reminder from the mathematics department."
    },
    {
        "id": 97,
        "category": "Fake Sender",
        "sender": "security@apple-id-login-verify.info",
        "subject": "Apple ID locked due to suspicious login",
        "bodyLines": [
            "Your cloud account has been temporarily frozen.",
            "Verify your security questions now to regain access.",
            "Security team."
        ],
        "message": "Your cloud account has been temporarily frozen. Verify your security questions now to regain access. Security team.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "sender",
        "explanation": "Notice the unofficial domain pretending to be Apple."
    },
    {
        "id": 98,
        "category": "Fake Urgency",
        "sender": "help@district-learning.org",
        "subject": "Action Required: Confirm enrollment within 1 hour",
        "bodyLines": [
            "District records require immediate student re-enrollment.",
            "You must submit your family details within 1 hour.",
            "District office."
        ],
        "message": "District records require immediate student re-enrollment. You must submit your family details within 1 hour. District office.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line0",
        "explanation": "Schools give plenty of notice for enrollment and do not threaten 1-hour deadlines."
    },
    {
        "id": 99,
        "category": "Information Requests",
        "sender": "helpdesk@district-classroom.org",
        "subject": "Teacher portal sync: enter login details",
        "bodyLines": [
            "We are updating Google Classroom synchronization for all students.",
            "Please reply with your full login email and password.",
            "Classroom Support."
        ],
        "message": "We are updating Google Classroom synchronization for all students. Please reply with your full login email and password. Classroom Support.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "suspiciousTarget": "line1",
        "explanation": "Teachers never ask students to email their passwords."
    },
    {
        "id": 100,
        "category": "No warning sign",
        "sender": "coach.miller@riverside-school.org",
        "subject": "Student council elections next week",
        "bodyLines": [
            "Voting for 5th grade student council representatives will take place next Tuesday during homeroom.",
            "All candidate speeches will be broadcast on Monday.",
            "Elections Committee."
        ],
        "message": "Voting for 5th grade student council representatives will take place next Tuesday during homeroom. All candidate speeches will be broadcast on Monday. Elections Committee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "suspiciousTarget": "none",
        "explanation": "Announcement of upcoming school council voting procedures."
    }
];

const case2Scenarios = [
    {
        "id": 1,
        "title": "Password request in chat (Scenario 1)",
        "scenario": "While playing a multiplayer game, a player sends you a private chat: 'Hey, if you share your password with me, I will add 10,000 free coins to your inventory.'",
        "options": [
            "Never share your password; decline and tell a trusted adult",
            "Give them your password since they promised free coins",
            "Share half of your password to see if they are telling the truth",
            "Give them a friend's password instead"
        ],
        "correctAnswer": "Never share your password; decline and tell a trusted adult",
        "explanation": "Passwords must always remain private. Legitimate games and admins will never ask for your password in chat."
    },
    {
        "id": 2,
        "title": "Unknown file download (Scenario 2)",
        "scenario": "An email from an unfamiliar address says: 'Check out these leaked game cheats! Download this setup.exe file right now to unlock all levels.'",
        "options": [
            "Do not open or download the file, and delete the message",
            "Download and run the file immediately to test the cheats",
            "Forward the download file to all your classmates",
            "Open the file on a school computer instead of your own"
        ],
        "correctAnswer": "Do not open or download the file, and delete the message",
        "explanation": "Never download or open executable files (.exe) sent from strangers. They often contain malware or account stealers."
    },
    {
        "id": 3,
        "title": "Urgent account suspension message (Scenario 3)",
        "scenario": "You receive an SMS saying your video streaming profile is suspended unless you click a link and re-enter your family's credit card number within 15 minutes.",
        "options": [
            "Ignore the text and ask your parent or guardian to check the official account",
            "Click the link quickly to avoid losing your favorite shows",
            "Reply with your credit card number directly in the SMS",
            "Call the number back and read them your address"
        ],
        "correctAnswer": "Ignore the text and ask your parent or guardian to check the official account",
        "explanation": "Scammers create artificial panic with tight deadlines. Always verify subscription issues through the official website or with a parent."
    },
    {
        "id": 4,
        "title": "Friend acting strange online (Scenario 4)",
        "scenario": "A friend's social account suddenly messages you: 'Help! I am stuck at the store and need you to buy me an urgent $50 gift card and send the code.'",
        "options": [
            "Contact your friend in person or via phone call to verify if their account was hacked",
            "Immediately buy the gift card and send the secret code",
            "Ask them to send you their password first",
            "Post the gift card code publicly so they can find it"
        ],
        "correctAnswer": "Contact your friend in person or via phone call to verify if their account was hacked",
        "explanation": "When friends ask for money or gift card codes unexpectedly, their account has likely been compromised. Always verify offline."
    },
    {
        "id": 5,
        "title": "Stranger asking for personal photo (Scenario 5)",
        "scenario": "Someone you met on an online gaming forum asks you to send a selfie showing your school uniform and home street sign.",
        "options": [
            "Refuse immediately, block the user, and inform a trusted adult",
            "Send the photo as long as they promise to keep it secret",
            "Send a picture of your house without your face",
            "Ask them to send their picture first before sending yours"
        ],
        "correctAnswer": "Refuse immediately, block the user, and inform a trusted adult",
        "explanation": "Never share personal photos that reveal your school, location, or private identity with people you meet online."
    },
    {
        "id": 6,
        "title": "Pop-up warning about computer virus (Scenario 6)",
        "scenario": "A loud browser pop-up blares: 'WARNING! Your computer is infected with 14 viruses! Call this toll-free support number right now to fix it.'",
        "options": [
            "Close the browser tab immediately and do not call the number",
            "Call the phone number and grant them remote control of your computer",
            "Type your credit card number into the pop-up to purchase antivirus",
            "Click every button on the screen to make the noise stop"
        ],
        "correctAnswer": "Close the browser tab immediately and do not call the number",
        "explanation": "Browser pop-ups claiming your computer has viruses are fake tech support scams designed to trick you into paying or installing spyware."
    },
    {
        "id": 7,
        "title": "Free gift card survey (Scenario 7)",
        "scenario": "A website banner says: 'Complete this 2-minute survey to receive a free $100 shopping card! Just enter your home address, full name, and phone number.'",
        "options": [
            "Close the page without submitting any personal information",
            "Fill out the survey with your real home address to get the card",
            "Provide your parent's phone number so the card can be texted",
            "Share the link with your entire class so everyone gets cards"
        ],
        "correctAnswer": "Close the page without submitting any personal information",
        "explanation": "Websites offering large gift cards for simple surveys are data-harvesting scams designed to collect and sell personal information."
    },
    {
        "id": 8,
        "title": "Public Wi-Fi network without password (Scenario 8)",
        "scenario": "At a shopping mall, you see an open Wi-Fi network named 'Free_Public_HighSpeed_Internet' that does not require any password or sign-in.",
        "options": [
            "Avoid logging into sensitive accounts or shopping when on unverified public Wi-Fi",
            "Immediately log into your bank and email accounts",
            "Disable your device firewall to get faster connection speeds",
            "Share your passwords freely over the unencrypted network"
        ],
        "correctAnswer": "Avoid logging into sensitive accounts or shopping when on unverified public Wi-Fi",
        "explanation": "Unsecured public Wi-Fi networks can be monitored by attackers to intercept sensitive logins. Use trusted networks or mobile data."
    },
    {
        "id": 9,
        "title": "Social media giveaway tag (Scenario 9)",
        "scenario": "You are tagged in a comment by an account called '@OfficialBrandGiveaway_2026': 'You won! DM us your login email to claim your brand new shoes.'",
        "options": [
            "Report the tag as spam and do not reply or send your credentials",
            "Send them your account email and password right away",
            "Ask if they can send two pairs instead",
            "Follow their instructions to download an unknown tracking app"
        ],
        "correctAnswer": "Report the tag as spam and do not reply or send your credentials",
        "explanation": "Random giveaway tags on social media are bots trying to hijack accounts or trick users into paying fake shipping fees."
    },
    {
        "id": 10,
        "title": "Shared computer in school library (Scenario 10)",
        "scenario": "You finish researching a science project on a library computer and are ready to walk to your next class.",
        "options": [
            "Log out of all accounts, close the browser, and lock the computer",
            "Leave all your tabs open so the next student can read your work",
            "Save your password in the browser so you don't have to retype it",
            "Just turn off the monitor screen without signing out"
        ],
        "correctAnswer": "Log out of all accounts, close the browser, and lock the computer",
        "explanation": "Always log out of your accounts when using public or school computers so the next user cannot access your personal data."
    },
    {
        "id": 11,
        "title": "Password request in chat (Scenario 11)",
        "scenario": "While playing a multiplayer game, a player sends you a private chat: 'Hey, if you share your password with me, I will add 10,000 free coins to your inventory.'",
        "options": [
            "Never share your password; decline and tell a trusted adult",
            "Give them your password since they promised free coins",
            "Share half of your password to see if they are telling the truth",
            "Give them a friend's password instead"
        ],
        "correctAnswer": "Never share your password; decline and tell a trusted adult",
        "explanation": "Passwords must always remain private. Legitimate games and admins will never ask for your password in chat."
    },
    {
        "id": 12,
        "title": "Unknown file download (Scenario 12)",
        "scenario": "An email from an unfamiliar address says: 'Check out these leaked game cheats! Download this setup.exe file right now to unlock all levels.'",
        "options": [
            "Do not open or download the file, and delete the message",
            "Download and run the file immediately to test the cheats",
            "Forward the download file to all your classmates",
            "Open the file on a school computer instead of your own"
        ],
        "correctAnswer": "Do not open or download the file, and delete the message",
        "explanation": "Never download or open executable files (.exe) sent from strangers. They often contain malware or account stealers."
    },
    {
        "id": 13,
        "title": "Urgent account suspension message (Scenario 13)",
        "scenario": "You receive an SMS saying your video streaming profile is suspended unless you click a link and re-enter your family's credit card number within 15 minutes.",
        "options": [
            "Ignore the text and ask your parent or guardian to check the official account",
            "Click the link quickly to avoid losing your favorite shows",
            "Reply with your credit card number directly in the SMS",
            "Call the number back and read them your address"
        ],
        "correctAnswer": "Ignore the text and ask your parent or guardian to check the official account",
        "explanation": "Scammers create artificial panic with tight deadlines. Always verify subscription issues through the official website or with a parent."
    },
    {
        "id": 14,
        "title": "Friend acting strange online (Scenario 14)",
        "scenario": "A friend's social account suddenly messages you: 'Help! I am stuck at the store and need you to buy me an urgent $50 gift card and send the code.'",
        "options": [
            "Contact your friend in person or via phone call to verify if their account was hacked",
            "Immediately buy the gift card and send the secret code",
            "Ask them to send you their password first",
            "Post the gift card code publicly so they can find it"
        ],
        "correctAnswer": "Contact your friend in person or via phone call to verify if their account was hacked",
        "explanation": "When friends ask for money or gift card codes unexpectedly, their account has likely been compromised. Always verify offline."
    },
    {
        "id": 15,
        "title": "Stranger asking for personal photo (Scenario 15)",
        "scenario": "Someone you met on an online gaming forum asks you to send a selfie showing your school uniform and home street sign.",
        "options": [
            "Refuse immediately, block the user, and inform a trusted adult",
            "Send the photo as long as they promise to keep it secret",
            "Send a picture of your house without your face",
            "Ask them to send their picture first before sending yours"
        ],
        "correctAnswer": "Refuse immediately, block the user, and inform a trusted adult",
        "explanation": "Never share personal photos that reveal your school, location, or private identity with people you meet online."
    },
    {
        "id": 16,
        "title": "Pop-up warning about computer virus (Scenario 16)",
        "scenario": "A loud browser pop-up blares: 'WARNING! Your computer is infected with 14 viruses! Call this toll-free support number right now to fix it.'",
        "options": [
            "Close the browser tab immediately and do not call the number",
            "Call the phone number and grant them remote control of your computer",
            "Type your credit card number into the pop-up to purchase antivirus",
            "Click every button on the screen to make the noise stop"
        ],
        "correctAnswer": "Close the browser tab immediately and do not call the number",
        "explanation": "Browser pop-ups claiming your computer has viruses are fake tech support scams designed to trick you into paying or installing spyware."
    },
    {
        "id": 17,
        "title": "Free gift card survey (Scenario 17)",
        "scenario": "A website banner says: 'Complete this 2-minute survey to receive a free $100 shopping card! Just enter your home address, full name, and phone number.'",
        "options": [
            "Close the page without submitting any personal information",
            "Fill out the survey with your real home address to get the card",
            "Provide your parent's phone number so the card can be texted",
            "Share the link with your entire class so everyone gets cards"
        ],
        "correctAnswer": "Close the page without submitting any personal information",
        "explanation": "Websites offering large gift cards for simple surveys are data-harvesting scams designed to collect and sell personal information."
    },
    {
        "id": 18,
        "title": "Public Wi-Fi network without password (Scenario 18)",
        "scenario": "At a shopping mall, you see an open Wi-Fi network named 'Free_Public_HighSpeed_Internet' that does not require any password or sign-in.",
        "options": [
            "Avoid logging into sensitive accounts or shopping when on unverified public Wi-Fi",
            "Immediately log into your bank and email accounts",
            "Disable your device firewall to get faster connection speeds",
            "Share your passwords freely over the unencrypted network"
        ],
        "correctAnswer": "Avoid logging into sensitive accounts or shopping when on unverified public Wi-Fi",
        "explanation": "Unsecured public Wi-Fi networks can be monitored by attackers to intercept sensitive logins. Use trusted networks or mobile data."
    },
    {
        "id": 19,
        "title": "Social media giveaway tag (Scenario 19)",
        "scenario": "You are tagged in a comment by an account called '@OfficialBrandGiveaway_2026': 'You won! DM us your login email to claim your brand new shoes.'",
        "options": [
            "Report the tag as spam and do not reply or send your credentials",
            "Send them your account email and password right away",
            "Ask if they can send two pairs instead",
            "Follow their instructions to download an unknown tracking app"
        ],
        "correctAnswer": "Report the tag as spam and do not reply or send your credentials",
        "explanation": "Random giveaway tags on social media are bots trying to hijack accounts or trick users into paying fake shipping fees."
    },
    {
        "id": 20,
        "title": "Shared computer in school library (Scenario 20)",
        "scenario": "You finish researching a science project on a library computer and are ready to walk to your next class.",
        "options": [
            "Log out of all accounts, close the browser, and lock the computer",
            "Leave all your tabs open so the next student can read your work",
            "Save your password in the browser so you don't have to retype it",
            "Just turn off the monitor screen without signing out"
        ],
        "correctAnswer": "Log out of all accounts, close the browser, and lock the computer",
        "explanation": "Always log out of your accounts when using public or school computers so the next user cannot access your personal data."
    },
    {
        "id": 21,
        "title": "Password request in chat (Scenario 21)",
        "scenario": "While playing a multiplayer game, a player sends you a private chat: 'Hey, if you share your password with me, I will add 10,000 free coins to your inventory.'",
        "options": [
            "Never share your password; decline and tell a trusted adult",
            "Give them your password since they promised free coins",
            "Share half of your password to see if they are telling the truth",
            "Give them a friend's password instead"
        ],
        "correctAnswer": "Never share your password; decline and tell a trusted adult",
        "explanation": "Passwords must always remain private. Legitimate games and admins will never ask for your password in chat."
    },
    {
        "id": 22,
        "title": "Unknown file download (Scenario 22)",
        "scenario": "An email from an unfamiliar address says: 'Check out these leaked game cheats! Download this setup.exe file right now to unlock all levels.'",
        "options": [
            "Do not open or download the file, and delete the message",
            "Download and run the file immediately to test the cheats",
            "Forward the download file to all your classmates",
            "Open the file on a school computer instead of your own"
        ],
        "correctAnswer": "Do not open or download the file, and delete the message",
        "explanation": "Never download or open executable files (.exe) sent from strangers. They often contain malware or account stealers."
    },
    {
        "id": 23,
        "title": "Urgent account suspension message (Scenario 23)",
        "scenario": "You receive an SMS saying your video streaming profile is suspended unless you click a link and re-enter your family's credit card number within 15 minutes.",
        "options": [
            "Ignore the text and ask your parent or guardian to check the official account",
            "Click the link quickly to avoid losing your favorite shows",
            "Reply with your credit card number directly in the SMS",
            "Call the number back and read them your address"
        ],
        "correctAnswer": "Ignore the text and ask your parent or guardian to check the official account",
        "explanation": "Scammers create artificial panic with tight deadlines. Always verify subscription issues through the official website or with a parent."
    },
    {
        "id": 24,
        "title": "Friend acting strange online (Scenario 24)",
        "scenario": "A friend's social account suddenly messages you: 'Help! I am stuck at the store and need you to buy me an urgent $50 gift card and send the code.'",
        "options": [
            "Contact your friend in person or via phone call to verify if their account was hacked",
            "Immediately buy the gift card and send the secret code",
            "Ask them to send you their password first",
            "Post the gift card code publicly so they can find it"
        ],
        "correctAnswer": "Contact your friend in person or via phone call to verify if their account was hacked",
        "explanation": "When friends ask for money or gift card codes unexpectedly, their account has likely been compromised. Always verify offline."
    },
    {
        "id": 25,
        "title": "Stranger asking for personal photo (Scenario 25)",
        "scenario": "Someone you met on an online gaming forum asks you to send a selfie showing your school uniform and home street sign.",
        "options": [
            "Refuse immediately, block the user, and inform a trusted adult",
            "Send the photo as long as they promise to keep it secret",
            "Send a picture of your house without your face",
            "Ask them to send their picture first before sending yours"
        ],
        "correctAnswer": "Refuse immediately, block the user, and inform a trusted adult",
        "explanation": "Never share personal photos that reveal your school, location, or private identity with people you meet online."
    },
    {
        "id": 26,
        "title": "Pop-up warning about computer virus (Scenario 26)",
        "scenario": "A loud browser pop-up blares: 'WARNING! Your computer is infected with 14 viruses! Call this toll-free support number right now to fix it.'",
        "options": [
            "Close the browser tab immediately and do not call the number",
            "Call the phone number and grant them remote control of your computer",
            "Type your credit card number into the pop-up to purchase antivirus",
            "Click every button on the screen to make the noise stop"
        ],
        "correctAnswer": "Close the browser tab immediately and do not call the number",
        "explanation": "Browser pop-ups claiming your computer has viruses are fake tech support scams designed to trick you into paying or installing spyware."
    },
    {
        "id": 27,
        "title": "Free gift card survey (Scenario 27)",
        "scenario": "A website banner says: 'Complete this 2-minute survey to receive a free $100 shopping card! Just enter your home address, full name, and phone number.'",
        "options": [
            "Close the page without submitting any personal information",
            "Fill out the survey with your real home address to get the card",
            "Provide your parent's phone number so the card can be texted",
            "Share the link with your entire class so everyone gets cards"
        ],
        "correctAnswer": "Close the page without submitting any personal information",
        "explanation": "Websites offering large gift cards for simple surveys are data-harvesting scams designed to collect and sell personal information."
    },
    {
        "id": 28,
        "title": "Public Wi-Fi network without password (Scenario 28)",
        "scenario": "At a shopping mall, you see an open Wi-Fi network named 'Free_Public_HighSpeed_Internet' that does not require any password or sign-in.",
        "options": [
            "Avoid logging into sensitive accounts or shopping when on unverified public Wi-Fi",
            "Immediately log into your bank and email accounts",
            "Disable your device firewall to get faster connection speeds",
            "Share your passwords freely over the unencrypted network"
        ],
        "correctAnswer": "Avoid logging into sensitive accounts or shopping when on unverified public Wi-Fi",
        "explanation": "Unsecured public Wi-Fi networks can be monitored by attackers to intercept sensitive logins. Use trusted networks or mobile data."
    },
    {
        "id": 29,
        "title": "Social media giveaway tag (Scenario 29)",
        "scenario": "You are tagged in a comment by an account called '@OfficialBrandGiveaway_2026': 'You won! DM us your login email to claim your brand new shoes.'",
        "options": [
            "Report the tag as spam and do not reply or send your credentials",
            "Send them your account email and password right away",
            "Ask if they can send two pairs instead",
            "Follow their instructions to download an unknown tracking app"
        ],
        "correctAnswer": "Report the tag as spam and do not reply or send your credentials",
        "explanation": "Random giveaway tags on social media are bots trying to hijack accounts or trick users into paying fake shipping fees."
    },
    {
        "id": 30,
        "title": "Shared computer in school library (Scenario 30)",
        "scenario": "You finish researching a science project on a library computer and are ready to walk to your next class.",
        "options": [
            "Log out of all accounts, close the browser, and lock the computer",
            "Leave all your tabs open so the next student can read your work",
            "Save your password in the browser so you don't have to retype it",
            "Just turn off the monitor screen without signing out"
        ],
        "correctAnswer": "Log out of all accounts, close the browser, and lock the computer",
        "explanation": "Always log out of your accounts when using public or school computers so the next user cannot access your personal data."
    },
    {
        "id": 31,
        "title": "Password request in chat (Scenario 31)",
        "scenario": "While playing a multiplayer game, a player sends you a private chat: 'Hey, if you share your password with me, I will add 10,000 free coins to your inventory.'",
        "options": [
            "Never share your password; decline and tell a trusted adult",
            "Give them your password since they promised free coins",
            "Share half of your password to see if they are telling the truth",
            "Give them a friend's password instead"
        ],
        "correctAnswer": "Never share your password; decline and tell a trusted adult",
        "explanation": "Passwords must always remain private. Legitimate games and admins will never ask for your password in chat."
    },
    {
        "id": 32,
        "title": "Unknown file download (Scenario 32)",
        "scenario": "An email from an unfamiliar address says: 'Check out these leaked game cheats! Download this setup.exe file right now to unlock all levels.'",
        "options": [
            "Do not open or download the file, and delete the message",
            "Download and run the file immediately to test the cheats",
            "Forward the download file to all your classmates",
            "Open the file on a school computer instead of your own"
        ],
        "correctAnswer": "Do not open or download the file, and delete the message",
        "explanation": "Never download or open executable files (.exe) sent from strangers. They often contain malware or account stealers."
    },
    {
        "id": 33,
        "title": "Urgent account suspension message (Scenario 33)",
        "scenario": "You receive an SMS saying your video streaming profile is suspended unless you click a link and re-enter your family's credit card number within 15 minutes.",
        "options": [
            "Ignore the text and ask your parent or guardian to check the official account",
            "Click the link quickly to avoid losing your favorite shows",
            "Reply with your credit card number directly in the SMS",
            "Call the number back and read them your address"
        ],
        "correctAnswer": "Ignore the text and ask your parent or guardian to check the official account",
        "explanation": "Scammers create artificial panic with tight deadlines. Always verify subscription issues through the official website or with a parent."
    },
    {
        "id": 34,
        "title": "Friend acting strange online (Scenario 34)",
        "scenario": "A friend's social account suddenly messages you: 'Help! I am stuck at the store and need you to buy me an urgent $50 gift card and send the code.'",
        "options": [
            "Contact your friend in person or via phone call to verify if their account was hacked",
            "Immediately buy the gift card and send the secret code",
            "Ask them to send you their password first",
            "Post the gift card code publicly so they can find it"
        ],
        "correctAnswer": "Contact your friend in person or via phone call to verify if their account was hacked",
        "explanation": "When friends ask for money or gift card codes unexpectedly, their account has likely been compromised. Always verify offline."
    },
    {
        "id": 35,
        "title": "Stranger asking for personal photo (Scenario 35)",
        "scenario": "Someone you met on an online gaming forum asks you to send a selfie showing your school uniform and home street sign.",
        "options": [
            "Refuse immediately, block the user, and inform a trusted adult",
            "Send the photo as long as they promise to keep it secret",
            "Send a picture of your house without your face",
            "Ask them to send their picture first before sending yours"
        ],
        "correctAnswer": "Refuse immediately, block the user, and inform a trusted adult",
        "explanation": "Never share personal photos that reveal your school, location, or private identity with people you meet online."
    },
    {
        "id": 36,
        "title": "Pop-up warning about computer virus (Scenario 36)",
        "scenario": "A loud browser pop-up blares: 'WARNING! Your computer is infected with 14 viruses! Call this toll-free support number right now to fix it.'",
        "options": [
            "Close the browser tab immediately and do not call the number",
            "Call the phone number and grant them remote control of your computer",
            "Type your credit card number into the pop-up to purchase antivirus",
            "Click every button on the screen to make the noise stop"
        ],
        "correctAnswer": "Close the browser tab immediately and do not call the number",
        "explanation": "Browser pop-ups claiming your computer has viruses are fake tech support scams designed to trick you into paying or installing spyware."
    },
    {
        "id": 37,
        "title": "Free gift card survey (Scenario 37)",
        "scenario": "A website banner says: 'Complete this 2-minute survey to receive a free $100 shopping card! Just enter your home address, full name, and phone number.'",
        "options": [
            "Close the page without submitting any personal information",
            "Fill out the survey with your real home address to get the card",
            "Provide your parent's phone number so the card can be texted",
            "Share the link with your entire class so everyone gets cards"
        ],
        "correctAnswer": "Close the page without submitting any personal information",
        "explanation": "Websites offering large gift cards for simple surveys are data-harvesting scams designed to collect and sell personal information."
    },
    {
        "id": 38,
        "title": "Public Wi-Fi network without password (Scenario 38)",
        "scenario": "At a shopping mall, you see an open Wi-Fi network named 'Free_Public_HighSpeed_Internet' that does not require any password or sign-in.",
        "options": [
            "Avoid logging into sensitive accounts or shopping when on unverified public Wi-Fi",
            "Immediately log into your bank and email accounts",
            "Disable your device firewall to get faster connection speeds",
            "Share your passwords freely over the unencrypted network"
        ],
        "correctAnswer": "Avoid logging into sensitive accounts or shopping when on unverified public Wi-Fi",
        "explanation": "Unsecured public Wi-Fi networks can be monitored by attackers to intercept sensitive logins. Use trusted networks or mobile data."
    },
    {
        "id": 39,
        "title": "Social media giveaway tag (Scenario 39)",
        "scenario": "You are tagged in a comment by an account called '@OfficialBrandGiveaway_2026': 'You won! DM us your login email to claim your brand new shoes.'",
        "options": [
            "Report the tag as spam and do not reply or send your credentials",
            "Send them your account email and password right away",
            "Ask if they can send two pairs instead",
            "Follow their instructions to download an unknown tracking app"
        ],
        "correctAnswer": "Report the tag as spam and do not reply or send your credentials",
        "explanation": "Random giveaway tags on social media are bots trying to hijack accounts or trick users into paying fake shipping fees."
    },
    {
        "id": 40,
        "title": "Shared computer in school library (Scenario 40)",
        "scenario": "You finish researching a science project on a library computer and are ready to walk to your next class.",
        "options": [
            "Log out of all accounts, close the browser, and lock the computer",
            "Leave all your tabs open so the next student can read your work",
            "Save your password in the browser so you don't have to retype it",
            "Just turn off the monitor screen without signing out"
        ],
        "correctAnswer": "Log out of all accounts, close the browser, and lock the computer",
        "explanation": "Always log out of your accounts when using public or school computers so the next user cannot access your personal data."
    },
    {
        "id": 41,
        "title": "Password request in chat (Scenario 41)",
        "scenario": "While playing a multiplayer game, a player sends you a private chat: 'Hey, if you share your password with me, I will add 10,000 free coins to your inventory.'",
        "options": [
            "Never share your password; decline and tell a trusted adult",
            "Give them your password since they promised free coins",
            "Share half of your password to see if they are telling the truth",
            "Give them a friend's password instead"
        ],
        "correctAnswer": "Never share your password; decline and tell a trusted adult",
        "explanation": "Passwords must always remain private. Legitimate games and admins will never ask for your password in chat."
    },
    {
        "id": 42,
        "title": "Unknown file download (Scenario 42)",
        "scenario": "An email from an unfamiliar address says: 'Check out these leaked game cheats! Download this setup.exe file right now to unlock all levels.'",
        "options": [
            "Do not open or download the file, and delete the message",
            "Download and run the file immediately to test the cheats",
            "Forward the download file to all your classmates",
            "Open the file on a school computer instead of your own"
        ],
        "correctAnswer": "Do not open or download the file, and delete the message",
        "explanation": "Never download or open executable files (.exe) sent from strangers. They often contain malware or account stealers."
    },
    {
        "id": 43,
        "title": "Urgent account suspension message (Scenario 43)",
        "scenario": "You receive an SMS saying your video streaming profile is suspended unless you click a link and re-enter your family's credit card number within 15 minutes.",
        "options": [
            "Ignore the text and ask your parent or guardian to check the official account",
            "Click the link quickly to avoid losing your favorite shows",
            "Reply with your credit card number directly in the SMS",
            "Call the number back and read them your address"
        ],
        "correctAnswer": "Ignore the text and ask your parent or guardian to check the official account",
        "explanation": "Scammers create artificial panic with tight deadlines. Always verify subscription issues through the official website or with a parent."
    },
    {
        "id": 44,
        "title": "Friend acting strange online (Scenario 44)",
        "scenario": "A friend's social account suddenly messages you: 'Help! I am stuck at the store and need you to buy me an urgent $50 gift card and send the code.'",
        "options": [
            "Contact your friend in person or via phone call to verify if their account was hacked",
            "Immediately buy the gift card and send the secret code",
            "Ask them to send you their password first",
            "Post the gift card code publicly so they can find it"
        ],
        "correctAnswer": "Contact your friend in person or via phone call to verify if their account was hacked",
        "explanation": "When friends ask for money or gift card codes unexpectedly, their account has likely been compromised. Always verify offline."
    },
    {
        "id": 45,
        "title": "Stranger asking for personal photo (Scenario 45)",
        "scenario": "Someone you met on an online gaming forum asks you to send a selfie showing your school uniform and home street sign.",
        "options": [
            "Refuse immediately, block the user, and inform a trusted adult",
            "Send the photo as long as they promise to keep it secret",
            "Send a picture of your house without your face",
            "Ask them to send their picture first before sending yours"
        ],
        "correctAnswer": "Refuse immediately, block the user, and inform a trusted adult",
        "explanation": "Never share personal photos that reveal your school, location, or private identity with people you meet online."
    },
    {
        "id": 46,
        "title": "Pop-up warning about computer virus (Scenario 46)",
        "scenario": "A loud browser pop-up blares: 'WARNING! Your computer is infected with 14 viruses! Call this toll-free support number right now to fix it.'",
        "options": [
            "Close the browser tab immediately and do not call the number",
            "Call the phone number and grant them remote control of your computer",
            "Type your credit card number into the pop-up to purchase antivirus",
            "Click every button on the screen to make the noise stop"
        ],
        "correctAnswer": "Close the browser tab immediately and do not call the number",
        "explanation": "Browser pop-ups claiming your computer has viruses are fake tech support scams designed to trick you into paying or installing spyware."
    },
    {
        "id": 47,
        "title": "Free gift card survey (Scenario 47)",
        "scenario": "A website banner says: 'Complete this 2-minute survey to receive a free $100 shopping card! Just enter your home address, full name, and phone number.'",
        "options": [
            "Close the page without submitting any personal information",
            "Fill out the survey with your real home address to get the card",
            "Provide your parent's phone number so the card can be texted",
            "Share the link with your entire class so everyone gets cards"
        ],
        "correctAnswer": "Close the page without submitting any personal information",
        "explanation": "Websites offering large gift cards for simple surveys are data-harvesting scams designed to collect and sell personal information."
    },
    {
        "id": 48,
        "title": "Public Wi-Fi network without password (Scenario 48)",
        "scenario": "At a shopping mall, you see an open Wi-Fi network named 'Free_Public_HighSpeed_Internet' that does not require any password or sign-in.",
        "options": [
            "Avoid logging into sensitive accounts or shopping when on unverified public Wi-Fi",
            "Immediately log into your bank and email accounts",
            "Disable your device firewall to get faster connection speeds",
            "Share your passwords freely over the unencrypted network"
        ],
        "correctAnswer": "Avoid logging into sensitive accounts or shopping when on unverified public Wi-Fi",
        "explanation": "Unsecured public Wi-Fi networks can be monitored by attackers to intercept sensitive logins. Use trusted networks or mobile data."
    },
    {
        "id": 49,
        "title": "Social media giveaway tag (Scenario 49)",
        "scenario": "You are tagged in a comment by an account called '@OfficialBrandGiveaway_2026': 'You won! DM us your login email to claim your brand new shoes.'",
        "options": [
            "Report the tag as spam and do not reply or send your credentials",
            "Send them your account email and password right away",
            "Ask if they can send two pairs instead",
            "Follow their instructions to download an unknown tracking app"
        ],
        "correctAnswer": "Report the tag as spam and do not reply or send your credentials",
        "explanation": "Random giveaway tags on social media are bots trying to hijack accounts or trick users into paying fake shipping fees."
    },
    {
        "id": 50,
        "title": "Shared computer in school library (Scenario 50)",
        "scenario": "You finish researching a science project on a library computer and are ready to walk to your next class.",
        "options": [
            "Log out of all accounts, close the browser, and lock the computer",
            "Leave all your tabs open so the next student can read your work",
            "Save your password in the browser so you don't have to retype it",
            "Just turn off the monitor screen without signing out"
        ],
        "correctAnswer": "Log out of all accounts, close the browser, and lock the computer",
        "explanation": "Always log out of your accounts when using public or school computers so the next user cannot access your personal data."
    },
    {
        "id": 51,
        "title": "Password request in chat (Scenario 51)",
        "scenario": "While playing a multiplayer game, a player sends you a private chat: 'Hey, if you share your password with me, I will add 10,000 free coins to your inventory.'",
        "options": [
            "Never share your password; decline and tell a trusted adult",
            "Give them your password since they promised free coins",
            "Share half of your password to see if they are telling the truth",
            "Give them a friend's password instead"
        ],
        "correctAnswer": "Never share your password; decline and tell a trusted adult",
        "explanation": "Passwords must always remain private. Legitimate games and admins will never ask for your password in chat."
    },
    {
        "id": 52,
        "title": "Unknown file download (Scenario 52)",
        "scenario": "An email from an unfamiliar address says: 'Check out these leaked game cheats! Download this setup.exe file right now to unlock all levels.'",
        "options": [
            "Do not open or download the file, and delete the message",
            "Download and run the file immediately to test the cheats",
            "Forward the download file to all your classmates",
            "Open the file on a school computer instead of your own"
        ],
        "correctAnswer": "Do not open or download the file, and delete the message",
        "explanation": "Never download or open executable files (.exe) sent from strangers. They often contain malware or account stealers."
    },
    {
        "id": 53,
        "title": "Urgent account suspension message (Scenario 53)",
        "scenario": "You receive an SMS saying your video streaming profile is suspended unless you click a link and re-enter your family's credit card number within 15 minutes.",
        "options": [
            "Ignore the text and ask your parent or guardian to check the official account",
            "Click the link quickly to avoid losing your favorite shows",
            "Reply with your credit card number directly in the SMS",
            "Call the number back and read them your address"
        ],
        "correctAnswer": "Ignore the text and ask your parent or guardian to check the official account",
        "explanation": "Scammers create artificial panic with tight deadlines. Always verify subscription issues through the official website or with a parent."
    },
    {
        "id": 54,
        "title": "Friend acting strange online (Scenario 54)",
        "scenario": "A friend's social account suddenly messages you: 'Help! I am stuck at the store and need you to buy me an urgent $50 gift card and send the code.'",
        "options": [
            "Contact your friend in person or via phone call to verify if their account was hacked",
            "Immediately buy the gift card and send the secret code",
            "Ask them to send you their password first",
            "Post the gift card code publicly so they can find it"
        ],
        "correctAnswer": "Contact your friend in person or via phone call to verify if their account was hacked",
        "explanation": "When friends ask for money or gift card codes unexpectedly, their account has likely been compromised. Always verify offline."
    },
    {
        "id": 55,
        "title": "Stranger asking for personal photo (Scenario 55)",
        "scenario": "Someone you met on an online gaming forum asks you to send a selfie showing your school uniform and home street sign.",
        "options": [
            "Refuse immediately, block the user, and inform a trusted adult",
            "Send the photo as long as they promise to keep it secret",
            "Send a picture of your house without your face",
            "Ask them to send their picture first before sending yours"
        ],
        "correctAnswer": "Refuse immediately, block the user, and inform a trusted adult",
        "explanation": "Never share personal photos that reveal your school, location, or private identity with people you meet online."
    },
    {
        "id": 56,
        "title": "Pop-up warning about computer virus (Scenario 56)",
        "scenario": "A loud browser pop-up blares: 'WARNING! Your computer is infected with 14 viruses! Call this toll-free support number right now to fix it.'",
        "options": [
            "Close the browser tab immediately and do not call the number",
            "Call the phone number and grant them remote control of your computer",
            "Type your credit card number into the pop-up to purchase antivirus",
            "Click every button on the screen to make the noise stop"
        ],
        "correctAnswer": "Close the browser tab immediately and do not call the number",
        "explanation": "Browser pop-ups claiming your computer has viruses are fake tech support scams designed to trick you into paying or installing spyware."
    },
    {
        "id": 57,
        "title": "Free gift card survey (Scenario 57)",
        "scenario": "A website banner says: 'Complete this 2-minute survey to receive a free $100 shopping card! Just enter your home address, full name, and phone number.'",
        "options": [
            "Close the page without submitting any personal information",
            "Fill out the survey with your real home address to get the card",
            "Provide your parent's phone number so the card can be texted",
            "Share the link with your entire class so everyone gets cards"
        ],
        "correctAnswer": "Close the page without submitting any personal information",
        "explanation": "Websites offering large gift cards for simple surveys are data-harvesting scams designed to collect and sell personal information."
    },
    {
        "id": 58,
        "title": "Public Wi-Fi network without password (Scenario 58)",
        "scenario": "At a shopping mall, you see an open Wi-Fi network named 'Free_Public_HighSpeed_Internet' that does not require any password or sign-in.",
        "options": [
            "Avoid logging into sensitive accounts or shopping when on unverified public Wi-Fi",
            "Immediately log into your bank and email accounts",
            "Disable your device firewall to get faster connection speeds",
            "Share your passwords freely over the unencrypted network"
        ],
        "correctAnswer": "Avoid logging into sensitive accounts or shopping when on unverified public Wi-Fi",
        "explanation": "Unsecured public Wi-Fi networks can be monitored by attackers to intercept sensitive logins. Use trusted networks or mobile data."
    },
    {
        "id": 59,
        "title": "Social media giveaway tag (Scenario 59)",
        "scenario": "You are tagged in a comment by an account called '@OfficialBrandGiveaway_2026': 'You won! DM us your login email to claim your brand new shoes.'",
        "options": [
            "Report the tag as spam and do not reply or send your credentials",
            "Send them your account email and password right away",
            "Ask if they can send two pairs instead",
            "Follow their instructions to download an unknown tracking app"
        ],
        "correctAnswer": "Report the tag as spam and do not reply or send your credentials",
        "explanation": "Random giveaway tags on social media are bots trying to hijack accounts or trick users into paying fake shipping fees."
    },
    {
        "id": 60,
        "title": "Shared computer in school library (Scenario 60)",
        "scenario": "You finish researching a science project on a library computer and are ready to walk to your next class.",
        "options": [
            "Log out of all accounts, close the browser, and lock the computer",
            "Leave all your tabs open so the next student can read your work",
            "Save your password in the browser so you don't have to retype it",
            "Just turn off the monitor screen without signing out"
        ],
        "correctAnswer": "Log out of all accounts, close the browser, and lock the computer",
        "explanation": "Always log out of your accounts when using public or school computers so the next user cannot access your personal data."
    },
    {
        "id": 61,
        "title": "Password request in chat (Scenario 61)",
        "scenario": "While playing a multiplayer game, a player sends you a private chat: 'Hey, if you share your password with me, I will add 10,000 free coins to your inventory.'",
        "options": [
            "Never share your password; decline and tell a trusted adult",
            "Give them your password since they promised free coins",
            "Share half of your password to see if they are telling the truth",
            "Give them a friend's password instead"
        ],
        "correctAnswer": "Never share your password; decline and tell a trusted adult",
        "explanation": "Passwords must always remain private. Legitimate games and admins will never ask for your password in chat."
    },
    {
        "id": 62,
        "title": "Unknown file download (Scenario 62)",
        "scenario": "An email from an unfamiliar address says: 'Check out these leaked game cheats! Download this setup.exe file right now to unlock all levels.'",
        "options": [
            "Do not open or download the file, and delete the message",
            "Download and run the file immediately to test the cheats",
            "Forward the download file to all your classmates",
            "Open the file on a school computer instead of your own"
        ],
        "correctAnswer": "Do not open or download the file, and delete the message",
        "explanation": "Never download or open executable files (.exe) sent from strangers. They often contain malware or account stealers."
    },
    {
        "id": 63,
        "title": "Urgent account suspension message (Scenario 63)",
        "scenario": "You receive an SMS saying your video streaming profile is suspended unless you click a link and re-enter your family's credit card number within 15 minutes.",
        "options": [
            "Ignore the text and ask your parent or guardian to check the official account",
            "Click the link quickly to avoid losing your favorite shows",
            "Reply with your credit card number directly in the SMS",
            "Call the number back and read them your address"
        ],
        "correctAnswer": "Ignore the text and ask your parent or guardian to check the official account",
        "explanation": "Scammers create artificial panic with tight deadlines. Always verify subscription issues through the official website or with a parent."
    },
    {
        "id": 64,
        "title": "Friend acting strange online (Scenario 64)",
        "scenario": "A friend's social account suddenly messages you: 'Help! I am stuck at the store and need you to buy me an urgent $50 gift card and send the code.'",
        "options": [
            "Contact your friend in person or via phone call to verify if their account was hacked",
            "Immediately buy the gift card and send the secret code",
            "Ask them to send you their password first",
            "Post the gift card code publicly so they can find it"
        ],
        "correctAnswer": "Contact your friend in person or via phone call to verify if their account was hacked",
        "explanation": "When friends ask for money or gift card codes unexpectedly, their account has likely been compromised. Always verify offline."
    },
    {
        "id": 65,
        "title": "Stranger asking for personal photo (Scenario 65)",
        "scenario": "Someone you met on an online gaming forum asks you to send a selfie showing your school uniform and home street sign.",
        "options": [
            "Refuse immediately, block the user, and inform a trusted adult",
            "Send the photo as long as they promise to keep it secret",
            "Send a picture of your house without your face",
            "Ask them to send their picture first before sending yours"
        ],
        "correctAnswer": "Refuse immediately, block the user, and inform a trusted adult",
        "explanation": "Never share personal photos that reveal your school, location, or private identity with people you meet online."
    },
    {
        "id": 66,
        "title": "Pop-up warning about computer virus (Scenario 66)",
        "scenario": "A loud browser pop-up blares: 'WARNING! Your computer is infected with 14 viruses! Call this toll-free support number right now to fix it.'",
        "options": [
            "Close the browser tab immediately and do not call the number",
            "Call the phone number and grant them remote control of your computer",
            "Type your credit card number into the pop-up to purchase antivirus",
            "Click every button on the screen to make the noise stop"
        ],
        "correctAnswer": "Close the browser tab immediately and do not call the number",
        "explanation": "Browser pop-ups claiming your computer has viruses are fake tech support scams designed to trick you into paying or installing spyware."
    },
    {
        "id": 67,
        "title": "Free gift card survey (Scenario 67)",
        "scenario": "A website banner says: 'Complete this 2-minute survey to receive a free $100 shopping card! Just enter your home address, full name, and phone number.'",
        "options": [
            "Close the page without submitting any personal information",
            "Fill out the survey with your real home address to get the card",
            "Provide your parent's phone number so the card can be texted",
            "Share the link with your entire class so everyone gets cards"
        ],
        "correctAnswer": "Close the page without submitting any personal information",
        "explanation": "Websites offering large gift cards for simple surveys are data-harvesting scams designed to collect and sell personal information."
    },
    {
        "id": 68,
        "title": "Public Wi-Fi network without password (Scenario 68)",
        "scenario": "At a shopping mall, you see an open Wi-Fi network named 'Free_Public_HighSpeed_Internet' that does not require any password or sign-in.",
        "options": [
            "Avoid logging into sensitive accounts or shopping when on unverified public Wi-Fi",
            "Immediately log into your bank and email accounts",
            "Disable your device firewall to get faster connection speeds",
            "Share your passwords freely over the unencrypted network"
        ],
        "correctAnswer": "Avoid logging into sensitive accounts or shopping when on unverified public Wi-Fi",
        "explanation": "Unsecured public Wi-Fi networks can be monitored by attackers to intercept sensitive logins. Use trusted networks or mobile data."
    },
    {
        "id": 69,
        "title": "Social media giveaway tag (Scenario 69)",
        "scenario": "You are tagged in a comment by an account called '@OfficialBrandGiveaway_2026': 'You won! DM us your login email to claim your brand new shoes.'",
        "options": [
            "Report the tag as spam and do not reply or send your credentials",
            "Send them your account email and password right away",
            "Ask if they can send two pairs instead",
            "Follow their instructions to download an unknown tracking app"
        ],
        "correctAnswer": "Report the tag as spam and do not reply or send your credentials",
        "explanation": "Random giveaway tags on social media are bots trying to hijack accounts or trick users into paying fake shipping fees."
    },
    {
        "id": 70,
        "title": "Shared computer in school library (Scenario 70)",
        "scenario": "You finish researching a science project on a library computer and are ready to walk to your next class.",
        "options": [
            "Log out of all accounts, close the browser, and lock the computer",
            "Leave all your tabs open so the next student can read your work",
            "Save your password in the browser so you don't have to retype it",
            "Just turn off the monitor screen without signing out"
        ],
        "correctAnswer": "Log out of all accounts, close the browser, and lock the computer",
        "explanation": "Always log out of your accounts when using public or school computers so the next user cannot access your personal data."
    },
    {
        "id": 71,
        "title": "Password request in chat (Scenario 71)",
        "scenario": "While playing a multiplayer game, a player sends you a private chat: 'Hey, if you share your password with me, I will add 10,000 free coins to your inventory.'",
        "options": [
            "Never share your password; decline and tell a trusted adult",
            "Give them your password since they promised free coins",
            "Share half of your password to see if they are telling the truth",
            "Give them a friend's password instead"
        ],
        "correctAnswer": "Never share your password; decline and tell a trusted adult",
        "explanation": "Passwords must always remain private. Legitimate games and admins will never ask for your password in chat."
    },
    {
        "id": 72,
        "title": "Unknown file download (Scenario 72)",
        "scenario": "An email from an unfamiliar address says: 'Check out these leaked game cheats! Download this setup.exe file right now to unlock all levels.'",
        "options": [
            "Do not open or download the file, and delete the message",
            "Download and run the file immediately to test the cheats",
            "Forward the download file to all your classmates",
            "Open the file on a school computer instead of your own"
        ],
        "correctAnswer": "Do not open or download the file, and delete the message",
        "explanation": "Never download or open executable files (.exe) sent from strangers. They often contain malware or account stealers."
    },
    {
        "id": 73,
        "title": "Urgent account suspension message (Scenario 73)",
        "scenario": "You receive an SMS saying your video streaming profile is suspended unless you click a link and re-enter your family's credit card number within 15 minutes.",
        "options": [
            "Ignore the text and ask your parent or guardian to check the official account",
            "Click the link quickly to avoid losing your favorite shows",
            "Reply with your credit card number directly in the SMS",
            "Call the number back and read them your address"
        ],
        "correctAnswer": "Ignore the text and ask your parent or guardian to check the official account",
        "explanation": "Scammers create artificial panic with tight deadlines. Always verify subscription issues through the official website or with a parent."
    },
    {
        "id": 74,
        "title": "Friend acting strange online (Scenario 74)",
        "scenario": "A friend's social account suddenly messages you: 'Help! I am stuck at the store and need you to buy me an urgent $50 gift card and send the code.'",
        "options": [
            "Contact your friend in person or via phone call to verify if their account was hacked",
            "Immediately buy the gift card and send the secret code",
            "Ask them to send you their password first",
            "Post the gift card code publicly so they can find it"
        ],
        "correctAnswer": "Contact your friend in person or via phone call to verify if their account was hacked",
        "explanation": "When friends ask for money or gift card codes unexpectedly, their account has likely been compromised. Always verify offline."
    },
    {
        "id": 75,
        "title": "Stranger asking for personal photo (Scenario 75)",
        "scenario": "Someone you met on an online gaming forum asks you to send a selfie showing your school uniform and home street sign.",
        "options": [
            "Refuse immediately, block the user, and inform a trusted adult",
            "Send the photo as long as they promise to keep it secret",
            "Send a picture of your house without your face",
            "Ask them to send their picture first before sending yours"
        ],
        "correctAnswer": "Refuse immediately, block the user, and inform a trusted adult",
        "explanation": "Never share personal photos that reveal your school, location, or private identity with people you meet online."
    },
    {
        "id": 76,
        "title": "Pop-up warning about computer virus (Scenario 76)",
        "scenario": "A loud browser pop-up blares: 'WARNING! Your computer is infected with 14 viruses! Call this toll-free support number right now to fix it.'",
        "options": [
            "Close the browser tab immediately and do not call the number",
            "Call the phone number and grant them remote control of your computer",
            "Type your credit card number into the pop-up to purchase antivirus",
            "Click every button on the screen to make the noise stop"
        ],
        "correctAnswer": "Close the browser tab immediately and do not call the number",
        "explanation": "Browser pop-ups claiming your computer has viruses are fake tech support scams designed to trick you into paying or installing spyware."
    },
    {
        "id": 77,
        "title": "Free gift card survey (Scenario 77)",
        "scenario": "A website banner says: 'Complete this 2-minute survey to receive a free $100 shopping card! Just enter your home address, full name, and phone number.'",
        "options": [
            "Close the page without submitting any personal information",
            "Fill out the survey with your real home address to get the card",
            "Provide your parent's phone number so the card can be texted",
            "Share the link with your entire class so everyone gets cards"
        ],
        "correctAnswer": "Close the page without submitting any personal information",
        "explanation": "Websites offering large gift cards for simple surveys are data-harvesting scams designed to collect and sell personal information."
    },
    {
        "id": 78,
        "title": "Public Wi-Fi network without password (Scenario 78)",
        "scenario": "At a shopping mall, you see an open Wi-Fi network named 'Free_Public_HighSpeed_Internet' that does not require any password or sign-in.",
        "options": [
            "Avoid logging into sensitive accounts or shopping when on unverified public Wi-Fi",
            "Immediately log into your bank and email accounts",
            "Disable your device firewall to get faster connection speeds",
            "Share your passwords freely over the unencrypted network"
        ],
        "correctAnswer": "Avoid logging into sensitive accounts or shopping when on unverified public Wi-Fi",
        "explanation": "Unsecured public Wi-Fi networks can be monitored by attackers to intercept sensitive logins. Use trusted networks or mobile data."
    },
    {
        "id": 79,
        "title": "Social media giveaway tag (Scenario 79)",
        "scenario": "You are tagged in a comment by an account called '@OfficialBrandGiveaway_2026': 'You won! DM us your login email to claim your brand new shoes.'",
        "options": [
            "Report the tag as spam and do not reply or send your credentials",
            "Send them your account email and password right away",
            "Ask if they can send two pairs instead",
            "Follow their instructions to download an unknown tracking app"
        ],
        "correctAnswer": "Report the tag as spam and do not reply or send your credentials",
        "explanation": "Random giveaway tags on social media are bots trying to hijack accounts or trick users into paying fake shipping fees."
    },
    {
        "id": 80,
        "title": "Shared computer in school library (Scenario 80)",
        "scenario": "You finish researching a science project on a library computer and are ready to walk to your next class.",
        "options": [
            "Log out of all accounts, close the browser, and lock the computer",
            "Leave all your tabs open so the next student can read your work",
            "Save your password in the browser so you don't have to retype it",
            "Just turn off the monitor screen without signing out"
        ],
        "correctAnswer": "Log out of all accounts, close the browser, and lock the computer",
        "explanation": "Always log out of your accounts when using public or school computers so the next user cannot access your personal data."
    },
    {
        "id": 81,
        "title": "Password request in chat (Scenario 81)",
        "scenario": "While playing a multiplayer game, a player sends you a private chat: 'Hey, if you share your password with me, I will add 10,000 free coins to your inventory.'",
        "options": [
            "Never share your password; decline and tell a trusted adult",
            "Give them your password since they promised free coins",
            "Share half of your password to see if they are telling the truth",
            "Give them a friend's password instead"
        ],
        "correctAnswer": "Never share your password; decline and tell a trusted adult",
        "explanation": "Passwords must always remain private. Legitimate games and admins will never ask for your password in chat."
    },
    {
        "id": 82,
        "title": "Unknown file download (Scenario 82)",
        "scenario": "An email from an unfamiliar address says: 'Check out these leaked game cheats! Download this setup.exe file right now to unlock all levels.'",
        "options": [
            "Do not open or download the file, and delete the message",
            "Download and run the file immediately to test the cheats",
            "Forward the download file to all your classmates",
            "Open the file on a school computer instead of your own"
        ],
        "correctAnswer": "Do not open or download the file, and delete the message",
        "explanation": "Never download or open executable files (.exe) sent from strangers. They often contain malware or account stealers."
    },
    {
        "id": 83,
        "title": "Urgent account suspension message (Scenario 83)",
        "scenario": "You receive an SMS saying your video streaming profile is suspended unless you click a link and re-enter your family's credit card number within 15 minutes.",
        "options": [
            "Ignore the text and ask your parent or guardian to check the official account",
            "Click the link quickly to avoid losing your favorite shows",
            "Reply with your credit card number directly in the SMS",
            "Call the number back and read them your address"
        ],
        "correctAnswer": "Ignore the text and ask your parent or guardian to check the official account",
        "explanation": "Scammers create artificial panic with tight deadlines. Always verify subscription issues through the official website or with a parent."
    },
    {
        "id": 84,
        "title": "Friend acting strange online (Scenario 84)",
        "scenario": "A friend's social account suddenly messages you: 'Help! I am stuck at the store and need you to buy me an urgent $50 gift card and send the code.'",
        "options": [
            "Contact your friend in person or via phone call to verify if their account was hacked",
            "Immediately buy the gift card and send the secret code",
            "Ask them to send you their password first",
            "Post the gift card code publicly so they can find it"
        ],
        "correctAnswer": "Contact your friend in person or via phone call to verify if their account was hacked",
        "explanation": "When friends ask for money or gift card codes unexpectedly, their account has likely been compromised. Always verify offline."
    },
    {
        "id": 85,
        "title": "Stranger asking for personal photo (Scenario 85)",
        "scenario": "Someone you met on an online gaming forum asks you to send a selfie showing your school uniform and home street sign.",
        "options": [
            "Refuse immediately, block the user, and inform a trusted adult",
            "Send the photo as long as they promise to keep it secret",
            "Send a picture of your house without your face",
            "Ask them to send their picture first before sending yours"
        ],
        "correctAnswer": "Refuse immediately, block the user, and inform a trusted adult",
        "explanation": "Never share personal photos that reveal your school, location, or private identity with people you meet online."
    },
    {
        "id": 86,
        "title": "Pop-up warning about computer virus (Scenario 86)",
        "scenario": "A loud browser pop-up blares: 'WARNING! Your computer is infected with 14 viruses! Call this toll-free support number right now to fix it.'",
        "options": [
            "Close the browser tab immediately and do not call the number",
            "Call the phone number and grant them remote control of your computer",
            "Type your credit card number into the pop-up to purchase antivirus",
            "Click every button on the screen to make the noise stop"
        ],
        "correctAnswer": "Close the browser tab immediately and do not call the number",
        "explanation": "Browser pop-ups claiming your computer has viruses are fake tech support scams designed to trick you into paying or installing spyware."
    },
    {
        "id": 87,
        "title": "Free gift card survey (Scenario 87)",
        "scenario": "A website banner says: 'Complete this 2-minute survey to receive a free $100 shopping card! Just enter your home address, full name, and phone number.'",
        "options": [
            "Close the page without submitting any personal information",
            "Fill out the survey with your real home address to get the card",
            "Provide your parent's phone number so the card can be texted",
            "Share the link with your entire class so everyone gets cards"
        ],
        "correctAnswer": "Close the page without submitting any personal information",
        "explanation": "Websites offering large gift cards for simple surveys are data-harvesting scams designed to collect and sell personal information."
    },
    {
        "id": 88,
        "title": "Public Wi-Fi network without password (Scenario 88)",
        "scenario": "At a shopping mall, you see an open Wi-Fi network named 'Free_Public_HighSpeed_Internet' that does not require any password or sign-in.",
        "options": [
            "Avoid logging into sensitive accounts or shopping when on unverified public Wi-Fi",
            "Immediately log into your bank and email accounts",
            "Disable your device firewall to get faster connection speeds",
            "Share your passwords freely over the unencrypted network"
        ],
        "correctAnswer": "Avoid logging into sensitive accounts or shopping when on unverified public Wi-Fi",
        "explanation": "Unsecured public Wi-Fi networks can be monitored by attackers to intercept sensitive logins. Use trusted networks or mobile data."
    },
    {
        "id": 89,
        "title": "Social media giveaway tag (Scenario 89)",
        "scenario": "You are tagged in a comment by an account called '@OfficialBrandGiveaway_2026': 'You won! DM us your login email to claim your brand new shoes.'",
        "options": [
            "Report the tag as spam and do not reply or send your credentials",
            "Send them your account email and password right away",
            "Ask if they can send two pairs instead",
            "Follow their instructions to download an unknown tracking app"
        ],
        "correctAnswer": "Report the tag as spam and do not reply or send your credentials",
        "explanation": "Random giveaway tags on social media are bots trying to hijack accounts or trick users into paying fake shipping fees."
    },
    {
        "id": 90,
        "title": "Shared computer in school library (Scenario 90)",
        "scenario": "You finish researching a science project on a library computer and are ready to walk to your next class.",
        "options": [
            "Log out of all accounts, close the browser, and lock the computer",
            "Leave all your tabs open so the next student can read your work",
            "Save your password in the browser so you don't have to retype it",
            "Just turn off the monitor screen without signing out"
        ],
        "correctAnswer": "Log out of all accounts, close the browser, and lock the computer",
        "explanation": "Always log out of your accounts when using public or school computers so the next user cannot access your personal data."
    },
    {
        "id": 91,
        "title": "Password request in chat (Scenario 91)",
        "scenario": "While playing a multiplayer game, a player sends you a private chat: 'Hey, if you share your password with me, I will add 10,000 free coins to your inventory.'",
        "options": [
            "Never share your password; decline and tell a trusted adult",
            "Give them your password since they promised free coins",
            "Share half of your password to see if they are telling the truth",
            "Give them a friend's password instead"
        ],
        "correctAnswer": "Never share your password; decline and tell a trusted adult",
        "explanation": "Passwords must always remain private. Legitimate games and admins will never ask for your password in chat."
    },
    {
        "id": 92,
        "title": "Unknown file download (Scenario 92)",
        "scenario": "An email from an unfamiliar address says: 'Check out these leaked game cheats! Download this setup.exe file right now to unlock all levels.'",
        "options": [
            "Do not open or download the file, and delete the message",
            "Download and run the file immediately to test the cheats",
            "Forward the download file to all your classmates",
            "Open the file on a school computer instead of your own"
        ],
        "correctAnswer": "Do not open or download the file, and delete the message",
        "explanation": "Never download or open executable files (.exe) sent from strangers. They often contain malware or account stealers."
    },
    {
        "id": 93,
        "title": "Urgent account suspension message (Scenario 93)",
        "scenario": "You receive an SMS saying your video streaming profile is suspended unless you click a link and re-enter your family's credit card number within 15 minutes.",
        "options": [
            "Ignore the text and ask your parent or guardian to check the official account",
            "Click the link quickly to avoid losing your favorite shows",
            "Reply with your credit card number directly in the SMS",
            "Call the number back and read them your address"
        ],
        "correctAnswer": "Ignore the text and ask your parent or guardian to check the official account",
        "explanation": "Scammers create artificial panic with tight deadlines. Always verify subscription issues through the official website or with a parent."
    },
    {
        "id": 94,
        "title": "Friend acting strange online (Scenario 94)",
        "scenario": "A friend's social account suddenly messages you: 'Help! I am stuck at the store and need you to buy me an urgent $50 gift card and send the code.'",
        "options": [
            "Contact your friend in person or via phone call to verify if their account was hacked",
            "Immediately buy the gift card and send the secret code",
            "Ask them to send you their password first",
            "Post the gift card code publicly so they can find it"
        ],
        "correctAnswer": "Contact your friend in person or via phone call to verify if their account was hacked",
        "explanation": "When friends ask for money or gift card codes unexpectedly, their account has likely been compromised. Always verify offline."
    },
    {
        "id": 95,
        "title": "Stranger asking for personal photo (Scenario 95)",
        "scenario": "Someone you met on an online gaming forum asks you to send a selfie showing your school uniform and home street sign.",
        "options": [
            "Refuse immediately, block the user, and inform a trusted adult",
            "Send the photo as long as they promise to keep it secret",
            "Send a picture of your house without your face",
            "Ask them to send their picture first before sending yours"
        ],
        "correctAnswer": "Refuse immediately, block the user, and inform a trusted adult",
        "explanation": "Never share personal photos that reveal your school, location, or private identity with people you meet online."
    },
    {
        "id": 96,
        "title": "Pop-up warning about computer virus (Scenario 96)",
        "scenario": "A loud browser pop-up blares: 'WARNING! Your computer is infected with 14 viruses! Call this toll-free support number right now to fix it.'",
        "options": [
            "Close the browser tab immediately and do not call the number",
            "Call the phone number and grant them remote control of your computer",
            "Type your credit card number into the pop-up to purchase antivirus",
            "Click every button on the screen to make the noise stop"
        ],
        "correctAnswer": "Close the browser tab immediately and do not call the number",
        "explanation": "Browser pop-ups claiming your computer has viruses are fake tech support scams designed to trick you into paying or installing spyware."
    },
    {
        "id": 97,
        "title": "Free gift card survey (Scenario 97)",
        "scenario": "A website banner says: 'Complete this 2-minute survey to receive a free $100 shopping card! Just enter your home address, full name, and phone number.'",
        "options": [
            "Close the page without submitting any personal information",
            "Fill out the survey with your real home address to get the card",
            "Provide your parent's phone number so the card can be texted",
            "Share the link with your entire class so everyone gets cards"
        ],
        "correctAnswer": "Close the page without submitting any personal information",
        "explanation": "Websites offering large gift cards for simple surveys are data-harvesting scams designed to collect and sell personal information."
    },
    {
        "id": 98,
        "title": "Public Wi-Fi network without password (Scenario 98)",
        "scenario": "At a shopping mall, you see an open Wi-Fi network named 'Free_Public_HighSpeed_Internet' that does not require any password or sign-in.",
        "options": [
            "Avoid logging into sensitive accounts or shopping when on unverified public Wi-Fi",
            "Immediately log into your bank and email accounts",
            "Disable your device firewall to get faster connection speeds",
            "Share your passwords freely over the unencrypted network"
        ],
        "correctAnswer": "Avoid logging into sensitive accounts or shopping when on unverified public Wi-Fi",
        "explanation": "Unsecured public Wi-Fi networks can be monitored by attackers to intercept sensitive logins. Use trusted networks or mobile data."
    },
    {
        "id": 99,
        "title": "Social media giveaway tag (Scenario 99)",
        "scenario": "You are tagged in a comment by an account called '@OfficialBrandGiveaway_2026': 'You won! DM us your login email to claim your brand new shoes.'",
        "options": [
            "Report the tag as spam and do not reply or send your credentials",
            "Send them your account email and password right away",
            "Ask if they can send two pairs instead",
            "Follow their instructions to download an unknown tracking app"
        ],
        "correctAnswer": "Report the tag as spam and do not reply or send your credentials",
        "explanation": "Random giveaway tags on social media are bots trying to hijack accounts or trick users into paying fake shipping fees."
    },
    {
        "id": 100,
        "title": "Shared computer in school library (Scenario 100)",
        "scenario": "You finish researching a science project on a library computer and are ready to walk to your next class.",
        "options": [
            "Log out of all accounts, close the browser, and lock the computer",
            "Leave all your tabs open so the next student can read your work",
            "Save your password in the browser so you don't have to retype it",
            "Just turn off the monitor screen without signing out"
        ],
        "correctAnswer": "Log out of all accounts, close the browser, and lock the computer",
        "explanation": "Always log out of your accounts when using public or school computers so the next user cannot access your personal data."
    }
];

const case3Challenges = [
    {
        "id": 1,
        "sender": "security@game-auth-portal.invalid",
        "message": "Unusual login from an unknown location. Click here immediately to confirm your password and 2FA code.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Attackers mimic security alerts to steal your credentials. Never provide two-factor codes over email."
    },
    {
        "id": 2,
        "sender": "teacher@riverside-school.org",
        "message": "Hello class, please remember to bring your permission slip for tomorrow's zoo visit. No online submission is needed.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "This is a legitimate informational reminder sent from an official school address."
    },
    {
        "id": 3,
        "sender": "rewards@store-bonus-discount.fake",
        "message": "You have an unclaimed $250 reward points balance! Act within 2 hours before your balance expires.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Fake Urgency",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Artificial urgency and sudden high-value rewards are major red flags of phishing."
    },
    {
        "id": 4,
        "sender": "librarian@riverside-school.org",
        "message": "Your reserved book 'Adventures in Space' has arrived at the front desk. Pick it up anytime during regular school hours.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "Safe, authentic school notification containing no requests for credentials or payments."
    },
    {
        "id": 5,
        "sender": "delivery-desk@parcel-tracker-notify.cc",
        "message": "Your package is on hold at our sorting facility. Enter your credit card to pay the $0.99 delivery fee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Fake parcel delivery fees are a common scam designed to harvest credit card numbers."
    },
    {
        "id": 6,
        "sender": "security@game-auth-portal.invalid",
        "message": "Unusual login from an unknown location. Click here immediately to confirm your password and 2FA code.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Attackers mimic security alerts to steal your credentials. Never provide two-factor codes over email."
    },
    {
        "id": 7,
        "sender": "teacher@riverside-school.org",
        "message": "Hello class, please remember to bring your permission slip for tomorrow's zoo visit. No online submission is needed.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "This is a legitimate informational reminder sent from an official school address."
    },
    {
        "id": 8,
        "sender": "rewards@store-bonus-discount.fake",
        "message": "You have an unclaimed $250 reward points balance! Act within 2 hours before your balance expires.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Fake Urgency",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Artificial urgency and sudden high-value rewards are major red flags of phishing."
    },
    {
        "id": 9,
        "sender": "librarian@riverside-school.org",
        "message": "Your reserved book 'Adventures in Space' has arrived at the front desk. Pick it up anytime during regular school hours.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "Safe, authentic school notification containing no requests for credentials or payments."
    },
    {
        "id": 10,
        "sender": "delivery-desk@parcel-tracker-notify.cc",
        "message": "Your package is on hold at our sorting facility. Enter your credit card to pay the $0.99 delivery fee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Fake parcel delivery fees are a common scam designed to harvest credit card numbers."
    },
    {
        "id": 11,
        "sender": "security@game-auth-portal.invalid",
        "message": "Unusual login from an unknown location. Click here immediately to confirm your password and 2FA code.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Attackers mimic security alerts to steal your credentials. Never provide two-factor codes over email."
    },
    {
        "id": 12,
        "sender": "teacher@riverside-school.org",
        "message": "Hello class, please remember to bring your permission slip for tomorrow's zoo visit. No online submission is needed.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "This is a legitimate informational reminder sent from an official school address."
    },
    {
        "id": 13,
        "sender": "rewards@store-bonus-discount.fake",
        "message": "You have an unclaimed $250 reward points balance! Act within 2 hours before your balance expires.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Fake Urgency",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Artificial urgency and sudden high-value rewards are major red flags of phishing."
    },
    {
        "id": 14,
        "sender": "librarian@riverside-school.org",
        "message": "Your reserved book 'Adventures in Space' has arrived at the front desk. Pick it up anytime during regular school hours.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "Safe, authentic school notification containing no requests for credentials or payments."
    },
    {
        "id": 15,
        "sender": "delivery-desk@parcel-tracker-notify.cc",
        "message": "Your package is on hold at our sorting facility. Enter your credit card to pay the $0.99 delivery fee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Fake parcel delivery fees are a common scam designed to harvest credit card numbers."
    },
    {
        "id": 16,
        "sender": "security@game-auth-portal.invalid",
        "message": "Unusual login from an unknown location. Click here immediately to confirm your password and 2FA code.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Attackers mimic security alerts to steal your credentials. Never provide two-factor codes over email."
    },
    {
        "id": 17,
        "sender": "teacher@riverside-school.org",
        "message": "Hello class, please remember to bring your permission slip for tomorrow's zoo visit. No online submission is needed.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "This is a legitimate informational reminder sent from an official school address."
    },
    {
        "id": 18,
        "sender": "rewards@store-bonus-discount.fake",
        "message": "You have an unclaimed $250 reward points balance! Act within 2 hours before your balance expires.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Fake Urgency",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Artificial urgency and sudden high-value rewards are major red flags of phishing."
    },
    {
        "id": 19,
        "sender": "librarian@riverside-school.org",
        "message": "Your reserved book 'Adventures in Space' has arrived at the front desk. Pick it up anytime during regular school hours.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "Safe, authentic school notification containing no requests for credentials or payments."
    },
    {
        "id": 20,
        "sender": "delivery-desk@parcel-tracker-notify.cc",
        "message": "Your package is on hold at our sorting facility. Enter your credit card to pay the $0.99 delivery fee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Fake parcel delivery fees are a common scam designed to harvest credit card numbers."
    },
    {
        "id": 21,
        "sender": "security@game-auth-portal.invalid",
        "message": "Unusual login from an unknown location. Click here immediately to confirm your password and 2FA code.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Attackers mimic security alerts to steal your credentials. Never provide two-factor codes over email."
    },
    {
        "id": 22,
        "sender": "teacher@riverside-school.org",
        "message": "Hello class, please remember to bring your permission slip for tomorrow's zoo visit. No online submission is needed.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "This is a legitimate informational reminder sent from an official school address."
    },
    {
        "id": 23,
        "sender": "rewards@store-bonus-discount.fake",
        "message": "You have an unclaimed $250 reward points balance! Act within 2 hours before your balance expires.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Fake Urgency",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Artificial urgency and sudden high-value rewards are major red flags of phishing."
    },
    {
        "id": 24,
        "sender": "librarian@riverside-school.org",
        "message": "Your reserved book 'Adventures in Space' has arrived at the front desk. Pick it up anytime during regular school hours.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "Safe, authentic school notification containing no requests for credentials or payments."
    },
    {
        "id": 25,
        "sender": "delivery-desk@parcel-tracker-notify.cc",
        "message": "Your package is on hold at our sorting facility. Enter your credit card to pay the $0.99 delivery fee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Fake parcel delivery fees are a common scam designed to harvest credit card numbers."
    },
    {
        "id": 26,
        "sender": "security@game-auth-portal.invalid",
        "message": "Unusual login from an unknown location. Click here immediately to confirm your password and 2FA code.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Attackers mimic security alerts to steal your credentials. Never provide two-factor codes over email."
    },
    {
        "id": 27,
        "sender": "teacher@riverside-school.org",
        "message": "Hello class, please remember to bring your permission slip for tomorrow's zoo visit. No online submission is needed.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "This is a legitimate informational reminder sent from an official school address."
    },
    {
        "id": 28,
        "sender": "rewards@store-bonus-discount.fake",
        "message": "You have an unclaimed $250 reward points balance! Act within 2 hours before your balance expires.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Fake Urgency",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Artificial urgency and sudden high-value rewards are major red flags of phishing."
    },
    {
        "id": 29,
        "sender": "librarian@riverside-school.org",
        "message": "Your reserved book 'Adventures in Space' has arrived at the front desk. Pick it up anytime during regular school hours.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "Safe, authentic school notification containing no requests for credentials or payments."
    },
    {
        "id": 30,
        "sender": "delivery-desk@parcel-tracker-notify.cc",
        "message": "Your package is on hold at our sorting facility. Enter your credit card to pay the $0.99 delivery fee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Fake parcel delivery fees are a common scam designed to harvest credit card numbers."
    },
    {
        "id": 31,
        "sender": "security@game-auth-portal.invalid",
        "message": "Unusual login from an unknown location. Click here immediately to confirm your password and 2FA code.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Attackers mimic security alerts to steal your credentials. Never provide two-factor codes over email."
    },
    {
        "id": 32,
        "sender": "teacher@riverside-school.org",
        "message": "Hello class, please remember to bring your permission slip for tomorrow's zoo visit. No online submission is needed.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "This is a legitimate informational reminder sent from an official school address."
    },
    {
        "id": 33,
        "sender": "rewards@store-bonus-discount.fake",
        "message": "You have an unclaimed $250 reward points balance! Act within 2 hours before your balance expires.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Fake Urgency",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Artificial urgency and sudden high-value rewards are major red flags of phishing."
    },
    {
        "id": 34,
        "sender": "librarian@riverside-school.org",
        "message": "Your reserved book 'Adventures in Space' has arrived at the front desk. Pick it up anytime during regular school hours.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "Safe, authentic school notification containing no requests for credentials or payments."
    },
    {
        "id": 35,
        "sender": "delivery-desk@parcel-tracker-notify.cc",
        "message": "Your package is on hold at our sorting facility. Enter your credit card to pay the $0.99 delivery fee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Fake parcel delivery fees are a common scam designed to harvest credit card numbers."
    },
    {
        "id": 36,
        "sender": "security@game-auth-portal.invalid",
        "message": "Unusual login from an unknown location. Click here immediately to confirm your password and 2FA code.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Attackers mimic security alerts to steal your credentials. Never provide two-factor codes over email."
    },
    {
        "id": 37,
        "sender": "teacher@riverside-school.org",
        "message": "Hello class, please remember to bring your permission slip for tomorrow's zoo visit. No online submission is needed.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "This is a legitimate informational reminder sent from an official school address."
    },
    {
        "id": 38,
        "sender": "rewards@store-bonus-discount.fake",
        "message": "You have an unclaimed $250 reward points balance! Act within 2 hours before your balance expires.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Fake Urgency",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Artificial urgency and sudden high-value rewards are major red flags of phishing."
    },
    {
        "id": 39,
        "sender": "librarian@riverside-school.org",
        "message": "Your reserved book 'Adventures in Space' has arrived at the front desk. Pick it up anytime during regular school hours.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "Safe, authentic school notification containing no requests for credentials or payments."
    },
    {
        "id": 40,
        "sender": "delivery-desk@parcel-tracker-notify.cc",
        "message": "Your package is on hold at our sorting facility. Enter your credit card to pay the $0.99 delivery fee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Fake parcel delivery fees are a common scam designed to harvest credit card numbers."
    },
    {
        "id": 41,
        "sender": "security@game-auth-portal.invalid",
        "message": "Unusual login from an unknown location. Click here immediately to confirm your password and 2FA code.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Attackers mimic security alerts to steal your credentials. Never provide two-factor codes over email."
    },
    {
        "id": 42,
        "sender": "teacher@riverside-school.org",
        "message": "Hello class, please remember to bring your permission slip for tomorrow's zoo visit. No online submission is needed.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "This is a legitimate informational reminder sent from an official school address."
    },
    {
        "id": 43,
        "sender": "rewards@store-bonus-discount.fake",
        "message": "You have an unclaimed $250 reward points balance! Act within 2 hours before your balance expires.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Fake Urgency",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Artificial urgency and sudden high-value rewards are major red flags of phishing."
    },
    {
        "id": 44,
        "sender": "librarian@riverside-school.org",
        "message": "Your reserved book 'Adventures in Space' has arrived at the front desk. Pick it up anytime during regular school hours.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "Safe, authentic school notification containing no requests for credentials or payments."
    },
    {
        "id": 45,
        "sender": "delivery-desk@parcel-tracker-notify.cc",
        "message": "Your package is on hold at our sorting facility. Enter your credit card to pay the $0.99 delivery fee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Fake parcel delivery fees are a common scam designed to harvest credit card numbers."
    },
    {
        "id": 46,
        "sender": "security@game-auth-portal.invalid",
        "message": "Unusual login from an unknown location. Click here immediately to confirm your password and 2FA code.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Attackers mimic security alerts to steal your credentials. Never provide two-factor codes over email."
    },
    {
        "id": 47,
        "sender": "teacher@riverside-school.org",
        "message": "Hello class, please remember to bring your permission slip for tomorrow's zoo visit. No online submission is needed.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "This is a legitimate informational reminder sent from an official school address."
    },
    {
        "id": 48,
        "sender": "rewards@store-bonus-discount.fake",
        "message": "You have an unclaimed $250 reward points balance! Act within 2 hours before your balance expires.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Fake Urgency",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Artificial urgency and sudden high-value rewards are major red flags of phishing."
    },
    {
        "id": 49,
        "sender": "librarian@riverside-school.org",
        "message": "Your reserved book 'Adventures in Space' has arrived at the front desk. Pick it up anytime during regular school hours.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "Safe, authentic school notification containing no requests for credentials or payments."
    },
    {
        "id": 50,
        "sender": "delivery-desk@parcel-tracker-notify.cc",
        "message": "Your package is on hold at our sorting facility. Enter your credit card to pay the $0.99 delivery fee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Fake parcel delivery fees are a common scam designed to harvest credit card numbers."
    },
    {
        "id": 51,
        "sender": "security@game-auth-portal.invalid",
        "message": "Unusual login from an unknown location. Click here immediately to confirm your password and 2FA code.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Attackers mimic security alerts to steal your credentials. Never provide two-factor codes over email."
    },
    {
        "id": 52,
        "sender": "teacher@riverside-school.org",
        "message": "Hello class, please remember to bring your permission slip for tomorrow's zoo visit. No online submission is needed.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "This is a legitimate informational reminder sent from an official school address."
    },
    {
        "id": 53,
        "sender": "rewards@store-bonus-discount.fake",
        "message": "You have an unclaimed $250 reward points balance! Act within 2 hours before your balance expires.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Fake Urgency",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Artificial urgency and sudden high-value rewards are major red flags of phishing."
    },
    {
        "id": 54,
        "sender": "librarian@riverside-school.org",
        "message": "Your reserved book 'Adventures in Space' has arrived at the front desk. Pick it up anytime during regular school hours.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "Safe, authentic school notification containing no requests for credentials or payments."
    },
    {
        "id": 55,
        "sender": "delivery-desk@parcel-tracker-notify.cc",
        "message": "Your package is on hold at our sorting facility. Enter your credit card to pay the $0.99 delivery fee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Fake parcel delivery fees are a common scam designed to harvest credit card numbers."
    },
    {
        "id": 56,
        "sender": "security@game-auth-portal.invalid",
        "message": "Unusual login from an unknown location. Click here immediately to confirm your password and 2FA code.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Attackers mimic security alerts to steal your credentials. Never provide two-factor codes over email."
    },
    {
        "id": 57,
        "sender": "teacher@riverside-school.org",
        "message": "Hello class, please remember to bring your permission slip for tomorrow's zoo visit. No online submission is needed.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "This is a legitimate informational reminder sent from an official school address."
    },
    {
        "id": 58,
        "sender": "rewards@store-bonus-discount.fake",
        "message": "You have an unclaimed $250 reward points balance! Act within 2 hours before your balance expires.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Fake Urgency",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Artificial urgency and sudden high-value rewards are major red flags of phishing."
    },
    {
        "id": 59,
        "sender": "librarian@riverside-school.org",
        "message": "Your reserved book 'Adventures in Space' has arrived at the front desk. Pick it up anytime during regular school hours.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "Safe, authentic school notification containing no requests for credentials or payments."
    },
    {
        "id": 60,
        "sender": "delivery-desk@parcel-tracker-notify.cc",
        "message": "Your package is on hold at our sorting facility. Enter your credit card to pay the $0.99 delivery fee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Fake parcel delivery fees are a common scam designed to harvest credit card numbers."
    },
    {
        "id": 61,
        "sender": "security@game-auth-portal.invalid",
        "message": "Unusual login from an unknown location. Click here immediately to confirm your password and 2FA code.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Attackers mimic security alerts to steal your credentials. Never provide two-factor codes over email."
    },
    {
        "id": 62,
        "sender": "teacher@riverside-school.org",
        "message": "Hello class, please remember to bring your permission slip for tomorrow's zoo visit. No online submission is needed.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "This is a legitimate informational reminder sent from an official school address."
    },
    {
        "id": 63,
        "sender": "rewards@store-bonus-discount.fake",
        "message": "You have an unclaimed $250 reward points balance! Act within 2 hours before your balance expires.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Fake Urgency",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Artificial urgency and sudden high-value rewards are major red flags of phishing."
    },
    {
        "id": 64,
        "sender": "librarian@riverside-school.org",
        "message": "Your reserved book 'Adventures in Space' has arrived at the front desk. Pick it up anytime during regular school hours.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "Safe, authentic school notification containing no requests for credentials or payments."
    },
    {
        "id": 65,
        "sender": "delivery-desk@parcel-tracker-notify.cc",
        "message": "Your package is on hold at our sorting facility. Enter your credit card to pay the $0.99 delivery fee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Fake parcel delivery fees are a common scam designed to harvest credit card numbers."
    },
    {
        "id": 66,
        "sender": "security@game-auth-portal.invalid",
        "message": "Unusual login from an unknown location. Click here immediately to confirm your password and 2FA code.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Attackers mimic security alerts to steal your credentials. Never provide two-factor codes over email."
    },
    {
        "id": 67,
        "sender": "teacher@riverside-school.org",
        "message": "Hello class, please remember to bring your permission slip for tomorrow's zoo visit. No online submission is needed.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "This is a legitimate informational reminder sent from an official school address."
    },
    {
        "id": 68,
        "sender": "rewards@store-bonus-discount.fake",
        "message": "You have an unclaimed $250 reward points balance! Act within 2 hours before your balance expires.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Fake Urgency",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Artificial urgency and sudden high-value rewards are major red flags of phishing."
    },
    {
        "id": 69,
        "sender": "librarian@riverside-school.org",
        "message": "Your reserved book 'Adventures in Space' has arrived at the front desk. Pick it up anytime during regular school hours.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "Safe, authentic school notification containing no requests for credentials or payments."
    },
    {
        "id": 70,
        "sender": "delivery-desk@parcel-tracker-notify.cc",
        "message": "Your package is on hold at our sorting facility. Enter your credit card to pay the $0.99 delivery fee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Fake parcel delivery fees are a common scam designed to harvest credit card numbers."
    },
    {
        "id": 71,
        "sender": "security@game-auth-portal.invalid",
        "message": "Unusual login from an unknown location. Click here immediately to confirm your password and 2FA code.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Attackers mimic security alerts to steal your credentials. Never provide two-factor codes over email."
    },
    {
        "id": 72,
        "sender": "teacher@riverside-school.org",
        "message": "Hello class, please remember to bring your permission slip for tomorrow's zoo visit. No online submission is needed.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "This is a legitimate informational reminder sent from an official school address."
    },
    {
        "id": 73,
        "sender": "rewards@store-bonus-discount.fake",
        "message": "You have an unclaimed $250 reward points balance! Act within 2 hours before your balance expires.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Fake Urgency",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Artificial urgency and sudden high-value rewards are major red flags of phishing."
    },
    {
        "id": 74,
        "sender": "librarian@riverside-school.org",
        "message": "Your reserved book 'Adventures in Space' has arrived at the front desk. Pick it up anytime during regular school hours.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "Safe, authentic school notification containing no requests for credentials or payments."
    },
    {
        "id": 75,
        "sender": "delivery-desk@parcel-tracker-notify.cc",
        "message": "Your package is on hold at our sorting facility. Enter your credit card to pay the $0.99 delivery fee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Fake parcel delivery fees are a common scam designed to harvest credit card numbers."
    },
    {
        "id": 76,
        "sender": "security@game-auth-portal.invalid",
        "message": "Unusual login from an unknown location. Click here immediately to confirm your password and 2FA code.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Attackers mimic security alerts to steal your credentials. Never provide two-factor codes over email."
    },
    {
        "id": 77,
        "sender": "teacher@riverside-school.org",
        "message": "Hello class, please remember to bring your permission slip for tomorrow's zoo visit. No online submission is needed.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "This is a legitimate informational reminder sent from an official school address."
    },
    {
        "id": 78,
        "sender": "rewards@store-bonus-discount.fake",
        "message": "You have an unclaimed $250 reward points balance! Act within 2 hours before your balance expires.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Fake Urgency",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Artificial urgency and sudden high-value rewards are major red flags of phishing."
    },
    {
        "id": 79,
        "sender": "librarian@riverside-school.org",
        "message": "Your reserved book 'Adventures in Space' has arrived at the front desk. Pick it up anytime during regular school hours.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "Safe, authentic school notification containing no requests for credentials or payments."
    },
    {
        "id": 80,
        "sender": "delivery-desk@parcel-tracker-notify.cc",
        "message": "Your package is on hold at our sorting facility. Enter your credit card to pay the $0.99 delivery fee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Fake parcel delivery fees are a common scam designed to harvest credit card numbers."
    },
    {
        "id": 81,
        "sender": "security@game-auth-portal.invalid",
        "message": "Unusual login from an unknown location. Click here immediately to confirm your password and 2FA code.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Attackers mimic security alerts to steal your credentials. Never provide two-factor codes over email."
    },
    {
        "id": 82,
        "sender": "teacher@riverside-school.org",
        "message": "Hello class, please remember to bring your permission slip for tomorrow's zoo visit. No online submission is needed.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "This is a legitimate informational reminder sent from an official school address."
    },
    {
        "id": 83,
        "sender": "rewards@store-bonus-discount.fake",
        "message": "You have an unclaimed $250 reward points balance! Act within 2 hours before your balance expires.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Fake Urgency",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Artificial urgency and sudden high-value rewards are major red flags of phishing."
    },
    {
        "id": 84,
        "sender": "librarian@riverside-school.org",
        "message": "Your reserved book 'Adventures in Space' has arrived at the front desk. Pick it up anytime during regular school hours.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "Safe, authentic school notification containing no requests for credentials or payments."
    },
    {
        "id": 85,
        "sender": "delivery-desk@parcel-tracker-notify.cc",
        "message": "Your package is on hold at our sorting facility. Enter your credit card to pay the $0.99 delivery fee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Fake parcel delivery fees are a common scam designed to harvest credit card numbers."
    },
    {
        "id": 86,
        "sender": "security@game-auth-portal.invalid",
        "message": "Unusual login from an unknown location. Click here immediately to confirm your password and 2FA code.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Attackers mimic security alerts to steal your credentials. Never provide two-factor codes over email."
    },
    {
        "id": 87,
        "sender": "teacher@riverside-school.org",
        "message": "Hello class, please remember to bring your permission slip for tomorrow's zoo visit. No online submission is needed.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "This is a legitimate informational reminder sent from an official school address."
    },
    {
        "id": 88,
        "sender": "rewards@store-bonus-discount.fake",
        "message": "You have an unclaimed $250 reward points balance! Act within 2 hours before your balance expires.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Fake Urgency",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Artificial urgency and sudden high-value rewards are major red flags of phishing."
    },
    {
        "id": 89,
        "sender": "librarian@riverside-school.org",
        "message": "Your reserved book 'Adventures in Space' has arrived at the front desk. Pick it up anytime during regular school hours.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "Safe, authentic school notification containing no requests for credentials or payments."
    },
    {
        "id": 90,
        "sender": "delivery-desk@parcel-tracker-notify.cc",
        "message": "Your package is on hold at our sorting facility. Enter your credit card to pay the $0.99 delivery fee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Fake parcel delivery fees are a common scam designed to harvest credit card numbers."
    },
    {
        "id": 91,
        "sender": "security@game-auth-portal.invalid",
        "message": "Unusual login from an unknown location. Click here immediately to confirm your password and 2FA code.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Attackers mimic security alerts to steal your credentials. Never provide two-factor codes over email."
    },
    {
        "id": 92,
        "sender": "teacher@riverside-school.org",
        "message": "Hello class, please remember to bring your permission slip for tomorrow's zoo visit. No online submission is needed.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "This is a legitimate informational reminder sent from an official school address."
    },
    {
        "id": 93,
        "sender": "rewards@store-bonus-discount.fake",
        "message": "You have an unclaimed $250 reward points balance! Act within 2 hours before your balance expires.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Fake Urgency",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Artificial urgency and sudden high-value rewards are major red flags of phishing."
    },
    {
        "id": 94,
        "sender": "librarian@riverside-school.org",
        "message": "Your reserved book 'Adventures in Space' has arrived at the front desk. Pick it up anytime during regular school hours.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "Safe, authentic school notification containing no requests for credentials or payments."
    },
    {
        "id": 95,
        "sender": "delivery-desk@parcel-tracker-notify.cc",
        "message": "Your package is on hold at our sorting facility. Enter your credit card to pay the $0.99 delivery fee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Fake parcel delivery fees are a common scam designed to harvest credit card numbers."
    },
    {
        "id": 96,
        "sender": "security@game-auth-portal.invalid",
        "message": "Unusual login from an unknown location. Click here immediately to confirm your password and 2FA code.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Attackers mimic security alerts to steal your credentials. Never provide two-factor codes over email."
    },
    {
        "id": 97,
        "sender": "teacher@riverside-school.org",
        "message": "Hello class, please remember to bring your permission slip for tomorrow's zoo visit. No online submission is needed.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "This is a legitimate informational reminder sent from an official school address."
    },
    {
        "id": 98,
        "sender": "rewards@store-bonus-discount.fake",
        "message": "You have an unclaimed $250 reward points balance! Act within 2 hours before your balance expires.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Fake Urgency",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Artificial urgency and sudden high-value rewards are major red flags of phishing."
    },
    {
        "id": 99,
        "sender": "librarian@riverside-school.org",
        "message": "Your reserved book 'Adventures in Space' has arrived at the front desk. Pick it up anytime during regular school hours.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Legitimate",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "No warning sign",
        "actionOptions": [
            "Read the message; no sensitive action or password is needed",
            "Report the sender to the police immediately",
            "Click multiple times to verify the server",
            "Reply asking for their password"
        ],
        "correctAction": "Read the message; no sensitive action or password is needed",
        "explanation": "Safe, authentic school notification containing no requests for credentials or payments."
    },
    {
        "id": 100,
        "sender": "delivery-desk@parcel-tracker-notify.cc",
        "message": "Your package is on hold at our sorting facility. Enter your credit card to pay the $0.99 delivery fee.",
        "options": [
            "Scam",
            "Legitimate"
        ],
        "correctAnswer": "Scam",
        "clueOptions": [
            "Fake Sender",
            "Fake Urgency",
            "Information Requests",
            "No warning sign"
        ],
        "correctClue": "Information Requests",
        "actionOptions": [
            "Click the link to verify your identity",
            "Stop, do not click, and inform a trusted adult",
            "Reply with your account password",
            "Forward the message to your school friends"
        ],
        "correctAction": "Stop, do not click, and inform a trusted adult",
        "explanation": "Fake parcel delivery fees are a common scam designed to harvest credit card numbers."
    }
];

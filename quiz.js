const questions = [

    {
        en: "Someone calls you and asks for your bank OTP. What should you do?",
        te: "ఒక వ్యక్తి కాల్ చేసి మీ బ్యాంక్ OTP అడిగితే మీరు ఏమి చేయాలి?",

        optionsEn: [
            "Share the OTP",
            "Refuse and end the call",
            "Send your PIN too",
            "Ask them for their OTP"
        ],

        optionsTe: [
            "OTP ఇవ్వాలి",
            "నిరాకరించి కాల్‌ను ముగించాలి",
            "మీ PIN కూడా పంపాలి",
            "వారి OTP అడగాలి"
        ],

        correct: 1
    },


    {
        en: "A stranger sends you a QR code and asks you to scan it to receive money. What is safest?",
        te: "ఒక అపరిచితుడు డబ్బు స్వీకరించడానికి QR కోడ్ స్కాన్ చేయమంటే సురక్షితమైన చర్య ఏమిటి?",

        optionsEn: [
            "Scan immediately",
            "Share your UPI PIN",
            "Verify the request before taking action",
            "Send them your bank password"
        ],

        optionsTe: [
            "వెంటనే స్కాన్ చేయాలి",
            "UPI PIN ఇవ్వాలి",
            "చర్య తీసుకునే ముందు అభ్యర్థనను ధృవీకరించాలి",
            "బ్యాంక్ పాస్‌వర్డ్ ఇవ్వాలి"
        ],

        correct: 2
    },


    {
        en: "Which information should never be shared with strangers?",
        te: "అపరిచితులతో ఏ సమాచారాన్ని ఎప్పుడూ పంచుకోకూడదు?",

        optionsEn: [
            "OTP and PIN",
            "Public news",
            "Weather information",
            "General knowledge"
        ],

        optionsTe: [
            "OTP మరియు PIN",
            "ప్రజా వార్తలు",
            "వాతావరణ సమాచారం",
            "సాధారణ జ్ఞానం"
        ],

        correct: 0
    },


    {
        en: "You receive a job offer asking for a registration fee. What should you do?",
        te: "రిజిస్ట్రేషన్ ఫీజు అడిగే ఉద్యోగ ఆఫర్ వస్తే మీరు ఏమి చేయాలి?",

        optionsEn: [
            "Pay immediately",
            "Verify the company and job",
            "Give your OTP",
            "Send your ATM PIN"
        ],

        optionsTe: [
            "వెంటనే చెల్లించాలి",
            "కంపెనీ మరియు ఉద్యోగాన్ని ధృవీకరించాలి",
            "OTP ఇవ్వాలి",
            "ATM PIN ఇవ్వాలి"
        ],

        correct: 1
    },


    {
        en: "What is phishing?",
        te: "ఫిషింగ్ అంటే ఏమిటి?",

        optionsEn: [
            "A type of online scam used to steal information",
            "A computer game",
            "A banking service",
            "A password manager"
        ],

        optionsTe: [
            "సమాచారాన్ని దొంగిలించడానికి ఉపయోగించే ఆన్‌లైన్ మోసం",
            "కంప్యూటర్ గేమ్",
            "బ్యాంకింగ్ సేవ",
            "పాస్‌వర్డ్ మేనేజర్"
        ],

        correct: 0
    },


    {
        en: "What should you do if you accidentally lose money in an online scam?",
        te: "ఆన్‌లైన్ మోసంలో పొరపాటున డబ్బు కోల్పోతే మీరు ఏమి చేయాలి?",

        optionsEn: [
            "Ignore it",
            "Send more money",
            "Contact the bank/payment provider and report the fraud",
            "Delete all evidence"
        ],

        optionsTe: [
            "పట్టించుకోకూడదు",
            "మరింత డబ్బు పంపాలి",
            "బ్యాంక్/పేమెంట్ ప్రొవైడర్‌ను సంప్రదించి మోసాన్ని నివేదించాలి",
            "అన్ని ఆధారాలను తొలగించాలి"
        ],

        correct: 2
    }

];


let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;


const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const questionNumber = document.getElementById("question-number");
const resultElement = document.getElementById("result");


function getLanguage() {

    return localStorage.getItem("language") || "en";

}


function loadQuestion() {

    selectedAnswer = null;

    const language = getLanguage();

    const question = questions[currentQuestion];

    questionElement.textContent =
        language === "en"
        ? question.en
        : question.te;


    questionNumber.textContent =
        language === "en"
        ? `Question ${currentQuestion + 1} of ${questions.length}`
        : `ప్రశ్న ${currentQuestion + 1} / ${questions.length}`;


    answersElement.innerHTML = "";


    const options =
        language === "en"
        ? question.optionsEn
        : question.optionsTe;


    options.forEach((option, index) => {

        const button = document.createElement("button");

        button.textContent = option;

        button.style.display = "block";
        button.style.width = "100%";
        button.style.padding = "15px";
        button.style.margin = "10px 0";
        button.style.border = "1px solid #e2e8f0";
        button.style.borderRadius = "10px";
        button.style.background = "white";
        button.style.cursor = "pointer";
        button.style.textAlign = "left";
        button.style.fontSize = "15px";


        button.addEventListener("click", () => {

            selectedAnswer = index;

            document.querySelectorAll("#answers button")
                .forEach(btn => {

                    btn.style.background = "white";
                    btn.style.borderColor = "#e2e8f0";

                });


            button.style.background = "#dbeafe";
            button.style.borderColor = "#2563eb";

        });


        answersElement.appendChild(button);

    });

}


nextButton.addEventListener("click", () => {

    const language = getLanguage();


    if (selectedAnswer === null) {

        alert(
            language === "en"
            ? "Please select an answer."
            : "దయచేసి ఒక సమాధానాన్ని ఎంచుకోండి."
        );

        return;

    }


    if (selectedAnswer === questions[currentQuestion].correct) {

        score++;

    }


    currentQuestion++;


    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        showResult();

    }

});


function showResult() {

    const language = getLanguage();


    questionElement.textContent =
        language === "en"
        ? "Quiz Completed!"
        : "క్విజ్ పూర్తయింది!";


    questionNumber.textContent = "";


    answersElement.innerHTML = "";


    nextButton.style.display = "none";


    if (language === "en") {

        resultElement.innerHTML = `
            <h2>Your Score: ${score}/${questions.length}</h2>
            <p>You answered ${score} questions correctly.</p>
            <button class="btn primary" onclick="location.reload()">
                Try Again
            </button>
        `;

    } else {

        resultElement.innerHTML = `
            <h2>మీ స్కోర్: ${score}/${questions.length}</h2>
            <p>మీరు ${score} ప్రశ్నలకు సరైన సమాధానం ఇచ్చారు.</p>
            <button class="btn primary" onclick="location.reload()">
                మళ్లీ ప్రయత్నించండి
            </button>
        `;

    }

}


window.addEventListener("storage", () => {

    if (currentQuestion < questions.length) {

        loadQuestion();

    }

});


document.addEventListener("DOMContentLoaded", () => {

    loadQuestion();

});
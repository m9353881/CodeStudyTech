/* =========================
   STUDY TECHNIQUE
   QUESTIONNAIRE
========================= */

function calculateRecommendation() {

    const answers = [
        document.querySelector('input[name="q1"]:checked'),
        document.querySelector('input[name="q2"]:checked'),
        document.querySelector('input[name="q3"]:checked'),
        document.querySelector('input[name="q4"]:checked')
    ];

    // Check if all questions are answered
    if (answers.includes(null)) {
        alert("Please answer all questions first.");
        return;
    }


    let scores = {
        pomodoro: 0,
        activeRecall: 0,
        blurting: 0
    };


    answers.forEach(answer => {

        if (answer.value === "pomodoro") {
            scores.pomodoro++;
        }

        if (answer.value === "recall") {
            scores.activeRecall++;
        }

        if (answer.value === "blurting") {
            scores.blurting++;
        }

    });


    let recommendation = "pomodoro";


    if (
        scores.activeRecall > scores.pomodoro &&
        scores.activeRecall > scores.blurting
    ) {
        recommendation = "activeRecall";
    }

    else if (
        scores.blurting > scores.pomodoro &&
        scores.blurting > scores.activeRecall
    ) {
        recommendation = "blurting";
    }


    const resultData = {

        pomodoro: {

            icon: "pomodoro.png",

            title: "Programming Pomodoro",

            description:
                "This technique is suitable for students who prefer short and focused programming study sessions.",

            tips: `
                <h4>How to use it:</h4>
                <p>
                    Code for 25 minutes, take a 5-minute break,
                    and repeat the cycle.
                </p>
            `
        },


        activeRecall: {

            icon: "recall.png",

            title: "Coding Active Recall",

            description:
                "This technique is suitable for students who learn better by testing their memory and recalling programming concepts.",

            tips: `
                <h4>How to use it:</h4>
                <p>
                    Close your notes and try to explain the programming
                    concept or write the code from memory.
                </p>
            `
        },


        blurting: {

            icon: "blurting.png",

            title: "Programming Blurting",

            description:
                "This technique is suitable for students who prefer writing down everything they remember about a programming topic.",

            tips: `
                <h4>How to use it:</h4>
                <p>
                    Choose a programming topic and write down
                    everything you remember without checking your notes.
                </p>
            `
        }

    };


    const result = resultData[recommendation];


    const resultBox = document.getElementById("result");

    const resultIcon = document.getElementById("result-icon");

    const resultTitle = document.getElementById("result-title");

    const resultDescription =
        document.getElementById("result-description");

    const resultTips =
        document.getElementById("result-tips");


    // Show image instead of emoji
    resultIcon.innerHTML =
        `<img src="${result.icon}" alt="${result.title}">`;


    resultTitle.innerText =
        result.title;


    resultDescription.innerText =
        result.description;


    resultTips.innerHTML =
        result.tips;


    resultBox.style.display = "block";


    // Scroll to result
    resultBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================
   PROGRAMMING QUIZ
========================= */

function checkQuiz() {

    let score = 0;


    const answer1 =
        document.querySelector(
            'input[name="quiz1"]:checked'
        );

    const answer2 =
        document.querySelector(
            'input[name="quiz2"]:checked'
        );

    const answer3 =
        document.querySelector(
            'input[name="quiz3"]:checked'
        );

    const answer4 =
        document.querySelector(
            'input[name="quiz4"]:checked'
        );


    if (!answer1 || !answer2 || !answer3 || !answer4) {

        alert("Please answer all quiz questions first.");

        return;
    }


    // Correct answers

    if (answer1.value === "B") {
        score++;
    }

    if (answer2.value === "A") {
        score++;
    }

    if (answer3.value === "B") {
        score++;
    }

    if (answer4.value === "B") {
        score++;
    }


    const result =
        document.getElementById("quiz-result");


    if (score === 4) {

        result.innerHTML =
            `Excellent! You scored ${score}/4.`;

    }

    else if (score >= 2) {

        result.innerHTML =
            `Good job! You scored ${score}/4. Keep practising!`;

    }

    else {

        result.innerHTML =
            `You scored ${score}/4. Review the programming topics and try again!`;

    }


    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}
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


    /* =========================
       RESULT DATA
    ========================= */

    const resultData = {

        pomodoro: {

            icon: "pomodoro.png",

            title: "Pomodoro Programming",

            description:
                "This technique is suitable for students who prefer short and focused programming study sessions.",

            tips: `
                <div class="study-tips-grid">

                    <div class="tip-card step">
                        <div class="badge">25 Mins</div>
                        <h4>Learn</h4>
                        <ul>
                            <li>Learn one topic only</li>
                            <li>Understand the syntax</li>
                            <li>Look at code examples</li>
                            <li>Write short notes</li>
                        </ul>
                    </div>

                    <div class="tip-card break">
                        <div class="badge">5 Mins</div>
                        <h4>Break</h4>
                        <ul>
                            <li>Drink water</li>
                            <li>Stretch your body</li>
                        </ul>
                    </div>

                    <div class="tip-card step">
                        <div class="badge">25 Mins</div>
                        <h4>Coding Practice</h4>
                        <ul>
                            <li>Complete 2–3 programming questions</li>
                            <li>Try coding without looking at examples</li>
                            <li>Practise the concept you have just learned</li>
                        </ul>
                    </div>

                    <div class="tip-card break">
                        <div class="badge">5 Mins</div>
                        <h4>Break</h4>
                        <p>Take a short break before starting the next session.</p>
                    </div>

                </div>
            `
        },


        activeRecall: {

            icon: "recall.png",

            title: "Active Recall — Programming",

            description:
                "This technique is suitable for students who learn better by testing their memory and recalling programming concepts.",

            tips: `
                <div class="study-tips">

                    <div class="tip-step">
                        <h4>1. Study One Topic</h4>
                        <p><b>Example:</b> if-else</p>
                        <p>Understand the concept and syntax first.</p>
                    </div>

                    <div class="tip-step">
                        <h4>2. Close Your Notes</h4>
                        <p>Do not look at your notes or code examples.</p>
                    </div>

                    <div class="tip-step">
                        <h4>3. Ask Yourself</h4>
                        <ul>
                            <li>What is the function of if-else?</li>
                            <li>When should I use if?</li>
                            <li>What is the syntax of if-else?</li>
                            <li>What is the difference between if and else?</li>
                            <li>Can I give an example?</li>
                        </ul>
                    </div>

                    <div class="tip-step">
                        <h4>4. Answer Without Looking</h4>
                        <p>Write the answer from memory.</p>
                        <p>For programming, write the code yourself.</p>
                    </div>

                    <div class="tip-step">
                        <h4>5. Try a Programming Question</h4>
                        <p>
                            <b>Example:</b> Write a program to determine whether
                            a student's mark is a pass or fail.
                        </p>
                        <p>Try to solve it without referring to your notes.</p>
                    </div>

                    <div class="tip-step">
                        <h4>6. Check Your Answer</h4>
                        <p>Open your notes or check the answer.</p>
                        <p>Identify what you got wrong or forgot.</p>
                    </div>

                    <div class="tip-step">
                        <h4>7. Repeat What You Got Wrong</h4>
                        <p>Close your notes again.</p>
                        <p>Try to answer the question one more time.</p>
                    </div>

                </div>
            `
        },


        blurting: {

            icon: "blurting.png",

            title: "Blurting for Programming",

            description:
                "This technique is suitable for students who prefer writing down everything they remember about a programming topic.",

            tips: `
                <div class="study-tips">

                    <div class="tip-step">
                        <h4>1. Choose One Topic</h4>
                        <p><b>Example:</b> if-else</p>
                        <p>Do not choose too many topics at once.</p>
                    </div>

                    <div class="tip-step">
                        <h4>2. Study for 10–15 Minutes</h4>
                        <ul>
                            <li>Read the notes</li>
                            <li>Understand the concept</li>
                            <li>Look at code examples</li>
                        </ul>
                    </div>

                    <div class="tip-step">
                        <h4>3. Close All Your Notes</h4>
                        <p>Take a blank piece of paper.</p>
                        <p>Write down everything you remember.</p>
                        <p>Do not look at your notes or Google.</p>
                    </div>

                    <div class="tip-step">
                        <h4>4. For Programming, Write:</h4>
                        <ul>
                            <li>Meaning of the concept</li>
                            <li>Syntax</li>
                            <li>Code example</li>
                            <li>Function of each part of the code</li>
                            <li>Common mistakes</li>
                        </ul>
                    </div>

                    <div class="tip-step">
                        <h4>5. Open Your Notes Again</h4>
                        <p>Compare them with what you wrote.</p>
                        <p>Mark the parts that you missed or got wrong.</p>
                    </div>

                    <div class="tip-step">
                        <h4>6. Repeat the Parts You Got Wrong</h4>
                        <p>Close your notes.</p>
                        <p>Write those parts again.</p>
                        <p>Try to create your own example.</p>
                    </div>

                </div>
            `
        }

    };


    /* =========================
       DISPLAY RESULT
    ========================= */

    const result = resultData[recommendation];

    const resultBox =
        document.getElementById("result");

    const resultIcon =
        document.getElementById("result-icon");

    const resultTitle =
        document.getElementById("result-title");

    const resultDescription =
        document.getElementById("result-description");

    const resultTips =
        document.getElementById("result-tips");


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

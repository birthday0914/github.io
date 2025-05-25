// HTML要素の取得
const termTextElement = document.getElementById('term-text');
const questionTextElement = document.getElementById('question-text');
const choicesAreaElement = document.getElementById('choices-area');
const resultMessageElement = document.getElementById('result-message');
const explanationTextElement = document.getElementById('explanation-text');
const nextButtonElement = document.getElementById('next-button');
const scoreAreaElement = document.getElementById('score-area');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');
const restartButtonElement = document.getElementById('restart-button');

let currentQuestionIndex = 0;
let score = 0;
let questionsAnswered = false; // 現在の問題に回答済みか

// クイズの初期化と表示
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questionsAnswered = false;
    scoreAreaElement.style.display = 'none';
    nextButtonElement.style.display = 'none';
    resultMessageElement.textContent = '';
    explanationTextElement.textContent = '';
    displayQuestion();
}

// 問題と選択肢を表示する関数
function displayQuestion() {
    questionsAnswered = false;
    resultMessageElement.textContent = '';
    explanationTextElement.textContent = '';
    nextButtonElement.style.display = 'none'; // 次へボタンを隠す

    const currentQuiz = quizData[currentQuestionIndex];
    termTextElement.textContent = `用語: ${currentQuiz.term}`;
    questionTextElement.textContent = currentQuiz.question;
    choicesAreaElement.innerHTML = ''; // 既存の選択肢をクリア

    currentQuiz.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.classList.add('choice-button');
        button.onclick = () => handleChoice(choice.isCorrect, currentQuiz.explanation);
        choicesAreaElement.appendChild(button);
    });
}

// 選択肢が選ばれたときの処理
function handleChoice(isCorrect, explanation) {
    if (questionsAnswered) return; // 既に回答済みの場合は何もしない
    questionsAnswered = true;

    if (isCorrect) {
        resultMessageElement.textContent = '正解！ 🎉';
        resultMessageElement.style.color = 'green';
        score++;
    } else {
        resultMessageElement.textContent = '残念、不正解... 😢';
        resultMessageElement.style.color = 'red';
    }
    explanationTextElement.textContent = `解説: ${explanation}`;
    nextButtonElement.style.display = 'block'; // 次へボタンを表示

    // 全ての選択肢ボタンを無効化（スタイル変更も可）
    const choiceButtons = choicesAreaElement.getElementsByTagName('button');
    for (let btn of choiceButtons) {
        btn.disabled = true;
    }
}

// 次の問題へ進む処理
nextButtonElement.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        showScore();
    }
});

// スコア表示
function showScore() {
    termTextElement.textContent = 'クイズ終了！';
    questionTextElement.textContent = '';
    choicesAreaElement.innerHTML = '';
    resultMessageElement.textContent = '';
    explanationTextElement.textContent = '';
    nextButtonElement.style.display = 'none';

    scoreElement.textContent = score;
    totalQuestionsElement.textContent = quizData.length;
    scoreAreaElement.style.display = 'block';
}

// 最初からやり直す
restartButtonElement.addEventListener('click', startQuiz);


// クイズを開始
startQuiz();

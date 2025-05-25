// HTML要素の取得 (変更なし)
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
// let questionsAnswered = false; // ← この変数は不要になるかもしれません。

// クイズの初期化と表示 (変更なし)
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    // questionsAnswered = false;
    scoreAreaElement.style.display = 'none';
    nextButtonElement.style.display = 'none';
    resultMessageElement.textContent = '';
    explanationTextElement.textContent = '';
    displayQuestion();
}

// 問題と選択肢を表示する関数
function displayQuestion() {
    // questionsAnswered = false; // ← 不要なら削除
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
        // ★★★ 修正点: ボタンがクリックされたら handleChoice を呼び出す ★★★
        //     この時点で disabled = false (デフォルト) になっています。
        button.onclick = () => handleChoice(choice.isCorrect, currentQuiz.explanation, button); // button自身を渡す
        choicesAreaElement.appendChild(button);
    });
}

// 選択肢が選ばれたときの処理
function handleChoice(isCorrect, explanation, clickedButton) {
    // ★★★ 修正点: 一度回答したら他のボタンも無効化する ★★★
    const choiceButtons = choicesAreaElement.getElementsByTagName('button');
    for (let btn of choiceButtons) {
        btn.disabled = true; // 全てのボタンを無効化
        if (quizData[currentQuestionIndex].choices.find(c => c.text === btn.textContent).isCorrect) {
            btn.style.backgroundColor = 'lightgreen'; // 正解の選択肢を緑に
        } else if (btn === clickedButton && !isCorrect) {
            btn.style.backgroundColor = 'salmon'; // 不正解でクリックした選択肢を赤っぽく
        }
    }


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
}

// 次の問題へ進む処理
nextButtonElement.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        // ★★★ 修正点: 次の問題を表示する前にボタンのスタイルをリセットする（任意）★★★
        const choiceButtons = choicesAreaElement.getElementsByTagName('button');
        for (let btn of choiceButtons) {
            btn.style.backgroundColor = ''; // 背景色をリセット
            // disabled は displayQuestion 内で新しくボタンが作られるのでリセット不要
        }
        displayQuestion();
    } else {
        showScore();
    }
});

// スコア表示 (変更なし)
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

// 最初からやり直す (変更なし)
restartButtonElement.addEventListener('click', startQuiz);


// クイズを開始
startQuiz();

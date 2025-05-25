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

        // 問題と選択肢を表示する関数
function displayQuestion() {
    console.log('--- displayQuestion START ---'); // ★デバッグ用
    console.log('currentQuestionIndex:', currentQuestionIndex); // ★デバッグ用

    resultMessageElement.textContent = '';
    explanationTextElement.textContent = '';
    nextButtonElement.style.display = 'none';

    const currentQuiz = quizData[currentQuestionIndex];
    console.log('currentQuiz object:', currentQuiz); // ★デバッグ用: currentQuiz全体を出力

    if (!currentQuiz) {
        console.error('CRITICAL ERROR: currentQuiz is undefined. quizData length:', quizData.length, 'currentQuestionIndex:', currentQuestionIndex); // ★デバッグ用
        termTextElement.textContent = 'エラー: 次の問題データが見つかりません。';
        questionTextElement.textContent = '';
        choicesAreaElement.innerHTML = '';
        return;
    }

    termTextElement.textContent = `用語: ${currentQuiz.term}`;
    // ★★★↓ 問題文が表示されているか確認 ★★★
    questionTextElement.textContent = currentQuiz.question;
    console.log('Question text set to:', currentQuiz.question); // ★デバッグ用

    choicesAreaElement.innerHTML = ''; // 既存の選択肢をクリア

    if (!currentQuiz.choices || !Array.isArray(currentQuiz.choices) || currentQuiz.choices.length === 0) {
        console.error('ERROR: currentQuiz.choices is invalid or empty.', currentQuiz.choices); // ★デバッグ用
        choicesAreaElement.innerHTML = '<p style="color:red;">エラー: この問題の選択肢データがありません。</p>';
        return;
    }
    console.log('currentQuiz.choices array:', currentQuiz.choices); // ★デバッグ用

    currentQuiz.choices.forEach((choice, index) => {
        console.log(`Looping for choice ${index}:`, choice); // ★デバッグ用
        if (typeof choice.text === 'undefined' || typeof choice.isCorrect === 'undefined') {
            console.warn(`Choice ${index} has missing properties:`, choice); // ★デバッグ用
        }
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.classList.add('choice-button');
        // disabled はデフォルトで false (有効)
        button.onclick = () => handleChoice(choice.isCorrect, currentQuiz.explanation, button);
        choicesAreaElement.appendChild(button);
    });
    console.log('choicesAreaElement.innerHTML after adding buttons:', choicesAreaElement.innerHTML); // ★デバッグ用
    console.log('--- displayQuestion END ---'); // ★デバッグ用

    // 問題と選択肢を表示する関数
function displayQuestion() {
    console.log('--- displayQuestion START ---');
    console.log('currentQuestionIndex:', currentQuestionIndex);

    resultMessageElement.textContent = '';
    explanationTextElement.textContent = '';
    nextButtonElement.style.display = 'none';

    // ★★★↓ ここから追加/修正 ★★★
    if (currentQuestionIndex < 0 || currentQuestionIndex >= quizData.length) {
        console.error('ERROR: currentQuestionIndex is out of bounds!', currentQuestionIndex, 'quizData length:', quizData.length);
        termTextElement.textContent = 'エラー: 問題インデックスが範囲外です。';
        questionTextElement.textContent = '';
        choicesAreaElement.innerHTML = '';
        // クイズ終了処理を呼び出すか、エラーメッセージを表示して停止
        showScore(); // 例えば、範囲外ならスコア表示（クイズ終了）させてしまう
        return;
    }
    // ★★★↑ ここまで追加/修正 ★★★

    const currentQuiz = quizData[currentQuestionIndex];
    // console.log('currentQuiz object:', currentQuiz); // このログは残しておくと良い

    if (!currentQuiz) { // このチェックも念のため残す
        console.error('CRITICAL ERROR: currentQuiz is undefined even after bounds check. This should not happen.');
        termTextElement.textContent = '致命的エラー: 問題データが取得できませんでした。';
        // ... (以下同様のエラー処理)
        return;
    }

    termTextElement.textContent = `用語: ${currentQuiz.term}`;
    questionTextElement.textContent = currentQuiz.question;
    // console.log('Question text set to:', currentQuiz.question);

    choicesAreaElement.innerHTML = '';

    if (!currentQuiz.choices || !Array.isArray(currentQuiz.choices) || currentQuiz.choices.length === 0) {
        console.error('ERROR: currentQuiz.choices is invalid or empty.', currentQuiz.choices);
        choicesAreaElement.innerHTML = '<p style="color:red;">エラー: この問題の選択肢データがありません。</p>';
        return;
    }
    // console.log('currentQuiz.choices array:', currentQuiz.choices);

    currentQuiz.choices.forEach((choice, index) => { // この行でエラーが出ていた
        // console.log(`Looping for choice ${index}:`, choice);
        if (typeof choice.text === 'undefined' || typeof choice.isCorrect === 'undefined') {
            console.warn(`Choice ${index} has missing properties:`, choice);
        }
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.classList.add('choice-button');
        button.onclick = () => handleChoice(choice.isCorrect, currentQuiz.explanation, button);
        choicesAreaElement.appendChild(button);
    });
    // console.log('choicesAreaElement.innerHTML after adding buttons:', choicesAreaElement.innerHTML);
    console.log('--- displayQuestion END ---');
}
}
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

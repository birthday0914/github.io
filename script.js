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

// script.js の上部 (HTML要素取得の後など) に追加
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // 要素を入れ替え
    }
}

// クイズの初期化と表示
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreAreaElement.style.display = 'none';
    nextButtonElement.style.display = 'none';
    resultMessageElement.textContent = '';
    explanationTextElement.textContent = '';
    // 既存の選択肢ボタンがあればクリア（リスタート時に重要）
    // script.js のグローバル変数部分
let currentQuestionIndex = 0;
let score = 0;
let currentQuizSet = []; // ★ シャッフルされた問題セットを保持
const questionsPerGame = 10; // ★ 1ゲームあたりの問題数

// startQuiz 関数を修正
function startQuiz() {
    // quizDataをシャッフルして、最初の10問（または全問）を取得
    const shuffledQuizData = [...quizData]; // quizDataのコピーを作成してシャッフル
    shuffleArray(shuffledQuizData);
    currentQuizSet = shuffledQuizData.slice(0, Math.min(questionsPerGame, shuffledQuizData.length)); // 10問、または全問数が10未満なら全問

    if (currentQuizSet.length === 0) {
        console.error("ERROR: No questions available in currentQuizSet.");
        // ユーザーにエラーメッセージを表示する処理
        const quizContainer = document.querySelector('.quiz-container');
        if (quizContainer) {
            quizContainer.innerHTML = '<h1 style="color:red;">エラー: 表示できる問題がありません。</h1>';
        }
        return;
    }


    currentQuestionIndex = 0;
    score = 0;
    scoreAreaElement.style.display = 'none';
    nextButtonElement.style.display = 'none';
    resultMessageElement.textContent = '';
    explanationTextElement.textContent = '';
    choicesAreaElement.innerHTML = '';
    displayQuestion();
}
    choicesAreaElement.innerHTML = '';
    displayQuestion();
    
    
}

// 問題と選択肢を表示する関数
function displayQuestion() {
    console.log('--- displayQuestion START ---');
    console.log('currentQuestionIndex:', currentQuestionIndex, '| quizData.length:', quizData.length);

    resultMessageElement.textContent = ''; // 前回の結果メッセージをクリア
    explanationTextElement.textContent = ''; // 前回の解説をクリア
    nextButtonElement.style.display = 'none'; // 次へボタンを隠す

    // currentQuestionIndexが配列の範囲外かチェック
    if (currentQuestionIndex < 0 || currentQuestionIndex >= quizData.length) {
        console.error('ERROR: currentQuestionIndex is out of bounds!', currentQuestionIndex);
        termTextElement.textContent = 'エラー: 問題インデックスが範囲外です。';
        questionTextElement.textContent = '最初からやり直してください。';
        choicesAreaElement.innerHTML = '';
        showScore(); // 範囲外ならスコア表示（実質クイズ終了）
        return;
    }

    const currentQuiz = quizData[currentQuestionIndex];

    // currentQuizオブジェクト自体が存在するかチェック (念のため)
    if (!currentQuiz) {
        console.error('CRITICAL ERROR: currentQuiz is undefined. quizData length:', quizData.length, 'currentQuestionIndex:', currentQuestionIndex);
        termTextElement.textContent = '致命的エラー: 次の問題データが見つかりません。';
        questionTextElement.textContent = '';
        choicesAreaElement.innerHTML = '';
        showScore(); // エラーなのでスコア表示
        return;
    }

    termTextElement.textContent = `用語: ${currentQuiz.term}`;
    questionTextElement.textContent = currentQuiz.question;
    console.log('Question text set to:', currentQuiz.question);

    choicesAreaElement.innerHTML = ''; // 既存の選択肢をクリア

    // currentQuiz.choices が配列であり、要素が存在するかチェック
    if (!currentQuiz.choices || !Array.isArray(currentQuiz.choices) || currentQuiz.choices.length === 0) {
        console.error('ERROR: currentQuiz.choices is invalid or empty.', currentQuiz.choices);
        choicesAreaElement.innerHTML = '<p style="color:red;">エラー: この問題の選択肢データがありません。</p>';
        // この場合、次の問題へ進めるようにするか、エラーで停止するか検討
        nextButtonElement.style.display = 'block'; // とりあえず次へ進めるようにする
        return;
    }
    console.log('currentQuiz.choices array:', currentQuiz.choices);

    currentQuiz.choices.forEach((choice, index) => {
        // console.log(`Looping for choice ${index}:`, choice);
        if (typeof choice.text === 'undefined' || typeof choice.isCorrect === 'undefined') {
            console.warn(`Choice ${index} from term "${currentQuiz.term}" has missing properties:`, choice);
        }
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.classList.add('choice-button');
        // disabled はデフォルトで false (有効)
        button.onclick = () => handleChoice(choice.isCorrect, currentQuiz.explanation, button, currentQuiz.choices);
        choicesAreaElement.appendChild(button);
    });
    console.log('--- displayQuestion END ---');
}

// 選択肢が選ばれたときの処理
function handleChoice(isCorrect, explanation, clickedButton, allChoices) {
    const choiceButtons = choicesAreaElement.getElementsByTagName('button');
    for (let btn of choiceButtons) {
        btn.disabled = true; // 全てのボタンを無効化
        // 対応する選択肢データを見つける (ボタンのテキストで比較)
        const choiceData = allChoices.find(c => c.text === btn.textContent);
        if (choiceData && choiceData.isCorrect) {
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
    // ボタンのスタイルをリセット (任意、色付けした場合)
    const choiceButtons = choicesAreaElement.getElementsByTagName('button');
    for (let btn of choiceButtons) {
        btn.style.backgroundColor = ''; // 背景色をリセット
    }
    displayQuestion(); // 次の問題を表示 (この中で範囲チェックが行われる)
});

// スコア表示
function showScore() {
    termTextElement.textContent = 'クイズ終了！';
    questionTextElement.textContent = '';
    choicesAreaElement.innerHTML = ''; // 選択肢エリアをクリア
    resultMessageElement.textContent = ''; // 結果メッセージをクリア
    explanationTextElement.textContent = ''; // 解説をクリア
    nextButtonElement.style.display = 'none'; // 次へボタンを隠す

    scoreElement.textContent = score;
    totalQuestionsElement.textContent = quizData.length; // quizDataが定義されている前提
    scoreAreaElement.style.display = 'block';
}

// 最初からやり直す
restartButtonElement.addEventListener('click', startQuiz);

// --- クイズの開始 ---
// quizDataがquizData.jsでグローバルに定義されていることを期待
if (typeof quizData !== 'undefined' && quizData.length > 0) {
    startQuiz();
} else {
    console.error("CRITICAL ERROR: quizData is not defined or is empty. Cannot start quiz.");
    // ユーザーにエラーメッセージを表示する処理
    const quizContainer = document.querySelector('.quiz-container');
    if (quizContainer) {
        quizContainer.innerHTML = '<h1 style="color:red;">エラー: クイズデータを読み込めませんでした。quizData.jsを確認してください。</h1>';
    }
}

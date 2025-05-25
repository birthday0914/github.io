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
const scoreCommentElement = document.getElementById('score-comment'); // スコアコメント用 (HTMLに追加想定)

// --- グローバル変数 ---
let currentQuestionIndex = 0;
let score = 0;
let currentQuizSet = []; // シャッフルされ、10問に制限された問題セット
const questionsPerGame = 10; // 1ゲームあたりの問題数

// --- 関数定義 ---

// 配列をシャッフルする関数 (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// クイズを開始またはリスタートする関数
function startQuiz() {
    console.log("--- startQuiz ---");
    // quizDataが存在し、空でないことを確認
    if (typeof quizData === 'undefined' || quizData.length === 0) {
        console.error("CRITICAL ERROR: quizData is not defined or empty in startQuiz.");
        const quizContainer = document.querySelector('.quiz-container');
        if (quizContainer) {
            quizContainer.innerHTML = '<h1 style="color:red;">エラー: クイズデータがありません。</h1>';
        }
        return;
    }

    // quizDataをシャッフルし、問題数を制限
    const shuffledQuizData = [...quizData]; // 元のquizDataを壊さないようにコピー
    shuffleArray(shuffledQuizData);
    currentQuizSet = shuffledQuizData.slice(0, Math.min(questionsPerGame, shuffledQuizData.length));

    if (currentQuizSet.length === 0) {
        console.error("ERROR: No questions available after shuffle/slice.");
        const quizContainer = document.querySelector('.quiz-container');
        if (quizContainer) {
            quizContainer.innerHTML = '<h1 style="color:red;">エラー: 表示できる問題がありません。</h1>';
        }
        return;
    }

    // 状態をリセット
    currentQuestionIndex = 0;
    score = 0;

    // UIをリセット
    scoreAreaElement.style.display = 'none';
    if (scoreCommentElement) {
        scoreCommentElement.style.display = 'none'; // スコアコメントも隠す
    }
    nextButtonElement.style.display = 'none';
    resultMessageElement.textContent = '';
    explanationTextElement.textContent = '';
    choicesAreaElement.innerHTML = ''; // 前の選択肢をクリア

    displayQuestion(); // 最初の問題を表示
}

// 問題と選択肢を表示する関数
function displayQuestion() {
    console.log('--- displayQuestion START ---');
    console.log('currentQuestionIndex:', currentQuestionIndex, '| currentQuizSet.length:', currentQuizSet.length);

    // UIをリセット (結果メッセージと解説)
    resultMessageElement.textContent = '';
    explanationTextElement.textContent = '';
    nextButtonElement.style.display = 'none';

    // 現在の問題インデックスが有効範囲内かチェック
    if (currentQuestionIndex < 0 || currentQuestionIndex >= currentQuizSet.length) {
        console.error('ERROR: currentQuestionIndex is out of bounds!', currentQuestionIndex);
        showScore(); // 範囲外ならスコア表示
        return;
    }

    const currentQuiz = currentQuizSet[currentQuestionIndex];
    console.log('Loaded currentQuiz:', currentQuiz);

    // currentQuizオブジェクト自体が存在するかチェック
    if (!currentQuiz) {
        console.error('CRITICAL ERROR: currentQuiz is undefined. Cannot display question.');
        termTextElement.textContent = '致命的エラー: 問題データが取得できませんでした。';
        questionTextElement.textContent = '';
        choicesAreaElement.innerHTML = '';
        showScore();
        return;
    }

    termTextElement.textContent = `用語: ${currentQuiz.term}`;
    questionTextElement.textContent = currentQuiz.question;

    choicesAreaElement.innerHTML = ''; // 既存の選択肢をクリア

    // currentQuiz.choices が有効な配列であり、要素が存在するかチェック
    if (!currentQuiz.choices || !Array.isArray(currentQuiz.choices) || currentQuiz.choices.length === 0) {
        console.error('ERROR: currentQuiz.choices is invalid or empty.', currentQuiz.choices);
        choicesAreaElement.innerHTML = '<p style="color:red;">エラー: この問題の選択肢データがありません。</p>';
        nextButtonElement.style.display = 'block'; // とりあえず次へ進めるようにする
        return;
    }
    console.log('Processing choices:', currentQuiz.choices);

    currentQuiz.choices.forEach((choice) => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.classList.add('choice-button');
        button.onclick = () => handleChoice(choice.isCorrect, currentQuiz.explanation, button, currentQuiz.choices);
        choicesAreaElement.appendChild(button);
    });
    console.log('--- displayQuestion END ---');
}

// 選択肢が選ばれたときの処理
function handleChoice(isCorrect, explanation, clickedButton, allChoices) {
    console.log("--- handleChoice --- Correct:", isCorrect);
    const choiceButtons = choicesAreaElement.getElementsByTagName('button');
    for (let btn of choiceButtons) {
        btn.disabled = true;
        const choiceData = allChoices.find(c => c.text === btn.textContent);
        if (choiceData && choiceData.isCorrect) {
            btn.style.backgroundColor = 'lightgreen';
        } else if (btn === clickedButton && !isCorrect) {
            btn.style.backgroundColor = 'salmon';
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
    explanationTextElement.textContent = `解説: ${explanation || "解説はありません。"}`; // explanationがundefinedの場合の対策
    nextButtonElement.style.display = 'block';
}

// スコア表示とコメント表示を行う関数
function showScore() {
    console.log("--- showScore --- Score:", score, "out of", currentQuizSet.length);
    termTextElement.textContent = 'クイズ終了！';
    questionTextElement.textContent = '';
    choicesAreaElement.innerHTML = '';
    resultMessageElement.textContent = '';
    explanationTextElement.textContent = '';
    nextButtonElement.style.display = 'none';

    scoreElement.textContent = score;
    totalQuestionsElement.textContent = currentQuizSet.length;
    scoreAreaElement.style.display = 'block';

    displayScoreComment();
}

// 点数に応じたコメントを表示する関数
function displayScoreComment() {
    if (!scoreCommentElement) { // HTML要素がない場合は何もしない
        console.warn("Element with id 'score-comment' not found in displayScoreComment.");
        return;
    }

    const percentage = (score / currentQuizSet.length) * 100;
    let comment = "";

    if (currentQuizSet.length === 0) { // 問題がなかった場合
        comment = "問題がありませんでした。";
    } else if (percentage === 100) {
        comment = "素晴らしい！全問正解です！🎉 AI Studioマスターですね！";
    } else if (percentage >= 80) {
        comment = "優秀です！ほとんど理解できていますね！✨ あと一息！";
    } else if (percentage >= 60) {
        comment = "良い調子です！さらに学習を続けて完璧を目指しましょう！💪";
    } else if (percentage >= 40) {
        comment = "まずまずの結果です。苦手な部分を復習してみましょう。📚";
    } else {
        comment = "もう少し頑張りましょう！基本からしっかり復習するのが大切です。📖";
    }
    scoreCommentElement.textContent = comment;
    scoreCommentElement.style.display = 'block';
    console.log("Score comment set to:", comment); // デバッグ用ログ
}

// --- イベントリスナー ---

// 「次の問題へ」ボタンの処理
nextButtonElement.addEventListener('click', () => {
    console.log("--- Next button clicked ---");
    currentQuestionIndex++;
    // ボタンのスタイルをリセット (任意、色付けした場合)
    const choiceButtons = choicesAreaElement.getElementsByTagName('button');
    for (let btn of choiceButtons) {
        btn.style.backgroundColor = '';
    }
    displayQuestion(); // 次の問題を表示 (この中で範囲チェックが行われる)
});

// 「もう一度挑戦」ボタンの処理
restartButtonElement.addEventListener('click', startQuiz);

// --- クイズの開始処理 ---
// DOMが完全に読み込まれてからクイズを開始する (より安全)
document.addEventListener('DOMContentLoaded', () => {
    if (typeof quizData !== 'undefined' && quizData.length > 0) {
        startQuiz();
    } else {
        console.error("CRITICAL ERROR: quizData is not defined or is empty when DOM loaded. Cannot start quiz.");
        const quizContainer = document.querySelector('.quiz-container');
        if (quizContainer) {
            quizContainer.innerHTML = '<h1 style="color:red;">エラー: クイズデータを読み込めませんでした。<br>quizData.jsを確認してください。</h1>';
        }
    }
});

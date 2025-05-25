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

// startQuiz 関数を修正
function startQuiz() {
    // ... (シャッフル処理など) ...

    // scoreCommentElement があれば非表示にする
    const scoreCommentElement = document.getElementById('score-comment');
    if (scoreCommentElement) {
        scoreCommentElement.style.display = 'none';
    }

    currentQuestionIndex = 0;
    // ... (残りの初期化処理) ...
    displayQuestion();
}
    currentQuestionIndex = 0;
    score = 0;
    scoreAreaElement.style.display = 'none';
    nextButtonElement.style.display = 'none';
    resultMessageElement.textContent = '';
    explanationTextElement.textContent = '';
    // 既存の選択肢ボタンがあればクリア（リスタート時に重要）



// script.js のグローバル変数部分
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

// 問題と選択肢を表示する関数
// displayQuestion 関数内の参照を変更

function displayQuestion() {
    console.log('--- displayQuestion START ---');
    console.log('currentQuestionIndex:', currentQuestionIndex, '| currentQuizSet.length:', currentQuizSet.length);

    // ★ デバッグログ追加
    console.log('Checking HTML elements:');
    console.log('termTextElement:', termTextElement);
    console.log('questionTextElement:', questionTextElement);
    console.log('choicesAreaElement:', choicesAreaElement);

    resultMessageElement.textContent = '';
    explanationTextElement.textContent = '';
    nextButtonElement.style.display = 'none';

    if (currentQuestionIndex < 0 || currentQuestionIndex >= currentQuizSet.length) {
        console.error('ERROR: currentQuestionIndex is out of bounds!', currentQuestionIndex);
        // ... (エラー処理) ...
        showScore();
        return;
    }

    const currentQuiz = currentQuizSet[currentQuestionIndex];
    console.log('Loaded currentQuiz:', currentQuiz); // ★ currentQuizの中身を確認

    if (!currentQuiz) {
        console.error('CRITICAL ERROR: currentQuiz is undefined. Cannot display question.');
        termTextElement.textContent = '致命的エラー: 問題データが取得できませんでした。';
        // ...
        return;
    }

    // ★ termTextElement にテキストが設定されるか確認
    termTextElement.textContent = `用語: ${currentQuiz.term}`;
    console.log('Set term text to:', termTextElement.textContent);

    // ★ questionTextElement にテキストが設定されるか確認
    questionTextElement.textContent = currentQuiz.question;
    console.log('Set question text to:', questionTextElement.textContent);

    choicesAreaElement.innerHTML = '';

    if (!currentQuiz.choices || !Array.isArray(currentQuiz.choices) || currentQuiz.choices.length === 0) {
        console.error('ERROR: currentQuiz.choices is invalid or empty.', currentQuiz.choices);
        choicesAreaElement.innerHTML = '<p style="color:red;">エラー: この問題の選択肢データがありません。</p>';
        nextButtonElement.style.display = 'block';
        return;
    }
    console.log('Processing choices:', currentQuiz.choices);

    currentQuiz.choices.forEach((choice, index) => {
        console.log(`Creating button for choice ${index}:`, choice.text); // ★ ボタン生成のログ
        // ... (ボタン作成処理) ...
    });
    console.log('Finished creating choice buttons. choicesAreaElement.innerHTML:', choicesAreaElement.innerHTML); // ★ 選択肢HTMLの確認
    console.log('--- displayQuestion END ---');

    if (currentQuestionIndex < 0 || currentQuestionIndex >= currentQuizSet.length) { // ★ 変更
        // ... (エラー処理) ...
        showScore();
        return;
    }

    const currentQuiz = currentQuizSet[currentQuestionIndex]; // ★ 変更

    // ... (以降、currentQuiz を使う部分はそのまま) ...
}

// nextButtonElement のイベントリスナー内の参照を変更
nextButtonElement.addEventListener('click', () => {
    currentQuestionIndex++;
    // ... (ボタンのスタイルリセット) ...
    // displayQuestion(); // displayQuestion は currentQuizSet.length を見るので、ここはこのままで良いが、
    // もし明示的に比較するなら以下のようにする
    if (currentQuestionIndex < currentQuizSet.length) { // ★ 変更 (任意だが分かりやすい)
        displayQuestion();
    } else {
        showScore();
    }
});

// showScore 関数内の参照を変更
function showScore() {
    // ... (他の処理) ...
    totalQuestionsElement.textContent = currentQuizSet.length; // ★ 変更
    scoreAreaElement.style.display = 'block';
    // ★ ここで点数に応じたコメントを表示する処理を追加
    displayScoreComment();
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
      displayScoreComment(); // ★ この行を追加
}

// script.js のどこか (showScore の近くなど) に追加
function displayScoreComment() {
    const percentage = (score / currentQuizSet.length) * 100;
    let comment = "";

    if (percentage === 100) {
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

    // コメントを表示するための新しいHTML要素を準備 (index.htmlに追加が必要)
    const scoreCommentElement = document.getElementById('score-comment');
    if (scoreCommentElement) {
        scoreCommentElement.textContent = comment;
        scoreCommentElement.style.display = 'block'; // 表示する
    } else {
        console.warn("Element with id 'score-comment' not found. Cannot display score comment.");
    }
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

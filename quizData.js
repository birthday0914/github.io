const quizData = [
  {
    "id": 1,
    "term": "Toggle",
    "question": "UI上の「Toggle」は何を意味しますか？",
    "choices": [
      { "text": "設定を一覧表示するボタン", "isCorrect": false },
      { "text": "オン/オフなど、2つの状態を切り替えるスイッチ", "isCorrect": true },
      { "text": "複数の選択肢から1つを選ぶボタン", "isCorrect": false },
      { "text": "情報を入力するためのテキストフィールド", "isCorrect": false }
    ],
    "explanation": "「Toggle」は、設定の有効/無効や表示/非表示など、2つの状態を切り替えるためのスイッチです。AI Studioでは、様々な設定項目で見られます。"
  },
  // quizData.js に追加 (または既存のものを置き換え)
// (IDはご自身の環境に合わせて調整してください)
  {
    "id": 2,
    "term": "Dashboard",
    "question": "AI Studioにおける「Dashboard」の主な役割は何ですか？",
    "choices": [
      { "text": "特定のAIモデルの詳細なパラメータを設定する画面", "isCorrect": false },
      { "text": "プロジェクトの全体的な状況、最近のアクティビティ、主要な情報へのアクセスポイントを提供する概要画面", "isCorrect": true },
      { "text": "APIキーを管理し、新しいキーを発行するための専用ページ", "isCorrect": false },
      { "text": "AIモデルのファインチューニングプロセスを監視する画面", "isCorrect": false }
    ],
    "explanation": "「Dashboard」は、多くのWebアプリケーションやサービスで提供される、重要な情報や機能へのショートカットをまとめた最初の画面や概況ページです。AI Studioではプロジェクトの状況や最近使ったプロンプトなどが表示されることが考えられます。"
  },
  {
    "id": 3,
    "term": "Library",
    "question": "AI Studioの「Library」セクションには通常何が保存・管理されていますか？",
    "choices": [
      { "text": "AIモデルの訓練に使用する大規模なデータセット", "isCorrect": false },
      { "text": "ユーザーが作成・保存したプロンプト、プロジェクト、またはその他のアセット", "isCorrect": true },
      { "text": "AI Studioの利用料金や請求情報", "isCorrect": false },
      { "text": "AI Studioのソフトウェアアップデート履歴", "isCorrect": false }
    ],
    "explanation": "「Library」は、ユーザーが作成したコンテンツ（例: 保存済みのプロンプト、チューニングしたモデルなど）を整理・管理し、再利用しやすくするための場所です。"
  },
  {
    "id": 4,
    "term": "Prompt gallery",
    "question": "AI Studioの「Prompt gallery」は何のために提供されていますか？",
    "choices": [
      { "text": "ユーザーが自分のプロンプトを販売するためのマーケットプレイス", "isCorrect": false },
      { "text": "様々なタスクやユースケースに対応するプロンプトの優れた作例やテンプレート集", "isCorrect": true },
      { "text": "プロンプトの文法的な誤りをチェックするツール", "isCorrect": false },
      { "text": "最も人気のあるプロンプトのランキング", "isCorrect": false }
    ],
    "explanation": "「Prompt gallery」は、ユーザーがAIモデルを効果的に活用するためのヒントとして、多様な目的（文章作成、要約、翻訳、コード生成など）に合わせたプロンプトのサンプルやテンプレートを閲覧できる場所です。"
  },
  {
    "id": 5,
    "term": "Examples",
    "question": "AI StudioのドキュメントやUIにおける「Examples」セクションの主な目的は何ですか？",
    "choices": [
      { "text": "AI Studioの利用規約の具体的な条項を説明すること", "isCorrect": false },
      { "text": "特定の機能やAPIの具体的な使い方を、実際のコードスニペットや設定例を交えて示すこと", "isCorrect": true },
      { "text": "AI倫理に関する一般的なガイドラインを提供すること", "isCorrect": false },
      { "text": "過去に発生したシステム障害の事例を報告すること", "isCorrect": false }
    ],
    "explanation": "「Examples」は、ユーザーが特定の機能やAPIをどのように使えばよいかを具体的に理解できるように、実際の使用例、コードサンプル、設定値の例などを提示するものです。"
  },
  {
    "id": 6,
    "term": "Tutorials",
    "question": "AI Studioの「Tutorials」は何を提供することを目的としていますか？",
    "choices": [
      { "text": "AI Studioの全ての機能を網羅した詳細なリファレンスマニュアル", "isCorrect": false },
      { "text": "特定のタスクを達成するための手順を、段階的に分かりやすく解説する学習ガイド", "isCorrect": true },
      { "text": "AI技術に関する最新の研究論文の要約", "isCorrect": false },
      { "text": "AI Studioのユーザーフォーラムへのリンク集", "isCorrect": false }
    ],
    "explanation": "「Tutorials」は、ユーザーがAI Studioの特定の機能を使えるようになったり、特定の目的（例: チャットボット作成、記事要約）を達成したりするための方法を、ステップバイステップで指導する実践的な学習コンテンツです。"
  },
  {
    "id": 7,
    "term": "History",
    "question": "AI Studioの「History」機能では、通常どのような情報が記録・表示されますか？",
    "choices": [
      { "text": "AI Studioのバージョンアップデートの履歴", "isCorrect": false },
      { "text": "ユーザーが行ったプロンプトの実行履歴、生成された応答、または行った操作の記録", "isCorrect": true },
      { "text": "AIモデルの訓練データセットの変更履歴", "isCorrect": false },
      { "text": "請求および支払い情報の履歴", "isCorrect": false }
    ],
    "explanation": "「History」機能は、ユーザーが過去に行った操作（例: プロンプトの実行、APIリクエストなど）のログを保存し、後から参照したり、特定の実行結果を再確認したりできるようにするものです。"
  },
  {
    "id": 8,
    "term": "Settings",
    "question": "AI Studioの「Settings」セクションでは、主に何を変更・管理できますか？",
    "choices": [
      { "text": "AIモデルのアーキテクチャそのもの", "isCorrect": false },
      { "text": "アカウント情報、APIキーの管理、プロジェクトの設定、UIの表示設定など、AI Studioの動作や利用に関する各種構成", "isCorrect": true },
      { "text": "AI Studioの公式ブログ記事の一覧", "isCorrect": false },
      { "text": "他のユーザーとプロジェクトを共有するための招待機能", "isCorrect": false }
    ],
    "explanation": "「Settings」は、アプリケーションやサービスの動作をユーザーの好みに合わせたり、アカウントに関連する情報を管理したりするための各種設定項目が集められた場所です。AI Studioでは、APIキー管理やプロジェクトごとの設定などが含まれることが多いです。"
  }, 
  // quizData.js に追加
// (前回のクイズデータの続きからIDを振ってください)
  {
    "id": 9, // 仮のID
    "term": "Chain-of-Thought (CoT)",
    "question": "プロンプト手法における「Chain-of-Thought (CoT)」とは主に何を目指すものですか？",
    "choices": [
      { "text": "プロンプトをできるだけ短く簡潔にすること", "isCorrect": false },
      { "text": "モデルに段階的な思考プロセスを明示させ、複雑な推論能力を向上させること", "isCorrect": true },
      { "text": "複数のAIモデルを連携させて回答を生成すること", "isCorrect": false },
      { "text": "ユーザーとの対話を鎖のようにつなげていくこと", "isCorrect": false }
    ],
    "explanation": "「Chain-of-Thought (CoT)」プロンプティングは、モデルに最終的な回答だけでなく、そこに至るまでの中間的な思考ステップを生成させることで、特に算術、常識、記号推論などのタスクで性能を向上させる手法です。"
  },
  {
    "id": 10, // 仮のID
    "term": "Seeding / Seed",
    "question": "モデルのパラメータ設定における「Seed（シード）」の主な役割は何ですか？",
    "choices": [
      { "text": "モデルの学習データを植え付けること", "isCorrect": false },
      { "text": "モデルの出力にランダム性を与え、毎回異なる結果を生成すること", "isCorrect": false },
      { "text": "モデルの応答の創造性を高めること", "isCorrect": false },
      { "text": "モデルの出力の再現性を確保するため、乱数生成の初期値を固定すること", "isCorrect": true }
    ],
    "explanation": "「Seed」は、モデルがランダム性を含む処理（例: Temperatureが0より大きい場合の単語選択など）を行う際に、そのランダムな振る舞いを固定するための初期値です。同じシード値を使えば、同じプロンプトとパラメータで同じ結果が再現できます。"
  },
  {
    "id": 11, // 仮のID
    "term": "Payload",
    "question": "APIリクエストにおける「Payload」とは一般的に何を指しますか？",
    "choices": [
      { "text": "APIキーなどの認証情報", "isCorrect": false },
      { "text": "APIエンドポイントのURL", "isCorrect": false },
      { "text": "APIリクエストで実際に送信される主要なデータ本体（例: プロンプトのテキストなど）", "isCorrect": true },
      { "text": "APIから返されるエラーメッセージ", "isCorrect": false }
    ],
    "explanation": "「Payload」は、ネットワーク通信において、実際に転送したいデータの中身のことです。APIリクエストの場合、プロンプトのテキスト、パラメータ設定などがペイロードに含まれます。"
  },
  {
    "id": 12, // 仮のID
    "term": "Overfitting",
    "question": "機械学習モデルの訓練における「Overfitting（過学習）」とはどのような状態ですか？",
    "choices": [
      { "text": "モデルが訓練データに対して十分に学習できていない状態", "isCorrect": false },
      { "text": "モデルが訓練データに過剰に適合し、未知の新しいデータに対してうまく機能しない状態", "isCorrect": true },
      { "text": "モデルの学習に必要な計算リソースが過大になっている状態", "isCorrect": false },
      { "text": "モデルのパラメータが多すぎて調整が困難な状態", "isCorrect": false }
    ],
    "explanation": "「Overfitting（過学習）」は、モデルが訓練データに含まれるノイズや詳細まで学習しすぎてしまい、その結果、汎化能力が低下し、実際の運用で新しいデータに対して精度が出なくなる現象です。"
  },
  {
    "id": 13, // 仮のID
    "term": "Moderation",
    "question": "AIコンテンツ生成における「Moderation」の主な目的は何ですか？",
    "choices": [
      { "text": "生成されるコンテンツの多様性を高めること", "isCorrect": false },
      { "text": "生成されるコンテンツの創造性を最大化すること", "isCorrect": false },
      { "text": "生成されるコンテンツが有害であったり不適切であったりしないか監視・フィルタリングすること", "isCorrect": true },
      { "text": "ユーザーの入力プロンプトを自動的に改善すること", "isCorrect": false }
    ],
    "explanation": "「Moderation」は、AIによって生成されるコンテンツやユーザーからの入力が、ヘイトスピーチ、暴力的な表現、不適切な内容などを含まないように監視し、フィルタリングするプロセスです。安全なAI利用のために重要です。"
  },
  // quizData.js に追加
// (IDはご自身の環境に合わせて調整してください)
  {
    "id": 14,
    "term": "Client library",
    "question": "APIを利用する際の「Client library」とは主に何を提供しますか？",
    "choices": [
      { "text": "APIサーバー側の処理ロジックそのもの", "isCorrect": false },
      { "text": "APIの利用規約やドキュメントをまとめたもの", "isCorrect": false },
      { "text": "特定のプログラミング言語でAPIを簡単に呼び出すための関数やクラスのセット", "isCorrect": true },
      { "text": "APIの利用状況を監視するダッシュボード", "isCorrect": false }
    ],
    "explanation": "「Client library」は、開発者が特定のプログラミング言語（Python, Node.jsなど）でAPIを容易に利用できるように、事前に用意されたコードの集まりです。複雑なリクエスト作成や認証処理を簡略化します。"
  },
  {
    "id": 15,
    "term": "Rate limit",
    "question": "APIにおける「Rate limit（レート制限）」とは何ですか？",
    "choices": [
      { "text": "APIの応答速度の上限", "isCorrect": false },
      { "text": "APIを利用できるユーザー数の上限", "isCorrect": false },
      { "text": "APIキー1つあたりで送信できるデータ量の制限", "isCorrect": false },
      { "text": "一定時間内にAPIを呼び出せる回数の上限", "isCorrect": true }
    ],
    "explanation": "「Rate limit」は、APIの安定運用や不正利用を防ぐために、特定の時間枠（例: 1分間）に特定のAPIキーから受け付けるリクエストの回数に設けられた上限です。"
  },
  {
    "id": 16,
    "term": "Learning rate",
    "question": "機械学習モデルの訓練パラメータ「Learning rate（学習率）」は何を調整しますか？",
    "choices": [
      { "text": "モデルが一度に学習するデータ量（バッチサイズ）", "isCorrect": false },
      { "text": "訓練データ全体を何回繰り返して学習するか（エポック数）", "isCorrect": false },
      { "text": "モデルの重みを更新する際のステップの大きさ", "isCorrect": true },
      { "text": "モデルの訓練にかかる合計時間", "isCorrect": false }
    ],
    "explanation": "「Learning rate（学習率）」は、モデルが訓練データから学習する際に、損失関数の値を小さくするためにモデルのパラメータ（重み）をどれくらいの幅で更新するかを決定するハイパーパラメータです。"
  },
  {
    "id": 17,
    "term": "Validation (set)",
    "question": "機械学習における「Validation set（検証セット）」の主な用途は何ですか？",
    "choices": [
      { "text": "モデルの最終的な性能を評価するために使用する、完全に未知のデータ", "isCorrect": false },
      { "text": "モデルの訓練中に、ハイパーパラメータの調整や過学習の監視を行うために使用するデータ", "isCorrect": true },
      { "text": "モデルを実際に訓練するために使用する主要なデータ", "isCorrect": false },
      { "text": "モデルの訓練前に、データの品質を確認するために使用する少量のデータ", "isCorrect": false }
    ],
    "explanation": "「Validation set（検証セット）」は、訓練データで学習したモデルの性能を訓練中に評価し、学習率やエポック数などのハイパーパラメータを調整したり、過学習が起きていないかを確認したりするために使われます。訓練データとは別に用意されます。"
  },
  {
    "id": 18,
    "term": "Sexually explicit",
    "question": "AIの安全性設定における「Sexually explicit」コンテンツとは何を指しますか？",
    "choices": [
      { "text": "性別に関する統計情報や研究データ", "isCorrect": false },
      { "text": "恋愛や人間関係に関する一般的な話題", "isCorrect": false },
      { "text": "露骨な性的描写や性的な行為を詳細に記述するコンテンツ", "isCorrect": true },
      { "text": "性教育に関する学術的な資料", "isCorrect": false }
    ],
    "explanation": "「Sexually explicit」は、AIが生成するコンテンツの安全カテゴリの一つで、露骨な性的表現、ポルノグラフィ、または性的な行為を不適切に詳細に描写するものを指し、通常はブロックまたはフィルタリングの対象となります。"
  },
  {
    "id": 19,
    "term": "Deployment",
    "question": "ソフトウェア開発における「Deployment（デプロイ）」とはどのようなプロセスですか？",
    "choices": [
      { "text": "ソフトウェアの設計図を作成するプロセス", "isCorrect": false },
      { "text": "ソフトウェアのバグを見つけて修正するプロセス", "isCorrect": false },
      { "text": "開発・テストが完了したソフトウェアを、実際にユーザーが利用できる本番環境や特定の環境へ配置・展開すること", "isCorrect": true },
      { "text": "ソフトウェアの新しいバージョンを計画するプロセス", "isCorrect": false }
    ],
    "explanation": "「Deployment（デプロイ）」は、開発されたアプリケーションやAIモデルなどを、テスト環境からステージング環境や本番環境（ユーザーが実際にアクセスする環境）へ移行し、利用可能な状態にする一連の作業を指します。"
  },
  {
    "id": 20,
    "term": "Version control",
    "question": "ソフトウェア開発で使われる「Version control（バージョン管理）」システムの主な目的は何ですか？",
    "choices": [
      { "text": "ソフトウェアのライセンスを管理すること", "isCorrect": false },
      { "text": "ファイルの変更履歴を記録・追跡し、特定の時点の状態に戻したり、複数人での共同作業を容易にしたりすること", "isCorrect": true },
      { "text": "ソフトウェアの実行速度を最適化すること", "isCorrect": false },
      { "text": "開発者の作業時間を記録・管理すること", "isCorrect": false }
    ],
    "explanation": "「Version control（バージョン管理）」システム（例: Git）は、ファイルやプロジェクトの変更履歴を保存し、過去のバージョンへの復元、変更点の比較、複数人での効率的な共同開発（ブランチやマージなど）を可能にするツールです。"
  },
  {
    "id": 21,
    "term": "Loading...",
    "question": "UI上で「Loading...」という表示が意味することは何ですか？",
    "choices": [
      { "text": "処理が完了し、結果が表示される直前であること", "isCorrect": false },
      { "text": "ユーザーからの次の入力を待っている状態であること", "isCorrect": false },
      { "text": "システムがデータやコンテンツを読み込んでいる最中であること", "isCorrect": true },
      { "text": "エラーが発生し、処理が中断されたこと", "isCorrect": false }
    ],
    "explanation": "「Loading...」は、アプリケーションやウェブページがデータやリソースを取得・処理している間、ユーザーに待機を促すために表示される一時的な状態を示すメッセージです。"
  },
  {
    "id": 22,
    "term": "Troubleshooting",
    "question": "ドキュメントやサポートにおける「Troubleshooting」とは何を指しますか？",
    "choices": [
      { "text": "新しい機能の使い方を学ぶための手順", "isCorrect": false },
      { "text": "製品に関するよくある質問とその回答集 (FAQ)", "isCorrect": false },
      { "text": "発生した問題の原因を特定し、それを解決するための手順や情報", "isCorrect": true },
      { "text": "製品の将来的な開発ロードマップ", "isCorrect": false }
    ],
    "explanation": "「Troubleshooting」は、システムやソフトウェアで発生した問題や不具合に対して、その原因を診断し、解決策を見つけ出して修正するプロセス、またはそのための情報やガイドを指します。"
  },
  {
    "id": 23,
    "term": "Semantic (search)",
    "question": "「Semantic search（セマンティック検索）」の特徴は何ですか？",
    "choices": [
      { "text": "入力されたキーワードと完全に一致する文字列だけを検索する", "isCorrect": false },
      { "text": "検索キーワードの文字数に基づいて検索結果を絞り込む", "isCorrect": false },
      { "text": "検索キーワードの単なる文字列一致ではなく、その言葉が持つ「意味」や文脈を理解して関連性の高い情報を検索する", "isCorrect": true },
      { "text": "検索結果を人気順や日付順に並べ替える機能", "isCorrect": false }
    ],
    "explanation": "「Semantic search（セマンティック検索）」は、キーワードの表面的な文字列だけでなく、その単語やフレーズが持つ意味、ユーザーの検索意図、文脈を理解し、より関連性の高い検索結果を提供する技術です。AI StudioのEmbeddings APIなどはこれに応用できます。"
  },
 // quizData.js に追加
// (IDはご自身の環境に合わせて調整してください)
  {
    "id": 24,
    "term": "Summarization",
    "question": "AIにおける「Summarization（要約）」タスクの主な目的は何ですか？",
    "choices": [
      { "text": "長い文章を複数の短い文章に分割すること", "isCorrect": false },
      { "text": "文章のスタイルやトーンを変換すること", "isCorrect": false },
      { "text": "長い文章や複数の文書から重要な情報を抽出し、簡潔な形でまとめること", "isCorrect": true },
      { "text": "文章中の誤字脱字を自動的に修正すること", "isCorrect": false }
    ],
    "explanation": "「Summarization（要約）」は、AIが大量のテキストデータ（記事、ドキュメント、会話など）を読み込み、その主要なポイントや結論を短く、分かりやすくまとめるタスクです。"
  },
  {
    "id": 25,
    "term": "Cloud (computing)",
    "question": "「Cloud computing（クラウドコンピューティング）」の基本的な概念は何ですか？",
    "choices": [
      { "text": "個人のコンピュータ内に全てのデータとソフトウェアを保存・実行すること", "isCorrect": false },
      { "text": "インターネット経由で、サーバー、ストレージ、データベース、ソフトウェアなどのITリソースをオンデマンドで利用すること", "isCorrect": true },
      { "text": "気象予報の計算を専門に行うスーパーコンピュータの利用", "isCorrect": false },
      { "text": "オフライン環境でのみ動作するスタンドアロンのアプリケーション", "isCorrect": false }
    ],
    "explanation": "「Cloud computing」は、物理的なサーバーやストレージを自前で所有・管理する代わりに、インターネットを通じて必要な時に必要な分だけITリソースを利用できるサービスモデルです。Google AI Studioもクラウドベースのサービスです。"
  },
  {
    "id": 26,
    "term": "IAM (Identity and Access Management)",
    "question": "クラウドサービスにおける「IAM」の主な役割は何ですか？",
    "choices": [
      { "text": "クラウドサービスの利用料金を計算し請求すること", "isCorrect": false },
      { "text": "ユーザーやサービスがどのリソースにどのような権限でアクセスできるかを管理・制御すること", "isCorrect": true },
      { "text": "クラウド上のデータを自動的にバックアップすること", "isCorrect": false },
      { "text": "クラウドサービスのパフォーマンスを監視し、最適化すること", "isCorrect": false }
    ],
    "explanation": "「IAM (Identity and Access Management)」は、クラウド環境において「誰が (Identity)」「何に (Resource)」「何をする権限を持つか (Access)」を定義し、管理するための仕組みです。セキュリティの基本となります。"
  },
  {
    "id": 27,
    "term": "Overview",
    "question": "UIやドキュメントにおける「Overview」セクションの主な目的は何ですか？",
    "choices": [
      { "text": "特定の機能に関する詳細な技術仕様を提供すること", "isCorrect": false },
      { "text": "製品や機能の全体像や主要なポイントを簡潔にまとめたものを提供すること", "isCorrect": true },
      { "text": "発生しうるエラーとその解決策の一覧を提供すること", "isCorrect": false },
      { "text": "ユーザーからのフィードバックを収集するためのフォームを提供すること", "isCorrect": false }
    ],
    "explanation": "「Overview」は、製品、サービス、機能、ドキュメントなどの主題について、その全体像、主な目的、主要な構成要素などを手早く理解できるように、要点をまとめた導入部分や概要説明です。"
  },
  {
    "id": 28,
    "term": "Advanced (settings)",
    "question": "ソフトウェアのUIにおける「Advanced settings（詳細設定）」とは通常どのようなものですか？",
    "choices": [
      { "text": "初心者が最初に設定すべき基本的な項目", "isCorrect": false },
      { "text": "より細かく専門的なカスタマイズや、特定のニーズに対応するための設定項目", "isCorrect": true },
      { "text": "ソフトウェアの見た目やテーマを変更する設定", "isCorrect": false },
      { "text": "ソフトウェアの利用規約やプライバシーポリシー", "isCorrect": false }
    ],
    "explanation": "「Advanced settings」は、標準的な設定ではカバーしきれない、より高度な制御や微調整を可能にするためのオプション項目群です。専門知識が必要な場合や、特定の使用状況でのみ変更が推奨されることが多いです。"
  },
  {
    "id": 29,
    "term": "Dropdown",
    "question": "UI要素の「Dropdown（ドロップダウン）」とはどのようなものですか？",
    "choices": [
      { "text": "オンとオフを切り替えるスイッチ", "isCorrect": false },
      { "text": "クリックすると複数の選択肢リストが表示され、その中から一つを選ぶ形式のメニュー", "isCorrect": true },
      { "text": "複数の項目から任意の数を選択できるチェックボックスの集まり", "isCorrect": false },
      { "text": "自由なテキストを入力できるフィールド", "isCorrect": false }
    ],
    "explanation": "「Dropdown」リストは、通常は選択されている項目のみが表示され、クリックやタップすることで隠れていた選択肢の一覧が下に展開（ドロップダウン）し、そこから一つを選択する形式のUIコンポーネントです。"
  },
  {
    "id": 30,
    "term": "Slider",
    "question": "UIにおける「Slider（スライダー）」の主な用途は何ですか？",
    "choices": [
      { "text": "長いテキストをスクロールして表示するため", "isCorrect": false },
      { "text": "特定の範囲内の連続的な値を、つまみを左右または上下に動かして直感的に選択・調整するため", "isCorrect": true },
      { "text": "複数の画像やコンテンツを順番に切り替えて表示するため", "isCorrect": false },
      { "text": "ファイルをアップロードする際の進捗状況を表示するため", "isCorrect": false }
    ],
    "explanation": "「Slider」は、音量調整、明るさ調整、数値範囲の指定（例: AI StudioのTemperature設定）など、定義された範囲内の値をユーザーが視覚的かつ直感的に選択できるようにするためのUIコントロールです。"
  },
  {
    "id": 31,
    "term": "Prefix (prompting)",
    "question": "プロンプトエンジニアリングにおける「Prefix（プレフィックス）」とは何を指しますか？",
    "choices": [
      { "text": "AIモデルが生成した応答の末尾に追加される定型文", "isCorrect": false },
      { "text": "ユーザーが入力する主要な指示や質問の前に置かれ、AIの応答の文脈や役割を設定するテキスト", "isCorrect": true },
      { "text": "AIモデルが参照する外部知識データベースの識別子", "isCorrect": false },
      { "text": "プロンプトの文字数制限を超える部分", "isCorrect": false }
    ],
    "explanation": "プロンプトにおける「Prefix」は、ユーザーの具体的な質問や指示の前に挿入されるテキストで、AIに特定の役割（例: 「あなたは親切なアシスタントです」）を与えたり、応答のトーンや形式を指定したりするのに使われます。"
  },
  {
    "id": 32,
    "term": "Role-playing (AI)",
    "question": "AIプロンプトにおける「Role-playing（ロールプレイング）」とは何をさせることですか？",
    "choices": [
      { "text": "AIに複数の異なるタスクを同時に処理させること", "isCorrect": false },
      { "text": "AIに特定のキャラクターや専門家などの役割を演じさせ、その役割に沿った応答を生成させること", "isCorrect": true },
      { "text": "AIの応答のランダム性を高めること", "isCorrect": false },
      { "text": "AIに過去の対話履歴を忘れさせること", "isCorrect": false }
    ],
    "explanation": "AIにおける「Role-playing」は、プロンプトを通じてAIに特定の人物、職業、キャラクターになりきらせる手法です。これにより、特定の視点や知識に基づいた、より状況に適した応答を引き出すことができます。"
  },
  {
    "id": 33,
    "term": "Iterate / Iteration",
    "question": "AI開発やプロンプトエンジニアリングにおける「Iteration（反復）」とは何を意味しますか？",
    "choices": [
      { "text": "一度で完璧な結果を出すこと", "isCorrect": false },
      { "text": "試行錯誤を繰り返しながら、少しずつ改善を重ねていくプロセス", "isCorrect": true },
      { "text": "複数のAIモデルを同時に実行すること", "isCorrect": false },
      { "text": "完成したAIモデルを公開すること", "isCorrect": false }
    ],
    "explanation": "「Iteration（反復）」は、AI開発やプロンプト作成において、小さな変更とテストを繰り返し行い、その結果を評価してさらに改善を加えていく、段階的な開発・改善プロセスのことです。"
  },
  {
    "id": 34,
    "term": "Grounding (AI)",
    "question": "AIモデルの応答における「Grounding（グラウンディング）」とは主に何を意味しますか？",
    "choices": [
      { "text": "AIモデルの応答速度を低下させること", "isCorrect": false },
      { "text": "AIモデルが生成する応答を、特定の信頼できる情報源や事実に即したものにすること", "isCorrect": true },
      { "text": "AIモデルに倫理的な判断基準を埋め込むこと", "isCorrect": false },
      { "text": "AIモデルの学習データを初期化すること", "isCorrect": false }
    ],
    "explanation": "AIにおける「Grounding」は、モデルが生成する情報が事実に基づいていること、または特定の提供されたドキュメントやデータソースに準拠していることを保証するプロセスや技術を指します。ハルシネーション（もっともらしい嘘）を抑制するのに役立ちます。"
  },
  {
    "id": 35,
    "term": "JSON (JavaScript Object Notation)",
    "question": "「JSON」とは何ですか？",
    "choices": [
      { "text": "AIモデルを訓練するためのプログラミング言語", "isCorrect": false },
      { "text": "軽量なデータ交換フォーマットで、人間にも読みやすく、機械にも解析しやすい構造を持つ", "isCorrect": true },
      { "text": "ウェブページの見た目を定義するためのスタイルシート言語", "isCorrect": false },
      { "text": "AIが生成する画像ファイルの形式の一つ", "isCorrect": false }
    ],
    "explanation": "「JSON (JavaScript Object Notation)」は、キーと値のペアを基本とする、シンプルで軽量なデータ記述形式です。API間のデータ交換や設定ファイルの記述など、ウェブ開発や多くのプログラミング分野で広く利用されています。"
  }
  // ... さらに時間があれば追加します。
  // ... さらに多くのクイズをここに追加 ...
  // ... 残りのクイズデータ ...
];

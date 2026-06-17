// ============================================================
//  1. 题库数据（20题）
// ============================================================
const questions = [
    {
        id: 1,
        text: '朋友聚会里，你通常是：',
        options: [
            'A. 主动带动气氛的人',
            'B. 安静观察大家的人',
            'C. 认真照顾每个人感受的人',
            'D. 时不时说一句让全场惊艳的话的人'
        ]
    },
    {
        id: 2,
        text: '如果陌生人第一次见到你，最可能觉得你：',
        options: [
            'A. 很有存在感',
            'B. 有点神秘',
            'C. 很好相处',
            'D. 好像很有故事'
        ]
    },
    {
        id: 3,
        text: '深夜收到好友消息："我真的很难受。" 你第一反应：',
        options: [
            'A. 帮他想解决方案',
            'B. 先了解发生了什么',
            'C. 陪他说很久',
            'D. 分享自己的类似经历'
        ]
    },
    {
        id: 4,
        text: '如果你拥有一种超能力，你会选：',
        options: [
            'A. 控制时间',
            'B. 读懂人心',
            'C. 治愈别人',
            'D. 预见未来'
        ]
    },
    {
        id: 5,
        text: '别人夸你时，你通常：',
        options: [
            'A. 开心接受',
            'B. 表面淡定',
            'C. 觉得不好意思',
            'D. 怀疑对方是不是没说全'
        ]
    },
    {
        id: 6,
        text: '假如突然中了1000万：',
        options: [
            'A. 马上规划人生',
            'B. 消失一段时间',
            'C. 给家人安排好一切',
            'D. 去完成梦想清单'
        ]
    },
    {
        id: 7,
        text: '你更喜欢：',
        options: [
            'A. 热闹的人群',
            'B. 深夜独处',
            'C. 小范围聚会',
            'D. 说走就走的冒险'
        ]
    },
    {
        id: 8,
        text: '朋友最常向你寻求：',
        options: [
            'A. 建议',
            'B. 理解',
            'C. 安慰',
            'D. 灵感'
        ]
    },
    {
        id: 9,
        text: '你觉得最吸引人的品质：',
        options: [
            'A. 能力',
            'B. 神秘感',
            'C. 温柔',
            'D. 独特'
        ]
    },
    {
        id: 10,
        text: '当别人误解你时：',
        options: [
            'A. 解释清楚',
            'B. 懒得解释',
            'C. 会难过',
            'D. 觉得有趣'
        ]
    },
    {
        id: 11,
        text: '如果你是一种天气：',
        options: [
            'A. 晴天',
            'B. 雾天',
            'C. 春雨',
            'D. 雷暴'
        ]
    },
    {
        id: 12,
        text: '突然被表白时：',
        options: [
            'A. 直接回应',
            'B. 先观察对方',
            'C. 先考虑感情',
            'D. 好奇对方为什么喜欢自己'
        ]
    },
    {
        id: 13,
        text: '别人最容易记住你的：',
        options: [
            'A. 气场',
            'B. 眼神',
            'C. 温度',
            'D. 个性'
        ]
    },
    {
        id: 14,
        text: '假如穿越到陌生城市：',
        options: [
            'A. 迅速融入',
            'B. 到处探索',
            'C. 结识当地人',
            'D. 寻找隐藏角落'
        ]
    },
    {
        id: 15,
        text: '你最怕别人觉得你：',
        options: [
            'A. 没能力',
            'B. 太普通',
            'C. 不真诚',
            'D. 没有灵魂'
        ]
    },
    {
        id: 16,
        text: '如果你开一家店：',
        options: [
            'A. 酒吧',
            'B. 书店',
            'C. 咖啡馆',
            'D. 古怪收藏馆'
        ]
    },
    {
        id: 17,
        text: '哪句话更像你？',
        options: [
            'A. "交给我吧。"',
            'B. "我想再看看。"',
            'C. "你还好吗？"',
            'D. "有意思。"'
        ]
    },
    {
        id: 18,
        text: '别人突然不回消息：',
        options: [
            'A. 继续忙自己的',
            'B. 猜测原因',
            'C. 担心对方出事',
            'D. 觉得无所谓'
        ]
    },
    {
        id: 19,
        text: '如果人生是一部电影：',
        options: [
            'A. 热血成长片',
            'B. 悬疑片',
            'C. 治愈片',
            'D. 奇幻冒险片'
        ]
    },
    {
        id: 20,
        text: '如果只能留下一个标签：',
        options: [
            'A. 强大',
            'B. 深刻',
            'C. 温暖',
            'D. 特别'
        ]
    }
];

// ============================================================
//  2. 结果配置
// ============================================================
const resultTypes = {
    A: {
        title: '领导者磁场',
        badge: '🌟 领导者磁场',
        description: '别人记住你的原因：气场。你给人的感觉是可靠、有主见、有掌控力。很多人未必天天联系你，但遇到重要事情时，第一个想到的人往往是你。',
        tagline: '“和你待在一起，会觉得未来有方向。”'
    },
    B: {
        title: '神秘吸引型',
        badge: '🔮 神秘吸引型',
        description: '别人记住你的原因：猜不透。你不是最活跃的人，却总能让人反复回想。别人觉得自己已经了解你了，却总发现新的层面。',
        tagline: '“你像一本永远翻不完的书。”'
    },
    C: {
        title: '灵魂共鸣型',
        badge: '💗 灵魂共鸣型',
        description: '别人记住你的原因：被理解的感觉。你最大的魅力不是外表，而是让别人觉得：“终于有人懂我。”很多人会在离开你之后，才意识到你的珍贵。',
        tagline: '“你的温柔具有长期后劲。”'
    },
    D: {
        title: '危险魅力型',
        badge: '🔥 危险魅力型',
        description: '别人记住你的原因：不可复制。你身上有强烈的个人色彩。有人特别喜欢你，也有人完全看不懂你。但无论如何，很难忘记你。',
        tagline: '“你不一定适合所有人，但一定让人印象深刻。”'
    }
};

// 组合彩蛋配置（当两个字母数量接近时触发）
const comboResults = [
    {
        condition: (counts) => Math.abs(counts.A - counts.B) <= 1,
        title: '王者迷雾型',
        badge: '👑 王者迷雾型',
        description: '既有领导力，又有神秘感。最容易成为别人心中的“白月光”。',
        tagline: '“你兼具力量与深邃，让人无法轻易定义。”'
    },
    {
        condition: (counts) => Math.abs(counts.B - counts.D) <= 1,
        title: '致命吸引型',
        badge: '⚡ 致命吸引型',
        description: '最容易让别人产生：“明知道危险，还是忍不住靠近。”',
        tagline: '“你的魅力带着禁忌的诱惑。”'
    },
    {
        condition: (counts) => Math.abs(counts.C - counts.D) <= 1,
        title: '反差魅力型',
        badge: '🌀 反差魅力型',
        description: '外表和内心反差极大。往往最容易让人上头。',
        tagline: '“你像谜一样，越了解越着迷。”'
    },
    {
        condition: (counts) => Math.abs(counts.A - counts.C) <= 1,
        title: '守护者型',
        badge: '🛡️ 守护者型',
        description: '既有力量感，又有温暖感。最容易成为别人生命里的重要角色。',
        tagline: '“你是别人心中最安心的存在。”'
    }
];

// ============================================================
//  3. 应用状态
// ============================================================
const state = {
    currentQuestionIndex: 0,
    answers: {}, // { questionId: 'A'|'B'|'C'|'D' }
    totalQuestions: questions.length
};

// ============================================================
//  4. DOM 引用
// ============================================================
const introScreen = document.getElementById('intro-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const progressFill = document.getElementById('progressFill');
const questionCounter = document.getElementById('questionCounter');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const resultTitle = document.getElementById('resultTitle');
const resultBadge = document.getElementById('resultBadge');
const resultDesc = document.getElementById('resultDesc');
const resultTagline = document.getElementById('resultTagline');
const appContainer = document.getElementById('appContainer');

// ============================================================
//  5. 颜色主题循环（淡蓝、淡紫、淡粉）
// ============================================================
const themes = ['theme-blue', 'theme-purple', 'theme-pink'];

function setTheme(index) {
    appContainer.classList.remove('theme-blue', 'theme-purple', 'theme-pink');
    const themeClass = themes[index % themes.length];
    appContainer.classList.add(themeClass);
}

// ============================================================
//  6. 核心函数
// ============================================================

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function startTest() {
    state.currentQuestionIndex = 0;
    state.answers = {};
    showQuestion();
    showScreen('question-screen');
}

function showQuestion() {
    const qIndex = state.currentQuestionIndex;
    const question = questions[qIndex];
    const total = state.totalQuestions;

    // 进度
    const progress = ((qIndex + 1) / total) * 100;
    progressFill.style.width = progress + '%';
    questionCounter.textContent = `${qIndex + 1} / ${total}`;

    questionText.textContent = question.text;
    optionsContainer.innerHTML = '';

    question.options.forEach((optText) => {
        const letter = optText.charAt(0);
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = optText;
        div.dataset.letter = letter;

        if (state.answers[question.id] === letter) {
            div.classList.add('selected');
        }

        div.addEventListener('click', () => {
            selectOption(question.id, letter);
        });

        optionsContainer.appendChild(div);
    });

    // 根据题目索引切换主题
    setTheme(qIndex);

    const selected = state.answers[question.id];
    nextBtn.disabled = (selected === undefined);
}

function selectOption(questionId, letter) {
    state.answers[questionId] = letter;

    const options = optionsContainer.querySelectorAll('.option');
    options.forEach(opt => {
        const optLetter = opt.dataset.letter;
        if (optLetter === letter) {
            opt.classList.add('selected');
        } else {
            opt.classList.remove('selected');
        }
    });

    nextBtn.disabled = false;
}

function nextQuestion() {
    const qIndex = state.currentQuestionIndex;
    const total = state.totalQuestions;

    if (qIndex + 1 < total) {
        state.currentQuestionIndex++;
        showQuestion();
    } else {
        showResult();
    }
}

function calculateResult() {
    const counts = { A: 0, B: 0, C: 0, D: 0 };

    Object.values(state.answers).forEach(letter => {
        if (counts.hasOwnProperty(letter)) {
            counts[letter]++;
        }
    });

    // 检查组合彩蛋
    for (let combo of comboResults) {
        if (combo.condition(counts)) {
            return { type: 'combo', ...combo };
        }
    }

    // 主类型
    let maxCount = 0;
    let maxLetter = 'A';
    for (let [letter, count] of Object.entries(counts)) {
        if (count > maxCount) {
            maxCount = count;
            maxLetter = letter;
        }
    }

    const result = resultTypes[maxLetter];
    return { type: 'main', ...result };
}

function showResult() {
    const result = calculateResult();

    resultTitle.textContent = result.title;
    resultBadge.textContent = result.badge || result.title;
    resultDesc.textContent = result.description;
    resultTagline.textContent = result.tagline || '';

    // 结果页固定紫色主题
    appContainer.classList.remove('theme-blue', 'theme-purple', 'theme-pink');
    appContainer.classList.add('theme-purple');

    showScreen('result-screen');
}

function restartTest() {
    state.answers = {};
    state.currentQuestionIndex = 0;
    setTheme(0);
    showScreen('intro-screen');
}

// ============================================================
//  7. 事件绑定
// ============================================================
startBtn.addEventListener('click', startTest);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartTest);

// ============================================================
//  8. 初始化
// ============================================================
appContainer.classList.add('theme-purple');
showScreen('intro-screen');
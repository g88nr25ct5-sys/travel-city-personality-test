// 测试题目数据（占位内容，以后只改这里即可换成真正的题目）
const questions = [

    {
        id: "q1",
        text: "你刚到一座从没来过的城市。\n\n行李还没放下，天色已经开始变暗。\n\n如果现在还有两个小时，你会怎么安排？",
        answers: [
            {
                id: "a",
                text: "看到哪家店亮着灯就进去看看。"
            },
            {
                id: "b",
                text: "找个靠窗的位置坐下来，看看天慢慢变暗。"
            },
            {
                id: "c",
                text: "先去看看这座城市最有代表性的老建筑。"
            },
            {
                id: "d",
                text: "顺着街边的灯光走走，看看前面还有什么。"
            }
        ]
    },

    {
        id: "q2",
        text: "如果旅行可以多送给你三个小时，不能带走任何东西，只能用来“感受”。\n\n你会把它留给：",
        answers: [
            {
                id: "a",
                text: "一座老建筑，或者一个值得慢慢看的展览。"
            },
            {
                id: "b",
                text: "一段没有安排好的路程，看看它会把你带到哪里。"
            },
            {
                id: "c",
                text: "一顿慢慢吃的当地饭，顺便看看周围的人。"
            },
            {
                id: "d",
                text: "海边、湖边或者山里的一个下午。"
            }
        ]
    },

    {
        id: "q3",
        text: "如果只留四张旅行照片，你更想留下哪一张？",
        answers: [
            {
                id: "a",
                text: "山海之间的风景"
            },
            {
                id: "b",
                text: "转角处意外撞见的风景"
            },
            {
                id: "c",
                text: "街边亮起的灯"
            },
            {
                id: "d",
                text: "一扇有年代的门"
            }
        ]
    },

    {
        id: "q4",
        text: "你提前订好的餐厅临时关门了。\n\n站在陌生街头，你会：",
        answers: [
            {
                id: "a",
                text: "看到顺眼的店就进去。"
            },
            {
                id: "b",
                text: "看哪家店门口坐着最多当地人，跟着进去。"
            },
            {
                id: "c",
                text: "算了，慢慢走走，看到什么再决定。"
            },
            {
                id: "d",
                text: "顺便看看附近有没有老字号或有故事的店。"
            }
        ]
    },

    {
        id: "q5",
        text: "如果可以自己选住处，你更想住在：",
        answers: [
            {
                id: "a",
                text: "老城区"
            },
            {
                id: "b",
                text: "偏僻民宿"
            },
            {
                id: "c",
                text: "生活街区"
            },
            {
                id: "d",
                text: "海边酒店"
            }
        ]
    },

    {
        id: "q6",
        text: "如果一座城市可以留下一种声音，\n\n你希望它留下的是：",
        answers: [
            {
                id: "a",
                text: "风吹过树梢和水面的声音。"
            },
            {
                id: "b",
                text: "夜市里锅铲碰撞的声音。"
            },
            {
                id: "c",
                text: "街边的叫卖声，和人们用不同口音聊天的声音。"
            },
            {
                id: "d",
                text: "老建筑里钟声、脚步和回响的声音。"
            }
        ]
    },

    {
        id: "q7",
        text: "出发前，你通常把攻略看到哪一步？",
        answers: [
            {
                id: "a",
                text: "做好时间表"
            },
            {
                id: "b",
                text: "看个大概"
            },
            {
                id: "c",
                text: "记下想去的地方"
            },
            {
                id: "d",
                text: "到了再说"
            }
        ]
    },

    {
        id: "q8",
        text: "如果旅行杂志出了下面几篇文章，你最想点开哪一篇？",
        answers: [
            {
                id: "a",
                text: "《藏在街巷里的十家小店》"
            },
            {
                id: "b",
                text: "《沿着海岸线，慢慢走一天》"
            },
            {
                id: "c",
                text: "《这条路，最后会走到哪里？》"
            },
            {
                id: "d",
                text: "《一座老城，留下了什么》"
            }
        ]
    },

    {
        id: "q9",
        text: "如果朋友评价你的旅行方式，你更希望他最后说：",
        answers: [
            {
                id: "a",
                text: "“你每次旅行回来，好像都会多知道一点东西。”"
            },
            {
                id: "b",
                text: "“跟你走一下午，居然能发现这么多有意思的小地方。”"
            },
            {
                id: "c",
                text: "“你真的很会挑地方，待着就觉得很舒服。”"
            },
            {
                id: "d",
                text: "“你总能找到一些攻略里没怎么写的地方。”"
            }
        ]
    },

    {
        id: "q10",
        text: "如果旅行结束的时候，你只能留下一样东西，\n\n你希望它是什么？",
        answers: [
            {
                id: "a",
                text: "一个只有在这里才会遇见的小物件。"
            },
            {
                id: "b",
                text: "一段让自己安静下来的风景。"
            },
            {
                id: "c",
                text: "一张在街边随手拍下的照片。"
            },
            {
                id: "d",
                text: "一本和这座城市有关的小书。"
            }
        ]
    },

    {
        id: "q11",
        text: "旅行结束前，你最舍不得错过：",
        answers: [
            {
                id: "a",
                text: "再看一眼风景"
            },
            {
                id: "b",
                text: "再走一次老街"
            },
            {
                id: "c",
                text: "再吃一顿喜欢的东西"
            },
            {
                id: "d",
                text: "再往前走一段"
            }
        ]
    }

];


// ========================================
// 2. 评分规则
//
// S = 街巷烟火型
// R = 山海松弛型
// H = 历史审美型
// E = 异域探索型
// ========================================

const scoring = {

    q1: {
        a: { S: 2, E: 1 },
        b: { R: 2 },
        c: { H: 2 },
        d: { R: 1, E: 2 }
    },

    q2: {
        a: { H: 2 },
        b: { R: 1, E: 2 },
        c: { S: 2 },
        d: { R: 2 }
    },

    q3: {
        a: { R: 2 },
        b: { E: 2 },
        c: { S: 2 },
        d: { H: 2 }
    },

    q4: {
        a: { E: 2 },
        b: { S: 2, E: 1 },
        c: { R: 2, E: 1 },
        d: { H: 2 }
    },

    q5: {
        a: { H: 2 },
        b: { R: 1, E: 2 },
        c: { S: 2 },
        d: { R: 2 }
    },

    q6: {
        a: { R: 2 },
        b: { S: 2 },
        c: { S: 2, E: 1 },
        d: { H: 2 }
    },

    q7: {
        a: { E: 1 },
        b: { H: 1 },
        c: { R: 1 },
        d: { S: 1 }
    },

    q8: {
        a: { S: 2 },
        b: { R: 2 },
        c: { E: 2 },
        d: { H: 2 }
    },

    q9: {
        a: { H: 2 },
        b: { S: 2, E: 1 },
        c: { R: 2 },
        d: { E: 2 }
    },

    q10: {
        a: { E: 2 },
        b: { R: 2 },
        c: { S: 2 },
        d: { H: 2 }
    },

    q11: {
        a: { R: 2 },
        b: { H: 2 },
        c: { S: 2 },
        d: { E: 2 }
    }

};


// ========================================
// 3. 四种人格的结果信息
// ========================================

const personalities = {

    S: {
        name: "街巷烟火型",
        short: "你旅行时，总想看看一座城市真正生活的样子。",
        description: "你对城市最着迷的，往往不是那些被写进攻略里的景点，而是拐进一条小巷之后遇见的早餐铺、路边亮起的灯，还有人们再普通不过的日常。你喜欢没有明确目的地的散步，也愿意为了一个突然感兴趣的小店改变原本的路线。对你来说，旅行的意义，是短暂地成为一座城市的“路人”，看看这里的人怎样生活。",
        keywords: "街巷 / 烟火 / 美食 / 漫游 / 人情",
    
        cities: [
            {
                name: "成都",
                image: "assets/cities/chengdu.jpg",
                landmark: "安顺廊桥",
                note: "成都把“好好过日子”写进了城市的每个角落。你在这里不用赶路，随便拐进一条巷子，茶铺、串串和小面馆就够消磨一整个下午。",
                landmarkNote: "横跨锦江的仿古廊桥，也是成都夜景的标志。晚上桥身亮起灯火，河面把光揉成一片，站在桥头就能看见这座城市最松弛、也最热闹的一面。"
            },
            {
                name: "泉州",
                image: "assets/cities/quanzhou.jpg",
                landmark: "开元寺东西塔",
                note: "泉州像是被时间慢慢泡过的一座城。街边一炷香、一碗面线糊、几句听不懂的闽南话，都让人觉得日子本来就是这样，你会很自然地放慢脚步。",
                landmarkNote: "泉州最醒目的地标。两座宋代石塔一东一西立在老城屋顶之上，塔身刻满浮雕，八百多年没有挪过地方，抬头就能和整座古城对上一次眼神。"
            },
            {
                name: "潮州",
                image: "assets/cities/chaozhou.jpg",
                landmark: "广济桥",
                note: "潮州的味道是慢的：早茶、工夫茶、卤味，还有老街上一扇扇旧木门。你大概会为了一家毫不起眼的小店停下来，然后发现这才是旅行的重点。",
                landmarkNote: "中国四大古桥之一，横跨韩江。桥中间那段可以开合的浮桥已经修了八百年，桥上还立着一排亭台，傍晚走一趟，像走过半部潮州史。"
            }
        ]
    },

    R: {
        name: "山海松弛型",
        short: "你喜欢的旅行，不一定要去很多地方，而是终于有时间好好待在一个地方。",
        description: "你不太喜欢把旅行安排得密不透风。比起一天打卡十个景点，你更愿意沿着海边走很久，在风吹过来的时候停下来，或者找一家喜欢的小店坐一个下午。对你来说，旅行不是逃离日常后的短暂冲刺，而是让时间重新慢下来。山、海、湖泊和一段没有安排的午后，可能比一张满满当当的行程表更让你满足。",
        keywords: "山海 / 自然 / 留白 / 慢生活 / 松弛",
    
        cities: [
            {
                name: "大理",
                image: "assets/cities/dali.jpg",
                landmark: "崇圣寺三塔",
                note: "大理适合把行程表先放一边。风从苍山上吹下来，洱海在旁边亮着，你可以一整天什么正事都不做——旅行对你来说本来就不是任务。",
                landmarkNote: "一大两小三座塔，从唐代一直站到现在，是大理最经典的画面。背靠苍山、面朝洱海，站在塔前望出去，就是你一定会拍下的那张照片。"
            },
            {
                name: "威海",
                image: "assets/cities/weihai.jpg",
                landmark: "刘公岛",
                note: "威海有一种安静的开阔。海是灰蓝色的，风很干净，城市也不急。你大概会找一段海边慢慢走，一走就是一个下午。",
                landmarkNote: "威海湾口的一座小岛，也是北洋海军和甲午战争的历史现场。岛上有当年的海军公所和博物馆，隔着海回望，整座威海城就在对岸。"
            },
            {
                name: "建德",
                image: "assets/cities/jiande.jpg",
                landmark: "梅城古镇（严州古城）",
                note: "建德在新安江边，清晨常常起雾，江面白茫茫一片。这里没有非看不可的景点，只有一条江和一座安静的城，正好留出你想要的那点空白。",
                landmarkNote: "城墙已经立了一千多年，新安江从城下绕过。青砖、石板路、临江的旧宅和早晨的江雾，是很典型的江南样子。"
            }
        ]
    },

    H: {
        name: "历史审美型",
        short: "你喜欢一座城市留下来的东西，也喜欢慢慢找到它背后的故事。",
        description: "你可能会因为一扇旧门、一块斑驳的墙，或者一件还在被人使用的老手艺而停下脚步。相比“来过这里”，你更在意自己有没有真正看见这座城市曾经留下的痕迹。博物馆、老建筑、古街、手艺和城市故事，对你来说并不是需要完成的景点，而是一种阅读城市的方式。你旅行的时候，总喜欢多知道一点“为什么”。",
        keywords: "历史 / 建筑 / 手艺 / 故事 / 时间",
    
        cities: [
            {
                name: "西安",
                image: "assets/cities/xian.jpg",
                landmark: "西安钟楼",
                note: "西安几乎是把历史摊开给你看。你不会满足于“来过”，而是想知道这块砖、这扇门背后发生过什么——这正是你旅行时最享受的部分。",
                landmarkNote: "立在古城正中心，是西安最容易被认出来的建筑。明代建成，通高三十六米，夜里亮灯之后四面车流绕着它转，古今就这么叠在一起。"
            },
            {
                name: "景德镇",
                image: "assets/cities/jingdezhen.jpg",
                landmark: "御窑博物馆",
                note: "景德镇把“手艺”当成了日常。你会愿意看别人做一件东西做上一整天，也愿意为了一只有来历的碗多走几公里路。",
                landmarkNote: "建筑本身就是作品：八个拱形砖窑连成一片，半埋在地下，拿过国际建筑奖。旁边就是明清御窑厂遗址，脚下踩的正是当年的窑。"
            },
            {
                name: "大同",
                image: "assets/cities/datong.jpg",
                landmark: "悬空寺",
                note: "大同的看点从来不只是一片风景。你会被那些留下来的东西拉住：石窟、寺庙、城墙，然后忍不住去查它们当初为什么被修在这里。",
                landmarkNote: "建在恒山峭壁上的寺庙，四十多间殿阁靠横梁插进岩壁，撑了一千五百年。远看像贴在山腰上，是中国少有的“建筑即奇观”。"
            }
        ]
    },

    E: {
        name: "异域探索型",
        short: "你总会被那些“不太像日常”的地方吸引。",
        description: "越是陌生的地方，你越容易产生好奇。不同的语言、街道、食物、气味和生活方式，都可能成为你记住一座城市的理由。你不一定需要完全理解一个地方，反而喜欢先走进去看看。对你来说，旅行最有意思的时刻，往往是发现某个东西与你熟悉的生活完全不同，然后忍不住想继续往前走一点。",
        keywords: "陌生 / 色彩 / 文化 / 新鲜 / 探索",
    
        cities: [
            {
                name: "西双版纳",
                image: "assets/cities/xishuangbanna.jpg",
                landmark: "景真八角亭",
                note: "西双版纳和你熟悉的生活很不一样：语言、植物、屋顶的形状都不一样。你偏偏最喜欢这种“不一样”，越陌生越想往里多走几步。",
                landmarkNote: "傣族建筑的代表作。八角形的亭身层层向上收，每一面都有泥塑和彩绘，几百年来一直是当地人心里很神圣的地方。"
            },
            {
                name: "伊宁",
                image: "assets/cities/yining.jpg",
                landmark: "拜图拉清真寺",
                note: "伊宁的颜色和声音都很鲜明：蓝屋顶、烤包子的香气、街上说着不同语言的人。你对这种陌生的热闹几乎没有什么抵抗力。",
                landmarkNote: "伊宁老城最重要的地标，宣礼塔和穹顶远远就能看见。傍晚门前就是夜市，灯一亮，整条街都跟着活了起来。"
            },
            {
                name: "喀什",
                image: "assets/cities/kashi.jpg",
                landmark: "艾提尕尔清真寺",
                note: "喀什像是另一个时区。老城的巷子会把你绕迷路，但你一点也不着急——你本来就是冲着“不一样”才出发的。",
                landmarkNote: "喀什老城的中心，也是中国最大的清真寺之一。黄砖、拱门和大片白杨围出一块安静的广场，老城的每一天都从这里开始。"
            }
        ]
    }
};


// ========================================
// 4. 页面元素
// ========================================

const homeScreen = document.getElementById("home-screen");

const quizScreen = document.getElementById("quiz-screen");

const doneScreen = document.getElementById("done-screen");

const startBtn = document.getElementById("start-btn");

const nextBtn = document.getElementById("next-btn");

const questionText = document.getElementById("question-text");

const answersBox = document.getElementById("answers");

const quizProgress = document.getElementById("quiz-progress");

const quizProgressFill = document.getElementById("quiz-progress-fill");


// ========================================
// 5. 当前测试状态
// ========================================

let currentIndex = 0;

let selectedAnswerId = null;

const answersLog = [];


// ========================================
// 6. 当前四种人格分数
// ========================================

let scores = {
    S: 0,
    R: 0,
    H: 0,
    E: 0
};


// ========================================
// 7. 页面切换
// ========================================

function showScreen(screenName) {

    document.body.dataset.screen = screenName;

    homeScreen.classList.toggle(
        "is-hidden",
        screenName !== "home"
    );

    quizScreen.classList.toggle(
        "is-hidden",
        screenName !== "quiz"
    );

    doneScreen.classList.toggle(
        "is-hidden",
        screenName !== "done"
    );
}


// ========================================
// 8. 显示当前问题
// ========================================

function renderQuestion() {

    const question = questions[currentIndex];

    selectedAnswerId = null;

    nextBtn.disabled = true;

    quizProgress.textContent =
        "问题 " +
        (currentIndex + 1) +
        " / " +
        questions.length;

    if (quizProgressFill) {

        quizProgressFill.style.width =
            ((currentIndex + 1) / questions.length * 100) + "%";
    }

    questionText.textContent = question.text;

    answersBox.innerHTML = "";

    question.answers.forEach(function (answer) {

        const btn = document.createElement("button");

        btn.type = "button";

        btn.className = "answer-btn";

        btn.textContent = answer.text;

        btn.dataset.answerId = answer.id;

        btn.addEventListener("click", function () {

            selectAnswer(answer.id);

        });

        answersBox.appendChild(btn);

    });
}


// ========================================
// 9. 选择答案
// ========================================

function selectAnswer(answerId) {

    selectedAnswerId = answerId;

    nextBtn.disabled = false;

    const buttons =
        answersBox.querySelectorAll(".answer-btn");

    buttons.forEach(function (btn) {

        btn.classList.toggle(
            "is-selected",
            btn.dataset.answerId === answerId
        );

    });
}


// ========================================
// 10. 计算人格分数
// ========================================

function calculateScores() {

    scores = {
        S: 0,
        R: 0,
        H: 0,
        E: 0
    };

    answersLog.forEach(function (answer) {

        const questionScoring =
            scoring[answer.questionId];

        const answerScoring =
            questionScoring[answer.answerId];

        if (!answerScoring) {
            return;
        }

        Object.keys(answerScoring).forEach(function (type) {

            scores[type] += answerScoring[type];

        });

    });
}


// ========================================
// 11. 找到最高人格分数
// ========================================

function getResultType() {

    calculateScores();

    let resultType = "S";

    let highestScore = scores.S;

    Object.keys(scores).forEach(function (type) {

        if (scores[type] > highestScore) {

            highestScore = scores[type];

            resultType = type;

        }

    });

    return resultType;
}


// ========================================
// 12. 结果页的手绘装饰（全部是内联 SVG，没有额外图片文件）
// ========================================

const SVG_NS = "http://www.w3.org/2000/svg";


// 一条手绘虚线，用来代替生硬的分隔线
function createRouteDivider() {

    const svg = document.createElementNS(SVG_NS, "svg");

    svg.setAttribute("class", "route-divider");
    svg.setAttribute("viewBox", "0 0 640 60");
    svg.setAttribute("aria-hidden", "true");

    const path = document.createElementNS(SVG_NS, "path");

    path.setAttribute(
        "d",
        "M8 42 C40 20 70 20 96 34 C120 46 140 46 168 30 " +
        "C196 14 214 12 240 26 C266 40 286 40 312 24 " +
        "C338 8 358 8 384 22 C410 36 434 38 460 26 " +
        "C486 14 512 12 540 24 C560 33 580 34 604 26"
    );

    svg.appendChild(path);

    const start = document.createElementNS(SVG_NS, "circle");

    start.setAttribute("cx", "8");
    start.setAttribute("cy", "42");
    start.setAttribute("r", "4");

    svg.appendChild(start);

    return svg;
}


// 小指南针，放在图片来源那一行
function createCompass() {

    const svg = document.createElementNS(SVG_NS, "svg");

    svg.setAttribute("class", "mini-compass");
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.setAttribute("aria-hidden", "true");

    const shapes = [
        ["circle", {
            cx: "50",
            cy: "52",
            r: "36",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "7"
        }],
        ["path", {
            d: "M50 26 L58 52 L50 78 L42 52 Z",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "7",
            "stroke-linejoin": "round"
        }],
        ["path", {
            d: "M50 26 L58 52 L42 52 Z",
            fill: "#b06a4a"
        }],
        ["circle", {
            cx: "50",
            cy: "52",
            r: "9",
            fill: "currentColor"
        }]
    ];

    shapes.forEach(function (shape) {

        const el = document.createElementNS(SVG_NS, shape[0]);

        Object.keys(shape[1]).forEach(function (key) {
            el.setAttribute(key, shape[1][key]);
        });

        svg.appendChild(el);
    });

    return svg;
}


// 小星点
function createSparkle(className) {

    const svg = document.createElementNS(SVG_NS, "svg");

    svg.setAttribute("class", "result-sparkle " + className);
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");

    const path = document.createElementNS(SVG_NS, "path");

    path.setAttribute(
        "d",
        "M12 2 C13 8 16 11 22 12 C16 13 13 16 12 22 " +
        "C11 16 8 13 2 12 C8 11 11 8 12 2 Z"
    );

    svg.appendChild(path);

    return svg;
}

// ========================================
// 13. 完成测试
// ========================================

function finishTest() {

    const resultType = getResultType();
    const result = personalities[resultType];

    console.log("最终分数：", scores);
    console.log("最终人格：", resultType);

    doneScreen.innerHTML = "";

    const resultContent = document.createElement("div");
    resultContent.className = "result-content";

    // 人格标题
    const label = document.createElement("p");
    label.className = "result-label";
    label.textContent = "你的旅行人格";

    const title = document.createElement("h1");
    title.className = "result-title";
    title.textContent = result.name;

    const shortText = document.createElement("p");
    shortText.className = "result-short";
    shortText.textContent = result.short;

    const description = document.createElement("p");
    description.className = "result-description";
    description.textContent = result.description;

    const keywords = document.createElement("p");
    keywords.className = "result-keywords";
    keywords.textContent = result.keywords;

    resultContent.appendChild(label);
    resultContent.appendChild(title);
    resultContent.appendChild(shortText);
    resultContent.appendChild(description);
    resultContent.appendChild(keywords);


    // ========================================
    // 推荐城市
    // ========================================

    const cityTitle = document.createElement("h2");
    cityTitle.className = "city-title";
    cityTitle.innerHTML =
        '<svg class="city-title__pin" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
        '<path d="M12 2.6c-3.7 0-6.7 3-6.7 6.7 0 4.7 6.7 12.1 6.7 12.1s6.7-7.4 6.7-12.1c0-3.7-3-6.7-6.7-6.7z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>' +
        '<circle cx="12" cy="9.3" r="2.4" fill="none" stroke="currentColor" stroke-width="1.4"/>' +
        '</svg>' +
        '<span>也许你会喜欢这些城市</span>';

    // 手绘路线，代替生硬的分隔线
    resultContent.appendChild(createRouteDivider());

    resultContent.appendChild(cityTitle);

    const cityList = document.createElement("div");
    cityList.className = "city-list";

    result.cities.forEach(function (city) {

        const cityCard = document.createElement("figure");
        cityCard.className = "city-card";

        const cityPhoto = document.createElement("div");
        cityPhoto.className = "city-card__photo";

        const cityImage = document.createElement("img");
        cityImage.className = "city-card__image";
        cityImage.src = city.image;
        cityImage.alt = city.name + " · " + (city.landmark || "城市景观");
        cityImage.loading = "lazy";
        cityImage.decoding = "async";

        cityPhoto.appendChild(cityImage);

        const cityBody = document.createElement("figcaption");
        cityBody.className = "city-card__body";

        const cityName = document.createElement("h3");
        cityName.className = "city-card__name";
        cityName.textContent = city.name;

        cityBody.appendChild(cityName);

        // 这座城市为什么和你的旅行人格合得来
        if (city.note) {

            const cityNote = document.createElement("p");
            cityNote.className = "city-card__note";
            cityNote.textContent = city.note;

            cityBody.appendChild(cityNote);
        }

        // 地标建筑
        if (city.landmark) {

            const cityLandmark = document.createElement("p");
            cityLandmark.className = "city-card__landmark";

            const landmarkTag = document.createElement("span");
            landmarkTag.className = "city-card__tag";
            landmarkTag.textContent = "地标";

            const landmarkName = document.createElement("span");
            landmarkName.className = "city-card__landmark-name";
            landmarkName.textContent = city.landmark;

            cityLandmark.appendChild(landmarkTag);
            cityLandmark.appendChild(landmarkName);

            if (city.landmarkNote) {

                const landmarkNote = document.createElement("span");
                landmarkNote.className = "city-card__landmark-note";
                landmarkNote.textContent = city.landmarkNote;

                cityLandmark.appendChild(landmarkNote);
            }

            cityBody.appendChild(cityLandmark);
        }

        cityCard.appendChild(cityPhoto);
        cityCard.appendChild(cityBody);

        cityList.appendChild(cityCard);
    });

    resultContent.appendChild(cityList);

    // 图片来源说明（CC 授权需要保留署名信息）
    const cityCredit = document.createElement("p");
    cityCredit.className = "city-credit";

    cityCredit.appendChild(createCompass());

    cityCredit.appendChild(
        document.createTextNode(
            "城市图片来自 Wikimedia Commons（CC0 / CC BY / CC BY-SA），" +
            "作者与许可证见 assets/cities/sources.json"
        )
    );

    resultContent.appendChild(cityCredit);

    // 小星点
    resultContent.appendChild(createSparkle("result-sparkle--1"));
    resultContent.appendChild(createSparkle("result-sparkle--2"));


    // ========================================
    // 返回首页 / 重新测试
    // ========================================

    const restartBtn = document.createElement("button");
    restartBtn.type = "button";
    restartBtn.className = "restart-btn";
    restartBtn.textContent = "返回首页 · 重新测试";

    restartBtn.addEventListener("click", function () {

        currentIndex = 0;
        selectedAnswerId = null;
        answersLog.length = 0;

        scores = {
            S: 0,
            R: 0,
            H: 0,
            E: 0
        };

        showScreen("home");
    });

    resultContent.appendChild(restartBtn);

    doneScreen.appendChild(resultContent);

    showScreen("done");
}

// ========================================
// 14. 下一题
// ========================================

function goToNext() {

    if (!selectedAnswerId) {

        return;

    }

    answersLog.push({

        questionId:
            questions[currentIndex].id,

        answerId:
            selectedAnswerId

    });

    currentIndex += 1;

    if (currentIndex < questions.length) {

        renderQuestion();

        return;

    }

    finishTest();
}


// ========================================
// 15. 开始测试
// ========================================

startBtn.addEventListener("click", function () {

    currentIndex = 0;

    selectedAnswerId = null;

    answersLog.length = 0;

    scores = {
        S: 0,
        R: 0,
        H: 0,
        E: 0
    };

    showScreen("quiz");

    renderQuestion();

});


// ========================================
// 16. 下一题按钮
// ========================================

nextBtn.addEventListener(
    "click",
    goToNext
);


// ========================================
// 17. PWA：只在 http(s) 环境下注册 Service Worker
// ========================================

if (
    "serviceWorker" in navigator &&
    location.protocol.indexOf("http") === 0
) {

    navigator.serviceWorker
        .register("sw.js")
        .catch(function () {
            // 注册失败不影响正常使用
        });
}

//main page
const title = document.querySelector('.title');
const testBox = document.querySelector('#test-box')
const mainBox = document.querySelector('#landingContent')
const fillbox1 = document.querySelector('#kanKeyBox');
const fillbox2 = document.querySelector('#keyKanBox');
const fillbox3 = document.querySelector('#kanOnBox');
const fillbox4 = document.querySelector('#onKanBox');
const fillbox5 = document.querySelector('#kanKunBox');
const fillbox6 = document.querySelector('#kunKanBox');
let kanjiArray = [];
let onArray = [];
let kunArray = [];
let meaningsArray = [];
let number;
function populateMainPage() {
    removeAllChildNodes(fillbox1);
    removeAllChildNodes(fillbox2);
    removeAllChildNodes(fillbox3);
    removeAllChildNodes(fillbox4);
    removeAllChildNodes(fillbox5);
    removeAllChildNodes(fillbox6);
    const newDiv = document.createElement('div');
    const newDiv2 = document.createElement('div');
    const newDiv3 = document.createElement('div');
    const newDiv4 = document.createElement('div');
    const newDiv5 = document.createElement('div');
    const newDiv6 = document.createElement('div');
    const newButt = document.createElement('button');
    const newButt2 = document.createElement('button');
    const newButt3 = document.createElement('button');
    const newButt4 = document.createElement('button');
    const newButt5 = document.createElement('button');
    const newButt6 = document.createElement('button');
    newButt.addEventListener('click', loadKeywordQuiz1)
    newButt2.addEventListener('click', loadKeywordQuiz2)
    newButt3.addEventListener('click', loadOnQuiz3)
    newButt4.addEventListener('click', loadOnQuiz4)
    newButt5.addEventListener('click', loadKunQuiz5)
    newButt6.addEventListener('click', loadKunQuiz6)
    newButt.classList.add('whole', 'drop-butt');
    newButt2.classList.add('whole', 'drop-butt');
    newButt3.classList.add('whole', 'drop-butt');
    newButt4.classList.add('whole', 'drop-butt');
    newButt5.classList.add('whole', 'drop-butt');
    newButt6.classList.add('whole', 'drop-butt');
    newButt.textContent = "start studying"
    newButt2.textContent = "start studying"
    newButt3.textContent = "start studying"
    newButt4.textContent = "start studying"
    newButt5.textContent = "start studying"
    newButt6.textContent = "start studying"
    newDiv.classList.add('pale');
    newDiv2.classList.add('pale');
    newDiv3.classList.add('pale');
    newDiv4.classList.add('pale');
    newDiv5.classList.add('pale');
    newDiv6.classList.add('pale');
    newDiv.append(number);
    newDiv2.append(number);
    newDiv3.append(number);
    newDiv4.append(number);
    newDiv5.append(number);
    newDiv6.append(number);
    fillbox1.append(newDiv);
    fillbox2.append(newDiv2);
    fillbox3.append(newDiv3);
    fillbox4.append(newDiv4);
    fillbox5.append(newDiv5);
    fillbox6.append(newDiv6);
    fillbox1.append(newButt);
    fillbox2.append(newButt2);
    fillbox3.append(newButt3);
    fillbox4.append(newButt4);
    fillbox5.append(newButt5);
    fillbox6.append(newButt6);
    console.log('BUILT');
}

function getAll() {
    console.log("pooped myself");
};
function getN5() {
    kanjiArray = [];
    onArray = [];
    kunArray = [];
    meaningsArray = [];
    title.textContent = "";
    title.textContent = "N5 Kanji";
    for (const [key, value] of Object.entries(data5)) {
        kanjiArray.push(key);
        onArray.push(value.readings_on);
        kunArray.push(value.readings_kun);
        meaningsArray.push(value.meanings[0]);
        // console.log(`${key}: ${value.jlpt_new}`);
    };
    // console.log("ARRAY IS: ", kanjiArray);
    // console.log("OHNO", onArray);
    number = kanjiArray.length;
    populateMainPage();
};
function getN4() {
    kanjiArray = [];
    onArray = [];
    kunArray = [];
    meaningsArray = [];
    title.textContent = "";
    title.textContent = "N4 Kanji";
    for (const [key, value] of Object.entries(data4)) {
        kanjiArray.push(key);
        onArray.push(value.readings_on);
        kunArray.push(value.readings_kun);
        meaningsArray.push(value.meanings[0]);
        // console.log(`${key}: ${value.jlpt_new}`);
    };
    // console.log("ARRAY IS: ", kanjiArray);
    // console.log("OHNO", onArray);
    number = kanjiArray.length;
    populateMainPage();
};
function getN3() {
    console.log("pooped myself");
    title.textContent = "N3 Kanji info unavailable";
};
function getN2() {
    console.log("pooped myself");
    title.textContent = "N2 Kanji info unavailable";
};
function getN1() {
    console.log("pooped myself");
    title.textContent = "N1 Kanji info unavailable";
};

//study page
const mainKanji = document.querySelector('.main');
const answersDiv = document.querySelector('.answers');
const kunDiv = document.querySelector('.kun');
const onDiv = document.querySelector('.on');
const kanjiDisplay = document.querySelector('#kanji-display');
const messageBox = document.querySelector('#float-message');
const skipButt = document.querySelector('.skip');
let konoKanji
let trueAnswer
let selectedAnswer
let answersArray = [];
let randoNumber = 69;

function loadKeywordQuiz1() {
    //clear literally everything that could possibly be
    removeAllChildNodes(answersDiv);
    konoKanji = "";
    trueAnswer = "";
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = 'rgb(78, 78, 78)';
    randoNumber = Math.floor(Math.random() * kanjiArray.length);
    konoKanji = kanjiArray[randoNumber];
    mainKanji.textContent = konoKanji;
    onDiv.append('(', onArray[randoNumber], ')');
    kunDiv.append('(', kunArray[randoNumber], ')');
    trueAnswer = meaningsArray[randoNumber];
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    skipButt.removeEventListener('click', loadKeywordQuiz2);
    skipButt.removeEventListener('click', loadOnQuiz3);
    skipButt.removeEventListener('click', loadOnQuiz4);
    skipButt.removeEventListener('click', loadKunQuiz5);
    skipButt.removeEventListener('click', loadKunQuiz6);
    skipButt.addEventListener('click', loadKeywordQuiz1);
    let answersArray = [];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * kanjiArray.length);
        randoAnswer = meaningsArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        // console.log("YO");
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', handleClickStudy)
        newDiv.classList.add('answer');
        answersDiv.append(newDiv);
    })
}
function handleClickStudy() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('FUCK YES');
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            loadKeywordQuiz1();
        }, 1000);
    } else {
        messageBox.textContent = 'try again.'
    }
}
function loadKeywordQuiz2() {
    //clear literally everything that could possibly be
    removeAllChildNodes(answersDiv);
    konoKanji = "";
    trueAnswer = "";
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = 'rgb(78, 78, 78)';
    randoNumber = Math.floor(Math.random() * kanjiArray.length);
    konoKanji = meaningsArray[randoNumber];
    mainKanji.textContent = konoKanji;
    onDiv.append('(', onArray[randoNumber], ')');
    kunDiv.append('(', kunArray[randoNumber], ')');
    trueAnswer = kanjiArray[randoNumber];
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    skipButt.removeEventListener('click', loadKeywordQuiz1);
    skipButt.removeEventListener('click', loadOnQuiz3);
    skipButt.removeEventListener('click', loadOnQuiz4);
    skipButt.removeEventListener('click', loadKunQuiz5);
    skipButt.removeEventListener('click', loadKunQuiz6);
    skipButt.addEventListener('click', loadKeywordQuiz2);
    //get real answer, then fake ones
    let answersArray = [];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * kanjiArray.length);
        randoAnswer = kanjiArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        // console.log("YO");
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', handleClickStudy2)
        newDiv.classList.add('answer');
        answersDiv.append(newDiv);
    })
};
function handleClickStudy2() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('FUCK YES');
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            loadKeywordQuiz2();
        }, 1000);
    } else {
        messageBox.textContent = 'try again.'
    }
};
function loadOnQuiz3() {
    //clear literally everything that could possibly be
    removeAllChildNodes(answersDiv);
    konoKanji = "";
    trueAnswer = "";
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = 'rgb(78, 78, 78)';
    randoNumber = Math.floor(Math.random() * kanjiArray.length);
    konoKanji = kanjiArray[randoNumber];
    mainKanji.textContent = konoKanji;
    //   onDiv.append('(', onArray[randoNumber], ')');
    //   kunDiv.append('(', kunArray[randoNumber], ')');
    trueAnswer = onArray[randoNumber];
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    skipButt.removeEventListener('click', loadKeywordQuiz1);
    skipButt.removeEventListener('click', loadKeywordQuiz2);
    skipButt.removeEventListener('click', loadOnQuiz4);
    skipButt.removeEventListener('click', loadKunQuiz5);
    skipButt.removeEventListener('click', loadKunQuiz6);
    skipButt.addEventListener('click', loadOnQuiz3);
    //get real answer, then fake ones
    let answersArray = [];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * kanjiArray.length);
        randoAnswer = onArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        // console.log("YO");
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', handleClickStudy3)
        newDiv.classList.add('answer');
        answersDiv.append(newDiv);
    })
};
function handleClickStudy3() {
    selectedAnswer = this.textContent;
    if (String(selectedAnswer) === String(trueAnswer)) {
        console.log('FUCK YES');
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            loadOnQuiz3();
        }, 1000);
    } else {
        messageBox.textContent = 'try again.'
    }
};
function loadOnQuiz4() {
    //clear literally everything that could possibly be
    removeAllChildNodes(answersDiv);
    konoKanji = "";
    trueAnswer = "";
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = 'rgb(78, 78, 78)';
    randoNumber = Math.floor(Math.random() * kanjiArray.length);
    konoKanji = onArray[randoNumber];
    mainKanji.textContent = konoKanji;
    //   onDiv.append('(', onArray[randoNumber], ')');
    //   kunDiv.append('(', kunArray[randoNumber], ')');
    trueAnswer = kanjiArray[randoNumber];
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    skipButt.removeEventListener('click', loadKeywordQuiz1);
    skipButt.removeEventListener('click', loadKeywordQuiz2);
    skipButt.removeEventListener('click', loadOnQuiz3);
    skipButt.removeEventListener('click', loadKunQuiz5);
    skipButt.removeEventListener('click', loadKunQuiz6);
    skipButt.addEventListener('click', loadOnQuiz4);
    //get real answer, then fake ones
    let answersArray = [];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * kanjiArray.length);
        randoAnswer = kanjiArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        // console.log("YO");
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', handleClickStudy4)
        newDiv.classList.add('answer');
        answersDiv.append(newDiv);
    })
};
function handleClickStudy4() {
    selectedAnswer = this.textContent;
    if (String(selectedAnswer) === String(trueAnswer)) {
        console.log('FUCK YES');
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            loadOnQuiz4();
        }, 1000);
    } else {
        messageBox.textContent = 'try again.'
    }
};
function loadKunQuiz5() {
    //clear literally everything that could possibly be
    removeAllChildNodes(answersDiv);
    konoKanji = "";
    trueAnswer = "";
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = 'rgb(78, 78, 78)';
    randoNumber = Math.floor(Math.random() * kanjiArray.length);
    konoKanji = kanjiArray[randoNumber];
    mainKanji.textContent = konoKanji;
    //   onDiv.append('(', onArray[randoNumber], ')');
    //   kunDiv.append('(', kunArray[randoNumber], ')');
    trueAnswer = kunArray[randoNumber];
    // console.log('RIGHT ANSWER IS: ', trueAnswer);
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    skipButt.removeEventListener('click', loadKeywordQuiz1);
    skipButt.removeEventListener('click', loadKeywordQuiz2);
    skipButt.removeEventListener('click', loadOnQuiz3);
    skipButt.removeEventListener('click', loadOnQuiz4);
    skipButt.removeEventListener('click', loadKunQuiz6);
    skipButt.addEventListener('click', loadKunQuiz5);
    //get real answer, then fake ones
    if (kunArray[randoNumber].length === 0) {
        loadKunQuiz5();
    };
    let answersArray = [];
    answersArray.push(trueAnswer);
    let num = 0;
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * kanjiArray.length);
        let randoAnswer = kunArray[nuRandoNum];
        if (kunArray[nuRandoNum].length === 0) {
            num++;
        }
        answersArray.push(randoAnswer);
    }
    // console.log(answersArray);
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        // console.log("YO");
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', handleClickStudy5)
        newDiv.classList.add('answer');
        answersDiv.append(newDiv);
    })
};
function handleClickStudy5() {
    selectedAnswer = this.textContent;
    if (selectedAnswer == trueAnswer) {
        console.log('FUCK YES');
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            loadKunQuiz5();
        }, 1000);
    } else {
        messageBox.textContent = 'try again.'
    }
};
function loadKunQuiz6() {
    //clear literally everything that could possibly be
    removeAllChildNodes(answersDiv);
    konoKanji = "";
    trueAnswer = "";
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = 'rgb(78, 78, 78)';
    randoNumber = Math.floor(Math.random() * kanjiArray.length);
    konoKanji = kunArray[randoNumber];
    mainKanji.textContent = konoKanji;
    //   onDiv.append('(', onArray[randoNumber], ')');
    //   kunDiv.append('(', kunArray[randoNumber], ')');
    trueAnswer = kanjiArray[randoNumber];
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    skipButt.removeEventListener('click', loadKeywordQuiz1);
    skipButt.removeEventListener('click', loadKeywordQuiz2);
    skipButt.removeEventListener('click', loadOnQuiz3);
    skipButt.removeEventListener('click', loadOnQuiz4);
    skipButt.removeEventListener('click', loadKunQuiz5);
    skipButt.addEventListener('click', loadKunQuiz6);
    //get real answer, then fake ones
    let answersArray = [];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * kanjiArray.length);
        randoAnswer = kanjiArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        // console.log("YO");
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', handleClickStudy4)
        newDiv.classList.add('answer');
        answersDiv.append(newDiv);
    })
};
function handleClickStudy6() {
    selectedAnswer = this.textContent;
    if (selectedAnswer == trueAnswer) {
        console.log('FUCK YES');
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {

            loadKunQuiz6();
        }, 1000);
    } else {
        messageBox.textContent = 'try again.'
    }
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

function changeDisplay() {
    mainBox.style.display = "block";
    testBox.classList.add('hidden');
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

function dropdownFunction() {
    document.getElementById("level-drop").classList.toggle("show");
};
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.drop-butt')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
data5 = {
    "一": {
        "strokes": 1,
        "grade": 1,
        "freq": 2,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["One", "One Radical (no.1)"],
        "readings_on": ["いち", "いつ"],
        "readings_kun": ["ひと-", "ひと.つ"],
        "wk_level": 1,
        "wk_meanings": ["One"],
        "wk_readings_on": ["いち", "いつ"],
        "wk_readings_kun": ["!ひと"],
        "wk_radicals": ["Ground"]
    },
    "二": {
        "strokes": 2,
        "grade": 1,
        "freq": 9,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Two", "Two Radical (no. 7)"],
        "readings_on": ["に", "じ"],
        "readings_kun": ["ふた", "ふた.つ", "ふたたび"],
        "wk_level": 1,
        "wk_meanings": ["Two"],
        "wk_readings_on": ["に"],
        "wk_readings_kun": ["!ふた"],
        "wk_radicals": ["Two"]
    },
    "九": {
        "strokes": 2,
        "grade": 1,
        "freq": 55,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Nine"],
        "readings_on": ["きゅう", "く"],
        "readings_kun": ["ここの", "ここの.つ"],
        "wk_level": 1,
        "wk_meanings": ["Nine"],
        "wk_readings_on": ["く", "きゅう"],
        "wk_readings_kun": ["!ここの"],
        "wk_radicals": ["Nine"]
    },
    "七": {
        "strokes": 2,
        "grade": 1,
        "freq": 115,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Seven"],
        "readings_on": ["しち"],
        "readings_kun": ["なな", "なな.つ", "なの"],
        "wk_level": 1,
        "wk_meanings": ["Seven"],
        "wk_readings_on": ["しち"],
        "wk_readings_kun": ["!なな", "!なの"],
        "wk_radicals": ["Seven"]
    },
    "人": {
        "strokes": 2,
        "grade": 1,
        "freq": 5,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Person"],
        "readings_on": ["じん", "にん"],
        "readings_kun": ["ひと", "-り", "-と"],
        "wk_level": 1,
        "wk_meanings": ["Person"],
        "wk_readings_on": ["にん", "じん"],
        "wk_readings_kun": ["!ひと", "!と"],
        "wk_radicals": ["Person"]
    },
    "入": {
        "strokes": 2,
        "grade": 1,
        "freq": 56,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Enter", "Insert"],
        "readings_on": ["にゅう", "じゅ"],
        "readings_kun": ["い.る", "-い.る", "-い.り", "い.れる", "-い.れ", "はい.る"],
        "wk_level": 1,
        "wk_meanings": ["Enter"],
        "wk_readings_on": ["にゅう"],
        "wk_readings_kun": ["!はい", "!い"],
        "wk_radicals": ["Enter"]
    },
    "八": {
        "strokes": 2,
        "grade": 1,
        "freq": 92,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Eight", "Eight Radical (no. 12)"],
        "readings_on": ["はち"],
        "readings_kun": ["や", "や.つ", "やっ.つ", "よう"],
        "wk_level": 1,
        "wk_meanings": ["Eight"],
        "wk_readings_on": ["はち"],
        "wk_readings_kun": ["!や", "!よう"],
        "wk_radicals": ["Fins"]
    },
    "十": {
        "strokes": 2,
        "grade": 1,
        "freq": 8,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Ten"],
        "readings_on": ["じゅう", "じっ", "じゅっ"],
        "readings_kun": ["とお", "と"],
        "wk_level": 1,
        "wk_meanings": ["Ten"],
        "wk_readings_on": ["じゅう"],
        "wk_readings_kun": ["!とお"],
        "wk_radicals": ["Cross"]
    },
    "三": {
        "strokes": 3,
        "grade": 1,
        "freq": 14,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Three"],
        "readings_on": ["さん", "ぞう"],
        "readings_kun": ["み", "み.つ", "みっ.つ"],
        "wk_level": 1,
        "wk_meanings": ["Three"],
        "wk_readings_on": ["さん"],
        "wk_readings_kun": ["!み"],
        "wk_radicals": ["Ground", "Two"]
    },
    "上": {
        "strokes": 3,
        "grade": 1,
        "freq": 35,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Above", "Up"],
        "readings_on": ["じょう", "しょう", "しゃん"],
        "readings_kun": ["うえ", "-うえ", "うわ-", "かみ", "あ.げる", "-あ.げる", "あ.がる", "-あ.がる", "あ.がり", "-あ.がり", "のぼ.る", "のぼ.り", "のぼ.せる", "のぼ.す", "たてまつ.る"],
        "wk_level": 1,
        "wk_meanings": ["Above", "^Up", "^Over"],
        "wk_readings_on": ["じょう"],
        "wk_readings_kun": ["!うえ", "!あ", "!のぼ", "!うわ", "!かみ"],
        "wk_radicals": ["Toe", "Ground"]
    },
    "下": {
        "strokes": 3,
        "grade": 1,
        "freq": 97,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Below", "Down", "Descend", "Give", "Low", "Inferior"],
        "readings_on": ["か", "げ"],
        "readings_kun": ["した", "しも", "もと", "さ.げる", "さ.がる", "くだ.る", "くだ.り", "くだ.す", "-くだ.す", "くだ.さる", "お.ろす", "お.りる"],
        "wk_level": 1,
        "wk_meanings": ["Below", "^Down", "^Under", "^Beneath"],
        "wk_readings_on": ["か", "げ"],
        "wk_readings_kun": ["!した", "!さ", "!くだ", "!お"],
        "wk_radicals": ["Ground", "Toe"]
    },
    "口": {
        "strokes": 3,
        "grade": 1,
        "freq": 284,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Mouth"],
        "readings_on": ["こう", "く"],
        "readings_kun": ["くち"],
        "wk_level": 1,
        "wk_meanings": ["Mouth"],
        "wk_readings_on": ["こう", "^く"],
        "wk_readings_kun": ["!くち"],
        "wk_radicals": ["Mouth"]
    },
    "大": {
        "strokes": 3,
        "grade": 1,
        "freq": 7,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Large", "Big"],
        "readings_on": ["だい", "たい"],
        "readings_kun": ["おお-", "おお.きい", "-おお.いに"],
        "wk_level": 1,
        "wk_meanings": ["Big", "^Large"],
        "wk_readings_on": ["たい", "だい"],
        "wk_readings_kun": ["!おお"],
        "wk_radicals": ["Big"]
    },
    "女": {
        "strokes": 3,
        "grade": 1,
        "freq": 151,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Woman", "Female"],
        "readings_on": ["じょ", "にょ", "にょう"],
        "readings_kun": ["おんな", "め"],
        "wk_level": 1,
        "wk_meanings": ["Woman"],
        "wk_readings_on": ["じょ"],
        "wk_readings_kun": ["!おんな", "!め"],
        "wk_radicals": ["Woman"]
    },
    "山": {
        "strokes": 3,
        "grade": 1,
        "freq": 131,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Mountain"],
        "readings_on": ["さん", "せん"],
        "readings_kun": ["やま"],
        "wk_level": 1,
        "wk_meanings": ["Mountain"],
        "wk_readings_on": ["さん"],
        "wk_readings_kun": ["!やま"],
        "wk_radicals": ["Mountain"]
    },
    "川": {
        "strokes": 3,
        "grade": 1,
        "freq": 181,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Stream", "River", "River Or Three-stroke River Radical (no. 47)"],
        "readings_on": ["せん"],
        "readings_kun": ["かわ"],
        "wk_level": 1,
        "wk_meanings": ["River"],
        "wk_readings_on": ["!せん"],
        "wk_readings_kun": ["かわ"],
        "wk_radicals": ["River"]
    },

    "土": {
        "strokes": 3,
        "grade": 1,
        "freq": 307,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Soil", "Earth", "Ground", "Turkey"],
        "readings_on": ["ど", "と"],
        "readings_kun": ["つち"],
        "wk_level": 2,
        "wk_meanings": ["Dirt", "^Soil", "^Earth", "^Ground"],
        "wk_readings_on": ["ど", "^と"],
        "wk_readings_kun": ["!つち"],
        "wk_radicals": ["Dirt"]
    },
    "千": {
        "strokes": 3,
        "grade": 1,
        "freq": 195,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Thousand"],
        "readings_on": ["せん"],
        "readings_kun": ["ち"],
        "wk_level": 2,
        "wk_meanings": ["Thousand"],
        "wk_readings_on": ["せん"],
        "wk_readings_kun": ["!ち"],
        "wk_radicals": ["Thousand"]
    },

    "子": {
        "strokes": 3,
        "grade": 1,
        "freq": 72,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Child", "Sign Of The Rat", "11pm-1am", "First Sign Of Chinese Zodiac"],
        "readings_on": ["し", "す", "つ"],
        "readings_kun": ["こ", "-こ", "ね"],
        "wk_level": 2,
        "wk_meanings": ["Child", "^Kid"],
        "wk_readings_on": ["し", "す"],
        "wk_readings_kun": ["!こ"],
        "wk_radicals": ["Child"]
    },
    "小": {
        "strokes": 3,
        "grade": 1,
        "freq": 114,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Little", "Small"],
        "readings_on": ["しょう"],
        "readings_kun": ["ちい.さい", "こ-", "お-", "さ-"],
        "wk_level": 2,
        "wk_meanings": ["Small", "^Little"],
        "wk_readings_on": ["しょう"],
        "wk_readings_kun": ["!ちい", "!こ", "!お"],
        "wk_radicals": ["Small"]
    },
    "中": {
        "strokes": 4,
        "grade": 1,
        "freq": 11,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["In", "Inside", "Middle", "Mean", "Center"],
        "readings_on": ["ちゅう"],
        "readings_kun": ["なか", "うち", "あた.る"],
        "wk_level": 2,
        "wk_meanings": ["Middle", "^In", "^Inside", "^Center"],
        "wk_readings_on": ["ちゅう"],
        "wk_readings_kun": ["!なか"],
        "wk_radicals": ["Middle"]
    },
    "五": {
        "strokes": 4,
        "grade": 1,
        "freq": 31,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Five"],
        "readings_on": ["ご"],
        "readings_kun": ["いつ", "いつ.つ"],
        "wk_level": 2,
        "wk_meanings": ["Five"],
        "wk_readings_on": ["ご"],
        "wk_readings_kun": ["!いつ"],
        "wk_radicals": ["Five"]
    },
    "六": {
        "strokes": 4,
        "grade": 1,
        "freq": 93,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Six"],
        "readings_on": ["ろく", "りく"],
        "readings_kun": ["む", "む.つ", "むっ.つ", "むい"],
        "wk_level": 2,
        "wk_meanings": ["Six"],
        "wk_readings_on": ["ろく"],
        "wk_readings_kun": ["!む"],
        "wk_radicals": ["Lid", "Fins"]
    },
    "円": {
        "strokes": 4,
        "grade": 1,
        "freq": 69,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Circle", "Yen", "Round"],
        "readings_on": ["えん"],
        "readings_kun": ["まる.い", "まる", "まど", "まど.か", "まろ.やか"],
        "wk_level": 2,
        "wk_meanings": ["Yen", "^Round", "^Circle"],
        "wk_readings_on": ["えん"],
        "wk_readings_kun": ["!まる"],
        "wk_radicals": ["Lid", "Head"]
    },
    "天": {
        "strokes": 4,
        "grade": 1,
        "freq": 512,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Heavens", "Sky", "Imperial"],
        "readings_on": ["てん"],
        "readings_kun": ["あまつ", "あめ", "あま-"],
        "wk_level": 2,
        "wk_meanings": ["Heaven"],
        "wk_readings_on": ["てん"],
        "wk_readings_kun": ["!あま"],
        "wk_radicals": ["Heaven"]
    },
    "手": {
        "strokes": 4,
        "grade": 1,
        "freq": 60,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Hand"],
        "readings_on": ["しゅ", "ず"],
        "readings_kun": ["て", "て-", "-て", "た-"],
        "wk_level": 2,
        "wk_meanings": ["Hand"],
        "wk_readings_on": ["!しゅ"],
        "wk_readings_kun": ["て"],
        "wk_radicals": ["Hand"]
    },
    "日": {
        "strokes": 4,
        "grade": 1,
        "freq": 1,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Day", "Sun", "Japan", "Counter For Days"],
        "readings_on": ["にち", "じつ"],
        "readings_kun": ["ひ", "-び", "-か"],
        "wk_level": 2,
        "wk_meanings": ["Sun", "^Day"],
        "wk_readings_on": ["にち", "じつ"],
        "wk_readings_kun": ["!ひ", "!か", "!び"],
        "wk_radicals": ["Sun"]
    },
    "月": {
        "strokes": 4,
        "grade": 1,
        "freq": 23,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Month", "Moon"],
        "readings_on": ["げつ", "がつ"],
        "readings_kun": ["つき"],
        "wk_level": 2,
        "wk_meanings": ["Moon", "^Month"],
        "wk_readings_on": ["げつ", "がつ"],
        "wk_readings_kun": ["!つき"],
        "wk_radicals": ["Moon"]
    },
    "木": {
        "strokes": 4,
        "grade": 1,
        "freq": 317,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Tree", "Wood"],
        "readings_on": ["ぼく", "もく"],
        "readings_kun": ["き", "こ-"],
        "wk_level": 2,
        "wk_meanings": ["Tree", "^Wood"],
        "wk_readings_on": ["もく", "ぼく"],
        "wk_readings_kun": ["!き", "!こ"],
        "wk_radicals": ["Tree"]
    },
    "水": {
        "strokes": 4,
        "grade": 1,
        "freq": 223,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Water"],
        "readings_on": ["すい"],
        "readings_kun": ["みず", "みず-"],
        "wk_level": 2,
        "wk_meanings": ["Water"],
        "wk_readings_on": ["すい"],
        "wk_readings_kun": ["!みず"],
        "wk_radicals": ["Water"]
    },
    "火": {
        "strokes": 4,
        "grade": 1,
        "freq": 574,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Fire"],
        "readings_on": ["か"],
        "readings_kun": ["ひ", "-び", "ほ-"],
        "wk_level": 2,
        "wk_meanings": ["Fire"],
        "wk_readings_on": ["か"],
        "wk_readings_kun": ["!ひ", "!ほ"],
        "wk_radicals": ["Fire"]
    },
    "出": {
        "strokes": 5,
        "grade": 1,
        "freq": 13,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Exit", "Leave", "Go Out", "Come Out", "Put Out", "Protrude"],
        "readings_on": ["しゅつ", "すい"],
        "readings_kun": ["で.る", "-で", "だ.す", "-だ.す", "い.でる", "い.だす"],
        "wk_level": 2,
        "wk_meanings": ["Exit"],
        "wk_readings_on": ["しゅつ"],
        "wk_readings_kun": ["!で", "!だ"],
        "wk_radicals": ["Mountain"]
    },
    "右": {
        "strokes": 5,
        "grade": 1,
        "freq": 602,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Right"],
        "readings_on": ["う", "ゆう"],
        "readings_kun": ["みぎ"],
        "wk_level": 2,
        "wk_meanings": ["Right"],
        "wk_readings_on": ["^う", "ゆう"],
        "wk_readings_kun": ["!みぎ"],
        "wk_radicals": ["Narwhal", "Mouth"]
    },
    "四": {
        "strokes": 5,
        "grade": 1,
        "freq": 47,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Four"],
        "readings_on": ["し"],
        "readings_kun": ["よ", "よ.つ", "よっ.つ", "よん"],
        "wk_level": 2,
        "wk_meanings": ["Four"],
        "wk_readings_on": ["し"],
        "wk_readings_kun": ["!よん", "!よ"],
        "wk_radicals": ["Mouth", "Legs"]
    },
    "左": {
        "strokes": 5,
        "grade": 1,
        "freq": 630,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Left"],
        "readings_on": ["さ", "しゃ"],
        "readings_kun": ["ひだり"],
        "wk_level": 2,
        "wk_meanings": ["Left"],
        "wk_readings_on": ["さ"],
        "wk_readings_kun": ["!ひだり"],
        "wk_radicals": ["Narwhal", "Construction"]
    },
    "本": {
        "strokes": 5,
        "grade": 1,
        "freq": 10,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Book", "Present", "Main", "Origin", "True", "Real", "Counter For Long Cylindrical Things"],
        "readings_on": ["ほん"],
        "readings_kun": ["もと"],
        "wk_level": 2,
        "wk_meanings": ["Book", "^Origin", "^Real", "^Main"],
        "wk_readings_on": ["ほん"],
        "wk_readings_kun": ["!もと"],
        "wk_radicals": ["Book"]
    },
    "今": {
        "strokes": 4,
        "grade": 2,
        "freq": 49,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Now"],
        "readings_on": ["こん", "きん"],
        "readings_kun": ["いま"],
        "wk_level": 3,
        "wk_meanings": ["Now"],
        "wk_readings_on": ["こん"],
        "wk_readings_kun": ["!いま"],
        "wk_radicals": ["Now"]
    },
    "白": {
        "strokes": 5,
        "grade": 1,
        "freq": 483,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["White"],
        "readings_on": ["はく", "びゃく"],
        "readings_kun": ["しろ", "しら-", "しろ.い"],
        "wk_level": 2,
        "wk_meanings": ["White"],
        "wk_readings_on": ["はく"],
        "wk_readings_kun": ["!しろ", "!しら"],
        "wk_radicals": ["White"]
    },
    "万": {
        "strokes": 3,
        "grade": 2,
        "freq": 375,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Ten Thousand", "10,000"],
        "readings_on": ["まん", "ばん"],
        "readings_kun": ["よろず"],
        "wk_level": 3,
        "wk_meanings": ["Ten Thousand"],
        "wk_readings_on": ["まん", "ばん"],
        "wk_readings_kun": [],
        "wk_radicals": ["Leaf", "Sword"]
    },
    "午": {
        "strokes": 4,
        "grade": 2,
        "freq": 154,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Noon", "Sign Of The Horse", "11am-1pm", "Seventh Sign Of Chinese Zodiac"],
        "readings_on": ["ご"],
        "readings_kun": ["うま"],
        "wk_level": 3,
        "wk_meanings": ["Noon"],
        "wk_readings_on": ["ご"],
        "wk_readings_kun": [],
        "wk_radicals": ["Slide", "Dry"]
    },
    "友": {
        "strokes": 4,
        "grade": 2,
        "freq": 622,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Friend"],
        "readings_on": ["ゆう"],
        "readings_kun": ["とも"],
        "wk_level": 3,
        "wk_meanings": ["Friend"],
        "wk_readings_on": ["ゆう"],
        "wk_readings_kun": ["!とも"],
        "wk_radicals": ["Narwhal", "Stool"]
    },
    "父": {
        "strokes": 4,
        "grade": 2,
        "freq": 646,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Father"],
        "readings_on": ["ふ"],
        "readings_kun": ["ちち"],
        "wk_level": 3,
        "wk_meanings": ["Father", "^Dad"],
        "wk_readings_on": ["!ふ"],
        "wk_readings_kun": ["ちち"],
        "wk_radicals": ["Father"]
    },
    "北": {
        "strokes": 5,
        "grade": 2,
        "freq": 153,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["North"],
        "readings_on": ["ほく"],
        "readings_kun": ["きた"],
        "wk_level": 3,
        "wk_meanings": ["North"],
        "wk_readings_on": ["ほく"],
        "wk_readings_kun": ["!きた"],
        "wk_radicals": ["Fingers", "Spoon"]
    },
    "半": {
        "strokes": 5,
        "grade": 2,
        "freq": 224,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Half", "Middle", "Odd Number", "Semi-", "Part-"],
        "readings_on": ["はん"],
        "readings_kun": ["なか.ば"],
        "wk_level": 3,
        "wk_meanings": ["Half"],
        "wk_readings_on": ["はん"],
        "wk_readings_kun": ["!なか"],
        "wk_radicals": ["Triceratops", "Dry"]
    },
    "外": {
        "strokes": 5,
        "grade": 2,
        "freq": 81,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Outside"],
        "readings_on": ["がい", "げ"],
        "readings_kun": ["そと", "ほか", "はず.す", "はず.れる", "と-"],
        "wk_level": 3,
        "wk_meanings": ["Outside"],
        "wk_readings_on": ["がい"],
        "wk_readings_kun": ["!そと", "!はず"],
        "wk_radicals": ["Evening", "Toe"]
    },
    "母": {
        "strokes": 5,
        "grade": 2,
        "freq": 570,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Mother"],
        "readings_on": ["ぼ"],
        "readings_kun": ["はは", "も"],
        "wk_level": 3,
        "wk_meanings": ["Mother", "^Mom", "^Mum"],
        "wk_readings_on": ["!ぼ"],
        "wk_readings_kun": ["はは"],
        "wk_radicals": ["Sun", "Drop"]
    },
    "休": {
        "strokes": 6,
        "grade": 1,
        "freq": 642,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Rest", "Day Off", "Retire", "Sleep"],
        "readings_on": ["きゅう"],
        "readings_kun": ["やす.む", "やす.まる", "やす.める"],
        "wk_level": 4,
        "wk_meanings": ["Rest"],
        "wk_readings_on": ["きゅう"],
        "wk_readings_kun": ["!やす"],
        "wk_radicals": ["Leader", "Tree"]
    },
    "先": {
        "strokes": 6,
        "grade": 1,
        "freq": 173,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Before", "Ahead", "Previous", "Future", "Precedence"],
        "readings_on": ["せん"],
        "readings_kun": ["さき", "ま.ず"],
        "wk_level": 4,
        "wk_meanings": ["Previous", "^Ahead", "^Past", "^Former"],
        "wk_readings_on": ["せん"],
        "wk_readings_kun": ["!さき", "!まず"],
        "wk_radicals": ["Slide", "Dirt", "Legs"]
    },
    "名": {
        "strokes": 6,
        "grade": 1,
        "freq": 177,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Name", "Noted", "Distinguished", "Reputation"],
        "readings_on": ["めい", "みょう"],
        "readings_kun": ["な", "-な"],
        "wk_level": 4,
        "wk_meanings": ["Name", "^Famous"],
        "wk_readings_on": ["めい", "みょう"],
        "wk_readings_kun": ["!な"],
        "wk_radicals": ["Evening", "Mouth"]
    },
    "年": {
        "strokes": 6,
        "grade": 1,
        "freq": 6,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Year", "Counter For Years"],
        "readings_on": ["ねん"],
        "readings_kun": ["とし"],
        "wk_level": 4,
        "wk_meanings": ["Year"],
        "wk_readings_on": ["ねん"],
        "wk_readings_kun": ["!とし"],
        "wk_radicals": ["Gun", "Cow"]
    },
    "気": {
        "strokes": 6,
        "grade": 1,
        "freq": 113,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Spirit", "Mind", "Air", "Atmosphere", "Mood"],
        "readings_on": ["き", "け"],
        "readings_kun": ["いき"],
        "wk_level": 4,
        "wk_meanings": ["Energy", "^Spirit"],
        "wk_readings_on": ["き", "け"],
        "wk_readings_kun": ["!いき"],
        "wk_radicals": ["Energy", "Treasure"]
    },
    "百": {
        "strokes": 6,
        "grade": 1,
        "freq": 163,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Hundred"],
        "readings_on": ["ひゃく", "びゃく"],
        "readings_kun": ["もも"],
        "wk_level": 4,
        "wk_meanings": ["Hundred"],
        "wk_readings_on": ["ひゃく"],
        "wk_readings_kun": ["!もも"],
        "wk_radicals": ["Leaf", "Sun"]
    },
    "男": {
        "strokes": 7,
        "grade": 1,
        "freq": 240,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Male"],
        "readings_on": ["だん", "なん"],
        "readings_kun": ["おとこ", "お"],
        "wk_level": 4,
        "wk_meanings": ["Man"],
        "wk_readings_on": ["だん"],
        "wk_readings_kun": ["!おとこ"],
        "wk_radicals": ["Rice Paddy", "Power"]
    },
    "見": {
        "strokes": 7,
        "grade": 1,
        "freq": 22,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["See", "Hopes", "Chances", "Idea", "Opinion", "Look At", "Visible"],
        "readings_on": ["けん"],
        "readings_kun": ["み.る", "み.える", "み.せる"],
        "wk_level": 4,
        "wk_meanings": ["See"],
        "wk_readings_on": ["!けん"],
        "wk_readings_kun": ["み"],
        "wk_radicals": ["See"]
    },
    "車": {
        "strokes": 7,
        "grade": 1,
        "freq": 333,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Car"],
        "readings_on": ["しゃ"],
        "readings_kun": ["くるま"],
        "wk_level": 4,
        "wk_meanings": ["Car"],
        "wk_readings_on": ["しゃ"],
        "wk_readings_kun": ["!くるま"],
        "wk_radicals": ["Car"]
    },
    "毎": {
        "strokes": 6,
        "grade": 2,
        "freq": 436,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Every"],
        "readings_on": ["まい"],
        "readings_kun": ["ごと", "-ごと.に"],
        "wk_level": 5,
        "wk_meanings": ["Every"],
        "wk_readings_on": ["まい"],
        "wk_readings_kun": ["!ごと"],
        "wk_radicals": ["Gun", "Window"]
    },
    "行": {
        "strokes": 6,
        "grade": 2,
        "freq": 20,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Going", "Journey", "Carry Out", "Conduct", "Act", "Line", "Row", "Bank"],
        "readings_on": ["こう", "ぎょう", "あん"],
        "readings_kun": ["い.く", "ゆ.く", "-ゆ.き", "-ゆき", "-い.き", "-いき", "おこな.う", "おこ.なう"],
        "wk_level": 5,
        "wk_meanings": ["Go"],
        "wk_readings_on": ["こう", "ぎょう"],
        "wk_readings_kun": ["!い", "!おこな", "!ゆ"],
        "wk_radicals": ["Go"]
    },
    "西": {
        "strokes": 6,
        "grade": 2,
        "freq": 259,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["West", "Spain"],
        "readings_on": ["せい", "さい", "す"],
        "readings_kun": ["にし"],
        "wk_level": 5,
        "wk_meanings": ["West"],
        "wk_readings_on": ["せい", "さい"],
        "wk_readings_kun": ["!にし"],
        "wk_radicals": ["West"]
    },
    "何": {
        "strokes": 7,
        "grade": 2,
        "freq": 340,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["What"],
        "readings_on": ["か"],
        "readings_kun": ["なに", "なん", "なに-", "なん-"],
        "wk_level": 5,
        "wk_meanings": ["What"],
        "wk_readings_on": ["!か"],
        "wk_readings_kun": ["なに", "なん"],
        "wk_radicals": ["Leader", "Lip Ring"]
    },
    "来": {
        "strokes": 7,
        "grade": 2,
        "freq": 102,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Come", "Due", "Next", "Cause", "Become"],
        "readings_on": ["らい", "たい"],
        "readings_kun": ["く.る", "きた.る", "きた.す", "き.たす", "き.たる", "き", "こ"],
        "wk_level": 5,
        "wk_meanings": ["Come", "^Next"],
        "wk_readings_on": ["らい"],
        "wk_readings_kun": ["!く"],
        "wk_radicals": ["Ground", "Rice"]
    },
    "学": {
        "strokes": 8,
        "grade": 1,
        "freq": 63,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Study", "Learning", "Science"],
        "readings_on": ["がく"],
        "readings_kun": ["まな.ぶ"],
        "wk_level": 5,
        "wk_meanings": ["Study", "^Learn", "^Learning"],
        "wk_readings_on": ["がく"],
        "wk_readings_kun": ["!まな"],
        "wk_radicals": ["Viking", "Child"]
    },
    "空": {
        "strokes": 8,
        "grade": 1,
        "freq": 304,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Empty", "Sky", "Void", "Vacant", "Vacuum"],
        "readings_on": ["くう"],
        "readings_kun": ["そら", "あ.く", "あ.き", "あ.ける", "から", "す.く", "す.かす", "むな.しい"],
        "wk_level": 5,
        "wk_meanings": ["Sky"],
        "wk_readings_on": ["くう"],
        "wk_readings_kun": ["!そら", "!あ", "!から", "!す"],
        "wk_radicals": ["Roof", "Legs", "Construction"]
    },
    "金": {
        "strokes": 8,
        "grade": 1,
        "freq": 53,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Gold"],
        "readings_on": ["きん", "こん", "ごん"],
        "readings_kun": ["かね", "かな-", "-がね"],
        "wk_level": 5,
        "wk_meanings": ["Gold"],
        "wk_readings_on": ["きん"],
        "wk_readings_kun": ["!かね"],
        "wk_radicals": ["Gold"]
    },
    "雨": {
        "strokes": 8,
        "grade": 1,
        "freq": 950,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Rain"],
        "readings_on": ["う"],
        "readings_kun": ["あめ", "あま-", "-さめ"],
        "wk_level": 5,
        "wk_meanings": ["Rain"],
        "wk_readings_on": ["!う"],
        "wk_readings_kun": ["あめ", "あま"],
        "wk_radicals": ["Rain"]

    },
    "国": {
        "strokes": 8,
        "grade": 2,
        "freq": 3,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Country"],
        "readings_on": ["こく"],
        "readings_kun": ["くに"],
        "wk_level": 6,
        "wk_meanings": ["Country"],
        "wk_readings_on": ["こく"],
        "wk_readings_kun": ["!くに"],
        "wk_radicals": ["Mouth", "King", "Drop"]
    },
    "東": {
        "strokes": 8,
        "grade": 2,
        "freq": 37,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["East"],
        "readings_on": ["とう"],
        "readings_kun": ["ひがし"],
        "wk_level": 6,
        "wk_meanings": ["East"],
        "wk_readings_on": ["とう"],
        "wk_readings_kun": ["!ひがし"],
        "wk_radicals": ["Tree", "Sun"]
    },
    "長": {
        "strokes": 8,
        "grade": 2,
        "freq": 12,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Long", "Leader", "Superior", "Senior"],
        "readings_on": ["ちょう"],
        "readings_kun": ["なが.い", "おさ"],
        "wk_level": 6,
        "wk_meanings": ["Long", "^Leader"],
        "wk_readings_on": ["ちょう"],
        "wk_readings_kun": ["!なが"],
        "wk_radicals": ["Long"]
    },
    "前": {
        "strokes": 9,
        "grade": 2,
        "freq": 27,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["In Front", "Before"],
        "readings_on": ["ぜん"],
        "readings_kun": ["まえ", "-まえ"],
        "wk_level": 6,
        "wk_meanings": ["Front", "^Before"],
        "wk_readings_on": ["ぜん"],
        "wk_readings_kun": ["!まえ"],
        "wk_radicals": ["Horns", "Ground", "Moon", "Knife"]
    },
    "南": {
        "strokes": 9,
        "grade": 2,
        "freq": 341,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["South"],
        "readings_on": ["なん", "な"],
        "readings_kun": ["みなみ"],
        "wk_level": 6,
        "wk_meanings": ["South"],
        "wk_readings_on": ["なん"],
        "wk_readings_kun": ["!みなみ"],
        "wk_radicals": ["Cross", "Head", "Horns", "Dry"]
    },
    "後": {
        "strokes": 9,
        "grade": 2,
        "freq": 26,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Behind", "Back", "Later"],
        "readings_on": ["ご", "こう"],
        "readings_kun": ["のち", "うし.ろ", "うしろ", "あと", "おく.れる"],
        "wk_level": 6,
        "wk_meanings": ["Behind", "^After", "^Back", "^Rear"],
        "wk_readings_on": ["ご", "こう"],
        "wk_readings_kun": ["!うし", "!あと", "!のち"],
        "wk_radicals": ["Loiter", "Poop", "Winter"]
    },
    "食": {
        "strokes": 9,
        "grade": 2,
        "freq": 328,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Eat", "Food"],
        "readings_on": ["しょく", "じき"],
        "readings_kun": ["く.う", "く.らう", "た.べる", "は.む"],
        "wk_level": 6,
        "wk_meanings": ["Eat", "^Meal"],
        "wk_readings_on": ["しょく"],
        "wk_readings_kun": ["!た", "!く"],
        "wk_radicals": ["Eat"]
    },
    "校": {
        "strokes": 10,
        "grade": 1,
        "freq": 294,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Exam", "School", "Printing", "Proof", "Correction"],
        "readings_on": ["こう", "きょう"],
        "readings_kun": [],
        "wk_level": 7,
        "wk_meanings": ["School"],
        "wk_readings_on": ["こう"],
        "wk_readings_kun": [],
        "wk_radicals": ["Tree", "Lid", "Father"]
    },
    "時": {
        "strokes": 10,
        "grade": 2,
        "freq": 16,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Time", "Hour"],
        "readings_on": ["じ"],
        "readings_kun": ["とき", "-どき"],
        "wk_level": 7,
        "wk_meanings": ["Time", "^O'clock", "^Hour"],
        "wk_readings_on": ["じ"],
        "wk_readings_kun": ["!とき"],
        "wk_radicals": ["Sun", "Temple"]
    },
    "高": {
        "strokes": 10,
        "grade": 2,
        "freq": 65,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Tall", "High", "Expensive"],
        "readings_on": ["こう"],
        "readings_kun": ["たか.い", "たか", "-だか", "たか.まる", "たか.める"],
        "wk_level": 7,
        "wk_meanings": ["Tall", "^Expensive", "^High"],
        "wk_readings_on": ["こう"],
        "wk_readings_kun": ["!たか"],
        "wk_radicals": ["Lid", "Mouth", "Mustache"]
    },
    "間": {
        "strokes": 12,
        "grade": 2,
        "freq": 33,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Interval", "Space"],
        "readings_on": ["かん", "けん"],
        "readings_kun": ["あいだ", "ま", "あい"],
        "wk_level": 8,
        "wk_meanings": ["Interval", "^Interval Of Time", "^Time Interval"],
        "wk_readings_on": ["かん", "^けん"],
        "wk_readings_kun": ["!あいだ", "!ま"],
        "wk_radicals": ["Gate", "Sun"]
    },
    "話": {
        "strokes": 13,
        "grade": 2,
        "freq": 134,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Tale", "Talk"],
        "readings_on": ["わ"],
        "readings_kun": ["はな.す", "はなし"],
        "wk_level": 8,
        "wk_meanings": ["Talk", "^Speak"],
        "wk_readings_on": ["わ"],
        "wk_readings_kun": ["!はな", "!はなし"],
        "wk_radicals": ["Say", "Tongue"]
    },
    "電": {
        "strokes": 13,
        "grade": 2,
        "freq": 268,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Electricity"],
        "readings_on": ["でん"],
        "readings_kun": [],
        "wk_level": 8,
        "wk_meanings": ["Electricity"],
        "wk_readings_on": ["でん"],
        "wk_readings_kun": [],
        "wk_radicals": ["Rain", "Rice Paddy", "Umbrella"]
    },
    "聞": {
        "strokes": 14,
        "grade": 2,
        "freq": 319,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Hear", "Ask", "Listen"],
        "readings_on": ["ぶん", "もん"],
        "readings_kun": ["き.く", "き.こえる"],
        "wk_level": 10,
        "wk_meanings": ["Hear"],
        "wk_readings_on": ["ぶん", "もん"],
        "wk_readings_kun": ["!き"],
        "wk_radicals": ["Gate", "Ear"]
    },
    "語": {
        "strokes": 14,
        "grade": 2,
        "freq": 301,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Word", "Speech", "Language"],
        "readings_on": ["ご"],
        "readings_kun": ["かた.る", "かた.らう"],
        "wk_level": 10,
        "wk_meanings": ["Language"],
        "wk_readings_on": ["ご"],
        "wk_readings_kun": ["!かた"],
        "wk_radicals": ["Say", "Five", "Mouth"]
    },
    "読": {
        "strokes": 14,
        "grade": 2,
        "freq": 618,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Read"],
        "readings_on": ["どく", "とく", "とう"],
        "readings_kun": ["よ.む", "-よ.み"],
        "wk_level": 10,
        "wk_meanings": ["Read"],
        "wk_readings_on": ["!とう", "!どく"],
        "wk_readings_kun": ["よ"],
        "wk_radicals": ["Say", "Sell"]
    },
    "生": {
        "strokes": 5,
        "grade": 1,
        "freq": 29,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Life", "Genuine", "Birth"],
        "readings_on": ["せい", "しょう"],
        "readings_kun": ["い.きる", "い.かす", "い.ける", "う.まれる", "うま.れる", "う.まれ", "うまれ", "う.む", "お.う", "は.える", "は.やす", "き", "なま", "なま-", "な.る", "な.す", "む.す", "-う"],
        "wk_level": 3,
        "wk_meanings": ["Life"],
        "wk_readings_on": ["せい", "しょう"],
        "wk_readings_kun": ["!い", "!なま", "!う", "!は", "!き"],
        "wk_radicals": ["Life"]
    },
    "書": {
        "strokes": 10,
        "grade": 2,
        "freq": 169,
        "jlpt_old": 4,
        "jlpt_new": 5,
        "meanings": ["Write"],
        "readings_on": ["しょ"],
        "readings_kun": ["か.く", "-が.き", "-がき"],
        "wk_level": 16,
        "wk_meanings": ["Write", "^Writing"],
        "wk_readings_on": ["しょ"],
        "wk_readings_kun": ["!か"],
        "wk_radicals": ["Brush", "Sun"]
    },


}
data4 = {
    "文": {
        "strokes": 4,
        "grade": 1,
        "freq": 190,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Sentence", "Literature", "Style", "Art", "Decoration", "Figures", "Plan", "Literary Radical (no. 67)"],
        "readings_on": ["ぶん", "もん"],
        "readings_kun": ["ふみ", "あや"],
        "wk_level": 2,
        "wk_meanings": ["Writing", "^Sentence"],
        "wk_readings_on": ["ぶん", "もん"],
        "wk_readings_kun": [],
        "wk_radicals": ["Writing"]
    },
    "犬": {
        "strokes": 4,
        "grade": 1,
        "freq": 1326,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Dog"],
        "readings_on": ["けん"],
        "readings_kun": ["いぬ", "いぬ-"],
        "wk_level": 2,
        "wk_meanings": ["Dog"],
        "wk_readings_on": ["!けん"],
        "wk_readings_kun": ["いぬ"],
        "wk_radicals": ["Dog"]
    },
    "正": {
        "strokes": 5,
        "grade": 1,
        "freq": 143,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Correct", "Justice", "Righteous", "10**40"],
        "readings_on": ["せい", "しょう"],
        "readings_kun": ["ただ.しい", "ただ.す", "まさ", "まさ.に"],
        "wk_level": 2,
        "wk_meanings": ["Correct"],
        "wk_readings_on": ["せい", "しょう"],
        "wk_readings_kun": ["!ただ", "!まさ"],
        "wk_radicals": ["Ground", "Stop"]
    },
    "田": {
        "strokes": 5,
        "grade": 1,
        "freq": 90,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Rice Field", "Rice Paddy"],
        "readings_on": ["でん"],
        "readings_kun": ["た"],
        "wk_level": 2,
        "wk_meanings": ["Rice Paddy", "^Rice Field", "^Field"],
        "wk_readings_on": ["!でん"],
        "wk_readings_kun": ["た"],
        "wk_radicals": ["Rice Paddy"]
    },
    "目": {
        "strokes": 5,
        "grade": 1,
        "freq": 76,
        "jlpt_old": 4,
        "jlpt_new": 4,
        "meanings": ["Eye", "Class", "Look", "Insight", "Experience", "Care", "Favor"],
        "readings_on": ["もく", "ぼく"],
        "readings_kun": ["め", "-め", "ま-"],
        "wk_level": 2,
        "wk_meanings": ["Eye"],
        "wk_readings_on": ["!もく"],
        "wk_readings_kun": ["め"],
        "wk_radicals": ["Eye"]
    },
    "立": {
        "strokes": 5,
        "grade": 1,
        "freq": 58,
        "jlpt_old": 4,
        "jlpt_new": 4,
        "meanings": ["Stand Up", "Rise", "Set Up", "Erect"],
        "readings_on": ["りつ", "りゅう", "りっとる"],
        "readings_kun": ["た.つ", "-た.つ", "た.ち-", "た.てる", "-た.てる", "た.て-", "たて-", "-た.て", "-だ.て", "-だ.てる"],
        "wk_level": 2,
        "wk_meanings": ["Stand"],
        "wk_readings_on": ["りつ", "りゅう"],
        "wk_readings_kun": ["!た"],
        "wk_radicals": ["Stand"]
    },
    "元": {
        "strokes": 4,
        "grade": 2,
        "freq": 192,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Beginning", "Former Time", "Origin"],
        "readings_on": ["げん", "がん"],
        "readings_kun": ["もと"],
        "wk_level": 3,
        "wk_meanings": ["Origin"],
        "wk_readings_on": ["げん", "がん"],
        "wk_readings_kun": ["!もと"],
        "wk_radicals": ["Origin"]
    },
    "公": {
        "strokes": 4,
        "grade": 2,
        "freq": 118,
        "jlpt_old": 2,
        "jlpt_new": 4,
        "meanings": ["Public", "Prince", "Official", "Governmental"],
        "readings_on": ["こう", "く"],
        "readings_kun": ["おおやけ"],
        "wk_level": 3,
        "wk_meanings": ["Public"],
        "wk_readings_on": ["こう"],
        "wk_readings_kun": [],
        "wk_radicals": ["Fins", "Private"]
    },
    "切": {
        "strokes": 4,
        "grade": 2,
        "freq": 324,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Cut", "Cutoff", "Be Sharp"],
        "readings_on": ["せつ", "さい"],
        "readings_kun": ["き.る", "-き.る", "き.り", "-き.り", "-ぎ.り", "き.れる", "-き.れる", "き.れ", "-き.れ", "-ぎ.れ"],
        "wk_level": 3,
        "wk_meanings": ["Cut"],
        "wk_readings_on": ["せつ"],
        "wk_readings_kun": ["!き"],
        "wk_radicals": ["Seven", "Sword"]
    },
    "少": {
        "strokes": 4,
        "grade": 2,
        "freq": 287,
        "jlpt_old": 4,
        "jlpt_new": 4,
        "meanings": ["Few", "Little"],
        "readings_on": ["しょう"],
        "readings_kun": ["すく.ない", "すこ.し"],
        "wk_level": 3,
        "wk_meanings": ["Few", "^A Little"],
        "wk_readings_on": ["しょう"],
        "wk_readings_kun": ["!すこ"],
        "wk_radicals": ["Small", "Slide"]
    },
    "心": {
        "strokes": 4,
        "grade": 2,
        "freq": 157,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Heart", "Mind", "Spirit", "Heart Radical (no. 61)"],
        "readings_on": ["しん"],
        "readings_kun": ["こころ", "-ごころ"],
        "wk_level": 3,
        "wk_meanings": ["Heart"],
        "wk_readings_on": ["しん"],
        "wk_readings_kun": ["!こころ"],
        "wk_radicals": ["Heart"]
    },
    "方": {
        "strokes": 4,
        "grade": 2,
        "freq": 46,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Direction", "Person", "Alternative"],
        "readings_on": ["ほう"],
        "readings_kun": ["かた", "-かた", "-がた"],
        "wk_level": 3,
        "wk_meanings": ["Direction", "^Way"],
        "wk_readings_on": ["ほう"],
        "wk_readings_kun": ["!かた"],
        "wk_radicals": ["Direction"]
    },
    "牛": {
        "strokes": 4,
        "grade": 2,
        "freq": 1202,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Cow"],
        "readings_on": ["ぎゅう"],
        "readings_kun": ["うし"],
        "wk_level": 3,
        "wk_meanings": ["Cow"],
        "wk_readings_on": ["ぎゅう"],
        "wk_readings_kun": ["!うし"],
        "wk_radicals": ["Cow"]
    },
    "止": {
        "strokes": 4,
        "grade": 2,
        "freq": 310,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Stop", "Halt"],
        "readings_on": ["し"],
        "readings_kun": ["と.まる", "-ど.まり", "と.める", "-と.める", "-ど.め", "とど.める", "とど.め", "とど.まる", "や.める", "や.む", "-や.む", "よ.す", "-さ.す", "-さ.し"],
        "wk_level": 3,
        "wk_meanings": ["Stop"],
        "wk_readings_on": ["し"],
        "wk_readings_kun": ["!と", "!や"],
        "wk_radicals": ["Stop"]
    },
    "兄": {
        "strokes": 5,
        "grade": 2,
        "freq": 1219,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Elder Brother", "Big Brother"],
        "readings_on": ["けい", "きょう"],
        "readings_kun": ["あに"],
        "wk_level": 5,
        "wk_meanings": ["Older Brother", "^Big Brother", "^Elder Brother"],
        "wk_readings_on": ["きょう"],
        "wk_readings_kun": ["!あに"],
        "wk_radicals": ["Mouth", "Legs"]
    },
    "冬": {
        "strokes": 5,
        "grade": 2,
        "freq": 1090,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Winter"],
        "readings_on": ["とう"],
        "readings_kun": ["ふゆ"],
        "wk_level": 3,
        "wk_meanings": ["Winter"],
        "wk_readings_on": ["!とう"],
        "wk_readings_kun": ["ふゆ"],
        "wk_radicals": ["Winter", "Two"]
    },
    "古": {
        "strokes": 5,
        "grade": 2,
        "freq": 509,
        "jlpt_old": 4,
        "jlpt_new": 4,
        "meanings": ["Old"],
        "readings_on": ["こ"],
        "readings_kun": ["ふる.い", "ふる-", "-ふる.す"],
        "wk_level": 3,
        "wk_meanings": ["Old"],
        "wk_readings_on": ["こ"],
        "wk_readings_kun": ["!ふる"],
        "wk_radicals": ["Old"]
    },
    "台": {
        "strokes": 5,
        "grade": 2,
        "freq": 262,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Pedestal", "A Stand", "Counter For Machines And Vehicles"],
        "readings_on": ["だい", "たい"],
        "readings_kun": ["うてな", "われ", "つかさ"],
        "wk_level": 3,
        "wk_meanings": ["Machine"],
        "wk_readings_on": ["だい", "^たい"],
        "wk_readings_kun": [],
        "wk_radicals": ["Private", "Mouth"]
    },
    "広": {
        "strokes": 5,
        "grade": 2,
        "freq": 263,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Wide", "Broad", "Spacious"],
        "readings_on": ["こう"],
        "readings_kun": ["ひろ.い", "ひろ.まる", "ひろ.める", "ひろ.がる", "ひろ.げる"],
        "wk_level": 3,
        "wk_meanings": ["Wide"],
        "wk_readings_on": ["!こう"],
        "wk_readings_kun": ["ひろ"],
        "wk_radicals": ["Canopy", "Private"]
    },
    "用": {
        "strokes": 5,
        "grade": 2,
        "freq": 107,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Utilize", "Business", "Service", "Use", "Employ"],
        "readings_on": ["よう"],
        "readings_kun": ["もち.いる"],
        "wk_level": 3,
        "wk_meanings": ["Task", "^Use"],
        "wk_readings_on": ["よう"],
        "wk_readings_kun": ["!もち"],
        "wk_radicals": ["Task"]
    },
    "世": {
        "strokes": 5,
        "grade": 3,
        "freq": 135,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Generation", "World", "Society", "Public"],
        "readings_on": ["せい", "せ", "そう"],
        "readings_kun": ["よ"],
        "wk_level": 4,
        "wk_meanings": ["World", "^Generation"],
        "wk_readings_on": ["せ", "せい"],
        "wk_readings_kun": ["!よ"],
        "wk_radicals": ["World"]
    },
    "主": {
        "strokes": 5,
        "grade": 3,
        "freq": 95,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Lord", "Chief", "Master", "Main Thing", "Principal"],
        "readings_on": ["しゅ", "す", "しゅう"],
        "readings_kun": ["ぬし", "おも", "あるじ"],
        "wk_level": 4,
        "wk_meanings": ["Master", "^Main"],
        "wk_readings_on": ["しゅ"],
        "wk_readings_kun": ["!おも", "!ぬし"],
        "wk_radicals": ["Master"]
    },
    "代": {
        "strokes": 5,
        "grade": 3,
        "freq": 66,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Substitute", "Change", "Convert", "Replace", "Period", "Age", "Counter For Decades Of Ages, Eras, Etc.", "Generation", "Charge", "Rate", "Fee"],
        "readings_on": ["だい", "たい"],
        "readings_kun": ["か.わる", "かわ.る", "かわ.り", "か.わり", "-がわ.り", "-が.わり", "か.える", "よ", "しろ"],
        "wk_level": 4,
        "wk_meanings": ["Substitute", "^Replace", "^Period", "^Age"],
        "wk_readings_on": ["だい"],
        "wk_readings_kun": ["!か", "!かわ", "!しろ"],
        "wk_radicals": ["Leader", "Ceremony"]
    },
    "写": {
        "strokes": 5,
        "grade": 3,
        "freq": 453,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Copy", "Be Photographed", "Describe"],
        "readings_on": ["しゃ", "じゃ"],
        "readings_kun": ["うつ.す", "うつ.る", "うつ-", "うつ.し"],
        "wk_level": 4,
        "wk_meanings": ["Copy"],
        "wk_readings_on": ["しゃ"],
        "wk_readings_kun": ["!うつ"],
        "wk_radicals": ["Forehead", "Ground", "Beggar"]
    },
    "去": {
        "strokes": 5,
        "grade": 3,
        "freq": 440,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Gone", "Past", "Quit", "Leave", "Elapse", "Eliminate", "Divorce"],
        "readings_on": ["きょ", "こ"],
        "readings_kun": ["さ.る", "-さ.る"],
        "wk_level": 4,
        "wk_meanings": ["Past"],
        "wk_readings_on": ["きょ", "こ"],
        "wk_readings_kun": ["!さ"],
        "wk_radicals": ["Dirt", "Private"]
    },
    "字": {
        "strokes": 6,
        "grade": 1,
        "freq": 485,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Character", "Letter", "Word", "Section Of Village"],
        "readings_on": ["じ"],
        "readings_kun": ["あざ", "あざな", "-な"],
        "wk_level": 4,
        "wk_meanings": ["Letter", "^Character", "^Symbol"],
        "wk_readings_on": ["じ"],
        "wk_readings_kun": [],
        "wk_radicals": ["Roof", "Child"]
    },

    "早": {
        "strokes": 6,
        "grade": 1,
        "freq": 402,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Early", "Fast"],
        "readings_on": ["そう", "さっ"],
        "readings_kun": ["はや.い", "はや", "はや-", "はや.まる", "はや.める", "さ-"],
        "wk_level": 4,
        "wk_meanings": ["Early", "^Fast", "^Quick"],
        "wk_readings_on": ["そう"],
        "wk_readings_kun": ["!はや", "!さ"],
        "wk_radicals": ["Sun", "Cross"]
    },
    "町": {
        "strokes": 7,
        "grade": 1,
        "freq": 292,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Town", "Village", "Block", "Street"],
        "readings_on": ["ちょう"],
        "readings_kun": ["まち"],
        "wk_level": 4,
        "wk_meanings": ["Town"],
        "wk_readings_on": ["ちょう"],
        "wk_readings_kun": ["!まち"],
        "wk_radicals": ["Rice Paddy", "Street"]
    },
    "花": {
        "strokes": 7,
        "grade": 1,
        "freq": 578,
        "jlpt_old": 4,
        "jlpt_new": 4,
        "meanings": ["Flower"],
        "readings_on": ["か", "け"],
        "readings_kun": ["はな"],
        "wk_level": 4,
        "wk_meanings": ["Flower"],
        "wk_readings_on": ["!か", "!け"],
        "wk_readings_kun": ["はな"],
        "wk_radicals": ["Flowers", "Leader", "Spoon"]
    },

    "貝": {
        "strokes": 7,
        "grade": 1,
        "freq": 1787,
        "jlpt_old": 2,
        "jlpt_new": 2,
        "meanings": ["Shellfish"],
        "readings_on": ["ばい"],
        "readings_kun": ["かい"],
        "wk_level": 4,
        "wk_meanings": ["Shellfish", "^Shell"],
        "wk_readings_on": [],
        "wk_readings_kun": ["かい"],
        "wk_radicals": ["Shellfish"]
    },
    "赤": {
        "strokes": 7,
        "grade": 1,
        "freq": 584,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Red"],
        "readings_on": ["せき", "しゃく"],
        "readings_kun": ["あか", "あか-", "あか.い", "あか.らむ", "あか.らめる"],
        "wk_level": 4,
        "wk_meanings": ["Red"],
        "wk_readings_on": ["!せき"],
        "wk_readings_kun": ["あか"],
        "wk_radicals": ["Red"]
    },
    "足": {
        "strokes": 7,
        "grade": 1,
        "freq": 343,
        "jlpt_old": 4,
        "jlpt_new": 4,
        "meanings": ["Leg", "Foot", "Be Sufficient", "Counter For Pairs Of Footwear"],
        "readings_on": ["そく"],
        "readings_kun": ["あし", "た.りる", "た.る", "た.す"],
        "wk_level": 4,
        "wk_meanings": ["Foot", "^Leg", "^Sufficient"],
        "wk_readings_on": ["そく"],
        "wk_readings_kun": ["!あし", "!た"],
        "wk_radicals": ["Foot"]
    },
    "不": {
        "strokes": 4,
        "grade": 4,
        "freq": 101,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Negative", "Non-", "Bad", "Ugly", "Clumsy"],
        "readings_on": ["ふ", "ぶ"],
        "readings_kun": [],
        "wk_level": 4,
        "wk_meanings": ["Not"],
        "wk_readings_on": ["ふ"],
        "wk_readings_kun": [],
        "wk_radicals": ["Not"]
    },
    "仕": {
        "strokes": 5,
        "grade": 3,
        "freq": 439,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Attend", "Doing", "Official", "Serve"],
        "readings_on": ["し", "じ"],
        "readings_kun": ["つか.える"],
        "wk_level": 4,
        "wk_meanings": ["Doing", "^Do"],
        "wk_readings_on": ["し"],
        "wk_readings_kun": ["!つか"],
        "wk_radicals": ["Leader", "Samurai"]
    },
    "会": {
        "strokes": 6,
        "grade": 2,
        "freq": 4,
        "jlpt_old": 4,
        "jlpt_new": 4,
        "meanings": ["Meeting", "Meet", "Party", "Association", "Interview", "Join"],
        "readings_on": ["かい", "え"],
        "readings_kun": ["あ.う", "あ.わせる", "あつ.まる"],
        "wk_level": 5,
        "wk_meanings": ["Meet"],
        "wk_readings_on": ["かい"],
        "wk_readings_kun": ["!あ"],
        "wk_radicals": ["Meet"]
    },
    "同": {
        "strokes": 6,
        "grade": 2,
        "freq": 15,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Same", "Agree", "Equal"],
        "readings_on": ["どう"],
        "readings_kun": ["おな.じ"],
        "wk_level": 5,
        "wk_meanings": ["Same"],
        "wk_readings_on": ["どう"],
        "wk_readings_kun": ["!おな"],
        "wk_radicals": ["Mustache", "Ground"]
    },
    "多": {
        "strokes": 6,
        "grade": 2,
        "freq": 139,
        "jlpt_old": 4,
        "jlpt_new": 4,
        "meanings": ["Many", "Frequent", "Much"],
        "readings_on": ["た"],
        "readings_kun": ["おお.い", "まさ.に", "まさ.る"],
        "wk_level": 5,
        "wk_meanings": ["Many", "^Much", "^Lots Of"],
        "wk_readings_on": ["た"],
        "wk_readings_kun": ["!おお"],
        "wk_radicals": ["Evening"]
    },
    "考": {
        "strokes": 6,
        "grade": 2,
        "freq": 196,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Consider", "Think Over"],
        "readings_on": ["こう"],
        "readings_kun": ["かんが.える", "かんが.え"],
        "wk_level": 5,
        "wk_meanings": ["Think", "^Consider"],
        "wk_readings_on": ["こう"],
        "wk_readings_kun": ["!かんが"],
        "wk_radicals": ["Coffin", "Beggar"]
    },
    "肉": {
        "strokes": 6,
        "grade": 2,
        "freq": 986,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Meat"],
        "readings_on": ["にく"],
        "readings_kun": ["しし"],
        "wk_level": 5,
        "wk_meanings": ["Meat"],
        "wk_readings_on": ["にく"],
        "wk_readings_kun": [],
        "wk_radicals": ["Meat"]
    },
    "自": {
        "strokes": 6,
        "grade": 2,
        "freq": 19,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Oneself"],
        "readings_on": ["じ", "し"],
        "readings_kun": ["みずか.ら", "おの.ずから", "おの.ずと"],
        "wk_level": 5,
        "wk_meanings": ["Self"],
        "wk_readings_on": ["じ", "し"],
        "wk_readings_kun": [],
        "wk_radicals": ["Self"]
    },
    "色": {
        "strokes": 6,
        "grade": 2,
        "freq": 621,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Color"],
        "readings_on": ["しょく", "しき"],
        "readings_kun": ["いろ"],
        "wk_level": 5,
        "wk_meanings": ["Color"],
        "wk_readings_on": ["!しき", "!しょく"],
        "wk_readings_kun": ["いろ"],
        "wk_radicals": ["Color"]
    },

    "体": {
        "strokes": 7,
        "grade": 2,
        "freq": 88,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Body", "Substance", "Object", "Reality", "Counter For Images"],
        "readings_on": ["たい", "てい"],
        "readings_kun": ["からだ", "かたち"],
        "wk_level": 5,
        "wk_meanings": ["Body"],
        "wk_readings_on": ["たい"],
        "wk_readings_kun": ["!からだ"],
        "wk_radicals": ["Leader", "Book"]
    },
    "作": {
        "strokes": 7,
        "grade": 2,
        "freq": 103,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Make", "Production", "Prepare", "Build"],
        "readings_on": ["さく", "さ"],
        "readings_kun": ["つく.る", "つく.り", "-づく.り"],
        "wk_level": 5,
        "wk_meanings": ["Make"],
        "wk_readings_on": ["さく", "さ"],
        "wk_readings_kun": ["!つく"],
        "wk_radicals": ["Leader", "Key"]
    },
    "図": {
        "strokes": 7,
        "grade": 2,
        "freq": 539,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Map", "Drawing", "Plan", "Extraordinary", "Audacious"],
        "readings_on": ["ず", "と"],
        "readings_kun": ["え", "はか.る"],
        "wk_level": 5,
        "wk_meanings": ["Diagram"],
        "wk_readings_on": ["ず", "と"],
        "wk_readings_kun": ["!え", "!はか"],
        "wk_radicals": ["Mouth", "Treasure", "Ice"]
    },
    "売": {
        "strokes": 7,
        "grade": 2,
        "freq": 202,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Sell"],
        "readings_on": ["ばい"],
        "readings_kun": ["う.る", "う.れる"],
        "wk_level": 9,
        "wk_meanings": ["Sell"],
        "wk_readings_on": ["ばい"],
        "wk_readings_kun": ["!う"],
        "wk_radicals": ["Samurai", "Forehead", "Legs"]
    },
    "弟": {
        "strokes": 7,
        "grade": 2,
        "freq": 1161,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Younger Brother", "Faithful Service To Elders"],
        "readings_on": ["てい", "だい", "で"],
        "readings_kun": ["おとうと"],
        "wk_level": 5,
        "wk_meanings": ["Younger Brother", "^Little Brother"],
        "wk_readings_on": ["だい", "で", "^てい"],
        "wk_readings_kun": ["!おとうと"],
        "wk_radicals": ["Horns", "Bow", "Stick", "Slide"]
    },
    "社": {
        "strokes": 7,
        "grade": 2,
        "freq": 21,
        "jlpt_old": 4,
        "jlpt_new": 4,
        "meanings": ["Company", "Firm", "Office", "Association", "Shrine"],
        "readings_on": ["しゃ"],
        "readings_kun": ["やしろ"],
        "wk_level": 5,
        "wk_meanings": ["Company"],
        "wk_readings_on": ["しゃ"],
        "wk_readings_kun": ["!やしろ"],
        "wk_radicals": ["Spirit", "Dirt"]
    },
    "言": {
        "strokes": 7,
        "grade": 2,
        "freq": 83,
        "jlpt_old": 4,
        "jlpt_new": 4,
        "meanings": ["Say", "Word"],
        "readings_on": ["げん", "ごん"],
        "readings_kun": ["い.う", "こと"],
        "wk_level": 5,
        "wk_meanings": ["Say"],
        "wk_readings_on": ["げん", "^ごん"],
        "wk_readings_kun": ["!い", "!こと"],
        "wk_radicals": ["Say"]
    },
    "走": {
        "strokes": 7,
        "grade": 2,
        "freq": 626,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Run"],
        "readings_on": ["そう"],
        "readings_kun": ["はし.る"],
        "wk_level": 5,
        "wk_meanings": ["Run"],
        "wk_readings_on": ["そう"],
        "wk_readings_kun": ["!はし"],
        "wk_radicals": ["Run"]
    },
    "近": {
        "strokes": 7,
        "grade": 2,
        "freq": 194,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Near", "Early", "Akin", "Tantamount"],
        "readings_on": ["きん", "こん"],
        "readings_kun": ["ちか.い"],
        "wk_level": 5,
        "wk_meanings": ["Near", "^Close"],
        "wk_readings_on": ["きん", "^こん"],
        "wk_readings_kun": ["!ちか"],
        "wk_radicals": ["Scooter", "Axe"]
    },
    "青": {
        "strokes": 8,
        "grade": 1,
        "freq": 589,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Blue", "Green"],
        "readings_on": ["せい", "しょう"],
        "readings_kun": ["あお", "あお-", "あお.い"],
        "wk_level": 5,
        "wk_meanings": ["Blue"],
        "wk_readings_on": ["せい", "しょう"],
        "wk_readings_kun": ["!あお"],
        "wk_radicals": ["Blue"]
    },
    "音": {
        "strokes": 9,
        "grade": 1,
        "freq": 491,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Sound", "Noise"],
        "readings_on": ["おん", "いん", "-のん"],
        "readings_kun": ["おと", "ね"],
        "wk_level": 5,
        "wk_meanings": ["Sound"],
        "wk_readings_on": ["おん"],
        "wk_readings_kun": ["!おと", "!ね"],
        "wk_radicals": ["Stand", "Sun"]
    },
    "地": {
        "strokes": 6,
        "grade": 2,
        "freq": 40,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Ground", "Earth"],
        "readings_on": ["ち", "じ"],
        "readings_kun": [],
        "wk_level": 6,
        "wk_meanings": ["Earth", "^Ground"],
        "wk_readings_on": ["ち", "^じ"],
        "wk_readings_kun": [],
        "wk_radicals": ["Dirt", "Alligator"]
    },
    "安": {
        "strokes": 6,
        "grade": 3,
        "freq": 144,
        "jlpt_old": 4,
        "jlpt_new": 4,
        "meanings": ["Relax", "Cheap", "Low", "Quiet", "Rested", "Contented", "Peaceful"],
        "readings_on": ["あん"],
        "readings_kun": ["やす.い", "やす.まる", "やす", "やす.らか"],
        "wk_level": 6,
        "wk_meanings": ["Relax", "^Cheap"],
        "wk_readings_on": ["あん"],
        "wk_readings_kun": ["!やす"],
        "wk_radicals": ["Roof", "Woman"]
    },
    "有": {
        "strokes": 6,
        "grade": 3,
        "freq": 282,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Possess", "Have", "Exist", "Happen", "Occur", "Approx"],
        "readings_on": ["ゆう", "う"],
        "readings_kun": ["あ.る"],
        "wk_level": 6,
        "wk_meanings": ["Have"],
        "wk_readings_on": ["ゆう", "^う"],
        "wk_readings_kun": ["!あ"],
        "wk_radicals": ["Narwhal", "Moon"]
    },
    "死": {
        "strokes": 6,
        "grade": 3,
        "freq": 229,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Death", "Die"],
        "readings_on": ["し"],
        "readings_kun": ["し.ぬ", "し.に-"],
        "wk_level": 6,
        "wk_meanings": ["Death"],
        "wk_readings_on": ["し"],
        "wk_readings_kun": ["!し"],
        "wk_radicals": ["Yakuza", "Spoon"]
    },
    "京": {
        "strokes": 8,
        "grade": 2,
        "freq": 74,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Capital", "10**16"],
        "readings_on": ["きょう", "けい", "きん"],
        "readings_kun": ["みやこ"],
        "wk_level": 6,
        "wk_meanings": ["Capital"],
        "wk_readings_on": ["きょう"],
        "wk_readings_kun": ["!みやこ"],
        "wk_radicals": ["Lid", "Mouth", "Small"]
    },

    "夜": {
        "strokes": 8,
        "grade": 2,
        "freq": 487,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Night", "Evening"],
        "readings_on": ["や"],
        "readings_kun": ["よ", "よる"],
        "wk_level": 6,
        "wk_meanings": ["Night", "^Evening"],
        "wk_readings_on": ["や"],
        "wk_readings_kun": ["!よ", "!よる"],
        "wk_radicals": ["Lid", "Leader", "Winter", "Drop"]
    },
    "妹": {
        "strokes": 8,
        "grade": 2,
        "freq": 1446,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Younger Sister"],
        "readings_on": ["まい"],
        "readings_kun": ["いもうと"],
        "wk_level": 6,
        "wk_meanings": ["Younger Sister", "^Little Sister"],
        "wk_readings_on": ["まい"],
        "wk_readings_kun": ["!いもうと"],
        "wk_radicals": ["Woman", "Jet"]
    },
    "姉": {
        "strokes": 8,
        "grade": 2,
        "freq": 1473,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Elder Sister"],
        "readings_on": ["し"],
        "readings_kun": ["あね", "はは"],
        "wk_level": 6,
        "wk_meanings": ["Older Sister", "^Big Sister", "^Elder Sister"],
        "wk_readings_on": ["し"],
        "wk_readings_kun": ["!お", "!あね", "!ねえ"],
        "wk_radicals": ["Woman", "City"]
    },
    "店": {
        "strokes": 8,
        "grade": 2,
        "freq": 378,
        "jlpt_old": 4,
        "jlpt_new": 4,
        "meanings": ["Store", "Shop"],
        "readings_on": ["てん"],
        "readings_kun": ["みせ", "たな"],
        "wk_level": 6,
        "wk_meanings": ["Shop", "^Store"],
        "wk_readings_on": ["てん"],
        "wk_readings_kun": ["!みせ"],
        "wk_radicals": ["Canopy", "Fortune"]
    },
    "明": {
        "strokes": 8,
        "grade": 2,
        "freq": 67,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Bright", "Light"],
        "readings_on": ["めい", "みょう", "みん"],
        "readings_kun": ["あ.かり", "あか.るい", "あか.るむ", "あか.らむ", "あき.らか", "あ.ける", "-あ.け", "あ.く", "あ.くる", "あ.かす"],
        "wk_level": 6,
        "wk_meanings": ["Bright"],
        "wk_readings_on": ["めい"],
        "wk_readings_kun": ["!あ", "!あか", "!あき"],
        "wk_radicals": ["Sun", "Moon"]
    },

    "歩": {
        "strokes": 8,
        "grade": 2,
        "freq": 554,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Walk", "Counter For Steps"],
        "readings_on": ["ほ", "ぶ", "ふ"],
        "readings_kun": ["ある.く", "あゆ.む"],
        "wk_level": 6,
        "wk_meanings": ["Walk"],
        "wk_readings_on": ["ほ"],
        "wk_readings_kun": ["!ある", "!あゆ"],
        "wk_radicals": ["Stop", "Small", "Slide"]
    },
    "画": {
        "strokes": 8,
        "grade": 2,
        "freq": 199,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Brush-stroke", "Picture"],
        "readings_on": ["が", "かく", "え", "かい"],
        "readings_kun": ["えが.く", "かく.する", "かぎ.る", "はかりごと", "はか.る"],
        "wk_level": 6,
        "wk_meanings": ["Drawing", "^Picture", "^Painting"],
        "wk_readings_on": ["が", "かく"],
        "wk_readings_kun": [],
        "wk_radicals": ["Leaf", "Rice Paddy", "Box"]
    },
    "知": {
        "strokes": 8,
        "grade": 2,
        "freq": 205,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Know", "Wisdom"],
        "readings_on": ["ち"],
        "readings_kun": ["し.る", "し.らせる"],
        "wk_level": 6,
        "wk_meanings": ["Know"],
        "wk_readings_on": ["ち"],
        "wk_readings_kun": ["!し"],
        "wk_radicals": ["Arrow", "Mouth"]
    },

    "室": {
        "strokes": 9,
        "grade": 2,
        "freq": 550,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Room", "Apartment", "Chamber", "Greenhouse", "Cellar"],
        "readings_on": ["しつ"],
        "readings_kun": ["むろ"],
        "wk_level": 6,
        "wk_meanings": ["Room"],
        "wk_readings_on": ["しつ"],
        "wk_readings_kun": [],
        "wk_radicals": ["Roof", "Ground", "Private", "Dirt"]
    },
    "思": {
        "strokes": 9,
        "grade": 2,
        "freq": 132,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Think"],
        "readings_on": ["し"],
        "readings_kun": ["おも.う", "おもえら.く", "おぼ.す"],
        "wk_level": 6,
        "wk_meanings": ["Think", "^Thought"],
        "wk_readings_on": ["し"],
        "wk_readings_kun": ["!おも"],
        "wk_radicals": ["Rice Paddy", "Heart"]
    },
    "海": {
        "strokes": 9,
        "grade": 2,
        "freq": 200,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Sea", "Ocean"],
        "readings_on": ["かい"],
        "readings_kun": ["うみ"],
        "wk_level": 6,
        "wk_meanings": ["Sea", "^Ocean"],
        "wk_readings_on": ["かい"],
        "wk_readings_kun": ["!うみ"],
        "wk_radicals": ["Tsunami", "Gun", "Window"]
    },
    "茶": {
        "strokes": 9,
        "grade": 2,
        "freq": 1116,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Tea"],
        "readings_on": ["ちゃ", "さ"],
        "readings_kun": [],
        "wk_level": 6,
        "wk_meanings": ["Tea"],
        "wk_readings_on": ["ちゃ", "さ"],
        "wk_readings_kun": [],
        "wk_radicals": ["Flowers", "Hat", "Angel"]
    },
    "以": {
        "strokes": 5,
        "grade": 4,
        "freq": 126,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["By Means Of", "Because", "In View Of", "Compared With"],
        "readings_on": ["い"],
        "readings_kun": ["もっ.て"],
        "wk_level": 7,
        "wk_meanings": ["From", "^Since", "^Compared With", "^With", "^By Means Of"],
        "wk_readings_on": ["い"],
        "wk_readings_kun": [],
        "wk_radicals": ["Lion", "Drop", "Person"]
    },
    "夏": {
        "strokes": 10,
        "grade": 2,
        "freq": 659,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Summer"],
        "readings_on": ["か", "が", "げ"],
        "readings_kun": ["なつ"],
        "wk_level": 7,
        "wk_meanings": ["Summer"],
        "wk_readings_on": ["!げ", "!か", "!が"],
        "wk_readings_kun": ["なつ"],
        "wk_radicals": ["Leaf", "Eye", "Winter"]
    },
    "家": {
        "strokes": 10,
        "grade": 2,
        "freq": 133,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["House", "Home", "Family", "Professional", "Expert", "Performer"],
        "readings_on": ["か", "け"],
        "readings_kun": ["いえ", "や", "うち"],
        "wk_level": 7,
        "wk_meanings": ["House", "^Home"],
        "wk_readings_on": ["か", "^け"],
        "wk_readings_kun": ["!いえ", "!や", "!うち"],
        "wk_radicals": ["Roof", "Pig"]
    },
    "紙": {
        "strokes": 10,
        "grade": 2,
        "freq": 559,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Paper"],
        "readings_on": ["し"],
        "readings_kun": ["かみ"],
        "wk_level": 7,
        "wk_meanings": ["Paper"],
        "wk_readings_on": ["!し"],
        "wk_readings_kun": ["かみ"],
        "wk_radicals": ["Thread", "Clan"]
    },
    "通": {
        "strokes": 10,
        "grade": 2,
        "freq": 80,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Traffic", "Pass Through", "Avenue", "Commute", "Counter For Letters, Notes, Documents, Etc."],
        "readings_on": ["つう", "つ"],
        "readings_kun": ["とお.る", "とお.り", "-とお.り", "-どお.り", "とお.す", "とお.し", "-どお.し", "かよ.う"],
        "wk_level": 7,
        "wk_meanings": ["Pass Through"],
        "wk_readings_on": ["つう"],
        "wk_readings_kun": ["!とお", "!かよ"],
        "wk_radicals": ["Scooter", "Mama", "Task"]
    },

    "強": {
        "strokes": 11,
        "grade": 2,
        "freq": 112,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Strong"],
        "readings_on": ["きょう", "ごう"],
        "readings_kun": ["つよ.い", "つよ.まる", "つよ.める", "し.いる", "こわ.い"],
        "wk_level": 7,
        "wk_meanings": ["Strong", "^Strength"],
        "wk_readings_on": ["きょう"],
        "wk_readings_kun": ["!つよ"],
        "wk_radicals": ["Bow", "Private", "Insect"]
    },
    "教": {
        "strokes": 11,
        "grade": 2,
        "freq": 166,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Teach", "Faith", "Doctrine"],
        "readings_on": ["きょう"],
        "readings_kun": ["おし.える", "おそ.わる"],
        "wk_level": 7,
        "wk_meanings": ["Teach"],
        "wk_readings_on": ["きょう"],
        "wk_readings_kun": ["!おし", "!おそ"],
        "wk_radicals": ["Teacher", "Winter"]
    },
    "理": {
        "strokes": 11,
        "grade": 2,
        "freq": 86,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Logic", "Arrangement", "Reason", "Justice", "Truth"],
        "readings_on": ["り"],
        "readings_kun": ["ことわり"],
        "wk_level": 7,
        "wk_meanings": ["Reason"],
        "wk_readings_on": ["り"],
        "wk_readings_kun": ["!ことわり"],
        "wk_radicals": ["King", "Village"]
    },
    "週": {
        "strokes": 11,
        "grade": 2,
        "freq": 540,
        "jlpt_old": 4,
        "jlpt_new": 4,
        "meanings": ["Week"],
        "readings_on": ["しゅう"],
        "readings_kun": [],
        "wk_level": 7,
        "wk_meanings": ["Week"],
        "wk_readings_on": ["しゅう"],
        "wk_readings_kun": [],
        "wk_radicals": ["Scooter", "Circumference"]
    },
    "魚": {
        "strokes": 11,
        "grade": 2,
        "freq": 1208,
        "jlpt_old": 4,
        "jlpt_new": 4,
        "meanings": ["Fish"],
        "readings_on": ["ぎょ"],
        "readings_kun": ["うお", "さかな", "-ざかな"],
        "wk_level": 7,
        "wk_meanings": ["Fish"],
        "wk_readings_on": ["ぎょ"],
        "wk_readings_kun": ["!さかな"],
        "wk_radicals": ["Fish"]
    },
    "鳥": {
        "strokes": 11,
        "grade": 2,
        "freq": 1043,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Bird", "Chicken"],
        "readings_on": ["ちょう"],
        "readings_kun": ["とり"],
        "wk_level": 7,
        "wk_meanings": ["Bird"],
        "wk_readings_on": ["ちょう"],
        "wk_readings_kun": ["!とり"],
        "wk_radicals": ["Bird"]
    },
    "黒": {
        "strokes": 11,
        "grade": 2,
        "freq": 573,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Black"],
        "readings_on": ["こく"],
        "readings_kun": ["くろ", "くろ.ずむ", "くろ.い"],
        "wk_level": 7,
        "wk_meanings": ["Black"],
        "wk_readings_on": ["こく"],
        "wk_readings_kun": ["!くろ"],
        "wk_radicals": ["Black"]
    },
    "住": {
        "strokes": 7,
        "grade": 3,
        "freq": 270,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Dwell", "Reside", "Live", "Inhabit"],
        "readings_on": ["じゅう", "ぢゅう", "ちゅう"],
        "readings_kun": ["す.む", "す.まう", "-ず.まい"],
        "wk_level": 8,
        "wk_meanings": ["Dwelling", "^Reside", "^Dwell"],
        "wk_readings_on": ["じゅう"],
        "wk_readings_kun": ["!す"],
        "wk_radicals": ["Leader", "Master"]
    },
    "医": {
        "strokes": 7,
        "grade": 3,
        "freq": 437,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Doctor", "Medicine"],
        "readings_on": ["い"],
        "readings_kun": ["い.やす", "い.する", "くすし"],
        "wk_level": 8,
        "wk_meanings": ["Medicine"],
        "wk_readings_on": ["い"],
        "wk_readings_kun": [],
        "wk_radicals": ["Cage", "Arrow"]
    },
    "究": {
        "strokes": 7,
        "grade": 3,
        "freq": 368,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Research", "Study"],
        "readings_on": ["きゅう", "く"],
        "readings_kun": ["きわ.める"],
        "wk_level": 8,
        "wk_meanings": ["Research"],
        "wk_readings_on": ["きゅう"],
        "wk_readings_kun": ["!きわ"],
        "wk_radicals": ["Hole", "Nine"]
    },
    "者": {
        "strokes": 8,
        "grade": 3,
        "freq": 38,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Someone", "Person"],
        "readings_on": ["しゃ"],
        "readings_kun": ["もの"],
        "wk_level": 8,
        "wk_meanings": ["Someone", "^Somebody"],
        "wk_readings_on": ["しゃ"],
        "wk_readings_kun": ["!もの"],
        "wk_radicals": ["Coffin", "Sun"]
    },
    "研": {
        "strokes": 9,
        "grade": 3,
        "freq": 336,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Polish", "Study Of", "Sharpen"],
        "readings_on": ["けん"],
        "readings_kun": ["と.ぐ"],
        "wk_level": 8,
        "wk_meanings": ["Sharpen"],
        "wk_readings_on": ["けん"],
        "wk_readings_kun": ["!と"],
        "wk_radicals": ["Stone", "Lantern"]
    },
    "場": {
        "strokes": 12,
        "grade": 2,
        "freq": 52,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Location", "Place"],
        "readings_on": ["じょう", "ちょう"],
        "readings_kun": ["ば"],
        "wk_level": 8,
        "wk_meanings": ["Location", "^Place"],
        "wk_readings_on": ["じょう"],
        "wk_readings_kun": ["!ば"],
        "wk_radicals": ["Dirt", "Easy"]
    },
    "朝": {
        "strokes": 12,
        "grade": 2,
        "freq": 248,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Morning", "Dynasty", "Regime", "Epoch", "Period", "(north) Korea"],
        "readings_on": ["ちょう"],
        "readings_kun": ["あさ"],
        "wk_level": 8,
        "wk_meanings": ["Morning"],
        "wk_readings_on": ["!ちょう"],
        "wk_readings_kun": ["あさ"],
        "wk_radicals": ["Cross", "Sun", "Moon"]
    },
    "答": {
        "strokes": 12,
        "grade": 2,
        "freq": 486,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Solution", "Answer"],
        "readings_on": ["とう"],
        "readings_kun": ["こた.える", "こた.え"],
        "wk_level": 8,
        "wk_meanings": ["Answer", "^Response", "^Reply"],
        "wk_readings_on": ["!とう"],
        "wk_readings_kun": ["こた"],
        "wk_radicals": ["Bamboo", "Suit"]
    },
    "買": {
        "strokes": 12,
        "grade": 2,
        "freq": 520,
        "jlpt_old": 4,
        "jlpt_new": 4,
        "meanings": ["Buy"],
        "readings_on": ["ばい"],
        "readings_kun": ["か.う"],
        "wk_level": 8,
        "wk_meanings": ["Buy"],
        "wk_readings_on": ["!ばい"],
        "wk_readings_kun": ["か"],
        "wk_radicals": ["Net", "Shellfish"]
    },
    "道": {
        "strokes": 12,
        "grade": 2,
        "freq": 207,
        "jlpt_old": 4,
        "jlpt_new": 4,
        "meanings": ["Road-way", "Street", "District", "Journey", "Course", "Moral", "Teachings"],
        "readings_on": ["どう", "とう"],
        "readings_kun": ["みち", "いう"],
        "wk_level": 8,
        "wk_meanings": ["Road", "^Street", "^Path", "^Way"],
        "wk_readings_on": ["どう"],
        "wk_readings_kun": ["!みち"],
        "wk_radicals": ["Scooter", "Neck"]
    },
    "楽": {
        "strokes": 13,
        "grade": 2,
        "freq": 373,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Music", "Comfort", "Ease"],
        "readings_on": ["がく", "らく", "ごう"],
        "readings_kun": ["たの.しい", "たの.しむ", "この.む"],
        "wk_level": 8,
        "wk_meanings": ["Comfort", "^Ease", "^Pleasure"],
        "wk_readings_on": ["らく", "がく"],
        "wk_readings_kun": ["!たの"],
        "wk_radicals": ["White", "Ice", "Tree"]
    },
    "事": {
        "strokes": 8,
        "grade": 3,
        "freq": 18,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Matter", "Thing", "Fact", "Business", "Reason", "Possibly"],
        "readings_on": ["じ", "ず"],
        "readings_kun": ["こと", "つか.う", "つか.える"],
        "wk_level": 9,
        "wk_meanings": ["Action", "^Matter", "^Thing"],
        "wk_readings_on": ["じ"],
        "wk_readings_kun": ["!こと", "!つか"],
        "wk_radicals": ["Cross", "Mouth", "Brush"]
    },
    "使": {
        "strokes": 8,
        "grade": 3,
        "freq": 219,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Use", "Send On A Mission", "Order", "Messenger", "Envoy", "Ambassador", "Cause"],
        "readings_on": ["し"],
        "readings_kun": ["つか.う", "つか.い", "-つか.い", "-づか.い"],
        "wk_level": 9,
        "wk_meanings": ["Use"],
        "wk_readings_on": ["し"],
        "wk_readings_kun": ["!つか"],
        "wk_radicals": ["Leader", "Ground", "History"]
    },
    "始": {
        "strokes": 8,
        "grade": 3,
        "freq": 244,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Commence", "Begin"],
        "readings_on": ["し"],
        "readings_kun": ["はじ.める", "-はじ.める", "はじ.まる"],
        "wk_level": 10,
        "wk_meanings": ["Begin", "^Start"],
        "wk_readings_on": ["し"],
        "wk_readings_kun": ["!はじ"],
        "wk_radicals": ["Woman", "Machine"]
    },
    "服": {
        "strokes": 8,
        "grade": 3,
        "freq": 873,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Clothing", "Admit", "Obey", "Discharge"],
        "readings_on": ["ふく"],
        "readings_kun": [],
        "wk_level": 9,
        "wk_meanings": ["Clothes", "^Clothing"],
        "wk_readings_on": ["ふく"],
        "wk_readings_kun": [],
        "wk_radicals": ["Moon", "Stamp", "Stool"]
    },
    "物": {
        "strokes": 8,
        "grade": 3,
        "freq": 215,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Thing", "Object", "Matter"],
        "readings_on": ["ぶつ", "もつ"],
        "readings_kun": ["もの", "もの-"],
        "wk_level": 9,
        "wk_meanings": ["Thing"],
        "wk_readings_on": ["ぶつ", "^もつ"],
        "wk_readings_kun": ["!もの"],
        "wk_radicals": ["Cow", "Wing"]
    },
    "屋": {
        "strokes": 9,
        "grade": 3,
        "freq": 616,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Roof", "House", "Shop", "Dealer", "Seller"],
        "readings_on": ["おく"],
        "readings_kun": ["や"],
        "wk_level": 9,
        "wk_meanings": ["Roof", "^Shop", "^Store"],
        "wk_readings_on": ["!おく"],
        "wk_readings_kun": ["や"],
        "wk_radicals": ["Flag", "Ground", "Private", "Dirt"]
    },
    "度": {
        "strokes": 9,
        "grade": 3,
        "freq": 110,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Degrees", "Occurrence", "Time", "Counter For Occurrences", "Consider", "Attitude"],
        "readings_on": ["ど", "と", "たく"],
        "readings_kun": ["たび", "-た.い"],
        "wk_level": 9,
        "wk_meanings": ["Degrees", "^Occurrence"],
        "wk_readings_on": ["ど", "たく"],
        "wk_readings_kun": ["!たび"],
        "wk_radicals": ["Yurt", "Stool"]
    },
    "待": {
        "strokes": 9,
        "grade": 3,
        "freq": 391,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Wait", "Depend On"],
        "readings_on": ["たい"],
        "readings_kun": ["ま.つ", "-ま.ち"],
        "wk_level": 12,
        "wk_meanings": ["Wait"],
        "wk_readings_on": ["たい"],
        "wk_readings_kun": ["!ま"],
        "wk_radicals": ["Loiter", "Temple"]
    },
    "持": {
        "strokes": 9,
        "grade": 3,
        "freq": 119,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Hold", "Have"],
        "readings_on": ["じ"],
        "readings_kun": ["も.つ", "-も.ち", "も.てる"],
        "wk_level": 9,
        "wk_meanings": ["Hold"],
        "wk_readings_on": ["じ"],
        "wk_readings_kun": ["!も"],
        "wk_radicals": ["Fingers", "Temple"]
    },
    "界": {
        "strokes": 9,
        "grade": 3,
        "freq": 158,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["World", "Boundary"],
        "readings_on": ["かい"],
        "readings_kun": [],
        "wk_level": 9,
        "wk_meanings": ["World"],
        "wk_readings_on": ["かい"],
        "wk_readings_kun": [],
        "wk_radicals": ["Rice Paddy", "Jammed In"]
    },
    "発": {
        "strokes": 9,
        "grade": 3,
        "freq": 32,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Departure", "Discharge", "Publish", "Emit", "Start From", "Disclose", "Counter For Gunshots"],
        "readings_on": ["はつ", "ほつ"],
        "readings_kun": ["た.つ", "あば.く", "おこ.る", "つか.わす", "はな.つ"],
        "wk_level": 9,
        "wk_meanings": ["Departure"],
        "wk_readings_on": ["はつ"],
        "wk_readings_kun": [],
        "wk_radicals": ["Tent", "Lantern"]
    },
    "送": {
        "strokes": 9,
        "grade": 3,
        "freq": 311,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Escort", "Send"],
        "readings_on": ["そう"],
        "readings_kun": ["おく.る"],
        "wk_level": 9,
        "wk_meanings": ["Send"],
        "wk_readings_on": ["そう"],
        "wk_readings_kun": ["!おく"],
        "wk_radicals": ["Scooter", "Horns", "Heaven"]
    },
    "重": {
        "strokes": 9,
        "grade": 3,
        "freq": 193,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Heavy", "Important", "Esteem", "Respect", "Heap Up", "Pile Up", "Nest Of Boxes", "-fold"],
        "readings_on": ["じゅう", "ちょう"],
        "readings_kun": ["え", "おも.い", "おも.り", "おも.なう", "かさ.ねる", "かさ.なる", "おも"],
        "wk_level": 9,
        "wk_meanings": ["Heavy"],
        "wk_readings_on": ["じゅう", "^ちょう"],
        "wk_readings_kun": ["!おも", "!かさ", "!え"],
        "wk_radicals": ["Heavy"]
    },
    "起": {
        "strokes": 10,
        "grade": 3,
        "freq": 374,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Rouse", "Wake Up", "Get Up"],
        "readings_on": ["き"],
        "readings_kun": ["お.きる", "お.こる", "お.こす", "おこ.す", "た.つ"],
        "wk_level": 10,
        "wk_meanings": ["Wake Up"],
        "wk_readings_on": ["!き"],
        "wk_readings_kun": ["お"],
        "wk_radicals": ["Run", "Oneself"]
    },
    "院": {
        "strokes": 10,
        "grade": 3,
        "freq": 150,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Inst.", "Institution", "Temple", "Mansion", "School"],
        "readings_on": ["いん"],
        "readings_kun": [],
        "wk_level": 10,
        "wk_meanings": ["Institution"],
        "wk_readings_on": ["いん"],
        "wk_readings_kun": [],
        "wk_radicals": ["Building", "Roof", "Origin"]
    },
    "終": {
        "strokes": 11,
        "grade": 3,
        "freq": 256,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["End", "Finish"],
        "readings_on": ["しゅう"],
        "readings_kun": ["お.わる", "-お.わる", "おわ.る", "お.える", "つい", "つい.に"],
        "wk_level": 10,
        "wk_meanings": ["End", "^Finish"],
        "wk_readings_on": ["しゅう"],
        "wk_readings_kun": ["!おわ", "!お"],
        "wk_radicals": ["Thread", "Winter", "Two"]
    },
    "習": {
        "strokes": 11,
        "grade": 3,
        "freq": 706,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Learn"],
        "readings_on": ["しゅう", "じゅ"],
        "readings_kun": ["なら.う", "なら.い"],
        "wk_level": 10,
        "wk_meanings": ["Learn"],
        "wk_readings_on": ["しゅう"],
        "wk_readings_kun": ["!なら"],
        "wk_radicals": ["Feathers", "White"]
    },
    "転": {
        "strokes": 11,
        "grade": 3,
        "freq": 327,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Revolve", "Turn Around", "Change"],
        "readings_on": ["てん"],
        "readings_kun": ["ころ.がる", "ころ.げる", "ころ.がす", "ころ.ぶ", "まろ.ぶ", "うたた", "うつ.る", "くる.めく"],
        "wk_level": 10,
        "wk_meanings": ["Revolve"],
        "wk_readings_on": ["てん"],
        "wk_readings_kun": ["!ころ"],
        "wk_radicals": ["Car", "Cloud"]
    },
    "運": {
        "strokes": 12,
        "grade": 3,
        "freq": 255,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Carry", "Luck", "Destiny", "Fate", "Lot", "Transport", "Progress", "Advance"],
        "readings_on": ["うん"],
        "readings_kun": ["はこ.ぶ"],
        "wk_level": 10,
        "wk_meanings": ["Carry", "^Luck"],
        "wk_readings_on": ["うん"],
        "wk_readings_kun": ["!はこ"],
        "wk_radicals": ["Scooter", "Forehead", "Car"]
    },
    "開": {
        "strokes": 12,
        "grade": 3,
        "freq": 59,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Open", "Unfold", "Unseal"],
        "readings_on": ["かい"],
        "readings_kun": ["ひら.く", "ひら.き", "-びら.き", "ひら.ける", "あ.く", "あ.ける"],
        "wk_level": 10,
        "wk_meanings": ["Open"],
        "wk_readings_on": ["かい"],
        "wk_readings_kun": ["!あ", "!ひら"],
        "wk_radicals": ["Gate", "Lantern"]
    },
    "集": {
        "strokes": 12,
        "grade": 3,
        "freq": 210,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Gather", "Meet", "Congregate", "Swarm", "Flock"],
        "readings_on": ["しゅう"],
        "readings_kun": ["あつ.まる", "あつ.める", "つど.う"],
        "wk_level": 10,
        "wk_meanings": ["Collect", "^Gather"],
        "wk_readings_on": ["しゅう"],
        "wk_readings_kun": ["!あつ"],
        "wk_radicals": ["Turkey", "Tree"]
    },
    "飲": {
        "strokes": 12,
        "grade": 3,
        "freq": 969,
        "jlpt_old": 4,
        "jlpt_new": 4,
        "meanings": ["Drink", "Smoke", "Take"],
        "readings_on": ["いん", "おん"],
        "readings_kun": ["の.む", "-の.み"],
        "wk_level": 10,
        "wk_meanings": ["Drink"],
        "wk_readings_on": ["!いん"],
        "wk_readings_kun": ["の"],
        "wk_radicals": ["Eat", "Lack"]
    },
    "業": {
        "strokes": 13,
        "grade": 3,
        "freq": 43,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Business", "Vocation", "Arts", "Performance"],
        "readings_on": ["ぎょう", "ごう"],
        "readings_kun": ["わざ"],
        "wk_level": 10,
        "wk_meanings": ["Business"],
        "wk_readings_on": ["ぎょう"],
        "wk_readings_kun": [],
        "wk_radicals": ["Spikes", "Sheep", "Fins"]
    },
    "漢": {
        "strokes": 13,
        "grade": 3,
        "freq": 1487,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Sino-", "China"],
        "readings_on": ["かん"],
        "readings_kun": [],
        "wk_level": 10,
        "wk_meanings": ["Chinese", "^China"],
        "wk_readings_on": ["かん"],
        "wk_readings_kun": [],
        "wk_radicals": ["Tsunami", "Chinese"]
    },
    "歌": {
        "strokes": 14,
        "grade": 2,
        "freq": 519,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Song", "Sing"],
        "readings_on": ["か"],
        "readings_kun": ["うた", "うた.う"],
        "wk_level": 10,
        "wk_meanings": ["Song", "^Sing"],
        "wk_readings_on": ["か"],
        "wk_readings_kun": ["!うた"],
        "wk_radicals": ["Lip Ring", "Lack"]
    },
    "親": {
        "strokes": 16,
        "grade": 2,
        "freq": 406,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Parent", "Intimacy", "Relative", "Familiarity", "Dealer (cards)"],
        "readings_on": ["しん"],
        "readings_kun": ["おや", "おや-", "した.しい", "した.しむ"],
        "wk_level": 10,
        "wk_meanings": ["Parent"],
        "wk_readings_on": ["しん"],
        "wk_readings_kun": ["!おや", "!した"],
        "wk_radicals": ["Stand", "Tree", "See"]
    },
    "病": {
        "strokes": 10,
        "grade": 3,
        "freq": 384,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Ill", "Sick"],
        "readings_on": ["びょう", "へい"],
        "readings_kun": ["や.む", "-や.み", "やまい"],
        "wk_level": 10,
        "wk_meanings": ["Sick", "^Sickness", "^Ill", "^Illness"],
        "wk_readings_on": ["びょう"],
        "wk_readings_kun": ["!や", "!やまい"],
        "wk_radicals": ["Sick", "Dynamite"]
    },
    "別": {
        "strokes": 7,
        "grade": 4,
        "freq": 214,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Separate", "Branch Off", "Diverge", "Fork", "Another", "Extra", "Specially"],
        "readings_on": ["べつ"],
        "readings_kun": ["わか.れる", "わ.ける"],
        "wk_level": 11,
        "wk_meanings": ["Separate"],
        "wk_readings_on": ["べつ"],
        "wk_readings_kun": ["!わか"],
        "wk_radicals": ["Mouth", "Sword", "Knife"]
    },
    "注": {
        "strokes": 8,
        "grade": 3,
        "freq": 497,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Pour", "Irrigate", "Shed (tears)", "Flow Into", "Concentrate On", "Notes", "Comment", "Annotate"],
        "readings_on": ["ちゅう"],
        "readings_kun": ["そそ.ぐ", "さ.す", "つ.ぐ"],
        "wk_level": 11,
        "wk_meanings": ["Pour"],
        "wk_readings_on": ["ちゅう"],
        "wk_readings_kun": ["!そそ", "!さ", "!つ"],
        "wk_radicals": ["Tsunami", "Master"]
    },
    "洋": {
        "strokes": 9,
        "grade": 3,
        "freq": 763,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Ocean", "Sea", "Foreign", "Western Style"],
        "readings_on": ["よう"],
        "readings_kun": [],
        "wk_level": 11,
        "wk_meanings": ["Western Style", "^Ocean"],
        "wk_readings_on": ["よう"],
        "wk_readings_kun": [],
        "wk_radicals": ["Tsunami", "Sheep"]
    },
    "特": {
        "strokes": 10,
        "grade": 4,
        "freq": 234,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Special"],
        "readings_on": ["とく"],
        "readings_kun": [],
        "wk_level": 11,
        "wk_meanings": ["Special"],
        "wk_readings_on": ["とく"],
        "wk_readings_kun": [],
        "wk_radicals": ["Cow", "Temple"]
    },
    "意": {
        "strokes": 13,
        "grade": 3,
        "freq": 99,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Idea", "Mind", "Heart", "Taste", "Thought", "Desire", "Care", "Liking"],
        "readings_on": ["い"],
        "readings_kun": [],
        "wk_level": 11,
        "wk_meanings": ["Idea"],
        "wk_readings_on": ["い"],
        "wk_readings_kun": [],
        "wk_radicals": ["Sound", "Heart"]
    },
    "味": {
        "strokes": 8,
        "grade": 3,
        "freq": 442,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Flavor", "Taste"],
        "readings_on": ["み"],
        "readings_kun": ["あじ", "あじ.わう"],
        "wk_level": 11,
        "wk_meanings": ["Flavor", "^Taste"],
        "wk_readings_on": ["み"],
        "wk_readings_kun": ["!あじ"],
        "wk_radicals": ["Mouth", "Jet"]
    },
    "勉": {
        "strokes": 10,
        "grade": 3,
        "freq": 1066,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Exertion", "Endeavour", "Encourage", "Strive", "Make Effort", "Diligent"],
        "readings_on": ["べん"],
        "readings_kun": ["つと.める"],
        "wk_level": 12,
        "wk_meanings": ["Exertion"],
        "wk_readings_on": ["べん"],
        "wk_readings_kun": [],
        "wk_radicals": ["Excuse", "Power"]
    },
    "旅": {
        "strokes": 10,
        "grade": 3,
        "freq": 783,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Trip", "Travel"],
        "readings_on": ["りょ"],
        "readings_kun": ["たび"],
        "wk_level": 12,
        "wk_meanings": ["Trip", "^Travel"],
        "wk_readings_on": ["りょ"],
        "wk_readings_kun": ["!たび"],
        "wk_radicals": ["Direction", "Gun", "Tofu"]
    },
    "員": {
        "strokes": 10,
        "grade": 3,
        "freq": 54,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Employee", "Member", "Number", "The One In Charge"],
        "readings_on": ["いん"],
        "readings_kun": [],
        "wk_level": 12,
        "wk_meanings": ["Member"],
        "wk_readings_on": ["いん"],
        "wk_readings_kun": [],
        "wk_radicals": ["Mouth", "Shellfish"]
    },
    "動": {
        "strokes": 11,
        "grade": 3,
        "freq": 73,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Move", "Motion", "Change", "Confusion", "Shift", "Shake"],
        "readings_on": ["どう"],
        "readings_kun": ["うご.く", "うご.かす"],
        "wk_level": 12,
        "wk_meanings": ["Move"],
        "wk_readings_on": ["どう"],
        "wk_readings_kun": ["!うご"],
        "wk_radicals": ["Heavy", "Power"]
    },
    "悪": {
        "strokes": 11,
        "grade": 3,
        "freq": 530,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Bad", "Vice", "Rascal", "False", "Evil", "Wrong"],
        "readings_on": ["あく", "お"],
        "readings_kun": ["わる.い", "わる-", "あ.し", "にく.い", "-にく.い", "ああ", "いずくに", "いずくんぞ", "にく.む"],
        "wk_level": 12,
        "wk_meanings": ["Bad", "^Evil"],
        "wk_readings_on": ["あく", "^お"],
        "wk_readings_kun": ["!わる"],
        "wk_radicals": ["Asia", "Heart"]
    },
    "族": {
        "strokes": 11,
        "grade": 3,
        "freq": 393,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Tribe", "Family"],
        "readings_on": ["ぞく"],
        "readings_kun": [],
        "wk_level": 12,
        "wk_meanings": ["Tribe", "^Family"],
        "wk_readings_on": ["ぞく"],
        "wk_readings_kun": [],
        "wk_radicals": ["Direction", "Gun", "Arrow"]
    },
    "着": {
        "strokes": 12,
        "grade": 3,
        "freq": 376,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Don", "Arrive", "Wear", "Counter For Suits Of Clothing"],
        "readings_on": ["ちゃく", "じゃく"],
        "readings_kun": ["き.る", "-ぎ", "き.せる", "-き.せ", "つ.く", "つ.ける"],
        "wk_level": 12,
        "wk_meanings": ["Wear", "^Arrive"],
        "wk_readings_on": ["ちゃく"],
        "wk_readings_kun": ["!き", "!つ"],
        "wk_radicals": ["Horns", "King", "Slide", "Eye"]
    },
    "野": {
        "strokes": 11,
        "grade": 2,
        "freq": 120,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Plains", "Field", "Rustic", "Civilian Life"],
        "readings_on": ["や", "しょ"],
        "readings_kun": ["の", "の-"],
        "wk_level": 12,
        "wk_meanings": ["Field"],
        "wk_readings_on": ["や"],
        "wk_readings_kun": ["!の"],
        "wk_radicals": ["Village", "Beforehand"]
    },
    "風": {
        "strokes": 9,
        "grade": 2,
        "freq": 558,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Wind", "Air", "Style", "Manner"],
        "readings_on": ["ふう", "ふ"],
        "readings_kun": ["かぜ", "かざ-", "-かぜ"],
        "wk_level": 7,
        "wk_meanings": ["Wind", "^Style"],
        "wk_readings_on": ["ふう", "ふ"],
        "wk_readings_kun": ["!かぜ"],
        "wk_radicals": ["Table", "Slide", "Insect"]
    },
    "新": {
        "strokes": 13,
        "grade": 2,
        "freq": 51,
        "jlpt_old": 4,
        "jlpt_new": 4,
        "meanings": ["New"],
        "readings_on": ["しん"],
        "readings_kun": ["あたら.しい", "あら.た", "あら-", "にい-"],
        "wk_level": 9,
        "wk_meanings": ["New"],
        "wk_readings_on": ["しん"],
        "wk_readings_kun": ["!あたら", "!あら", "!にい"],
        "wk_radicals": ["Stand", "Tree", "Axe"]
    },
    "問": {
        "strokes": 11,
        "grade": 3,
        "freq": 64,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Question", "Ask", "Problem"],
        "readings_on": ["もん"],
        "readings_kun": ["と.う", "と.い", "とん"],
        "wk_level": 13,
        "wk_meanings": ["Problem"],
        "wk_readings_on": ["もん"],
        "wk_readings_kun": ["!と", "!とん"],
        "wk_radicals": ["Gate", "Mouth"]
    },
    "銀": {
        "strokes": 14,
        "grade": 3,
        "freq": 395,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Silver"],
        "readings_on": ["ぎん"],
        "readings_kun": ["しろがね"],
        "wk_level": 13,
        "wk_meanings": ["Silver"],
        "wk_readings_on": ["ぎん"],
        "wk_readings_kun": [],
        "wk_radicals": ["Gold", "Root"]
    },
    "題": {
        "strokes": 18,
        "grade": 3,
        "freq": 96,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Topic", "Subject"],
        "readings_on": ["だい"],
        "readings_kun": [],
        "wk_level": 13,
        "wk_meanings": ["Topic"],
        "wk_readings_on": ["だい"],
        "wk_readings_kun": [],
        "wk_radicals": ["Sun", "Correct", "Geoduck"]
    },
    "館": {
        "strokes": 16,
        "grade": 3,
        "freq": 613,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Building", "Mansion", "Large Building", "Palace"],
        "readings_on": ["かん"],
        "readings_kun": ["やかた", "たて"],
        "wk_level": 13,
        "wk_meanings": ["Public Building"],
        "wk_readings_on": ["かん"],
        "wk_readings_kun": [],
        "wk_radicals": ["Eat", "Roof", "Bear"]
    },
    "駅": {
        "strokes": 14,
        "grade": 3,
        "freq": 724,
        "jlpt_old": 4,
        "jlpt_new": 4,
        "meanings": ["Station"],
        "readings_on": ["えき"],
        "readings_kun": [],
        "wk_level": 13,
        "wk_meanings": ["Station", "^Train Station"],
        "wk_readings_on": ["えき"],
        "wk_readings_kun": [],
        "wk_radicals": ["Horse", "Shrimp"]
    },
    "料": {
        "strokes": 10,
        "grade": 4,
        "freq": 295,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Fee", "Materials"],
        "readings_on": ["りょう"],
        "readings_kun": [],
        "wk_level": 13,
        "wk_meanings": ["Fee", "^Material"],
        "wk_readings_on": ["りょう"],
        "wk_readings_kun": [],
        "wk_radicals": ["Rice", "Ladle"]
    },
    "映": {
        "strokes": 9,
        "grade": 6,
        "freq": 404,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Reflect", "Reflection", "Projection"],
        "readings_on": ["えい"],
        "readings_kun": ["うつ.る", "うつ.す", "は.える", "-ば.え"],
        "wk_level": 13,
        "wk_meanings": ["Reflect", "^Reflection"],
        "wk_readings_on": ["えい"],
        "wk_readings_kun": ["!うつ", "!は"],
        "wk_radicals": ["Sun", "Center"]
    },
    "私": {
        "strokes": 7,
        "grade": 6,
        "freq": 242,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Private", "I", "Me"],
        "readings_on": ["し"],
        "readings_kun": ["わたくし", "わたし"],
        "wk_level": 6,
        "wk_meanings": ["I", "^Private"],
        "wk_readings_on": ["し"],
        "wk_readings_kun": ["!わたし"],
        "wk_radicals": ["Grain", "Private"]
    },
    "帰": {
        "strokes": 10,
        "grade": 2,
        "freq": 504,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Homecoming", "Arrive At", "Lead To", "Result In"],
        "readings_on": ["き"],
        "readings_kun": ["かえ.る", "かえ.す", "おく.る", "とつ.ぐ"],
        "wk_level": 15,
        "wk_meanings": ["Return", "^Return Home"],
        "wk_readings_on": ["!き"],
        "wk_readings_kun": ["かえ"],
        "wk_radicals": ["Knife", "Wolverine", "Forehead", "Towel"]
    },
    "春": {
        "strokes": 9,
        "grade": 2,
        "freq": 579,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Springtime", "Spring (season)"],
        "readings_on": ["しゅん"],
        "readings_kun": ["はる"],
        "wk_level": 15,
        "wk_meanings": ["Spring"],
        "wk_readings_on": ["!しゅん"],
        "wk_readings_kun": ["はる"],
        "wk_radicals": ["Spring", "Sun"]
    },
    "昼": {
        "strokes": 9,
        "grade": 2,
        "freq": 1115,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Daytime", "Noon"],
        "readings_on": ["ちゅう"],
        "readings_kun": ["ひる"],
        "wk_level": 15,
        "wk_meanings": ["Noon"],
        "wk_readings_on": ["!ちゅう"],
        "wk_readings_kun": ["ひる"],
        "wk_radicals": ["Shrimp", "Sun", "Ground"]
    },
    "秋": {
        "strokes": 9,
        "grade": 2,
        "freq": 635,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Autumn"],
        "readings_on": ["しゅう"],
        "readings_kun": ["あき", "とき"],
        "wk_level": 15,
        "wk_meanings": ["Autumn", "^Fall"],
        "wk_readings_on": [],
        "wk_readings_kun": ["あき"],
        "wk_radicals": ["Grain", "Fire"]
    },
    "計": {
        "strokes": 9,
        "grade": 2,
        "freq": 228,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Plot", "Plan", "Scheme", "Measure"],
        "readings_on": ["けい"],
        "readings_kun": ["はか.る", "はか.らう"],
        "wk_level": 15,
        "wk_meanings": ["Measure", "^Measurement"],
        "wk_readings_on": ["けい"],
        "wk_readings_kun": ["!はか"],
        "wk_radicals": ["Say", "Cross"]
    },
    "建": {
        "strokes": 9,
        "grade": 4,
        "freq": 300,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Build"],
        "readings_on": ["けん", "こん"],
        "readings_kun": ["た.てる", "た.て", "-だ.て", "た.つ"],
        "wk_level": 15,
        "wk_meanings": ["Build", "^Construct"],
        "wk_readings_on": ["けん"],
        "wk_readings_kun": ["!た"],
        "wk_radicals": ["Yoga", "Brush"]
    },
    "英": {
        "strokes": 8,
        "grade": 4,
        "freq": 430,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["England", "English", "Hero", "Outstanding", "Calyx"],
        "readings_on": ["えい"],
        "readings_kun": ["はなぶさ"],
        "wk_level": 15,
        "wk_meanings": ["England", "^English"],
        "wk_readings_on": ["えい"],
        "wk_readings_kun": [],
        "wk_radicals": ["Flowers", "Center"]
    },
    "飯": {
        "strokes": 12,
        "grade": 4,
        "freq": 1046,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Meal", "Boiled Rice"],
        "readings_on": ["はん"],
        "readings_kun": ["めし"],
        "wk_level": 15,
        "wk_meanings": ["Meal", "^Food"],
        "wk_readings_on": ["はん"],
        "wk_readings_kun": ["!めし"],
        "wk_radicals": ["Eat", "Anti"]
    },
    "曜": {
        "strokes": 18,
        "grade": 2,
        "freq": 940,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Weekday"],
        "readings_on": ["よう"],
        "readings_kun": [],
        "wk_level": 16,
        "wk_meanings": ["Weekday", "^Day Of The Week"],
        "wk_readings_on": ["よう"],
        "wk_readings_kun": [],
        "wk_radicals": ["Sun", "Wolverine", "Turkey"]
    },
    "品": {
        "strokes": 9,
        "grade": 3,
        "freq": 225,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Goods", "Refinement", "Dignity", "Article", "Counter For Meal Courses"],
        "readings_on": ["ひん", "ほん"],
        "readings_kun": ["しな"],
        "wk_level": 16,
        "wk_meanings": ["Product", "^Article", "^Goods", "^Products"],
        "wk_readings_on": ["ひん"],
        "wk_readings_kun": ["!しな"],
        "wk_radicals": ["Products"]
    },
    "急": {
        "strokes": 9,
        "grade": 3,
        "freq": 309,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Hurry", "Emergency", "Sudden", "Steep"],
        "readings_on": ["きゅう"],
        "readings_kun": ["いそ.ぐ", "いそ.ぎ", "せ.く"],
        "wk_level": 16,
        "wk_meanings": ["Hurry"],
        "wk_readings_on": ["きゅう"],
        "wk_readings_kun": ["!いそ"],
        "wk_radicals": ["Prison", "Wolverine", "Heart"]
    },
    "真": {
        "strokes": 10,
        "grade": 3,
        "freq": 279,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["True", "Reality", "Buddhist Sect"],
        "readings_on": ["しん"],
        "readings_kun": ["ま", "ま-", "まこと"],
        "wk_level": 16,
        "wk_meanings": ["Reality"],
        "wk_readings_on": ["しん"],
        "wk_readings_kun": ["!ま"],
        "wk_radicals": ["Pope", "Ground", "Fins"]
    },
    "堂": {
        "strokes": 11,
        "grade": 4,
        "freq": 1010,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Public Chamber", "Hall"],
        "readings_on": ["どう"],
        "readings_kun": [],
        "wk_level": 17,
        "wk_meanings": ["Hall", "^Public Chamber"],
        "wk_readings_on": ["どう"],
        "wk_readings_kun": [],
        "wk_radicals": ["Viking", "Mouth", "Dirt"]
    },
    "試": {
        "strokes": 13,
        "grade": 4,
        "freq": 392,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Test", "Try", "Attempt", "Experiment", "Ordeal"],
        "readings_on": ["し"],
        "readings_kun": ["こころ.みる", "ため.す"],
        "wk_level": 9,
        "wk_meanings": ["Try", "^Attempt"],
        "wk_readings_on": ["し"],
        "wk_readings_kun": ["!こころ", "!ため"],
        "wk_radicals": ["Say", "Ceremony", "Construction"]
    },
    "借": {
        "strokes": 10,
        "grade": 4,
        "freq": 932,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Borrow", "Rent"],
        "readings_on": ["しゃく"],
        "readings_kun": ["か.りる"],
        "wk_level": 18,
        "wk_meanings": ["Borrow"],
        "wk_readings_on": ["しゃく"],
        "wk_readings_kun": ["!か"],
        "wk_radicals": ["Leader", "Long Ago"]
    },
    "験": {
        "strokes": 18,
        "grade": 4,
        "freq": 410,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Verification", "Effect", "Testing"],
        "readings_on": ["けん", "げん"],
        "readings_kun": ["あかし", "しるし", "ため.す", "ためし"],
        "wk_level": 9,
        "wk_meanings": ["Test"],
        "wk_readings_on": ["けん"],
        "wk_readings_kun": ["!ため", "!ためし"],
        "wk_radicals": ["Horse", "Squid"]
    },
    "質": {
        "strokes": 15,
        "grade": 5,
        "freq": 389,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Substance", "Quality", "Matter", "Temperament"],
        "readings_on": ["しつ", "しち", "ち"],
        "readings_kun": ["たち", "ただ.す", "もと", "わりふ"],
        "wk_level": 24,
        "wk_meanings": ["Quality"],
        "wk_readings_on": ["しつ", "^しち"],
        "wk_readings_kun": [],
        "wk_radicals": ["Axe", "Shellfish"]
    },
    "貸": {
        "strokes": 12,
        "grade": 5,
        "freq": 995,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Lend"],
        "readings_on": ["たい"],
        "readings_kun": ["か.す", "か.し-", "かし-"],
        "wk_level": 27,
        "wk_meanings": ["Lend"],
        "wk_readings_on": ["!たい"],
        "wk_readings_kun": ["か"],
        "wk_radicals": ["Substitute", "Shellfish"]
    },
    "力": {
        "strokes": 2,
        "grade": 1,
        "freq": 62,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Power", "Strength", "Strong", "Strain", "Bear Up", "Exert"],
        "readings_on": ["りょく", "りき", "りい"],
        "readings_kun": ["ちから"],
        "wk_level": 1,
        "wk_meanings": ["Power", "^Strength"],
        "wk_readings_on": ["りょく", "りき"],
        "wk_readings_kun": ["!ちから"],
        "wk_radicals": ["Power"]
    },
    "工": {
        "strokes": 3,
        "grade": 2,
        "freq": 299,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Craft", "Construction", "Katakana E Radical (no. 48)"],
        "readings_on": ["こう", "く", "ぐ"],
        "readings_kun": [],
        "wk_level": 1,
        "wk_meanings": ["Construction", "^Industry"],
        "wk_readings_on": ["こう", "^く"],
        "wk_readings_kun": [],
        "wk_radicals": ["Construction"]
    },
    "夕": {
        "strokes": 3,
        "grade": 1,
        "freq": 924,
        "jlpt_old": 3,
        "jlpt_new": 4,
        "meanings": ["Evening"],
        "readings_on": ["せき"],
        "readings_kun": ["ゆう"],
        "wk_level": 2,
        "wk_meanings": ["Evening"],
        "wk_readings_on": ["!せき"],
        "wk_readings_kun": ["ゆう"],
        "wk_radicals": ["Evening"]
    }
}
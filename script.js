//main page
const title = document.querySelector('.title');
const testBox = document.querySelector('#test-box')
const mainBox = document.querySelector('#landingContent')
const cardsBox = document.querySelector('#flashCards')
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
function makeList() {
    kanjiArray.forEach((kanji, index) => {
        // console.log("INDEX= ", index);
        // console.log("KANJI= ", kanji);
        let mainKanji = kanji;
        let translation = meaningsArray[index];
        let ons = onArray[index];
        let kuns = kunArray[index];
        let kanjiBox = document.createElement('div');
        let wordBox = document.createElement('div');
        let onBox = document.createElement('div');
        let kunBox = document.createElement('div');
        let infoBox = document.createElement('div');
        let kanjiBoxTit = document.createElement('h1');
        kanjiBoxTit.textContent = mainKanji;
        kanjiBox.classList.add('kanjiBox');
        infoBox.classList.add('infoBox');
        wordBox.append(translation);
        onBox.append(ons);
        kunBox.append(kuns);
        infoBox.append(wordBox, onBox, kunBox);
        kanjiBox.append(kanjiBoxTit);
        kanjiBox.append(infoBox);
        cardsBox.append(kanjiBox);
    });
};
function getN5() {
    kanjiArray = [];
    onArray = [];
    kunArray = [];
    meaningsArray = [];
    removeAllChildNodes(cardsBox);
    title.textContent = "";
    title.textContent = "N5 Kanji Study";
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
    makeList();
};
function getN4() {
    kanjiArray = [];
    onArray = [];
    kunArray = [];
    meaningsArray = [];
    removeAllChildNodes(cardsBox);
    title.textContent = "";
    title.textContent = "N4 Kanji Study";
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
    makeList();
};
function getN3() {
    kanjiArray = [];
    onArray = [];
    kunArray = [];
    meaningsArray = [];
    removeAllChildNodes(cardsBox);
    title.textContent = "";
    title.textContent = "N3 Kanji Study";
    for (const [key, value] of Object.entries(data3)) {
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
    makeList();
};
function getN2() {
    console.log("pooped myself");
    title.textContent = "N2 Kanji Study info unavailable";
};
function getN1() {
    console.log("pooped myself");
    title.textContent = "N1 Kanji Study info unavailable";
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
        "readings_on": ["イチ", "イツ"],
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
        "readings_on": ["ニ", "ジ"],
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
        "readings_on": ["キュウ", "ク"],
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
        "readings_on": ["シチ"],
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
        "readings_on": ["ジン", "ニン"],
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
        "readings_on": ["ニュウ", "ジュ"],
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
        "readings_on": ["ハチ"],
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
        "readings_on": ["ジュウ", "ジッ", "ジュッ"],
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
        "readings_on": ["サン", "ゾウ"],
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
        "readings_on": ["ジョウ", "ショウ", "シャン"],
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
        "readings_on": ["カ", "ゲ"],
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
        "readings_on": ["コウ", "ク"],
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
        "readings_on": ["ダイ", "タイ"],
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
        "readings_on": ["ジョ", "ニョ", "ニョウ"],
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
        "readings_on": ["サン", "セン"],
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
        "readings_on": ["セン"],
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
        "readings_on": ["ド", "ト"],
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
        "readings_on": ["セン"],
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
        "readings_on": ["シ", "ス", "ツ"],
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
        "readings_on": ["ショウ"],
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
        "readings_on": ["チュウ"],
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
        "readings_on": ["ゴ"],
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
        "readings_on": ["ロク", "リク"],
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
        "readings_on": ["エン"],
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
        "readings_on": ["テン"],
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
        "readings_on": ["シュ", "ズ"],
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
        "readings_on": ["ニチ", "ジツ"],
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
        "readings_on": ["ゲツ", "ガツ"],
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
        "readings_on": ["ボク", "モク"],
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
        "readings_on": ["スイ"],
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
        "readings_on": ["カ"],
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
        "readings_on": ["シュツ", "スイ"],
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
        "readings_on": ["ウ", "ユウ"],
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
        "readings_on": ["シ"],
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
        "readings_on": ["サ", "シャ"],
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
        "readings_on": ["ホン"],
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
        "readings_on": ["コン", "キン"],
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
        "readings_on": ["ハク", "ビャク"],
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
        "readings_on": ["マン", "バン"],
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
        "readings_on": ["ゴ"],
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
        "readings_on": ["ユウ"],
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
        "readings_on": ["フ"],
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
        "readings_on": ["ホク"],
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
        "readings_on": ["ハン"],
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
        "readings_on": ["ガイ", "ゲ"],
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
        "readings_on": ["ボ"],
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
        "readings_on": ["キュウ"],
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
        "readings_on": ["セン"],
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
        "readings_on": ["メイ", "ミョウ"],
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
        "readings_on": ["ネン"],
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
        "readings_on": ["キ", "ケ"],
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
        "readings_on": ["ヒャク", "ビャク"],
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
        "readings_on": ["ダン", "ナン"],
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
        "readings_on": ["ケン"],
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
        "readings_on": ["シャ"],
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
        "readings_on": ["マイ"],
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
        "readings_on": ["コウ", "ギョウ", "アン"],
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
        "readings_on": ["セイ", "サイ", "ス"],
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
        "readings_on": ["カ"],
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
        "readings_on": ["ライ", "タイ"],
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
        "readings_on": ["ガク"],
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
        "readings_on": ["クウ"],
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
        "readings_on": ["キン", "コン", "ゴン"],
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
        "readings_on": ["ウ"],
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
        "readings_on": ["コク"],
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
        "readings_on": ["トウ"],
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
        "readings_on": ["チョウ"],
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
        "readings_on": ["ゼン"],
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
        "readings_on": ["ナン", "ナ"],
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
        "readings_on": ["ゴ", "コウ"],
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
        "readings_on": ["ショク", "ジキ"],
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
        "readings_on": ["コウ", "キョウ"],
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
        "readings_on": ["ジ"],
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
        "readings_on": ["コウ"],
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
        "readings_on": ["カン", "ケン"],
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
        "readings_on": ["ワ"],
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
        "readings_on": ["デン"],
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
        "readings_on": ["ブン", "モン"],
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
        "readings_on": ["ゴ"],
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
        "readings_on": ["ドク", "トク", "トウ"],
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
        "readings_on": ["セイ", "ショウ"],
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
        "readings_on": ["ショ"],
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
        "readings_on": ["ブン", "モン"],
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
        "readings_on": ["ケン"],
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
        "readings_on": ["セイ", "ショウ"],
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
        "readings_on": ["デン"],
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
        "readings_on": ["モク", "ボク"],
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
        "readings_on": ["リツ", "リュウ", "リットル"],
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
        "readings_on": ["ゲン", "ガン"],
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
        "readings_on": ["コウ", "ク"],
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
        "readings_on": ["セツ", "サイ"],
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
        "readings_on": ["ショウ"],
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
        "readings_on": ["シン"],
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
        "readings_on": ["ホウ"],
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
        "readings_on": ["ギュウ"],
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
        "readings_on": ["シ"],
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
        "readings_on": ["ケイ", "キョウ"],
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
        "readings_on": ["トウ"],
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
        "readings_on": ["コ"],
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
        "readings_on": ["ダイ", "タイ"],
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
        "readings_on": ["コウ"],
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
        "readings_on": ["ヨウ"],
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
        "readings_on": ["セイ", "セ", "ソウ"],
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
        "readings_on": ["シュ", "ス", "シュウ"],
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
        "readings_on": ["ダイ", "タイ"],
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
        "readings_on": ["シャ", "ジャ"],
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
        "readings_on": ["キョ", "コ"],
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
        "readings_on": ["ジ"],
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
        "readings_on": ["ソウ", "サッ"],
        "readings_kun": ["はや.い", "はや", "はや-", "はや.まる", "はや.める", "さ-"],
        "wk_level": 4,
        "wk_meanings": ["Early", "^Fast", "^Quick"],
        "wk_readings_on": ["そう"],
        "wk_readings_kun": ["!はや", "!さ"],
        "wk_radicals": ["Sun", "Cross"]
    },
    //katakana stop here
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
data3 = {
    "才": {
        "strokes": 3,
        "grade": 2,
        "freq": 1497,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Genius", "Years Old", "Cubic Shaku"],
        "readings_on": ["さい"],
        "readings_kun": [],
        "wk_level": 2,
        "wk_meanings": ["Genius"],
        "wk_readings_on": ["さい"],
        "wk_readings_kun": [],
        "wk_radicals": ["Cross", "Slide"]
    },
    "王": {
        "strokes": 4,
        "grade": 1,
        "freq": 684,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["King", "Rule", "Magnate"],
        "readings_on": ["おう", "-のう"],
        "readings_kun": [],
        "wk_level": 2,
        "wk_meanings": ["King"],
        "wk_readings_on": ["おう"],
        "wk_readings_kun": [],
        "wk_radicals": ["King"]
    },
    "石": {
        "strokes": 5,
        "grade": 1,
        "freq": 342,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Stone"],
        "readings_on": ["せき", "しゃく", "こく"],
        "readings_kun": ["いし"],
        "wk_level": 4,
        "wk_meanings": ["Stone"],
        "wk_readings_on": ["せき"],
        "wk_readings_kun": ["!いし"],
        "wk_radicals": ["Stone"]
    },
    "内": {
        "strokes": 4,
        "grade": 2,
        "freq": 44,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Inside", "Within", "Between", "Among", "House", "Home"],
        "readings_on": ["ない", "だい"],
        "readings_kun": ["うち"],
        "wk_level": 3,
        "wk_meanings": ["Inside", "^Within"],
        "wk_readings_on": ["ない"],
        "wk_readings_kun": ["!うち"],
        "wk_radicals": ["Head", "Person"]
    },
    "太": {
        "strokes": 4,
        "grade": 2,
        "freq": 552,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["Plump", "Thick", "Big Around"],
        "readings_on": ["たい", "た"],
        "readings_kun": ["ふと.い", "ふと.る"],
        "wk_level": 3,
        "wk_meanings": ["Fat"],
        "wk_readings_on": ["たい", "た"],
        "wk_readings_kun": ["!ふと"],
        "wk_radicals": ["Big", "Drop"]
    },
    "引": {
        "strokes": 4,
        "grade": 2,
        "freq": 218,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["Pull", "Tug", "Jerk", "Admit", "Install", "Quote", "Refer To"],
        "readings_on": ["いん"],
        "readings_kun": ["ひ.く", "ひ.き", "ひ.き-", "-び.き", "ひ.ける"],
        "wk_level": 3,
        "wk_meanings": ["Pull"],
        "wk_readings_on": ["!いん"],
        "wk_readings_kun": ["ひ"],
        "wk_radicals": ["Bow", "Stick"]
    },
    "市": {
        "strokes": 5,
        "grade": 2,
        "freq": 42,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["Market", "City", "Town"],
        "readings_on": ["し"],
        "readings_kun": ["いち"],
        "wk_level": 3,
        "wk_meanings": ["City"],
        "wk_readings_on": ["し"],
        "wk_readings_kun": ["!いち"],
        "wk_radicals": ["Lid", "Towel"]
    },
    "他": {
        "strokes": 5,
        "grade": 3,
        "freq": 543,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Other", "Another", "The Others"],
        "readings_on": ["た"],
        "readings_kun": ["ほか"],
        "wk_level": 4,
        "wk_meanings": ["Other"],
        "wk_readings_on": ["た"],
        "wk_readings_kun": ["!ほか"],
        "wk_radicals": ["Leader", "Alligator"]
    },

    "号": {
        "strokes": 5,
        "grade": 3,
        "freq": 585,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Nickname", "Number", "Item", "Title", "Pseudonym", "Name", "Call"],
        "readings_on": ["ごう"],
        "readings_kun": ["さけ.ぶ", "よびな"],
        "wk_level": 4,
        "wk_meanings": ["Number"],
        "wk_readings_on": ["ごう"],
        "wk_readings_kun": [],
        "wk_radicals": ["Mouth", "Ground", "Prison"]
    },
    "平": {
        "strokes": 5,
        "grade": 3,
        "freq": 128,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Even", "Flat", "Peace"],
        "readings_on": ["へい", "びょう", "ひょう"],
        "readings_kun": ["たい.ら", "-だいら", "ひら", "ひら-"],
        "wk_level": 4,
        "wk_meanings": ["Flat", "^Peace"],
        "wk_readings_on": ["へい", "^ひょう", "^びょう"],
        "wk_readings_kun": ["!たいら", "!ひら"],
        "wk_radicals": ["Dry", "Horns"]
    },
    "打": {
        "strokes": 5,
        "grade": 3,
        "freq": 239,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Strike", "Hit", "Knock", "Pound", "Dozen"],
        "readings_on": ["だ", "だあす"],
        "readings_kun": ["う.つ", "う.ち-", "ぶ.つ"],
        "wk_level": 4,
        "wk_meanings": ["Hit"],
        "wk_readings_on": ["だ"],
        "wk_readings_kun": ["!う", "!ぶ"],
        "wk_radicals": ["Fingers", "Street"]
    },
    "申": {
        "strokes": 5,
        "grade": 3,
        "freq": 492,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Have The Honor To", "Sign Of The Monkey", "3-5pm", "Ninth Sign Of Chinese Zodiac"],
        "readings_on": ["しん"],
        "readings_kun": ["もう.す", "もう.し-", "さる"],
        "wk_level": 4,
        "wk_meanings": ["Say Humbly", "^Say", "^Humbly Say"],
        "wk_readings_on": ["!しん"],
        "wk_readings_kun": ["もう"],
        "wk_radicals": ["Cross", "Mouth"]
    },
    "礼": {
        "strokes": 5,
        "grade": 3,
        "freq": 1185,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Salute", "Bow", "Ceremony", "Thanks", "Remuneration"],
        "readings_on": ["れい", "らい"],
        "readings_kun": [],
        "wk_level": 4,
        "wk_meanings": ["Thanks"],
        "wk_readings_on": ["れい"],
        "wk_readings_kun": [],
        "wk_radicals": ["Spirit", "Umbrella"]
    },
    "耳": {
        "strokes": 6,
        "grade": 1,
        "freq": 1328,
        "jlpt_old": 4,
        "jlpt_new": 3,
        "meanings": ["Ear"],
        "readings_on": ["じ"],
        "readings_kun": ["みみ"],
        "wk_level": 4,
        "wk_meanings": ["Ear"],
        "wk_readings_on": ["!じ"],
        "wk_readings_kun": ["みみ"],
        "wk_radicals": ["Ear"]
    },
    "交": {
        "strokes": 6,
        "grade": 2,
        "freq": 178,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Mingle", "Mixing", "Association", "Coming & Going"],
        "readings_on": ["こう"],
        "readings_kun": ["まじ.わる", "まじ.える", "ま.じる", "まじ.る", "ま.ざる", "ま.ぜる", "-か.う", "か.わす", "かわ.す", "こもごも"],
        "wk_level": 5,
        "wk_meanings": ["Mix", "^Mingle"],
        "wk_readings_on": ["こう"],
        "wk_readings_kun": ["!まじ", "!ま", "!か"],
        "wk_radicals": ["Lid", "Father"]
    },

    "光": {
        "strokes": 6,
        "grade": 2,
        "freq": 527,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["Ray", "Light"],
        "readings_on": ["こう"],
        "readings_kun": ["ひか.る", "ひかり"],
        "wk_level": 5,
        "wk_meanings": ["Sunlight", "^Light"],
        "wk_readings_on": ["こう"],
        "wk_readings_kun": ["!ひかり", "!ひか"],
        "wk_radicals": ["Triceratops", "Pi"]
    },

    "回": {
        "strokes": 6,
        "grade": 2,
        "freq": 50,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["-times", "Round", "Game", "Revolve", "Counter For Occurrences"],
        "readings_on": ["かい", "え"],
        "readings_kun": ["まわ.る", "-まわ.る", "-まわ.り", "まわ.す", "-まわ.す", "まわ.し-", "-まわ.し", "もとお.る", "か.える"],
        "wk_level": 5,
        "wk_meanings": ["Times", "^Revolve"],
        "wk_readings_on": ["かい"],
        "wk_readings_kun": ["!まわ"],
        "wk_radicals": ["Mouth"]
    },

    "当": {
        "strokes": 6,
        "grade": 2,
        "freq": 91,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Hit", "Right", "Appropriate", "Himself"],
        "readings_on": ["とう"],
        "readings_kun": ["あ.たる", "あ.たり", "あ.てる", "あ.て", "まさ.に", "まさ.にべし"],
        "wk_level": 5,
        "wk_meanings": ["Correct", "^Right", "^Success"],
        "wk_readings_on": ["とう"],
        "wk_readings_kun": ["!あ"],
        "wk_radicals": ["Triceratops", "Wolverine"]
    },
    "米": {
        "strokes": 6,
        "grade": 2,
        "freq": 61,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Rice", "Usa", "Metre"],
        "readings_on": ["べい", "まい", "めえとる"],
        "readings_kun": ["こめ", "よね"],
        "wk_level": 5,
        "wk_meanings": ["Rice", "^America"],
        "wk_readings_on": ["べい", "まい"],
        "wk_readings_kun": ["!こめ"],
        "wk_radicals": ["Rice"]
    },
    "声": {
        "strokes": 7,
        "grade": 2,
        "freq": 388,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["Voice"],
        "readings_on": ["せい", "しょう"],
        "readings_kun": ["こえ", "こわ-"],
        "wk_level": 5,
        "wk_meanings": ["Voice"],
        "wk_readings_on": ["!せい"],
        "wk_readings_kun": ["こえ"],
        "wk_radicals": ["Samurai", "Flag", "Stick"]
    },

    "形": {
        "strokes": 7,
        "grade": 2,
        "freq": 418,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Shape", "Form", "Style"],
        "readings_on": ["けい", "ぎょう"],
        "readings_kun": ["かた", "-がた", "かたち", "なり"],
        "wk_level": 5,
        "wk_meanings": ["Shape", "^Form", "^Appearance"],
        "wk_readings_on": ["けい", "^ぎょう"],
        "wk_readings_kun": ["!かた", "!かたち"],
        "wk_radicals": ["Lantern", "Hair"]
    },
    "草": {
        "strokes": 9,
        "grade": 1,
        "freq": 967,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Grass", "Weeds", "Herbs", "Pasture", "Write", "Draft"],
        "readings_on": ["そう"],
        "readings_kun": ["くさ", "くさ-", "-ぐさ"],
        "wk_level": 5,
        "wk_meanings": ["Grass", "^Weed"],
        "wk_readings_on": ["!そう"],
        "wk_readings_kun": ["くさ"],
        "wk_radicals": ["Flowers", "Sun", "Cross"]
    },

    "化": {
        "strokes": 4,
        "grade": 3,
        "freq": 89,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Change", "Take The Form Of", "Influence", "Enchant", "Delude", "-ization"],
        "readings_on": ["か", "け"],
        "readings_kun": ["ば.ける", "ば.かす", "ふ.ける", "け.する"],
        "wk_level": 6,
        "wk_meanings": ["Change"],
        "wk_readings_on": ["か"],
        "wk_readings_kun": ["!ば"],
        "wk_radicals": ["Leader", "Spoon"]
    },

    "両": {
        "strokes": 6,
        "grade": 3,
        "freq": 247,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Both", "Old Japanese Coin", "Counter For Carriages (e.g., In A Train)", "Two"],
        "readings_on": ["りょう"],
        "readings_kun": ["てる", "ふたつ"],
        "wk_level": 6,
        "wk_meanings": ["Both"],
        "wk_readings_on": ["りょう"],
        "wk_readings_kun": [],
        "wk_radicals": ["Ground", "Head", "Mountain"]
    },
    "全": {
        "strokes": 6,
        "grade": 3,
        "freq": 75,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Whole", "Entire", "All", "Complete", "Fulfill"],
        "readings_on": ["ぜん"],
        "readings_kun": ["まった.く", "すべ.て"],
        "wk_level": 6,
        "wk_meanings": ["All", "^Whole"],
        "wk_readings_on": ["ぜん"],
        "wk_readings_kun": ["!すべ", "!まった"],
        "wk_radicals": ["Hat", "King"]
    },
    "向": {
        "strokes": 6,
        "grade": 3,
        "freq": 182,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Yonder", "Facing", "Beyond", "Confront", "Defy", "Tend Toward", "Approach"],
        "readings_on": ["こう"],
        "readings_kun": ["む.く", "む.い", "-む.き", "む.ける", "-む.け", "む.かう", "む.かい", "む.こう", "む.こう-", "むこ", "むか.い"],
        "wk_level": 6,
        "wk_meanings": ["Yonder", "^Facing"],
        "wk_readings_on": ["こう"],
        "wk_readings_kun": ["!む"],
        "wk_radicals": ["Drop", "Head", "Mouth"]
    },
    "曲": {
        "strokes": 6,
        "grade": 3,
        "freq": 810,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Bend", "Music", "Melody", "Composition", "Pleasure", "Injustice", "Fault", "Curve", "Crooked", "Perverse", "Lean"],
        "readings_on": ["きょく"],
        "readings_kun": ["ま.がる", "ま.げる", "くま"],
        "wk_level": 6,
        "wk_meanings": ["Music", "^Bend"],
        "wk_readings_on": ["きょく"],
        "wk_readings_kun": ["!ま"],
        "wk_radicals": ["Mouth", "Twenty"]
    },

    "次": {
        "strokes": 6,
        "grade": 3,
        "freq": 222,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Next", "Order", "Sequence"],
        "readings_on": ["じ", "し"],
        "readings_kun": ["つ.ぐ", "つぎ"],
        "wk_level": 6,
        "wk_meanings": ["Next"],
        "wk_readings_on": ["じ"],
        "wk_readings_kun": ["!つぎ"],
        "wk_radicals": ["Ice", "Lack"]
    },
    "直": {
        "strokes": 8,
        "grade": 2,
        "freq": 246,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Straightaway", "Honesty", "Frankness", "Fix", "Repair"],
        "readings_on": ["ちょく", "じき", "じか"],
        "readings_kun": ["ただ.ちに", "なお.す", "-なお.す", "なお.る", "なお.き", "す.ぐ"],
        "wk_level": 6,
        "wk_meanings": ["Fix", "^Direct"],
        "wk_readings_on": ["ちょく", "じき"],
        "wk_readings_kun": ["!なお"],
        "wk_radicals": ["Lion", "Cross", "Eye"]
    },
    "活": {
        "strokes": 9,
        "grade": 2,
        "freq": 171,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Lively", "Resuscitation", "Being Helped", "Living"],
        "readings_on": ["かつ"],
        "readings_kun": ["い.きる", "い.かす", "い.ける"],
        "wk_level": 6,
        "wk_meanings": ["Lively"],
        "wk_readings_on": ["かつ"],
        "wk_readings_kun": ["!い"],
        "wk_radicals": ["Tsunami", "Tongue"]
    },

    "点": {
        "strokes": 9,
        "grade": 2,
        "freq": 165,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Spot", "Point", "Mark", "Speck", "Decimal Point"],
        "readings_on": ["てん"],
        "readings_kun": ["つ.ける", "つ.く", "た.てる", "さ.す", "とぼ.す", "とも.す", "ぼち"],
        "wk_level": 6,
        "wk_meanings": ["Point", "^Decimal", "^Decimal Point"],
        "wk_readings_on": ["てん"],
        "wk_readings_kun": ["!つ"],
        "wk_radicals": ["Fortune", "Boil"]
    },
    "科": {
        "strokes": 9,
        "grade": 2,
        "freq": 531,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Department", "Course", "Section"],
        "readings_on": ["か"],
        "readings_kun": [],
        "wk_level": 6,
        "wk_meanings": ["Course", "^Science", "^Department"],
        "wk_readings_on": ["か"],
        "wk_readings_kun": [],
        "wk_radicals": ["Grain", "Ladle"]
    },


    "首": {
        "strokes": 9,
        "grade": 2,
        "freq": 98,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["Neck", "Counter For Songs And Poems"],
        "readings_on": ["しゅ"],
        "readings_kun": ["くび"],
        "wk_level": 6,
        "wk_meanings": ["Neck"],
        "wk_readings_on": ["!しゅ"],
        "wk_readings_kun": ["くび"],
        "wk_radicals": ["Neck"]
    },
    "欠": {
        "strokes": 4,
        "grade": 4,
        "freq": 860,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Lack", "Gap", "Fail", "Yawning Radical (no. 76)"],
        "readings_on": ["けつ", "けん"],
        "readings_kun": ["か.ける", "か.く"],
        "wk_level": 7,
        "wk_meanings": ["Lack"],
        "wk_readings_on": ["けつ"],
        "wk_readings_kun": ["!か"],
        "wk_radicals": ["Lack"]
    },
    "由": {
        "strokes": 5,
        "grade": 3,
        "freq": 325,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Wherefore", "A Reason"],
        "readings_on": ["ゆ", "ゆう", "ゆい"],
        "readings_kun": ["よし", "よ.る"],
        "wk_level": 7,
        "wk_meanings": ["Reason"],
        "wk_readings_on": ["ゆう"],
        "wk_readings_kun": ["!よし", "!よ"],
        "wk_radicals": ["Cross", "Mouth"]
    },
    "民": {
        "strokes": 5,
        "grade": 4,
        "freq": 28,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["People", "Nation", "Subjects"],
        "readings_on": ["みん"],
        "readings_kun": ["たみ"],
        "wk_level": 7,
        "wk_meanings": ["Peoples", "^People", "^Nation"],
        "wk_readings_on": ["みん"],
        "wk_readings_kun": ["!たみ"],
        "wk_radicals": ["Mouth", "Clan"]
    },
    "付": {
        "strokes": 5,
        "grade": 4,
        "freq": 322,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Adhere", "Attach", "Refer To", "Append"],
        "readings_on": ["ふ"],
        "readings_kun": ["つ.ける", "-つ.ける", "-づ.ける", "つ.け", "つ.け-", "-つ.け", "-づ.け", "-づけ", "つ.く", "-づ.く", "つ.き", "-つ.き", "-つき", "-づ.き", "-づき"],
        "wk_level": 7,
        "wk_meanings": ["Attach"],
        "wk_readings_on": ["!ふ"],
        "wk_readings_kun": ["つ"],
        "wk_radicals": ["Leader", "Measurement"]
    },

    "失": {
        "strokes": 5,
        "grade": 4,
        "freq": 447,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Lose", "Error", "Fault", "Disadvantage", "Loss"],
        "readings_on": ["しつ"],
        "readings_kun": ["うしな.う", "う.せる"],
        "wk_level": 7,
        "wk_meanings": ["Fault"],
        "wk_readings_on": ["しつ"],
        "wk_readings_kun": ["!うしな"],
        "wk_radicals": ["Slide", "Husband"]
    },
    "必": {
        "strokes": 5,
        "grade": 4,
        "freq": 265,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Invariably", "Certain", "Inevitable"],
        "readings_on": ["ひつ"],
        "readings_kun": ["かなら.ず"],
        "wk_level": 7,
        "wk_meanings": ["Certain"],
        "wk_readings_on": ["ひつ"],
        "wk_readings_kun": ["!かなら"],
        "wk_radicals": ["Heart", "Slide"]
    },
    "未": {
        "strokes": 5,
        "grade": 4,
        "freq": 650,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Un-", "Not Yet", "Hitherto", "Still", "Even Now", "Sign Of The Ram", "1-3pm", "Eighth Sign Of Chinese Zodiac"],
        "readings_on": ["み", "び"],
        "readings_kun": ["いま.だ", "ま.だ", "ひつじ"],
        "wk_level": 7,
        "wk_meanings": ["Not Yet"],
        "wk_readings_on": ["み"],
        "wk_readings_kun": ["!ま", "!いま", "!ひつじ"],
        "wk_radicals": ["Jet"]
    },
    "末": {
        "strokes": 5,
        "grade": 4,
        "freq": 456,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["End", "Close", "Tip", "Powder", "Posterity"],
        "readings_on": ["まつ", "ばつ"],
        "readings_kun": ["すえ"],
        "wk_level": 7,
        "wk_meanings": ["End"],
        "wk_readings_on": ["まつ"],
        "wk_readings_kun": ["!すえ"],
        "wk_radicals": ["Jet"]
    },
    "記": {
        "strokes": 10,
        "grade": 2,
        "freq": 149,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Scribe", "Account", "Narrative"],
        "readings_on": ["き"],
        "readings_kun": ["しる.す"],
        "wk_level": 7,
        "wk_meanings": ["Write Down", "^Record"],
        "wk_readings_on": ["き"],
        "wk_readings_kun": ["!しる"],
        "wk_radicals": ["Say", "Oneself"]
    },

    "組": {
        "strokes": 11,
        "grade": 2,
        "freq": 204,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Association", "Braid", "Plait", "Construct", "Assemble", "Unite", "Cooperate", "Grapple"],
        "readings_on": ["そ"],
        "readings_kun": ["く.む", "くみ", "-ぐみ"],
        "wk_level": 7,
        "wk_meanings": ["Group", "^Association", "^Team"],
        "wk_readings_on": ["そ"],
        "wk_readings_kun": ["!くみ"],
        "wk_radicals": ["Thread", "Top Hat"]
    },
    "船": {
        "strokes": 11,
        "grade": 2,
        "freq": 713,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Ship", "Boat"],
        "readings_on": ["せん"],
        "readings_kun": ["ふね", "ふな-"],
        "wk_level": 7,
        "wk_meanings": ["Boat", "^Ship"],
        "wk_readings_on": ["せん"],
        "wk_readings_kun": ["!ふね"],
        "wk_radicals": ["Boat", "Fins", "Mouth"]
    },
    "雪": {
        "strokes": 11,
        "grade": 2,
        "freq": 1131,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Snow"],
        "readings_on": ["せつ"],
        "readings_kun": ["ゆき"],
        "wk_level": 7,
        "wk_meanings": ["Snow"],
        "wk_readings_on": ["!せつ"],
        "wk_readings_kun": ["ゆき"],
        "wk_radicals": ["Rain", "Wolverine"]
    },
    "支": {
        "strokes": 4,
        "grade": 5,
        "freq": 159,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Branch", "Support", "Sustain", "Branch Radical (no. 65)"],
        "readings_on": ["し"],
        "readings_kun": ["ささ.える", "つか.える", "か.う"],
        "wk_level": 8,
        "wk_meanings": ["Support", "^Branch"],
        "wk_readings_on": ["し"],
        "wk_readings_kun": ["!ささ"],
        "wk_radicals": ["Branch"]
    },

    "助": {
        "strokes": 7,
        "grade": 3,
        "freq": 397,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Help", "Rescue", "Assist"],
        "readings_on": ["じょ"],
        "readings_kun": ["たす.ける", "たす.かる", "す.ける", "すけ"],
        "wk_level": 8,
        "wk_meanings": ["Help"],
        "wk_readings_on": ["じょ"],
        "wk_readings_kun": ["!たす", "!すけ"],
        "wk_radicals": ["Top Hat", "Power"]
    },

    "君": {
        "strokes": 7,
        "grade": 3,
        "freq": 947,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Mister", "You", "Ruler", "Male Name Suffix"],
        "readings_on": ["くん"],
        "readings_kun": ["きみ", "-ぎみ"],
        "wk_level": 8,
        "wk_meanings": ["Buddy"],
        "wk_readings_on": ["くん"],
        "wk_readings_kun": ["!きみ"],
        "wk_radicals": ["Wolverine", "Slide", "Mouth"]
    },
    "対": {
        "strokes": 7,
        "grade": 3,
        "freq": 34,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Vis-a-vis", "Opposite", "Even", "Equal", "Versus", "Anti-", "Compare"],
        "readings_on": ["たい", "つい"],
        "readings_kun": ["あいて", "こた.える", "そろ.い", "つれあ.い", "なら.ぶ", "むか.う"],
        "wk_level": 8,
        "wk_meanings": ["Versus", "^Opposite"],
        "wk_readings_on": ["たい"],
        "wk_readings_kun": [],
        "wk_radicals": ["Writing", "Measurement"]
    },
    "局": {
        "strokes": 7,
        "grade": 3,
        "freq": 286,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Bureau", "Board", "Office", "Affair", "Conclusion", "Court Lady", "Lady-in-waiting", "Her Apartment"],
        "readings_on": ["きょく"],
        "readings_kun": ["つぼね"],
        "wk_level": 8,
        "wk_meanings": ["Bureau", "^Department"],
        "wk_readings_on": ["きょく"],
        "wk_readings_kun": [],
        "wk_radicals": ["Flag", "Cape", "Mouth"]
    },
    "役": {
        "strokes": 7,
        "grade": 3,
        "freq": 315,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Duty", "War", "Campaign", "Drafted Labor", "Office", "Service", "Role"],
        "readings_on": ["やく", "えき"],
        "readings_kun": [],
        "wk_level": 8,
        "wk_meanings": ["Service", "^Duty"],
        "wk_readings_on": ["やく"],
        "wk_readings_kun": [],
        "wk_radicals": ["Loiter", "Weapon"]
    },
    "投": {
        "strokes": 7,
        "grade": 3,
        "freq": 236,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Throw", "Discard", "Abandon", "Launch Into", "Join", "Invest In", "Hurl", "Give Up", "Sell At A Loss"],
        "readings_on": ["とう"],
        "readings_kun": ["な.げる", "-な.げ"],
        "wk_level": 8,
        "wk_meanings": ["Throw"],
        "wk_readings_on": ["とう"],
        "wk_readings_kun": ["!な"],
        "wk_radicals": ["Fingers", "Weapon"]
    },
    "決": {
        "strokes": 7,
        "grade": 3,
        "freq": 71,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Decide", "Fix", "Agree Upon", "Appoint"],
        "readings_on": ["けつ"],
        "readings_kun": ["き.める", "-ぎ.め", "き.まる", "さ.く"],
        "wk_level": 8,
        "wk_meanings": ["Decide", "^Decision"],
        "wk_readings_on": ["けつ"],
        "wk_readings_kun": ["!き"],
        "wk_radicals": ["Tsunami", "Person", "Hook"]
    },
    "馬": {
        "strokes": 10,
        "grade": 2,
        "freq": 639,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Horse"],
        "readings_on": ["ば"],
        "readings_kun": ["うま", "うま-", "ま"],
        "wk_level": 8,
        "wk_meanings": ["Horse"],
        "wk_readings_on": ["ば"],
        "wk_readings_kun": ["!うま"],
        "wk_radicals": ["Horse"]
    },
    "番": {
        "strokes": 12,
        "grade": 2,
        "freq": 348,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Turn", "Number In A Series"],
        "readings_on": ["ばん"],
        "readings_kun": ["つが.い"],
        "wk_level": 8,
        "wk_meanings": ["Number In A Series", "^Turn", "^Ordinal Number"],
        "wk_readings_on": ["ばん"],
        "wk_readings_kun": [],
        "wk_radicals": ["Sickle", "Rice Paddy"]
    },
    "絵": {
        "strokes": 12,
        "grade": 2,
        "freq": 895,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Picture", "Drawing", "Painting", "Sketch"],
        "readings_on": ["かい", "え"],
        "readings_kun": [],
        "wk_level": 8,
        "wk_meanings": ["Drawing", "^Painting"],
        "wk_readings_on": ["え"],
        "wk_readings_kun": [],
        "wk_radicals": ["Thread", "Meet"]
    },
    "数": {
        "strokes": 13,
        "grade": 2,
        "freq": 148,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Number", "Strength", "Fate", "Law", "Figures"],
        "readings_on": ["すう", "す", "さく", "そく", "しゅ"],
        "readings_kun": ["かず", "かぞ.える", "しばしば", "せ.める", "わずらわ.しい"],
        "wk_level": 8,
        "wk_meanings": ["Count", "^Number", "^Amount"],
        "wk_readings_on": ["すう"],
        "wk_readings_kun": ["!かぞ", "!かず"],
        "wk_radicals": ["Rice", "Woman", "Winter"]
    },


    "所": {
        "strokes": 8,
        "grade": 3,
        "freq": 221,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["Place", "Extent"],
        "readings_on": ["しょ"],
        "readings_kun": ["ところ", "-ところ", "どころ", "とこ"],
        "wk_level": 8,
        "wk_meanings": ["Place"],
        "wk_readings_on": ["しょ"],
        "wk_readings_kun": ["!ところ"],
        "wk_radicals": ["Door", "Axe"]
    },

    "具": {
        "strokes": 8,
        "grade": 3,
        "freq": 629,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Tool", "Utensil", "Means", "Possess", "Ingredients", "Counter For Armor, Suits, Sets Of Furniture"],
        "readings_on": ["ぐ"],
        "readings_kun": ["そな.える", "つぶさ.に"],
        "wk_level": 9,
        "wk_meanings": ["Tool"],
        "wk_readings_on": ["ぐ"],
        "wk_readings_kun": [],
        "wk_radicals": ["Eye", "Ground", "Fins"]
    },
    "受": {
        "strokes": 8,
        "grade": 3,
        "freq": 136,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Accept", "Undergo", "Answer (phone)", "Take", "Get", "Catch", "Receive"],
        "readings_on": ["じゅ"],
        "readings_kun": ["う.ける", "-う.け", "う.かる"],
        "wk_level": 9,
        "wk_meanings": ["Accept", "^Receive"],
        "wk_readings_on": ["じゅ"],
        "wk_readings_kun": ["!う"],
        "wk_radicals": ["Cleat", "Forehead", "Stool"]
    },
    "和": {
        "strokes": 8,
        "grade": 3,
        "freq": 124,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Harmony", "Japanese Style", "Peace", "Soften", "Japan"],
        "readings_on": ["わ", "お", "か"],
        "readings_kun": ["やわ.らぐ", "やわ.らげる", "なご.む", "なご.やか", "あ.える"],
        "wk_level": 9,
        "wk_meanings": ["Peace", "^Japanese Style"],
        "wk_readings_on": ["わ", "^お"],
        "wk_readings_kun": ["!なご", "!やわ"],
        "wk_radicals": ["Grain", "Mouth"]
    },

    "定": {
        "strokes": 8,
        "grade": 3,
        "freq": 48,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Determine", "Fix", "Establish", "Decide"],
        "readings_on": ["てい", "じょう"],
        "readings_kun": ["さだ.める", "さだ.まる", "さだ.か"],
        "wk_level": 9,
        "wk_meanings": ["Determine"],
        "wk_readings_on": ["てい", "^じょう"],
        "wk_readings_kun": ["!さだ"],
        "wk_radicals": ["Roof", "Correct"]
    },
    "実": {
        "strokes": 8,
        "grade": 3,
        "freq": 68,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Reality", "Truth"],
        "readings_on": ["じつ", "しつ"],
        "readings_kun": ["み", "みの.る", "まこと", "みの", "みち.る"],
        "wk_level": 9,
        "wk_meanings": ["Truth", "^Reality"],
        "wk_readings_on": ["じつ"],
        "wk_readings_kun": ["!み"],
        "wk_radicals": ["Roof", "Spring"]
    },

    "泳": {
        "strokes": 8,
        "grade": 3,
        "freq": 1223,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Swim"],
        "readings_on": ["えい"],
        "readings_kun": ["およ.ぐ"],
        "wk_level": 9,
        "wk_meanings": ["Swim"],
        "wk_readings_on": ["!えい"],
        "wk_readings_kun": ["およ"],
        "wk_radicals": ["Tsunami", "Eternity"]
    },

    "苦": {
        "strokes": 8,
        "grade": 3,
        "freq": 623,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Suffering", "Trial", "Worry", "Hardship", "Feel Bitter", "Scowl"],
        "readings_on": ["く"],
        "readings_kun": ["くる.しい", "-ぐる.しい", "くる.しむ", "くる.しめる", "にが.い", "にが.る"],
        "wk_level": 9,
        "wk_meanings": ["Suffering"],
        "wk_readings_on": ["く"],
        "wk_readings_kun": ["!くる", "!にが"],
        "wk_radicals": ["Flowers", "Old"]
    },
    "表": {
        "strokes": 8,
        "grade": 3,
        "freq": 77,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Surface", "Table", "Chart", "Diagram"],
        "readings_on": ["ひょう"],
        "readings_kun": ["おもて", "-おもて", "あらわ.す", "あらわ.れる", "あら.わす"],
        "wk_level": 9,
        "wk_meanings": ["Express"],
        "wk_readings_on": ["ひょう"],
        "wk_readings_kun": ["!あらわ", "!おもて"],
        "wk_radicals": ["Life", "Kick"]
    },
    "部": {
        "strokes": 11,
        "grade": 3,
        "freq": 36,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Section", "Bureau", "Dept", "Class", "Copy", "Part", "Portion", "Counter For Copies Of A Newspaper Or Magazine"],
        "readings_on": ["ぶ"],
        "readings_kun": ["-べ"],
        "wk_level": 9,
        "wk_meanings": ["Part", "^Department", "^Club"],
        "wk_readings_on": ["ぶ"],
        "wk_readings_kun": ["!へ"],
        "wk_radicals": ["Clown", "Building"]
    },
    "乗": {
        "strokes": 9,
        "grade": 3,
        "freq": 377,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["Ride", "Power", "Multiplication", "Record", "Counter For Vehicles", "Board", "Mount", "Join"],
        "readings_on": ["じょう", "しょう"],
        "readings_kun": ["の.る", "-の.り", "の.せる"],
        "wk_level": 9,
        "wk_meanings": ["Ride"],
        "wk_readings_on": ["!じょう"],
        "wk_readings_kun": ["の"],
        "wk_radicals": ["Grain", "Mouth"]
    },
    "客": {
        "strokes": 9,
        "grade": 3,
        "freq": 557,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Guest", "Visitor", "Customer", "Client"],
        "readings_on": ["きゃく", "かく"],
        "readings_kun": [],
        "wk_level": 9,
        "wk_meanings": ["Guest", "^Customer"],
        "wk_readings_on": ["きゃく"],
        "wk_readings_kun": [],
        "wk_radicals": ["Roof", "Winter", "Mouth"]
    },
    "相": {
        "strokes": 9,
        "grade": 3,
        "freq": 45,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Inter-", "Mutual", "Together", "Each Other", "Minister Of State", "Councillor", "Aspect", "Phase", "Physiognomy"],
        "readings_on": ["そう", "しょう"],
        "readings_kun": ["あい-"],
        "wk_level": 9,
        "wk_meanings": ["Mutual"],
        "wk_readings_on": ["そう", "しょう"],
        "wk_readings_kun": ["!あい"],
        "wk_radicals": ["Tree", "Eye"]
    },
    "美": {
        "strokes": 9,
        "grade": 3,
        "freq": 462,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Beauty", "Beautiful"],
        "readings_on": ["び", "み"],
        "readings_kun": ["うつく.しい"],
        "wk_level": 9,
        "wk_meanings": ["Beauty", "^Beautiful"],
        "wk_readings_on": ["び", "み"],
        "wk_readings_kun": ["!うつく"],
        "wk_radicals": ["Horns", "King", "Big"]
    },
    "負": {
        "strokes": 9,
        "grade": 3,
        "freq": 443,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Defeat", "Negative", "-", "Minus", "Bear", "Owe", "Assume A Responsibility"],
        "readings_on": ["ふ"],
        "readings_kun": ["ま.ける", "ま.かす", "お.う"],
        "wk_level": 9,
        "wk_meanings": ["Lose"],
        "wk_readings_on": ["ふ"],
        "wk_readings_kun": ["!ま", "!お"],
        "wk_radicals": ["Prison", "Shellfish"]
    },

    "談": {
        "strokes": 15,
        "grade": 3,
        "freq": 272,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Discuss", "Talk"],
        "readings_on": ["だん"],
        "readings_kun": [],
        "wk_level": 9,
        "wk_meanings": ["Discuss"],
        "wk_readings_on": ["だん"],
        "wk_readings_kun": [],
        "wk_radicals": ["Say", "Fire"]
    },
    "要": {
        "strokes": 9,
        "grade": 4,
        "freq": 106,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Need", "Main Point", "Essence", "Pivot", "Key To"],
        "readings_on": ["よう"],
        "readings_kun": ["い.る", "かなめ"],
        "wk_level": 9,
        "wk_meanings": ["Need"],
        "wk_readings_on": ["よう"],
        "wk_readings_kun": ["!い", "!かなめ"],
        "wk_radicals": ["Helicopter", "Woman"]
    },
    "勝": {
        "strokes": 12,
        "grade": 3,
        "freq": 185,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Victory", "Win", "Prevail", "Excel"],
        "readings_on": ["しょう"],
        "readings_kun": ["か.つ", "-が.ち", "まさ.る", "すぐ.れる", "かつ"],
        "wk_level": 9,
        "wk_meanings": ["Win"],
        "wk_readings_on": ["しょう"],
        "wk_readings_kun": ["!か"],
        "wk_radicals": ["Moon", "Gladiator", "Power"]
    },
    "速": {
        "strokes": 10,
        "grade": 3,
        "freq": 576,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Quick", "Fast"],
        "readings_on": ["そく"],
        "readings_kun": ["はや.い", "はや-", "はや.める", "すみ.やか"],
        "wk_level": 10,
        "wk_meanings": ["Fast"],
        "wk_readings_on": ["そく"],
        "wk_readings_kun": ["!はや"],
        "wk_radicals": ["Scooter", "Bundle"]
    },
    "配": {
        "strokes": 10,
        "grade": 3,
        "freq": 359,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Distribute", "Spouse", "Exile", "Rationing"],
        "readings_on": ["はい"],
        "readings_kun": ["くば.る"],
        "wk_level": 10,
        "wk_meanings": ["Distribute"],
        "wk_readings_on": ["はい"],
        "wk_readings_kun": ["!くば"],
        "wk_radicals": ["Alcohol", "Oneself"]
    },
    "酒": {
        "strokes": 10,
        "grade": 3,
        "freq": 1006,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Sake", "Alcohol"],
        "readings_on": ["しゅ"],
        "readings_kun": ["さけ", "さか-"],
        "wk_level": 10,
        "wk_meanings": ["Alcohol"],
        "wk_readings_on": ["しゅ"],
        "wk_readings_kun": ["!さけ", "!さか"],
        "wk_radicals": ["Tsunami", "Alcohol"]
    },

    "進": {
        "strokes": 11,
        "grade": 3,
        "freq": 142,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["Advance", "Proceed", "Progress", "Promote"],
        "readings_on": ["しん"],
        "readings_kun": ["すす.む", "すす.める"],
        "wk_level": 10,
        "wk_meanings": ["Advance"],
        "wk_readings_on": ["しん"],
        "wk_readings_kun": ["!すす"],
        "wk_radicals": ["Scooter", "Turkey"]
    },
    "落": {
        "strokes": 12,
        "grade": 3,
        "freq": 420,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Fall", "Drop", "Come Down", "Village", "Hamlet"],
        "readings_on": ["らく"],
        "readings_kun": ["お.ちる", "お.ち", "お.とす"],
        "wk_level": 10,
        "wk_meanings": ["Fall"],
        "wk_readings_on": ["らく"],
        "wk_readings_kun": ["!お"],
        "wk_radicals": ["Flowers", "Tsunami", "Kiss"]
    },
    "葉": {
        "strokes": 12,
        "grade": 3,
        "freq": 414,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Leaf", "Plane", "Lobe", "Needle", "Blade", "Spear", "Counter For Flat Things", "Fragment", "Piece"],
        "readings_on": ["よう"],
        "readings_kun": ["は"],
        "wk_level": 10,
        "wk_meanings": ["Leaf", "^Leaves"],
        "wk_readings_on": ["!よう"],
        "wk_readings_kun": ["は", "^ば"],
        "wk_radicals": ["Flowers", "World", "Tree"]
    },
    "路": {
        "strokes": 13,
        "grade": 3,
        "freq": 529,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Path", "Route", "Road", "Distance"],
        "readings_on": ["ろ", "る"],
        "readings_kun": ["-じ", "みち"],
        "wk_level": 10,
        "wk_meanings": ["Road"],
        "wk_readings_on": ["ろ"],
        "wk_readings_kun": ["!じ", "!みち"],
        "wk_radicals": ["Foot", "Kiss"]
    },
    "鳴": {
        "strokes": 14,
        "grade": 2,
        "freq": 1279,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Chirp", "Cry", "Bark", "Sound", "Ring", "Echo", "Honk"],
        "readings_on": ["めい"],
        "readings_kun": ["な.く", "な.る", "な.らす"],
        "wk_level": 10,
        "wk_meanings": ["Chirp"],
        "wk_readings_on": ["!めい"],
        "wk_readings_kun": ["な"],
        "wk_radicals": ["Mouth", "Bird"]
    },
    "横": {
        "strokes": 15,
        "grade": 3,
        "freq": 480,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Sideways", "Side", "Horizontal", "Width", "Woof", "Unreasonable", "Perverse"],
        "readings_on": ["おう"],
        "readings_kun": ["よこ"],
        "wk_level": 10,
        "wk_meanings": ["Side", "^Horizontal"],
        "wk_readings_on": ["!おう"],
        "wk_readings_kun": ["よこ"],
        "wk_radicals": ["Tree", "Yellow"]
    },
    "調": {
        "strokes": 15,
        "grade": 3,
        "freq": 87,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Tune", "Tone", "Meter", "Key (music)", "Writing Style", "Prepare", "Exorcise", "Investigate", "Harmonize", "Mediate"],
        "readings_on": ["ちょう"],
        "readings_kun": ["しら.べる", "しら.べ", "ととの.う", "ととの.える"],
        "wk_level": 10,
        "wk_meanings": ["Investigate", "^Tone"],
        "wk_readings_on": ["ちょう"],
        "wk_readings_kun": ["!しら"],
        "wk_radicals": ["Say", "Circumference"]
    },

    "頭": {
        "strokes": 16,
        "grade": 2,
        "freq": 433,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["Head", "Counter For Large Animals"],
        "readings_on": ["とう", "ず", "と"],
        "readings_kun": ["あたま", "かしら", "-がしら", "かぶり"],
        "wk_level": 10,
        "wk_meanings": ["Head"],
        "wk_readings_on": ["!ず", "!とう"],
        "wk_readings_kun": ["あたま"],
        "wk_radicals": ["Beans", "Geoduck"]
    },
    "顔": {
        "strokes": 18,
        "grade": 2,
        "freq": 676,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["Face", "Expression"],
        "readings_on": ["がん"],
        "readings_kun": ["かお"],
        "wk_level": 10,
        "wk_meanings": ["Face"],
        "wk_readings_on": ["!がん"],
        "wk_readings_kun": ["かお"],
        "wk_radicals": ["Stand", "Cliff", "Hair", "Geoduck"]
    },

    "最": {
        "strokes": 12,
        "grade": 4,
        "freq": 82,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Utmost", "Most", "Extreme"],
        "readings_on": ["さい", "しゅ"],
        "readings_kun": ["もっと.も", "つま"],
        "wk_level": 10,
        "wk_meanings": ["Most"],
        "wk_readings_on": ["さい"],
        "wk_readings_kun": ["!もっと"],
        "wk_radicals": ["Sun", "Ear", "Stool"]
    },
    "争": {
        "strokes": 6,
        "grade": 4,
        "freq": 271,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Contend", "Dispute", "Argue"],
        "readings_on": ["そう"],
        "readings_kun": ["あらそ.う", "いか.でか"],
        "wk_level": 11,
        "wk_meanings": ["Conflict"],
        "wk_readings_on": ["そう"],
        "wk_readings_kun": ["!あらそ"],
        "wk_radicals": ["Prison", "Wolverine", "Barb"]
    },
    "伝": {
        "strokes": 6,
        "grade": 4,
        "freq": 416,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Transmit", "Go Along", "Walk Along", "Follow", "Report", "Communicate", "Legend", "Tradition"],
        "readings_on": ["でん", "てん"],
        "readings_kun": ["つた.わる", "つた.える", "つた.う", "つだ.う", "-づた.い", "つて"],
        "wk_level": 11,
        "wk_meanings": ["Transmit", "^Tell"],
        "wk_readings_on": ["でん"],
        "wk_readings_kun": ["!つた", "!つて"],
        "wk_radicals": ["Leader", "Cloud"]
    },
    "共": {
        "strokes": 6,
        "grade": 4,
        "freq": 174,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Together", "Both", "Neither", "All", "And", "Alike", "With"],
        "readings_on": ["きょう"],
        "readings_kun": ["とも", "とも.に", "-ども"],
        "wk_level": 11,
        "wk_meanings": ["Together"],
        "wk_readings_on": ["きょう"],
        "wk_readings_kun": ["!とも"],
        "wk_radicals": ["Blackjack", "Fins"]
    },
    "好": {
        "strokes": 6,
        "grade": 4,
        "freq": 423,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["Fond", "Pleasing", "Like Something"],
        "readings_on": ["こう"],
        "readings_kun": ["この.む", "す.く", "よ.い", "い.い"],
        "wk_level": 11,
        "wk_meanings": ["Like"],
        "wk_readings_on": ["こう"],
        "wk_readings_kun": ["!す", "!この"],
        "wk_radicals": ["Woman", "Child"]
    },
    "成": {
        "strokes": 6,
        "grade": 4,
        "freq": 116,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Turn Into", "Become", "Get", "Grow", "Elapse", "Reach"],
        "readings_on": ["せい", "じょう"],
        "readings_kun": ["な.る", "な.す", "-な.す"],
        "wk_level": 11,
        "wk_meanings": ["Become"],
        "wk_readings_on": ["せい"],
        "wk_readings_kun": ["!な"],
        "wk_radicals": ["Drunkard", "Sword"]
    },
    "老": {
        "strokes": 6,
        "grade": 4,
        "freq": 803,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Old Man", "Old Age", "Grow Old"],
        "readings_on": ["ろう"],
        "readings_kun": ["お.いる", "ふ.ける"],
        "wk_level": 11,
        "wk_meanings": ["Elderly"],
        "wk_readings_on": ["ろう"],
        "wk_readings_kun": [],
        "wk_radicals": ["Coffin", "Spoon"]
    },
    "位": {
        "strokes": 7,
        "grade": 4,
        "freq": 276,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Rank", "Grade", "Throne", "Crown", "About", "Some"],
        "readings_on": ["い"],
        "readings_kun": ["くらい", "ぐらい"],
        "wk_level": 11,
        "wk_meanings": ["Rank"],
        "wk_readings_on": ["い"],
        "wk_readings_kun": ["!くらい"],
        "wk_radicals": ["Leader", "Stand"]
    },
    "初": {
        "strokes": 7,
        "grade": 4,
        "freq": 152,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["First Time", "Beginning"],
        "readings_on": ["しょ"],
        "readings_kun": ["はじ.め", "はじ.めて", "はつ", "はつ-", "うい-", "-そ.める", "-ぞ.め"],
        "wk_level": 11,
        "wk_meanings": ["First"],
        "wk_readings_on": ["しょ"],
        "wk_readings_kun": ["!はじ", "!はつ", "!そ", "!ぞ"],
        "wk_radicals": ["Spirit", "Sword"]
    },

    "利": {
        "strokes": 7,
        "grade": 4,
        "freq": 203,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Profit", "Advantage", "Benefit"],
        "readings_on": ["り"],
        "readings_kun": ["き.く"],
        "wk_level": 11,
        "wk_meanings": ["Profit", "^Benefit", "^Advantage"],
        "wk_readings_on": ["り"],
        "wk_readings_kun": ["!き"],
        "wk_radicals": ["Grain", "Knife"]
    },
    "努": {
        "strokes": 7,
        "grade": 4,
        "freq": 749,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Toil", "Diligent", "As Much As Possible"],
        "readings_on": ["ど"],
        "readings_kun": ["つと.める"],
        "wk_level": 11,
        "wk_meanings": ["Toil"],
        "wk_readings_on": ["ど"],
        "wk_readings_kun": ["!つと"],
        "wk_radicals": ["Woman", "Stool", "Power"]
    },
    "労": {
        "strokes": 7,
        "grade": 4,
        "freq": 398,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Labor", "Thank For", "Reward For", "Toil", "Trouble"],
        "readings_on": ["ろう"],
        "readings_kun": ["ろう.する", "いたわ.る", "いた.ずき", "ねぎら", "つか.れる", "ねぎら.う"],
        "wk_level": 11,
        "wk_meanings": ["Labor"],
        "wk_readings_on": ["ろう"],
        "wk_readings_kun": ["!いたわ"],
        "wk_radicals": ["Viking", "Power"]
    },
    "命": {
        "strokes": 8,
        "grade": 3,
        "freq": 465,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Fate", "Command", "Decree", "Destiny", "Life", "Appoint"],
        "readings_on": ["めい", "みょう"],
        "readings_kun": ["いのち"],
        "wk_level": 11,
        "wk_meanings": ["Fate"],
        "wk_readings_on": ["めい", "みょう"],
        "wk_readings_kun": ["!いのち"],
        "wk_radicals": ["Orders", "Mouth"]
    },
    "放": {
        "strokes": 8,
        "grade": 3,
        "freq": 288,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Set Free", "Release", "Fire", "Shoot", "Emit", "Banish", "Liberate"],
        "readings_on": ["ほう"],
        "readings_kun": ["はな.す", "-っぱな.し", "はな.つ", "はな.れる", "こ.く", "ほう.る"],
        "wk_level": 11,
        "wk_meanings": ["Release"],
        "wk_readings_on": ["ほう"],
        "wk_readings_kun": ["!はな", "!ほう"],
        "wk_radicals": ["Direction", "Winter"]
    },
    "昔": {
        "strokes": 8,
        "grade": 3,
        "freq": 1197,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Once Upon A Time", "Antiquity", "Old Times"],
        "readings_on": ["せき", "しゃく"],
        "readings_kun": ["むかし"],
        "wk_level": 11,
        "wk_meanings": ["Long Ago", "^Long Time Ago"],
        "wk_readings_on": [],
        "wk_readings_kun": ["むかし"],
        "wk_radicals": ["Blackjack", "Sun"]
    },
    "育": {
        "strokes": 8,
        "grade": 3,
        "freq": 369,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Bring Up", "Grow Up", "Raise", "Rear"],
        "readings_on": ["いく"],
        "readings_kun": ["そだ.つ", "そだ.ち", "そだ.てる", "はぐく.む"],
        "wk_level": 11,
        "wk_meanings": ["Nurture", "^Raise"],
        "wk_readings_on": ["いく"],
        "wk_readings_kun": ["!そだ", "!はぐく"],
        "wk_radicals": ["Trash", "Moon"]
    },
    "指": {
        "strokes": 9,
        "grade": 3,
        "freq": 155,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Finger", "Point To", "Indicate", "Put Into", "Play (chess)", "Measure (ruler)"],
        "readings_on": ["し"],
        "readings_kun": ["ゆび", "さ.す", "-さ.し"],
        "wk_level": 11,
        "wk_meanings": ["Finger"],
        "wk_readings_on": ["し"],
        "wk_readings_kun": ["!ゆび", "!さ"],
        "wk_radicals": ["Fingers", "Spoon", "Sun"]
    },

    "神": {
        "strokes": 9,
        "grade": 3,
        "freq": 347,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Gods", "Mind", "Soul"],
        "readings_on": ["しん", "じん"],
        "readings_kun": ["かみ", "かん-", "こう-"],
        "wk_level": 11,
        "wk_meanings": ["God"],
        "wk_readings_on": ["しん"],
        "wk_readings_kun": ["!かみ"],
        "wk_radicals": ["Spirit", "Humble"]
    },
    "追": {
        "strokes": 9,
        "grade": 3,
        "freq": 411,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Chase", "Drive Away", "Follow", "Pursue", "Meanwhile"],
        "readings_on": ["つい"],
        "readings_kun": ["お.う"],
        "wk_level": 11,
        "wk_meanings": ["Follow", "^Chase"],
        "wk_readings_on": ["!つい"],
        "wk_readings_kun": ["お"],
        "wk_radicals": ["Scooter", "Bear"]
    },
    "戦": {
        "strokes": 13,
        "grade": 4,
        "freq": 78,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["War", "Battle", "Match"],
        "readings_on": ["せん"],
        "readings_kun": ["いくさ", "たたか.う", "おのの.く", "そよ.ぐ", "わなな.く"],
        "wk_level": 11,
        "wk_meanings": ["War", "^Battle"],
        "wk_readings_on": ["せん"],
        "wk_readings_kun": ["!たたか"],
        "wk_radicals": ["Simple", "Drunkard"]
    },
    "良": {
        "strokes": 7,
        "grade": 4,
        "freq": 501,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Good", "Pleasing", "Skilled"],
        "readings_on": ["りょう"],
        "readings_kun": ["よ.い", "-よ.い", "い.い", "-い.い"],
        "wk_level": 11,
        "wk_meanings": ["Good"],
        "wk_readings_on": ["りょう"],
        "wk_readings_kun": ["!よ", "!い"],
        "wk_radicals": ["Drop", "Root"]
    },
    "便": {
        "strokes": 9,
        "grade": 4,
        "freq": 729,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["Convenience", "Facility", "Excrement", "Feces", "Letter", "Chance"],
        "readings_on": ["べん", "びん"],
        "readings_kun": ["たよ.り"],
        "wk_level": 11,
        "wk_meanings": ["Convenience", "^Convenient"],
        "wk_readings_on": ["べん", "びん"],
        "wk_readings_kun": ["!たよ"],
        "wk_radicals": ["Leader", "Ground", "Rice Paddy", "Treasure"]
    },
    "働": {
        "strokes": 13,
        "grade": 4,
        "freq": 417,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["Work", "(kokuji)"],
        "readings_on": ["どう"],
        "readings_kun": ["はたら.く"],
        "wk_level": 11,
        "wk_meanings": ["Work", "^Labor"],
        "wk_readings_on": ["どう"],
        "wk_readings_kun": ["!はたら"],
        "wk_radicals": ["Leader", "Heavy", "Power"]
    },
    "庭": {
        "strokes": 10,
        "grade": 3,
        "freq": 816,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Courtyard", "Garden", "Yard"],
        "readings_on": ["てい"],
        "readings_kun": ["にわ"],
        "wk_level": 12,
        "wk_meanings": ["Garden"],
        "wk_readings_on": ["てい"],
        "wk_readings_kun": ["!にわ"],
        "wk_radicals": ["Canopy", "Yoga", "King"]
    },
    "息": {
        "strokes": 10,
        "grade": 3,
        "freq": 882,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Breath", "Respiration", "Son", "Interest (on Money)"],
        "readings_on": ["そく"],
        "readings_kun": ["いき"],
        "wk_level": 12,
        "wk_meanings": ["Breath"],
        "wk_readings_on": ["そく"],
        "wk_readings_kun": ["!いき"],
        "wk_radicals": ["Self", "Heart"]
    },
    "流": {
        "strokes": 10,
        "grade": 3,
        "freq": 280,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Current", "A Sink", "Flow", "Forfeit"],
        "readings_on": ["りゅう", "る"],
        "readings_kun": ["なが.れる", "なが.れ", "なが.す", "-なが.す"],
        "wk_level": 12,
        "wk_meanings": ["Stream"],
        "wk_readings_on": ["りゅう", "^る"],
        "wk_readings_kun": ["!なが"],
        "wk_radicals": ["Tsunami", "Trash", "River"]
    },
    "消": {
        "strokes": 10,
        "grade": 3,
        "freq": 345,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Extinguish", "Blow Out", "Turn Off", "Neutralize", "Cancel"],
        "readings_on": ["しょう"],
        "readings_kun": ["き.える", "け.す"],
        "wk_level": 12,
        "wk_meanings": ["Extinguish"],
        "wk_readings_on": ["しょう"],
        "wk_readings_kun": ["!き", "!け"],
        "wk_radicals": ["Tsunami", "Triceratops", "Moon"]
    },
    "都": {
        "strokes": 11,
        "grade": 3,
        "freq": 123,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["Metropolis", "Capital", "All", "Everything"],
        "readings_on": ["と", "つ"],
        "readings_kun": ["みやこ"],
        "wk_level": 12,
        "wk_meanings": ["Metropolis"],
        "wk_readings_on": ["と", "^つ"],
        "wk_readings_kun": ["!みやこ"],
        "wk_radicals": ["Someone", "Building"]
    },

    "商": {
        "strokes": 11,
        "grade": 3,
        "freq": 413,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Make A Deal", "Selling", "Dealing In", "Merchant"],
        "readings_on": ["しょう"],
        "readings_kun": ["あきな.う"],
        "wk_level": 12,
        "wk_meanings": ["Merchandise"],
        "wk_readings_on": ["しょう"],
        "wk_readings_kun": ["!あきな"],
        "wk_radicals": ["Stand", "Mustache", "Legs"]
    },


    "深": {
        "strokes": 11,
        "grade": 3,
        "freq": 484,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Deep", "Heighten", "Intensify", "Strengthen"],
        "readings_on": ["しん"],
        "readings_kun": ["ふか.い", "-ぶか.い", "ふか.まる", "ふか.める", "み-"],
        "wk_level": 12,
        "wk_meanings": ["Deep"],
        "wk_readings_on": ["しん"],
        "wk_readings_kun": ["!ふか"],
        "wk_radicals": ["Tsunami", "Pi", "Tree"]
    },
    "球": {
        "strokes": 11,
        "grade": 3,
        "freq": 302,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Ball", "Sphere"],
        "readings_on": ["きゅう"],
        "readings_kun": ["たま"],
        "wk_level": 12,
        "wk_meanings": ["Sphere", "^Ball"],
        "wk_readings_on": ["きゅう"],
        "wk_readings_kun": ["!たま"],
        "wk_radicals": ["King", "Request"]
    },
    "陽": {
        "strokes": 12,
        "grade": 3,
        "freq": 1071,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Sunshine", "Yang Principle", "Positive", "Male", "Heaven", "Daytime"],
        "readings_on": ["よう"],
        "readings_kun": ["ひ"],
        "wk_level": 12,
        "wk_meanings": ["Sunshine", "^Sunlight"],
        "wk_readings_on": ["よう"],
        "wk_readings_kun": ["!ひ"],
        "wk_radicals": ["Building", "Easy"]
    },
    "寒": {
        "strokes": 12,
        "grade": 3,
        "freq": 1456,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["Cold"],
        "readings_on": ["かん"],
        "readings_kun": ["さむ.い"],
        "wk_level": 12,
        "wk_meanings": ["Cold"],
        "wk_readings_on": ["!かん"],
        "wk_readings_kun": ["さむ"],
        "wk_radicals": ["Roof", "Spring", "Ice"]
    },
    "悲": {
        "strokes": 12,
        "grade": 3,
        "freq": 1014,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Grieve", "Sad", "Deplore", "Regret"],
        "readings_on": ["ひ"],
        "readings_kun": ["かな.しい", "かな.しむ"],
        "wk_level": 17,
        "wk_meanings": ["Sad"],
        "wk_readings_on": ["ひ"],
        "wk_readings_kun": ["!かな"],
        "wk_radicals": ["Criminal", "Heart"]
    },
    "期": {
        "strokes": 12,
        "grade": 3,
        "freq": 117,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Period", "Time", "Date", "Term"],
        "readings_on": ["き", "ご"],
        "readings_kun": [],
        "wk_level": 12,
        "wk_meanings": ["Period Of Time", "^Time Period"],
        "wk_readings_on": ["き"],
        "wk_readings_kun": [],
        "wk_radicals": ["Crab", "Moon"]
    },
    "歯": {
        "strokes": 12,
        "grade": 3,
        "freq": 1106,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Tooth", "Cog"],
        "readings_on": ["し"],
        "readings_kun": ["よわい", "は", "よわ.い", "よわい.する"],
        "wk_level": 12,
        "wk_meanings": ["Tooth", "^Teeth"],
        "wk_readings_on": ["!し"],
        "wk_readings_kun": ["は"],
        "wk_radicals": ["Stop", "Box", "Rice"]
    },
    "港": {
        "strokes": 12,
        "grade": 3,
        "freq": 495,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Harbor"],
        "readings_on": ["こう"],
        "readings_kun": ["みなと"],
        "wk_level": 12,
        "wk_meanings": ["Harbor", "^Port", "^Harbour"],
        "wk_readings_on": ["こう"],
        "wk_readings_kun": ["!みなと"],
        "wk_radicals": ["Tsunami", "Together", "Oneself"]
    },
    "登": {
        "strokes": 12,
        "grade": 3,
        "freq": 566,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Ascend", "Climb Up"],
        "readings_on": ["とう", "と", "どう", "しょう", "ちょう"],
        "readings_kun": ["のぼ.る", "あ.がる"],
        "wk_level": 12,
        "wk_meanings": ["Climb"],
        "wk_readings_on": ["とう", "と"],
        "wk_readings_kun": ["!のぼ"],
        "wk_radicals": ["Tent", "Beans"]
    },
    "亡": {
        "strokes": 3,
        "grade": 6,
        "freq": 661,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Deceased", "The Late", "Dying", "Perish"],
        "readings_on": ["ぼう", "もう"],
        "readings_kun": ["な.い", "な.き-", "ほろ.びる", "ほろ.ぶ", "ほろ.ぼす"],
        "wk_level": 6,
        "wk_meanings": ["Death", "^Deceased"],
        "wk_readings_on": ["ぼう"],
        "wk_readings_kun": ["!な"],
        "wk_radicals": ["Death"]
    },
    "合": {
        "strokes": 6,
        "grade": 2,
        "freq": 41,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["Fit", "Suit", "Join", "0.1"],
        "readings_on": ["ごう", "がっ", "かっ"],
        "readings_kun": ["あ.う", "-あ.う", "あ.い", "あい-", "-あ.い", "-あい", "あ.わす", "あ.わせる", "-あ.わせる"],
        "wk_level": 12,
        "wk_meanings": ["Suit", "^Fit", "^Join"],
        "wk_readings_on": ["ごう", "がっ"],
        "wk_readings_kun": ["!あ", "!あい"],
        "wk_radicals": ["Suit"]
    },

    "予": {
        "strokes": 4,
        "grade": 3,
        "freq": 180,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Beforehand", "Previous", "Myself", "I"],
        "readings_on": ["よ", "しゃ"],
        "readings_kun": ["あらかじ.め"],
        "wk_level": 9,
        "wk_meanings": ["Beforehand"],
        "wk_readings_on": ["よ"],
        "wk_readings_kun": ["!あらかじ"],
        "wk_radicals": ["Mama", "Street"]
    },
    "反": {
        "strokes": 4,
        "grade": 3,
        "freq": 191,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Anti-"],
        "readings_on": ["はん", "ほん", "たん", "ほ"],
        "readings_kun": ["そ.る", "そ.らす", "かえ.す", "かえ.る", "-かえ.る"],
        "wk_level": 8,
        "wk_meanings": ["Anti"],
        "wk_readings_on": ["はん"],
        "wk_readings_kun": [],
        "wk_radicals": ["Cliff", "Stool"]
    },

    "返": {
        "strokes": 7,
        "grade": 3,
        "freq": 685,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Return", "Answer", "Fade", "Repay"],
        "readings_on": ["へん"],
        "readings_kun": ["かえ.す", "-かえ.す", "かえ.る", "-かえ.る"],
        "wk_level": 9,
        "wk_meanings": ["Return"],
        "wk_readings_on": ["へん"],
        "wk_readings_kun": ["!かえ"],
        "wk_radicals": ["Scooter", "Anti"]
    },

    "宿": {
        "strokes": 11,
        "grade": 3,
        "freq": 701,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Inn", "Lodging", "Relay Station", "Dwell", "Lodge", "Be Pregnant", "Home", "Dwelling"],
        "readings_on": ["しゅく"],
        "readings_kun": ["やど", "やど.る", "やど.す"],
        "wk_level": 13,
        "wk_meanings": ["Lodge"],
        "wk_readings_on": ["しゅく"],
        "wk_readings_kun": ["!やど"],
        "wk_radicals": ["Roof", "Leader", "Hundred"]
    },
    "想": {
        "strokes": 13,
        "grade": 3,
        "freq": 381,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Concept", "Think", "Idea", "Thought"],
        "readings_on": ["そう", "そ"],
        "readings_kun": ["おも.う"],
        "wk_level": 13,
        "wk_meanings": ["Concept"],
        "wk_readings_on": ["そう"],
        "wk_readings_kun": [],
        "wk_radicals": ["Tree", "Eye", "Heart"]
    },
    "感": {
        "strokes": 13,
        "grade": 3,
        "freq": 233,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Emotion", "Feeling", "Sensation"],
        "readings_on": ["かん"],
        "readings_kun": [],
        "wk_level": 13,
        "wk_meanings": ["Feeling"],
        "wk_readings_on": ["かん"],
        "wk_readings_kun": [],
        "wk_radicals": ["Slide", "Drunkard", "Creeper", "Heart"]
    },
    "暗": {
        "strokes": 13,
        "grade": 3,
        "freq": 1040,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["Darkness", "Disappear", "Shade", "Informal", "Grow Dark", "Be Blinded"],
        "readings_on": ["あん"],
        "readings_kun": ["くら.い", "くら.む", "くれ.る"],
        "wk_level": 13,
        "wk_meanings": ["Dark"],
        "wk_readings_on": ["あん"],
        "wk_readings_kun": ["!くら", "!くれ"],
        "wk_radicals": ["Sun", "Stand"]
    },
    "様": {
        "strokes": 14,
        "grade": 3,
        "freq": 493,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Esq.", "Way", "Manner", "Situation", "Polite Suffix"],
        "readings_on": ["よう", "しょう"],
        "readings_kun": ["さま", "さん"],
        "wk_level": 13,
        "wk_meanings": ["Formal Name Title", "^Formal Name Ender", "^Manner"],
        "wk_readings_on": ["!よう"],
        "wk_readings_kun": ["さま"],
        "wk_radicals": ["Tree", "Sheep", "Water"]
    },
    "福": {
        "strokes": 13,
        "grade": 3,
        "freq": 467,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Blessing", "Fortune", "Luck", "Wealth"],
        "readings_on": ["ふく"],
        "readings_kun": [],
        "wk_level": 13,
        "wk_meanings": ["Luck", "^Fortune"],
        "wk_readings_on": ["ふく"],
        "wk_readings_kun": [],
        "wk_radicals": ["Spirit", "Scarecrow"]
    },
    "殺": {
        "strokes": 10,
        "grade": 4,
        "freq": 581,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Kill", "Murder", "Butcher", "Slice Off", "Split", "Diminish", "Reduce", "Spoil"],
        "readings_on": ["さつ", "さい", "せつ"],
        "readings_kun": ["ころ.す", "-ごろ.し", "そ.ぐ"],
        "wk_level": 13,
        "wk_meanings": ["Kill"],
        "wk_readings_on": ["さつ"],
        "wk_readings_kun": ["!ころ"],
        "wk_radicals": ["Treasure", "Tree", "Weapon"]
    },
    "然": {
        "strokes": 12,
        "grade": 4,
        "freq": 401,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Sort Of Thing", "So", "If So", "In That Case", "Well"],
        "readings_on": ["ぜん", "ねん"],
        "readings_kun": ["しか", "しか.り", "しか.し", "さ"],
        "wk_level": 13,
        "wk_meanings": ["Nature"],
        "wk_readings_on": ["ぜん", "^ねん"],
        "wk_readings_kun": ["!しか", "!さ"],
        "wk_radicals": ["Moon", "Dog", "Boil"]
    },
    "熱": {
        "strokes": 15,
        "grade": 4,
        "freq": 700,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Heat", "Temperature", "Fever", "Mania", "Passion"],
        "readings_on": ["ねつ"],
        "readings_kun": ["あつ.い"],
        "wk_level": 13,
        "wk_meanings": ["Heat", "^Fever"],
        "wk_readings_on": ["ねつ"],
        "wk_readings_kun": ["!あつ"],
        "wk_radicals": ["Womb", "Circle", "Boil"]
    },
    "選": {
        "strokes": 15,
        "grade": 4,
        "freq": 57,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Elect", "Select", "Choose", "Prefer"],
        "readings_on": ["せん"],
        "readings_kun": ["えら.ぶ"],
        "wk_level": 13,
        "wk_meanings": ["Choose"],
        "wk_readings_on": ["せん"],
        "wk_readings_kun": ["!えら"],
        "wk_radicals": ["Scooter", "Oneself", "Together"]
    },
    "願": {
        "strokes": 19,
        "grade": 4,
        "freq": 894,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Petition", "Request", "Vow", "Wish", "Hope"],
        "readings_on": ["がん"],
        "readings_kun": ["ねが.う", "-ねがい"],
        "wk_level": 13,
        "wk_meanings": ["Request"],
        "wk_readings_on": ["がん"],
        "wk_readings_kun": ["!ねが", "!ねがい"],
        "wk_radicals": ["Original", "Geoduck"]
    },
    "情": {
        "strokes": 11,
        "grade": 5,
        "freq": 235,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Feelings", "Emotion", "Passion", "Sympathy", "Circumstances", "Facts"],
        "readings_on": ["じょう", "せい"],
        "readings_kun": ["なさ.け"],
        "wk_level": 13,
        "wk_meanings": ["Feeling", "^Emotion"],
        "wk_readings_on": ["じょう"],
        "wk_readings_kun": ["!なさけ"],
        "wk_radicals": ["Soul", "Blue"]
    },
    "疑": {
        "strokes": 14,
        "grade": 6,
        "freq": 283,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Doubt", "Distrust", "Be Suspicious", "Question"],
        "readings_on": ["ぎ"],
        "readings_kun": ["うたが.う"],
        "wk_level": 13,
        "wk_meanings": ["Doubt"],
        "wk_readings_on": ["ぎ"],
        "wk_readings_kun": ["!うたが"],
        "wk_radicals": ["Spoon", "Mama", "Arrow", "Coat Rack"]
    },
    "皆": {
        "strokes": 9,
        "grade": 8,
        "freq": 1267,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["All", "Everything"],
        "readings_on": ["かい"],
        "readings_kun": ["みな", "みんな"],
        "wk_level": 13,
        "wk_meanings": ["All", "^Everyone", "^Everything", "^Everybody"],
        "wk_readings_on": ["!かい"],
        "wk_readings_kun": ["みな", "みんな"],
        "wk_radicals": ["Compare", "White"]
    },
    "例": {
        "strokes": 8,
        "grade": 4,
        "freq": 399,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Example", "Custom", "Usage", "Precedent"],
        "readings_on": ["れい"],
        "readings_kun": ["たと.える"],
        "wk_level": 14,
        "wk_meanings": ["Example"],
        "wk_readings_on": ["れい"],
        "wk_readings_kun": ["!たと"],
        "wk_radicals": ["Leader", "Yakuza", "Knife"]
    },
    "参": {
        "strokes": 8,
        "grade": 4,
        "freq": 201,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Nonplussed", "Three (in Documents)", "Going", "Coming", "Visiting", "Visit", "Be Defeated", "Die", "Be Madly In Love", "Participate", "Take Part In"],
        "readings_on": ["さん", "しん"],
        "readings_kun": ["まい.る", "まい-", "まじわる", "みつ"],
        "wk_level": 14,
        "wk_meanings": ["Participate"],
        "wk_readings_on": ["さん", "^しん"],
        "wk_readings_kun": ["!まい"],
        "wk_radicals": ["Private", "Big", "Hair"]
    },
    "完": {
        "strokes": 7,
        "grade": 4,
        "freq": 595,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Perfect", "Completion", "End"],
        "readings_on": ["かん"],
        "readings_kun": [],
        "wk_level": 14,
        "wk_meanings": ["Perfect"],
        "wk_readings_on": ["かん"],
        "wk_readings_kun": [],
        "wk_radicals": ["Roof", "Origin"]
    },
    "念": {
        "strokes": 8,
        "grade": 4,
        "freq": 390,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Wish", "Sense", "Idea", "Thought", "Feeling", "Desire", "Attention"],
        "readings_on": ["ねん"],
        "readings_kun": [],
        "wk_level": 14,
        "wk_meanings": ["Thought"],
        "wk_readings_on": ["ねん"],
        "wk_readings_kun": [],
        "wk_radicals": ["Now", "Heart"]
    },
    "折": {
        "strokes": 7,
        "grade": 4,
        "freq": 962,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Fold", "Break", "Fracture", "Bend", "Yield", "Submit"],
        "readings_on": ["せつ", "しゃく"],
        "readings_kun": ["お.る", "おり", "お.り", "-お.り", "お.れる"],
        "wk_level": 14,
        "wk_meanings": ["Fold", "^Bend"],
        "wk_readings_on": ["せつ"],
        "wk_readings_kun": ["!お"],
        "wk_radicals": ["Fingers", "Axe"]
    },
    "望": {
        "strokes": 11,
        "grade": 4,
        "freq": 470,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Ambition", "Full Moon", "Hope", "Desire", "Aspire To", "Expect"],
        "readings_on": ["ぼう", "もう"],
        "readings_kun": ["のぞ.む", "もち"],
        "wk_level": 14,
        "wk_meanings": ["Hope"],
        "wk_readings_on": ["ぼう"],
        "wk_readings_kun": ["!のぞ"],
        "wk_radicals": ["Death", "Moon", "King"]
    },
    "束": {
        "strokes": 7,
        "grade": 4,
        "freq": 918,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Bundle", "Sheaf", "Ream", "Tie In Bundles", "Govern", "Manage", "Control"],
        "readings_on": ["そく"],
        "readings_kun": ["たば", "たば.ねる", "つか", "つか.ねる"],
        "wk_level": 14,
        "wk_meanings": ["Bundle"],
        "wk_readings_on": ["そく"],
        "wk_readings_kun": ["!たば"],
        "wk_radicals": ["Bundle"]
    },
    "残": {
        "strokes": 10,
        "grade": 4,
        "freq": 380,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Remainder", "Leftover", "Balance"],
        "readings_on": ["ざん", "さん"],
        "readings_kun": ["のこ.る", "のこ.す", "そこな.う", "のこ.り"],
        "wk_level": 14,
        "wk_meanings": ["Remainder"],
        "wk_readings_on": ["ざん"],
        "wk_readings_kun": ["!のこ"],
        "wk_radicals": ["Yakuza", "Bar"]
    },
    "求": {
        "strokes": 7,
        "grade": 4,
        "freq": 220,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Request", "Want", "Wish For", "Require", "Demand"],
        "readings_on": ["きゅう", "ぐ"],
        "readings_kun": ["もと.める"],
        "wk_level": 10,
        "wk_meanings": ["Request"],
        "wk_readings_on": ["きゅう"],
        "wk_readings_kun": ["!もと"],
        "wk_radicals": ["Ground", "Water", "Drop"]
    },
    "約": {
        "strokes": 9,
        "grade": 4,
        "freq": 94,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Promise", "Approximately", "Shrink"],
        "readings_on": ["やく"],
        "readings_kun": ["つづ.まる", "つづ.める", "つづま.やか"],
        "wk_level": 14,
        "wk_meanings": ["Promise"],
        "wk_readings_on": ["やく"],
        "wk_readings_kun": [],
        "wk_radicals": ["Thread", "Pool"]
    },
    "性": {
        "strokes": 8,
        "grade": 5,
        "freq": 104,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Sex", "Gender", "Nature"],
        "readings_on": ["せい", "しょう"],
        "readings_kun": ["さが"],
        "wk_level": 14,
        "wk_meanings": ["Gender", "^Nature", "^Sex"],
        "wk_readings_on": ["せい", "しょう"],
        "wk_readings_kun": [],
        "wk_radicals": ["Soul", "Life"]
    },
    "格": {
        "strokes": 10,
        "grade": 5,
        "freq": 281,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Status", "Rank", "Capacity", "Character", "Case (law, Grammar)"],
        "readings_on": ["かく", "こう", "きゃく", "ごう"],
        "readings_kun": [],
        "wk_level": 14,
        "wk_meanings": ["Status"],
        "wk_readings_on": ["かく"],
        "wk_readings_kun": [],
        "wk_radicals": ["Tree", "Kiss"]
    },
    "能": {
        "strokes": 10,
        "grade": 5,
        "freq": 273,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Ability", "Talent", "Skill", "Capacity"],
        "readings_on": ["のう"],
        "readings_kun": ["よ.く"],
        "wk_level": 14,
        "wk_meanings": ["Ability"],
        "wk_readings_on": ["のう"],
        "wk_readings_kun": [],
        "wk_radicals": ["Private", "Moon", "Spoon"]
    },
    "術": {
        "strokes": 11,
        "grade": 5,
        "freq": 350,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Art", "Technique", "Skill", "Means", "Trick", "Resources", "Magic"],
        "readings_on": ["じゅつ"],
        "readings_kun": ["すべ"],
        "wk_level": 14,
        "wk_meanings": ["Art"],
        "wk_readings_on": ["じゅつ"],
        "wk_readings_kun": [],
        "wk_radicals": ["Go", "Angel", "Drop"]
    },
    "晴": {
        "strokes": 12,
        "grade": 2,
        "freq": 1022,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Clear Up"],
        "readings_on": ["せい"],
        "readings_kun": ["は.れる", "は.れ", "は.れ-", "-ば.れ", "は.らす"],
        "wk_level": 15,
        "wk_meanings": ["Clear Up"],
        "wk_readings_on": ["!せい"],
        "wk_readings_kun": ["は"],
        "wk_radicals": ["Sun", "Blue"]
    },

    "列": {
        "strokes": 6,
        "grade": 3,
        "freq": 927,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["File", "Row", "Rank", "Tier", "Column"],
        "readings_on": ["れつ", "れ"],
        "readings_kun": [],
        "wk_level": 15,
        "wk_meanings": ["Row"],
        "wk_readings_on": ["れつ"],
        "wk_readings_kun": [],
        "wk_radicals": ["Yakuza", "Knife"]
    },
    "式": {
        "strokes": 6,
        "grade": 3,
        "freq": 251,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Style", "Ceremony", "Rite", "Function", "Method", "System", "Form", "Expression"],
        "readings_on": ["しき"],
        "readings_kun": [],
        "wk_level": 15,
        "wk_meanings": ["Ritual", "^Ceremony", "^Equation"],
        "wk_readings_on": ["しき"],
        "wk_readings_kun": [],
        "wk_radicals": ["Ceremony", "Construction"]
    },
    "信": {
        "strokes": 9,
        "grade": 4,
        "freq": 208,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Faith", "Truth", "Fidelity", "Trust"],
        "readings_on": ["しん"],
        "readings_kun": [],
        "wk_level": 15,
        "wk_meanings": ["Believe", "^Trust"],
        "wk_readings_on": ["しん"],
        "wk_readings_kun": [],
        "wk_radicals": ["Leader", "Say"]
    },
    "単": {
        "strokes": 9,
        "grade": 4,
        "freq": 586,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Simple", "One", "Single", "Merely"],
        "readings_on": ["たん"],
        "readings_kun": ["ひとえ"],
        "wk_level": 15,
        "wk_meanings": ["Simple"],
        "wk_readings_on": ["たん"],
        "wk_readings_kun": [],
        "wk_radicals": ["Simple"]
    },
    "変": {
        "strokes": 9,
        "grade": 4,
        "freq": 238,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Unusual", "Change", "Strange"],
        "readings_on": ["へん"],
        "readings_kun": ["か.わる", "か.わり", "か.える"],
        "wk_level": 15,
        "wk_meanings": ["Change", "^Strange"],
        "wk_readings_on": ["へん"],
        "wk_readings_kun": ["!か"],
        "wk_radicals": ["Red", "Winter"]
    },
    "夫": {
        "strokes": 4,
        "grade": 4,
        "freq": 335,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Husband", "Man"],
        "readings_on": ["ふ", "ふう", "ぶ"],
        "readings_kun": ["おっと", "それ"],
        "wk_level": 15,
        "wk_meanings": ["Husband"],
        "wk_readings_on": ["ふう", "ふ"],
        "wk_readings_kun": ["!おっと"],
        "wk_radicals": ["Husband"]
    },

    "昨": {
        "strokes": 9,
        "grade": 4,
        "freq": 226,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Yesterday", "Previous"],
        "readings_on": ["さく"],
        "readings_kun": [],
        "wk_level": 15,
        "wk_meanings": ["Previous", "^Yesterday"],
        "wk_readings_on": ["さく"],
        "wk_readings_kun": [],
        "wk_radicals": ["Sun", "Key"]
    },
    "法": {
        "strokes": 8,
        "grade": 4,
        "freq": 100,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Method", "Law", "Rule", "Principle", "Model", "System"],
        "readings_on": ["ほう", "はっ", "ほっ", "ふらん"],
        "readings_kun": ["のり"],
        "wk_level": 15,
        "wk_meanings": ["Method", "^Law"],
        "wk_readings_on": ["ほう"],
        "wk_readings_kun": [],
        "wk_radicals": ["Tsunami", "Past"]
    },
    "晩": {
        "strokes": 12,
        "grade": 6,
        "freq": 1424,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Nightfall", "Night"],
        "readings_on": ["ばん"],
        "readings_kun": [],
        "wk_level": 15,
        "wk_meanings": ["Night", "^Evening"],
        "wk_readings_on": ["ばん"],
        "wk_readings_kun": [],
        "wk_radicals": ["Sun", "Excuse"]
    },
    "猫": {
        "strokes": 11,
        "grade": 8,
        "freq": 1702,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Cat"],
        "readings_on": ["びょう"],
        "readings_kun": ["ねこ"],
        "wk_level": 15,
        "wk_meanings": ["Cat"],
        "wk_readings_on": [],
        "wk_readings_kun": ["ねこ"],
        "wk_radicals": ["Animal", "Flowers", "Rice Paddy"]
    },
    "園": {
        "strokes": 13,
        "grade": 2,
        "freq": 628,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Park", "Garden", "Yard", "Farm"],
        "readings_on": ["えん"],
        "readings_kun": ["その"],
        "wk_level": 16,
        "wk_meanings": ["Garden", "^Park"],
        "wk_readings_on": ["えん"],
        "wk_readings_kun": [],
        "wk_radicals": ["Mouth", "Zombie"]
    },

    "遠": {
        "strokes": 13,
        "grade": 2,
        "freq": 887,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["Distant", "Far"],
        "readings_on": ["えん", "おん"],
        "readings_kun": ["とお.い"],
        "wk_level": 16,
        "wk_meanings": ["Far"],
        "wk_readings_on": ["えん"],
        "wk_readings_kun": ["!とお"],
        "wk_radicals": ["Scooter", "Zombie"]
    },
    "係": {
        "strokes": 9,
        "grade": 3,
        "freq": 232,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Person In Charge", "Connection", "Duty", "Concern Oneself"],
        "readings_on": ["けい"],
        "readings_kun": ["かか.る", "かかり", "-がかり", "かか.わる"],
        "wk_level": 16,
        "wk_meanings": ["Connection"],
        "wk_readings_on": ["けい"],
        "wk_readings_kun": ["!かか", "!かかり"],
        "wk_radicals": ["Leader", "Ground", "Thread"]
    },
    "取": {
        "strokes": 8,
        "grade": 3,
        "freq": 122,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Take", "Fetch", "Take Up"],
        "readings_on": ["しゅ"],
        "readings_kun": ["と.る", "と.り", "と.り-", "とり", "-ど.り"],
        "wk_level": 16,
        "wk_meanings": ["Take"],
        "wk_readings_on": ["しゅ"],
        "wk_readings_kun": ["!と"],
        "wk_radicals": ["Ear", "Stool"]
    },

    "守": {
        "strokes": 6,
        "grade": 3,
        "freq": 457,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Guard", "Protect", "Defend", "Obey"],
        "readings_on": ["しゅ", "す"],
        "readings_kun": ["まも.る", "まも.り", "もり", "-もり", "かみ"],
        "wk_level": 16,
        "wk_meanings": ["Protect"],
        "wk_readings_on": ["す", "^しゅ"],
        "wk_readings_kun": ["!まも", "!もり"],
        "wk_radicals": ["Roof", "Measurement"]
    },
    "幸": {
        "strokes": 8,
        "grade": 3,
        "freq": 786,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Happiness", "Blessing", "Fortune"],
        "readings_on": ["こう"],
        "readings_kun": ["さいわ.い", "さち", "しあわ.せ"],
        "wk_level": 16,
        "wk_meanings": ["Happiness"],
        "wk_readings_on": ["こう"],
        "wk_readings_kun": ["!しあわ", "!さいわ", "!さち"],
        "wk_radicals": ["Lid", "Spicy"]
    },

    "箱": {
        "strokes": 15,
        "grade": 3,
        "freq": 1357,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Box", "Chest", "Case", "Bin", "Railway Car"],
        "readings_on": ["そう"],
        "readings_kun": ["はこ"],
        "wk_level": 16,
        "wk_meanings": ["Box"],
        "wk_readings_on": [],
        "wk_readings_kun": ["はこ"],
        "wk_radicals": ["Bamboo", "Tree", "Eye"]
    },
    "面": {
        "strokes": 9,
        "grade": 3,
        "freq": 186,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Mask", "Face", "Features", "Surface"],
        "readings_on": ["めん", "べん"],
        "readings_kun": ["おも", "おもて", "つら"],
        "wk_level": 16,
        "wk_meanings": ["Face", "^Surface"],
        "wk_readings_on": ["めん"],
        "wk_readings_kun": ["!おも", "!おもて"],
        "wk_radicals": ["Face"]
    },
    "喜": {
        "strokes": 12,
        "grade": 4,
        "freq": 769,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Rejoice", "Take Pleasure In"],
        "readings_on": ["き"],
        "readings_kun": ["よろこ.ぶ", "よろこ.ばす"],
        "wk_level": 17,
        "wk_meanings": ["Rejoice", "^Delighted", "^Pleased"],
        "wk_readings_on": ["き"],
        "wk_readings_kun": ["!よろこ"],
        "wk_radicals": ["Drum", "Mouth"]
    },
    "治": {
        "strokes": 8,
        "grade": 4,
        "freq": 109,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Reign", "Be At Peace", "Calm Down", "Subdue", "Quell", "Govt", "Cure", "Heal", "Rule", "Conserve"],
        "readings_on": ["じ", "ち"],
        "readings_kun": ["おさ.める", "おさ.まる", "なお.る", "なお.す"],
        "wk_level": 16,
        "wk_meanings": ["Cure", "^Heal", "^Reign", "^Rule"],
        "wk_readings_on": ["じ", "ち"],
        "wk_readings_kun": ["!なお"],
        "wk_radicals": ["Tsunami", "Machine"]
    },
    "笑": {
        "strokes": 10,
        "grade": 4,
        "freq": 913,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Laugh"],
        "readings_on": ["しょう"],
        "readings_kun": ["わら.う", "え.む"],
        "wk_level": 16,
        "wk_meanings": ["Laugh"],
        "wk_readings_on": ["!しょう"],
        "wk_readings_kun": ["わら", "え"],
        "wk_radicals": ["Bamboo", "Heaven"]
    },
    "辞": {
        "strokes": 13,
        "grade": 4,
        "freq": 633,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Resign", "Word", "Term", "Expression"],
        "readings_on": ["じ"],
        "readings_kun": ["や.める", "いな.む"],
        "wk_level": 16,
        "wk_meanings": ["Quit", "^Word"],
        "wk_readings_on": ["じ"],
        "wk_readings_kun": ["!や"],
        "wk_radicals": ["Tongue", "Spicy"]
    },
    "関": {
        "strokes": 14,
        "grade": 4,
        "freq": 70,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Connection", "Barrier", "Gateway", "Involve", "Concerning"],
        "readings_on": ["かん"],
        "readings_kun": ["せき", "-ぜき", "かか.わる", "からくり", "かんぬき"],
        "wk_level": 16,
        "wk_meanings": ["Related", "^Connected"],
        "wk_readings_on": ["かん"],
        "wk_readings_kun": ["!かか", "!せき"],
        "wk_radicals": ["Gate", "Horns", "Heaven"]
    },
    "政": {
        "strokes": 9,
        "grade": 5,
        "freq": 17,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Politics", "Government"],
        "readings_on": ["せい", "しょう"],
        "readings_kun": ["まつりごと", "まん"],
        "wk_level": 16,
        "wk_meanings": ["Politics", "^Government"],
        "wk_readings_on": ["せい"],
        "wk_readings_kun": [],
        "wk_radicals": ["Correct", "Winter"]
    },
    "留": {
        "strokes": 10,
        "grade": 5,
        "freq": 731,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Detain", "Fasten", "Halt", "Stop"],
        "readings_on": ["りゅう", "る"],
        "readings_kun": ["と.める", "と.まる", "とど.める", "とど.まる", "るうぶる"],
        "wk_level": 16,
        "wk_meanings": ["Detain"],
        "wk_readings_on": ["る", "りゅう"],
        "wk_readings_kun": ["!と"],
        "wk_radicals": ["Private", "Sword", "Rice Paddy"]
    },
    "険": {
        "strokes": 11,
        "grade": 5,
        "freq": 707,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Precipitous", "Inaccessible Place", "Impregnable Position", "Steep Place", "Sharp Eyes"],
        "readings_on": ["けん"],
        "readings_kun": ["けわ.しい"],
        "wk_level": 16,
        "wk_meanings": ["Risky", "^Steep"],
        "wk_readings_on": ["けん"],
        "wk_readings_kun": ["!けわ"],
        "wk_radicals": ["Building", "Squid"]
    },
    "危": {
        "strokes": 6,
        "grade": 6,
        "freq": 606,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Dangerous", "Fear", "Uneasy"],
        "readings_on": ["き"],
        "readings_kun": ["あぶ.ない", "あや.うい", "あや.ぶむ"],
        "wk_level": 16,
        "wk_meanings": ["Dangerous"],
        "wk_readings_on": ["き"],
        "wk_readings_kun": ["!あぶ", "!あや"],
        "wk_radicals": ["Prison", "Cliff", "Snake"]
    },
    "存": {
        "strokes": 6,
        "grade": 6,
        "freq": 577,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Exist", "Suppose", "Be Aware Of", "Believe", "Feel"],
        "readings_on": ["そん", "ぞん"],
        "readings_kun": ["ながら.える", "あ.る", "たも.つ", "と.う"],
        "wk_level": 16,
        "wk_meanings": ["Exist", "^Suppose"],
        "wk_readings_on": ["そん", "ぞん"],
        "wk_readings_kun": [],
        "wk_radicals": ["Narwhal", "Stick", "Child"]
    },
    "原": {
        "strokes": 10,
        "grade": 2,
        "freq": 172,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Meadow", "Original", "Primitive", "Field", "Plain", "Prairie", "Tundra", "Wilderness"],
        "readings_on": ["げん"],
        "readings_kun": ["はら"],
        "wk_level": 17,
        "wk_meanings": ["Original", "^Fundamental", "^Field"],
        "wk_readings_on": ["げん"],
        "wk_readings_kun": ["!はら"],
        "wk_radicals": ["Original"]
    },
    "薬": {
        "strokes": 16,
        "grade": 3,
        "freq": 702,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["Medicine", "Chemical", "Enamel", "Gunpowder", "Benefit"],
        "readings_on": ["やく"],
        "readings_kun": ["くすり"],
        "wk_level": 17,
        "wk_meanings": ["Medicine", "^Drug", "^Drugs"],
        "wk_readings_on": ["やく"],
        "wk_readings_kun": ["!くすり"],
        "wk_radicals": ["Flowers", "Comfort"]
    },
    "側": {
        "strokes": 11,
        "grade": 4,
        "freq": 216,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Side", "Lean", "Oppose", "Regret"],
        "readings_on": ["そく"],
        "readings_kun": ["かわ", "がわ", "そば"],
        "wk_level": 17,
        "wk_meanings": ["Side"],
        "wk_readings_on": ["!そく"],
        "wk_readings_kun": ["がわ", "^そば"],
        "wk_radicals": ["Leader", "Shellfish", "Knife"]
    },
    "席": {
        "strokes": 10,
        "grade": 4,
        "freq": 370,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Seat", "Mat", "Occasion", "Place"],
        "readings_on": ["せき"],
        "readings_kun": ["むしろ"],
        "wk_level": 17,
        "wk_meanings": ["Seat"],
        "wk_readings_on": ["せき"],
        "wk_readings_kun": [],
        "wk_radicals": ["Yurt", "Towel"]
    },
    "敗": {
        "strokes": 11,
        "grade": 4,
        "freq": 516,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Failure", "Defeat", "Reversal"],
        "readings_on": ["はい"],
        "readings_kun": ["やぶ.れる"],
        "wk_level": 17,
        "wk_meanings": ["Failure", "^Fail"],
        "wk_readings_on": ["はい"],
        "wk_readings_kun": ["!やぶ"],
        "wk_radicals": ["Shellfish", "Winter"]
    },
    "果": {
        "strokes": 8,
        "grade": 4,
        "freq": 258,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Fruit", "Reward", "Carry Out", "Achieve", "Complete", "End", "Finish", "Succeed"],
        "readings_on": ["か"],
        "readings_kun": ["は.たす", "はた.す", "-は.たす", "は.てる", "-は.てる", "は.て"],
        "wk_level": 17,
        "wk_meanings": ["Fruit"],
        "wk_readings_on": ["か"],
        "wk_readings_kun": ["!くだ", "!は"],
        "wk_radicals": ["Fruit"]
    },
    "因": {
        "strokes": 6,
        "grade": 5,
        "freq": 636,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Cause", "Factor", "Be Associated With", "Depend On", "Be Limited To"],
        "readings_on": ["いん"],
        "readings_kun": ["よ.る", "ちな.む"],
        "wk_level": 17,
        "wk_meanings": ["Cause"],
        "wk_readings_on": ["いん"],
        "wk_readings_kun": ["!よ"],
        "wk_radicals": ["Mouth", "Big"]
    },
    "常": {
        "strokes": 11,
        "grade": 5,
        "freq": 293,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Usual", "Ordinary", "Normal", "Common", "Regular", "Continually", "Always", "Long-lasting"],
        "readings_on": ["じょう"],
        "readings_kun": ["つね", "とこ-"],
        "wk_level": 17,
        "wk_meanings": ["Ordinary", "^Normal", "^Usual"],
        "wk_readings_on": ["じょう"],
        "wk_readings_kun": ["!つね"],
        "wk_radicals": ["Viking", "Mouth", "Towel"]
    },
    "識": {
        "strokes": 19,
        "grade": 5,
        "freq": 496,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Discriminating", "Know", "Write"],
        "readings_on": ["しき"],
        "readings_kun": ["し.る", "しる.す"],
        "wk_level": 17,
        "wk_meanings": ["Discerning", "^Discriminating", "^Know"],
        "wk_readings_on": ["しき"],
        "wk_readings_kun": [],
        "wk_radicals": ["Say", "Sound", "Drunkard"]
    },
    "非": {
        "strokes": 8,
        "grade": 5,
        "freq": 472,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Un-", "Mistake", "Negative", "Injustice", "Non-"],
        "readings_on": ["ひ"],
        "readings_kun": ["あら.ず"],
        "wk_level": 17,
        "wk_meanings": ["Injustice", "^Negative", "^Mistake"],
        "wk_readings_on": ["ひ"],
        "wk_readings_kun": [],
        "wk_radicals": ["Criminal"]
    },
    "官": {
        "strokes": 8,
        "grade": 4,
        "freq": 230,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Bureaucrat", "The Government", "Organ"],
        "readings_on": ["かん"],
        "readings_kun": [],
        "wk_level": 17,
        "wk_meanings": ["Government"],
        "wk_readings_on": ["かん"],
        "wk_readings_kun": [],
        "wk_radicals": ["Roof", "Bear"]
    },
    "察": {
        "strokes": 14,
        "grade": 4,
        "freq": 477,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Guess", "Presume", "Surmise", "Judge", "Understand"],
        "readings_on": ["さつ"],
        "readings_kun": [],
        "wk_level": 17,
        "wk_meanings": ["Guess"],
        "wk_readings_on": ["さつ"],
        "wk_readings_kun": ["!さっ"],
        "wk_radicals": ["Roof", "Festival"]
    },
    "愛": {
        "strokes": 13,
        "grade": 4,
        "freq": 640,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Love", "Affection", "Favourite"],
        "readings_on": ["あい"],
        "readings_kun": ["いと.しい", "かな.しい", "め.でる", "お.しむ", "まな"],
        "wk_level": 17,
        "wk_meanings": ["Love"],
        "wk_readings_on": ["あい"],
        "wk_readings_kun": ["!まな"],
        "wk_radicals": ["Cleat", "Forehead", "Heart", "Winter"]
    },
    "警": {
        "strokes": 19,
        "grade": 6,
        "freq": 366,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Admonish", "Commandment"],
        "readings_on": ["けい"],
        "readings_kun": ["いまし.める"],
        "wk_level": 17,
        "wk_meanings": ["Warn", "^Admonish"],
        "wk_readings_on": ["けい"],
        "wk_readings_kun": [],
        "wk_radicals": ["Poem", "Winter", "Say"]
    },
    "覚": {
        "strokes": 12,
        "grade": 4,
        "freq": 710,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Memorize", "Learn", "Remember", "Awake", "Sober Up"],
        "readings_on": ["かく"],
        "readings_kun": ["おぼ.える", "さ.ます", "さ.める", "さと.る"],
        "wk_level": 17,
        "wk_meanings": ["Memorize", "^Awake"],
        "wk_readings_on": ["かく"],
        "wk_readings_kun": ["!おぼ", "!さ"],
        "wk_radicals": ["Viking", "See"]
    },
    "説": {
        "strokes": 14,
        "grade": 4,
        "freq": 326,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["Opinion", "Theory", "Explanation", "Rumor"],
        "readings_on": ["せつ", "ぜい"],
        "readings_kun": ["と.く"],
        "wk_level": 17,
        "wk_meanings": ["Theory"],
        "wk_readings_on": ["せつ"],
        "wk_readings_kun": ["!と"],
        "wk_radicals": ["Say", "Guard"]
    },
    "告": {
        "strokes": 7,
        "grade": 4,
        "freq": 188,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Revelation", "Tell", "Inform", "Announce"],
        "readings_on": ["こく"],
        "readings_kun": ["つ.げる"],
        "wk_level": 18,
        "wk_meanings": ["Announce"],
        "wk_readings_on": ["こく"],
        "wk_readings_kun": ["!つ"],
        "wk_radicals": ["Slide", "Dirt", "Mouth"]
    },
    "種": {
        "strokes": 14,
        "grade": 4,
        "freq": 461,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Species", "Kind", "Class", "Variety", "Seed"],
        "readings_on": ["しゅ"],
        "readings_kun": ["たね", "-ぐさ"],
        "wk_level": 18,
        "wk_meanings": ["Kind", "^Type"],
        "wk_readings_on": ["しゅ"],
        "wk_readings_kun": ["!たね", "!ぐさ"],
        "wk_radicals": ["Grain", "Heavy"]
    },
    "達": {
        "strokes": 12,
        "grade": 4,
        "freq": 500,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Accomplished", "Reach", "Arrive", "Attain"],
        "readings_on": ["たつ", "だ"],
        "readings_kun": ["-たち"],
        "wk_level": 18,
        "wk_meanings": ["Attain", "^Plural"],
        "wk_readings_on": ["たつ"],
        "wk_readings_kun": ["!たち"],
        "wk_radicals": ["Scooter", "Happiness"]
    },
    "類": {
        "strokes": 18,
        "grade": 4,
        "freq": 678,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Sort", "Kind", "Variety", "Class", "Genus"],
        "readings_on": ["るい"],
        "readings_kun": ["たぐ.い"],
        "wk_level": 18,
        "wk_meanings": ["Type", "^Category", "^Kind"],
        "wk_readings_on": ["るい"],
        "wk_readings_kun": ["!たぐ"],
        "wk_radicals": ["Rice", "Big", "Geoduck"]
    },
    "報": {
        "strokes": 12,
        "grade": 5,
        "freq": 167,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Report", "News", "Reward", "Retribution"],
        "readings_on": ["ほう"],
        "readings_kun": ["むく.いる"],
        "wk_level": 18,
        "wk_meanings": ["News", "^Report"],
        "wk_readings_on": ["ほう"],
        "wk_readings_kun": ["!むく"],
        "wk_radicals": ["Happiness", "Stamp", "Stool"]
    },
    "等": {
        "strokes": 12,
        "grade": 3,
        "freq": 798,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Etc.", "And So Forth", "Class (first)", "Quality", "Equal", "Similar"],
        "readings_on": ["とう"],
        "readings_kun": ["ひと.しい", "など", "-ら"],
        "wk_level": 18,
        "wk_meanings": ["Equal"],
        "wk_readings_on": ["とう"],
        "wk_readings_kun": ["!ひと", "!など"],
        "wk_radicals": ["Bamboo", "Temple"]
    },
    "座": {
        "strokes": 10,
        "grade": 6,
        "freq": 588,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Squat", "Seat", "Cushion", "Gathering", "Sit"],
        "readings_on": ["ざ"],
        "readings_kun": ["すわ.る"],
        "wk_level": 18,
        "wk_meanings": ["Sit", "^Seat"],
        "wk_readings_on": ["ざ"],
        "wk_readings_kun": ["!すわ"],
        "wk_radicals": ["Canopy", "Person", "Dirt"]
    },
    "忘": {
        "strokes": 7,
        "grade": 6,
        "freq": 1129,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Forget"],
        "readings_on": ["ぼう"],
        "readings_kun": ["わす.れる"],
        "wk_level": 18,
        "wk_meanings": ["Forget"],
        "wk_readings_on": ["ぼう"],
        "wk_readings_kun": ["!わす"],
        "wk_radicals": ["Death", "Heart"]
    },
    "洗": {
        "strokes": 9,
        "grade": 6,
        "freq": 1168,
        "jlpt_old": 3,
        "jlpt_new": 3,
        "meanings": ["Wash", "Inquire Into", "Probe"],
        "readings_on": ["せん"],
        "readings_kun": ["あら.う"],
        "wk_level": 18,
        "wk_meanings": ["Wash"],
        "wk_readings_on": ["せん"],
        "wk_readings_kun": ["!あら"],
        "wk_radicals": ["Tsunami", "Previous"]
    },
    "許": {
        "strokes": 11,
        "grade": 5,
        "freq": 720,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Permit", "Approve"],
        "readings_on": ["きょ"],
        "readings_kun": ["ゆる.す", "もと"],
        "wk_level": 18,
        "wk_meanings": ["Permit", "^Allow"],
        "wk_readings_on": ["きょ"],
        "wk_readings_kun": ["!ゆる"],
        "wk_radicals": ["Say", "Noon"]
    },
    "静": {
        "strokes": 14,
        "grade": 4,
        "freq": 764,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Quiet"],
        "readings_on": ["せい", "じょう"],
        "readings_kun": ["しず-", "しず.か", "しず.まる", "しず.める"],
        "wk_level": 18,
        "wk_meanings": ["Quiet"],
        "wk_readings_on": ["せい"],
        "wk_readings_kun": ["!しず"],
        "wk_radicals": ["Blue", "Conflict"]
    },
    "煙": {
        "strokes": 13,
        "grade": 8,
        "freq": 1290,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Smoke"],
        "readings_on": ["えん"],
        "readings_kun": ["けむ.る", "けむり", "けむ.い"],
        "wk_level": 18,
        "wk_meanings": ["Smoke"],
        "wk_readings_on": ["えん"],
        "wk_readings_kun": ["!けむ", "!けむり"],
        "wk_radicals": ["Fire", "Helicopter", "Dirt"]
    },
    "加": {
        "strokes": 5,
        "grade": 4,
        "freq": 130,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Add", "Addition", "Increase", "Join", "Include", "Canada"],
        "readings_on": ["か"],
        "readings_kun": ["くわ.える", "くわ.わる"],
        "wk_level": 19,
        "wk_meanings": ["Add"],
        "wk_readings_on": ["か"],
        "wk_readings_kun": ["!くわ"],
        "wk_radicals": ["Power", "Mouth"]
    },
    "容": {
        "strokes": 10,
        "grade": 5,
        "freq": 264,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Contain", "Form", "Looks"],
        "readings_on": ["よう"],
        "readings_kun": ["い.れる"],
        "wk_level": 19,
        "wk_meanings": ["Form", "^Appearance", "^Shape", "^Figure"],
        "wk_readings_on": ["よう"],
        "wk_readings_kun": [],
        "wk_radicals": ["Roof", "Valley"]
    },
    "易": {
        "strokes": 8,
        "grade": 5,
        "freq": 571,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Easy", "Ready To", "Simple", "Fortune-telling", "Divination"],
        "readings_on": ["えき", "い"],
        "readings_kun": ["やさ.しい", "やす.い"],
        "wk_level": 19,
        "wk_meanings": ["Easy"],
        "wk_readings_on": ["い", "^えき"],
        "wk_readings_kun": ["!やさ"],
        "wk_radicals": ["Easy"]
    },
    "財": {
        "strokes": 10,
        "grade": 5,
        "freq": 494,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Property", "Money", "Wealth", "Assets"],
        "readings_on": ["ざい", "さい", "ぞく"],
        "readings_kun": ["たから"],
        "wk_level": 19,
        "wk_meanings": ["Wealth"],
        "wk_readings_on": ["さい", "ざい"],
        "wk_readings_kun": [],
        "wk_radicals": ["Shellfish", "Genius"]
    },
    "若": {
        "strokes": 8,
        "grade": 6,
        "freq": 458,
        "jlpt_old": 2,
        "jlpt_new": 3,
        "meanings": ["Young", "If", "Perhaps", "Possibly", "Low Number", "Immature"],
        "readings_on": ["じゃく", "にゃく", "にゃ"],
        "readings_kun": ["わか.い", "わか-", "も.しくわ", "も.し", "も.しくは", "ごと.し"],
        "wk_level": 19,
        "wk_meanings": ["Young"],
        "wk_readings_on": ["!じゃく"],
        "wk_readings_kun": ["わか", "^も"],
        "wk_radicals": ["Flowers", "Right"]
    },




}
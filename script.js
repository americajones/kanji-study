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
const flashButt = document.querySelector('.flashButt');
const buttBox = document.querySelector('.butt-box');
const kanaBox = document.querySelector('#kanaBox');
const mainSelectBox = document.querySelector('#studyQuizSelectBox');
let kanjiArray = [];
let onArray = [];
let kunArray = [];
let meaningsArray = [];
let number;
let messageBox = "";

getN5();

function makeButtons(backEvent, skipEvent) {
    removeAllChildNodes(buttBox);
    let secret = document.createElement('p');
    secret.classList.add('float-message')
    secret.textContent = "";
    let skipButt = document.createElement('button');
    skipButt.textContent = "Skip";
    skipButt.classList.add("skip", "butt", "quizPage", "drop-butt");
    let backButt = document.createElement('button');
    backButt.textContent = "Go Back";
    backButt.classList.add("back", "butt", "quizPage", "drop-butt");
    skipButt.addEventListener('click', skipEvent);
    backButt.addEventListener('click', backEvent);
    buttBox.append(backButt);
    buttBox.append(secret);
    buttBox.append(skipButt);
    messageBox = document.querySelector('.float-message');
}
function populateMainPageWithKana() {
    mainSelectBox.classList.add('hidden');
    const newDiv = document.createElement('div');
    const newDiv2 = document.createElement('div');
    const newDiv3 = document.createElement('div');
    const newDiv4 = document.createElement('div');
    const newDiv5 = document.createElement('div');
    const newDiv6 = document.createElement('div');
    const newDiv7 = document.createElement('div');
    const newDiv8 = document.createElement('div');
    const newButt = document.createElement('button');
    const newButt2 = document.createElement('button');
    const newButt3 = document.createElement('button');
    const newButt4 = document.createElement('button');
    newButt.classList.add('butt');
    newButt2.classList.add('butt');
    newButt3.classList.add('butt');
    newButt4.classList.add('butt');
    newDiv.classList.add('list-box');
    newDiv2.classList.add('list-box');
    newDiv3.classList.add('list-box');
    newDiv4.classList.add('list-box');
    newDiv5.classList.add('labels');
    newDiv6.classList.add('labels');
    newDiv7.classList.add('labels');
    newDiv8.classList.add('labels');
    newDiv5.innerHTML = "<p>Hiragana</p> <p>⟶</p> <p>Katakana</p>";
    newDiv6.innerHTML = "<p>Katakana</p> <p>⟶</p> <p>Hiragana</p>";
    newDiv7.innerHTML = "<p>Katakana</p> <p>⟶</p> <p>English</p>";
    newDiv8.innerHTML = "<p>Hiragana</p> <p>⟶</p> <p>English</p>";
    newButt.textContent = "start studying";
    newButt2.textContent = "start studying";
    newButt3.textContent = "start studying";
    newButt4.textContent = "start studying";
    newDiv.append(newDiv5);
    newDiv2.append(newDiv6);
    newDiv3.append(newDiv7);
    newDiv4.append(newDiv8);
    newDiv.append(newButt);
    newDiv2.append(newButt2);
    newDiv3.append(newButt3);
    newDiv4.append(newButt4);
    newButt.addEventListener('click', loadHiraKataQuiz);
    newButt2.addEventListener('click', loadKataHiraQuiz);
    newButt3.addEventListener('click', loadKatakanaQuiz);
    newButt4.addEventListener('click', loadHiraganaQuiz);
    kanaBox.append(newDiv4);
    kanaBox.append(newDiv3);
    kanaBox.append(newDiv);
    kanaBox.append(newDiv2);
    flashButt.classList.remove('hidden');
    flashButt.addEventListener('click', flashToggle);
}
function loadHiraKataQuiz() {
    //clear literally everything that could possibly be
    removeAllChildNodes(kanaBox);
    removeAllChildNodes(answersDiv);
    removeAllChildNodes(buttBox);
    konoKanji = "";
    trueAnswer = "";
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = '#0e504d';
    randoNumber = Math.floor(Math.random() * kanjiArray.length);
    konoKanji = kanjiArray[randoNumber];
    mainKanji.textContent = konoKanji;
    trueAnswer = kunArray[randoNumber];
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    //fix the skip button and load fake answers
    makeButtons(changeKanaDisplay, loadHiraKataQuiz);
    let answersArray = [];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * kanjiArray.length);
        randoAnswer = kunArray[nuRandoNum];
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        // console.log("YO");
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', handleKanaClickStudy)
        newDiv.classList.add('answer');
        answersDiv.append(newDiv);
    })
};
function loadKataHiraQuiz() {
    //clear literally everything that could possibly be
    removeAllChildNodes(kanaBox);
    removeAllChildNodes(answersDiv);
    removeAllChildNodes(buttBox);
    konoKanji = "";
    trueAnswer = "";
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = '#0e504d';
    randoNumber = Math.floor(Math.random() * kanjiArray.length);
    konoKanji = kunArray[randoNumber];
    mainKanji.textContent = konoKanji;
    trueAnswer = kanjiArray[randoNumber];
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    makeButtons(changeKanaDisplay, loadKataHiraQuiz);
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
        newDiv.addEventListener('click', handleKanaClickStudy2)
        newDiv.classList.add('answer');
        answersDiv.append(newDiv);
    })
};
function loadKatakanaQuiz() {
    //clear literally everything that could possibly be
    removeAllChildNodes(kanaBox);
    removeAllChildNodes(answersDiv);
    removeAllChildNodes(buttBox);
    konoKanji = "";
    trueAnswer = "";
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = '#0e504d';
    randoNumber = Math.floor(Math.random() * kanjiArray.length);
    konoKanji = kunArray[randoNumber];
    mainKanji.textContent = konoKanji;
    trueAnswer = meaningsArray[randoNumber];
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    makeButtons(changeKanaDisplay, loadKatakanaQuiz);
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
        newDiv.addEventListener('click', handleKanaClickStudy3)
        newDiv.classList.add('answer');
        newDiv.classList.add('smaller');
        answersDiv.append(newDiv);
    })
};
function loadHiraganaQuiz() {
    //clear literally everything that could possibly be
    removeAllChildNodes(kanaBox);
    removeAllChildNodes(buttBox);
    removeAllChildNodes(answersDiv);
    konoKanji = "";
    trueAnswer = "";
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = '#0e504d';
    randoNumber = Math.floor(Math.random() * kanjiArray.length);
    konoKanji = kanjiArray[randoNumber];
    mainKanji.textContent = konoKanji;
    trueAnswer = meaningsArray[randoNumber];
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    makeButtons(changeKanaDisplay, loadHiraganaQuiz);
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
        newDiv.addEventListener('click', handleKanaClickStudy4)
        newDiv.classList.add('answer');
        newDiv.classList.add('smaller');
        answersDiv.append(newDiv);
    })
};
function handleKanaClickStudy4() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('FUCK YES');
        mainKanji.append(" = ", trueAnswer);
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            loadHiraganaQuiz();
        }, 1500);
    } else {
        messageBox.textContent = 'try again.'
        setTimeout(() => {
            messageBox.textContent = "";
        }, 1000)
    }
}
function handleKanaClickStudy3() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('FUCK YES');
        mainKanji.append(" = ", trueAnswer);
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            loadKatakanaQuiz();
        }, 1500);
    } else {
        messageBox.textContent = 'try again.'
        setTimeout(() => {
            messageBox.textContent = "";
        }, 1000)
    }
}
function handleKanaClickStudy2() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('FUCK YES');
        mainKanji.append(" = ", trueAnswer);
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            loadKataHiraQuiz();
        }, 1500);
    } else {
        messageBox.textContent = 'try again.'
        setTimeout(() => {
            messageBox.textContent = "";
        }, 1000)
    }
}
function handleKanaClickStudy() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('FUCK YES');
        mainKanji.append(" = ", trueAnswer);
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            loadHiraKataQuiz();
        }, 1500);
    } else {
        messageBox.textContent = 'try again.'
        setTimeout(() => {
            messageBox.textContent = "";
        }, 1000)
    }
}
function populateMainPageWords() {
    removeAllChildNodes(fillbox1);
    removeAllChildNodes(fillbox2);
    removeAllChildNodes(fillbox3);
    removeAllChildNodes(fillbox4);
    removeAllChildNodes(fillbox5);
    removeAllChildNodes(fillbox6);
    const newDiv = document.createElement('div');
    const newDiv2 = document.createElement('div');
    const newDiv5 = document.createElement('div');
    const newDiv6 = document.createElement('div');
    const newButt = document.createElement('button');
    const newButt2 = document.createElement('button');
    const newButt5 = document.createElement('button');
    const newButt6 = document.createElement('button');
    newButt.addEventListener('click', loadKeywordQuizW1)
    newButt2.addEventListener('click', loadKeywordQuizW2)
    newButt5.addEventListener('click', loadKunQuiz5)
    newButt6.addEventListener('click', loadKunQuiz6)
    newButt.classList.add('whole', 'butt');
    newButt2.classList.add('whole', 'butt');
    newButt5.classList.add('whole', 'butt');
    newButt6.classList.add('whole', 'butt');
    newButt.textContent = "start studying"
    newButt2.textContent = "start studying"
    newButt5.textContent = "start studying"
    newButt6.textContent = "start studying"
    newDiv.classList.add('pale');
    newDiv2.classList.add('pale');
    newDiv5.classList.add('pale');
    newDiv6.classList.add('pale');
    newDiv.append(number);
    newDiv2.append(number);
    newDiv5.append(number);
    newDiv6.append(number);
    fillbox1.append(newDiv);
    fillbox2.append(newDiv2);
    fillbox5.append(newDiv5);
    fillbox6.append(newDiv6);
    fillbox1.append(newButt);
    fillbox2.append(newButt2);
    fillbox5.append(newButt5);
    fillbox6.append(newButt6);
    flashButt.classList.remove('hidden');
    flashButt.addEventListener('click', flashToggle);
    // cardsBox.prepend(newButt7);
    console.log('BUILT');
}
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
    // const newButt7 = document.createElement('button');
    newButt.addEventListener('click', loadKeywordQuiz1)
    newButt2.addEventListener('click', loadKeywordQuiz2)
    newButt3.addEventListener('click', loadOnQuiz3)
    newButt4.addEventListener('click', loadOnQuiz4)
    newButt5.addEventListener('click', loadKunQuiz5)
    newButt6.addEventListener('click', loadKunQuiz6)
    // newButt7.addEventListener('click', flashToggle)
    newButt.classList.add('whole', 'butt');
    newButt2.classList.add('whole', 'butt');
    newButt3.classList.add('whole', 'butt');
    newButt4.classList.add('whole', 'butt');
    newButt5.classList.add('whole', 'butt');
    newButt6.classList.add('whole', 'butt');
    // newButt7.classList.add('flashButt', 'drop-butt');
    newButt.textContent = "start studying"
    newButt2.textContent = "start studying"
    newButt3.textContent = "start studying"
    newButt4.textContent = "start studying"
    newButt5.textContent = "start studying"
    newButt6.textContent = "start studying"
    // newButt7.textContent = "toggle flashcards"
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
    flashButt.classList.remove('hidden');
    flashButt.addEventListener('click', flashToggle);
    // cardsBox.prepend(newButt7);
    console.log('BUILT');
}
function flashToggle() {
    cardsBox.classList.toggle('hidden');
};
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
        kanjiBoxTit.classList.add('cursive');
        infoBox.classList.add('infoBox');
        wordBox.append(translation);
        onBox.append(ons.replace(/,(?=[^\s])/g, ", "));
        kunBox.append(kuns.replace(/,(?=[^\s])/g, ", "));
        infoBox.append(wordBox, onBox, kunBox);
        kanjiBox.append(kanjiBoxTit);
        kanjiBox.append(infoBox);
        cardsBox.append(kanjiBox);
    });
};
function makeWordList() {
    kanjiArray.forEach((kanji, index) => {
        // console.log("INDEX= ", index);
        // console.log("KANJI= ", kanji);
        let mainKanji = kanji;
        let translation = meaningsArray[index];
        let kuns = kunArray[index];
        let kanjiBox = document.createElement('div');
        let wordBox = document.createElement('div');
        let kunBox = document.createElement('div');
        let infoBox = document.createElement('div');
        let kanjiBoxTit = document.createElement('h1');
        kanjiBoxTit.textContent = mainKanji;
        kanjiBox.classList.add('kanjiBox');
        kanjiBoxTit.classList.add('cursive');
        infoBox.classList.add('infoBox');
        wordBox.append(translation);
        kunBox.append(kuns.replace(/,(?=[^\s])/g, ", "));
        infoBox.append(wordBox, kunBox);
        kanjiBox.append(kanjiBoxTit);
        kanjiBox.append(infoBox);
        cardsBox.append(kanjiBox);
    });
};
function makeKanaList() {
    kanjiArray.forEach((kanji, index) => {
        // console.log("INDEX= ", index);
        // console.log("KANJI= ", kanji);
        let mainKanji = kanji;
        let translation = meaningsArray[index];
        let kuns = kunArray[index];
        let kanjiBox = document.createElement('div');
        let wordBox = document.createElement('div');
        let infoBox = document.createElement('div');
        let kanjiBoxTit = document.createElement('h1');
        let kanjiBoxTit2 = document.createElement('h2');
        kanjiBoxTit.textContent = mainKanji;
        kanjiBoxTit2.textContent = kuns;
        kanjiBox.classList.add('kanjiBox');
        infoBox.classList.add('infoBox');
        wordBox.append(translation);
        infoBox.append(wordBox);
        kanjiBox.append(kanjiBoxTit, kanjiBoxTit2);
        kanjiBox.append(infoBox);
        cardsBox.append(kanjiBox);
    })
};
function getKana() {
    kanjiArray = [];
    onArray = [];
    kunArray = [];
    meaningsArray = [];
    removeAllChildNodes(cardsBox);
    removeAllChildNodes(kanaBox);
    title.textContent = "";
    title.textContent = "Hiragana/Katakana Study";
    for (const [key, value] of Object.entries(dataKana)) {
        //hiragana
        kanjiArray.push(key);
        //english
        meaningsArray.push(value.english);
        //katakana
        kunArray.push(value.katakana);
    };
    console.log("OHNO", kunArray);
    populateMainPageWithKana();
    makeKanaList();
}
function getWords() {
    kanjiArray = [];
    onArray = [];
    kunArray = [];
    meaningsArray = [];
    removeAllChildNodes(cardsBox);
    removeAllChildNodes(kanaBox);
    mainSelectBox.classList.remove('hidden');
    title.textContent = "";
    title.textContent = "N5 Kanji Study";
    for (const [key, value] of Object.entries(words)) {
        kanjiArray.push(key);
        meaningsArray.push(value.meaning);
        let kunString = String(value.kana);
        kunArray.push(kunString);
    };
    number = kanjiArray.length;
    populateMainPageWords();
    makeWordList();
};
function getN5() {
    kanjiArray = [];
    onArray = [];
    kunArray = [];
    meaningsArray = [];
    removeAllChildNodes(cardsBox);
    removeAllChildNodes(kanaBox);
    mainSelectBox.classList.remove('hidden');
    title.textContent = "";
    title.textContent = "N5 Kanji Study";
    for (const [key, value] of Object.entries(data5)) {
        kanjiArray.push(key);
        meaningsArray.push(value.meanings[0]);
        let onString = String(value.readings_on);
        let kunString = String(value.readings_kun);
        onArray.push(onString);
        kunArray.push(kunString);
    };
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
    removeAllChildNodes(kanaBox);
    mainSelectBox.classList.remove('hidden');
    title.textContent = "";
    title.textContent = "N4 Kanji Study";
    for (const [key, value] of Object.entries(data4)) {
        kanjiArray.push(key);
        let onString = String(value.readings_on);
        let kunString = String(value.readings_kun);
        onArray.push(onString);
        kunArray.push(kunString);
        meaningsArray.push(value.meanings[0]);
    };
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
    removeAllChildNodes(kanaBox);
    mainSelectBox.classList.remove('hidden');
    title.textContent = "";
    title.textContent = "N3 Kanji Study";
    for (const [key, value] of Object.entries(data3)) {
        kanjiArray.push(key);
        let onString = String(value.readings_on);
        let kunString = String(value.readings_kun);
        onArray.push(onString);
        kunArray.push(kunString);
        meaningsArray.push(value.meanings[0]);
    };
    number = kanjiArray.length;
    populateMainPage();
    makeList();
};
function getN2() {
    kanjiArray = [];
    onArray = [];
    kunArray = [];
    meaningsArray = [];
    removeAllChildNodes(cardsBox);
    removeAllChildNodes(kanaBox);
    mainSelectBox.classList.remove('hidden');
    title.textContent = "";
    title.textContent = "N2 Kanji Study";
    for (const [key, value] of Object.entries(data2)) {
        kanjiArray.push(key);
        let onString = String(value.readings_on);
        let kunString = String(value.readings_kun);
        onArray.push(onString);
        kunArray.push(kunString);
        meaningsArray.push(value.meanings[0]);
    };
    number = kanjiArray.length;
    populateMainPage();
    makeList();
};
function getN1() {
    kanjiArray = [];
    onArray = [];
    kunArray = [];
    meaningsArray = [];
    removeAllChildNodes(cardsBox);
    removeAllChildNodes(kanaBox);
    mainSelectBox.classList.remove('hidden');
    title.textContent = "";
    title.textContent = "N1 Kanji Study";
    for (const [key, value] of Object.entries(data1)) {
        kanjiArray.push(key);
        let onString = String(value.readings_on);
        let kunString = String(value.readings_kun);
        onArray.push(onString);
        kunArray.push(kunString);
        meaningsArray.push(value.meanings[0]);
    };
    number = kanjiArray.length;
    populateMainPage();
    makeList();
};

//study page
const mainKanji = document.querySelector('.main');
const answersDiv = document.querySelector('.answers');
const kunDiv = document.querySelector('.kun');
const onDiv = document.querySelector('.on');
const kanjiDisplay = document.querySelector('#kanji-display');
const skipButt = document.querySelector('.skip');
const backButt = document.querySelector('.back');
let konoKanji
let trueAnswer
let selectedAnswer
let answersArray = [];
let randoNumber = 69;

function loadKeywordQuizW1() {
    //clear literally everything that could possibly be
    removeAllChildNodes(answersDiv);
    removeAllChildNodes(buttBox);
    konoKanji = "";
    trueAnswer = "";
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = '#0e504d';
    randoNumber = Math.floor(Math.random() * kanjiArray.length);
    konoKanji = kanjiArray[randoNumber];
    mainKanji.textContent = konoKanji;
    mainKanji.classList.add('large');
    mainKanji.classList.add('cursive');
    kunDiv.append(kunArray[randoNumber].replace(/,(?=[^\s])/g, ", "));
    trueAnswer = meaningsArray[randoNumber];
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    makeButtons(changeDisplay, loadKeywordQuizW1);
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
        newDiv.addEventListener('click', handleClickStudyW)
        newDiv.classList.add('answer');
        newDiv.classList.add('smaller');
        answersDiv.append(newDiv);
    })
}
function handleClickStudyW() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('FUCK YES');
        mainKanji.append(" = ", trueAnswer);
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            loadKeywordQuizW1();
        }, 1500);
    } else {
        messageBox.textContent = 'try again.'
        setTimeout(() => {
            messageBox.textContent = "";
        }, 1000)
    }
}
function loadKeywordQuizW2() {
    //clear literally everything that could possibly be
    removeAllChildNodes(answersDiv);
    removeAllChildNodes(buttBox);
    konoKanji = "";
    trueAnswer = "";
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = '#0e504d';
    randoNumber = Math.floor(Math.random() * kanjiArray.length);
    konoKanji = meaningsArray[randoNumber];
    mainKanji.textContent = konoKanji;
    mainKanji.classList.remove('cursive');
    mainKanji.classList.remove('large');
    kunDiv.append(kunArray[randoNumber].replace(/,(?=[^\s])/g, ", "));
    trueAnswer = kanjiArray[randoNumber];
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    makeButtons(changeDisplay, loadKeywordQuizW2);
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
        newDiv.addEventListener('click', handleClickStudyW2)
        newDiv.classList.add('answer');
        newDiv.classList.add('large');
        newDiv.classList.add('cursive');
        answersDiv.append(newDiv);
    })
};
function handleClickStudyW2() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('FUCK YES');
        mainKanji.append(" = ", trueAnswer);
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            loadKeywordQuizW2();
        }, 1500);
    } else {
        messageBox.textContent = 'try again.'
        setTimeout(() => {
            messageBox.textContent = "";
        }, 1000)
    };
}
function loadKeywordQuiz1() {
    //clear literally everything that could possibly be
    removeAllChildNodes(answersDiv);
    removeAllChildNodes(buttBox);
    konoKanji = "";
    trueAnswer = "";
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = '#0e504d';
    randoNumber = Math.floor(Math.random() * kanjiArray.length);
    konoKanji = kanjiArray[randoNumber];
    mainKanji.textContent = konoKanji;
    mainKanji.classList.add('large');
    mainKanji.classList.add('cursive');
    onDiv.append(onArray[randoNumber].replace(/,(?=[^\s])/g, ", "));
    kunDiv.append(kunArray[randoNumber].replace(/,(?=[^\s])/g, ", "));
    trueAnswer = meaningsArray[randoNumber];
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    makeButtons(changeDisplay, loadKeywordQuiz1);
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
        newDiv.classList.add('smaller');
        answersDiv.append(newDiv);
    })
}
function handleClickStudy() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('FUCK YES');
        mainKanji.append(" = ", trueAnswer);
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            loadKeywordQuiz1();
        }, 1500);
    } else {
        messageBox.textContent = 'try again.'
        setTimeout(() => {
            messageBox.textContent = "";
        }, 1000)
    }
}
function loadKeywordQuiz2() {
    //clear literally everything that could possibly be
    removeAllChildNodes(answersDiv);
    removeAllChildNodes(buttBox);
    konoKanji = "";
    trueAnswer = "";
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = '#0e504d';
    randoNumber = Math.floor(Math.random() * kanjiArray.length);
    konoKanji = meaningsArray[randoNumber];
    mainKanji.textContent = konoKanji;
    mainKanji.classList.remove('cursive');
    mainKanji.classList.remove('large');
    onDiv.append(onArray[randoNumber].replace(/,(?=[^\s])/g, ", "));
    kunDiv.append(kunArray[randoNumber].replace(/,(?=[^\s])/g, ", "));
    trueAnswer = kanjiArray[randoNumber];
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    makeButtons(changeDisplay, loadKeywordQuiz2);
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
        newDiv.classList.add('large');
        newDiv.classList.add('cursive');
        answersDiv.append(newDiv);
    })
};
function handleClickStudy2() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('FUCK YES');
        mainKanji.append(" = ", trueAnswer);
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            loadKeywordQuiz2();
        }, 1500);
    } else {
        messageBox.textContent = 'try again.'
        setTimeout(() => {
            messageBox.textContent = "";
        }, 1000)
    };
}
function loadOnQuiz3() {
    //clear literally everything that could possibly be
    removeAllChildNodes(answersDiv);
    removeAllChildNodes(buttBox);
    konoKanji = "";
    trueAnswer = "";
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = '#0e504d';
    randoNumber = Math.floor(Math.random() * kanjiArray.length);
    konoKanji = kanjiArray[randoNumber];
    mainKanji.textContent = konoKanji;
    mainKanji.classList.add('cursive');
    trueAnswer = onArray[randoNumber].replace(/,(?=[^\s])/g, ", ");
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    makeButtons(changeDisplay, loadOnQuiz3);
    //get real answer, then fake ones
    let answersArray = [];
    answersArray.push(trueAnswer);
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * kanjiArray.length);
        randoAnswer = onArray[nuRandoNum].replace(/,(?=[^\s])/g, ", ");
        answersArray.push(randoAnswer);
    }
    shuffleArray(answersArray);
    answersArray.forEach(answer => {
        // console.log("YO");
        let newDiv = document.createElement('div');
        newDiv.textContent = answer;
        newDiv.addEventListener('click', handleClickStudy3)
        newDiv.classList.add('answer');
        newDiv.classList.add('smaller');
        answersDiv.append(newDiv);
    })
};
function handleClickStudy3() {
    selectedAnswer = this.textContent;
    if (String(selectedAnswer) === String(trueAnswer)) {
        console.log('FUCK YES');
        mainKanji.append(" = ", trueAnswer);
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            loadOnQuiz3();
        }, 1500);
    } else {
        messageBox.textContent = 'try again.'
        setTimeout(() => {
            messageBox.textContent = "";
        }, 1000)
    };
}
function loadOnQuiz4() {
    //clear literally everything that could possibly be
    removeAllChildNodes(answersDiv);
    removeAllChildNodes(buttBox);
    konoKanji = "";
    trueAnswer = "";
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    mainKanji.textContent = '';
    testBox.style.backgroundColor = '#0e504d';
    randoNumber = Math.floor(Math.random() * kanjiArray.length);
    konoKanji = onArray[randoNumber].replace(/,(?=[^\s])/g, ", ");
    onDiv.textContent = konoKanji;
    trueAnswer = kanjiArray[randoNumber];
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    makeButtons(changeDisplay, loadOnQuiz4);
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
        newDiv.classList.add('large');
        newDiv.classList.add('cursive');
        answersDiv.append(newDiv);
    })
};
function handleClickStudy4() {
    selectedAnswer = this.textContent;
    if (String(selectedAnswer) === String(trueAnswer)) {
        console.log('FUCK YES');
        mainKanji.append(" = ", trueAnswer);
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            loadOnQuiz4();
        }, 1500);
    } else {
        messageBox.textContent = 'try again.'
        setTimeout(() => {
            messageBox.textContent = "";
        }, 1000)
    };
}
function loadKunQuiz5() {
    //clear literally everything that could possibly be
    removeAllChildNodes(answersDiv);
    removeAllChildNodes(buttBox);
    konoKanji = "";
    trueAnswer = "";
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = '#0e504d';
    randoNumber = Math.floor(Math.random() * kanjiArray.length);
    konoKanji = kanjiArray[randoNumber];
    mainKanji.textContent = konoKanji;
    mainKanji.classList.add('cursive');
    trueAnswer = kunArray[randoNumber].replace(/,(?=[^\s])/g, ", ");
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    makeButtons(changeDisplay, loadKunQuiz5);
    //get real answer, then fake ones
    if (kunArray[randoNumber].length === 0) {
        loadKunQuiz5();
    };
    let answersArray = [];
    answersArray.push(trueAnswer);
    let num = 0;
    for (let i = 0; i < 8; i++) {
        let nuRandoNum = Math.floor(Math.random() * kanjiArray.length);
        let randoAnswer = kunArray[nuRandoNum].replace(/,(?=[^\s])/g, ", ");
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
        newDiv.classList.add('smaller');
        // newDiv.classList.add('cursive');
        answersDiv.append(newDiv);
    })
};
function handleClickStudy5() {
    selectedAnswer = this.textContent;
    if (selectedAnswer == trueAnswer) {
        console.log('FUCK YES');
        mainKanji.append(" = ", trueAnswer);
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            loadKunQuiz5();
        }, 1500);
    } else {
        messageBox.textContent = 'try again.'
        setTimeout(() => {
            messageBox.textContent = "";
        }, 1000)
    };
}
function loadKunQuiz6() {
    //clear literally everything that could possibly be
    removeAllChildNodes(answersDiv);
    removeAllChildNodes(buttBox);
    konoKanji = "";
    trueAnswer = "";
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    mainKanji.textContent = '';
    testBox.style.backgroundColor = '#0e504d';
    randoNumber = Math.floor(Math.random() * kanjiArray.length);
    konoKanji = kunArray[randoNumber].replace(/,(?=[^\s])/g, ", ");
    kunDiv.textContent = konoKanji;
    trueAnswer = kanjiArray[randoNumber];
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    makeButtons(changeDisplay, loadKunQuiz6);
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
        newDiv.addEventListener('click', handleClickStudy6)
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersDiv.append(newDiv);
    })
};
function handleClickStudy6() {
    selectedAnswer = this.textContent;
    if (selectedAnswer == trueAnswer) {
        console.log('FUCK YES');
        mainKanji.append(" = ", trueAnswer);
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {

            loadKunQuiz6();
        }, 1500);
    } else {
        messageBox.textContent = 'try again.'
        setTimeout(() => {
            messageBox.textContent = "";
        }, 1000)
    };
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

function changeKanaDisplay() {
    testBox.classList.add('hidden');
    mainBox.style.display = "block";
    populateMainPageWithKana();
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
title.addEventListener('click', function () {
    location.reload();
})
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

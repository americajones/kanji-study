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
const searchBox = document.querySelector('#searchBox');
const mainSelectBox = document.querySelector('#studyQuizSelectBox');
let kanjiArray = [];
let onArray = [];
let kunArray = [];
let meaningsArray = [];
let number;
let messageBox = "";



function handleClickStudy(timeoutFunction, event) {
    selectedAnswer = event.target.textContent;
    console.log(selectedAnswer, " vs. ", trueAnswer);
    if (selectedAnswer === trueAnswer) {
        console.log('FUCK YES');
        mainKanji.append(" = ", trueAnswer);
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            timeoutFunction();
        }, 1200);
    } else {
        messageBox.textContent = 'try again.'
        setTimeout(() => {
            messageBox.textContent = "";
        }, 1000)
    }
}

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
function loadSearchPage() {
    removeAllChildNodes(answersDiv);
    removeAllChildNodes(buttBox);
    removeAllChildNodes(cardsBox);
    removeAllChildNodes(searchBox);
    flashButt.classList.add('hidden');
    mainSelectBox.classList.add('hidden');
    kanjiArray = [];
    meaningsArray = [];
    writingAnswers = "";
    let nuDiv = document.createElement('div');
    let nuDiv2 = document.createElement('div');
    let input = document.createElement('input');
    let button = document.createElement('button');
    let searchResults = document.createElement('div');
    let searchResults2 = document.createElement('div');
    let searchResults3 = document.createElement('div');
    nuDiv2.classList.add('searchBundle');
    input.classList.add('searchBox');
    searchResults.classList.add('searchRes');
    searchResults2.classList.add('searchRes2');
    searchResults3.classList.add('searchRes3');
    button.classList.add('searchButt');
    button.classList.add('butt');
    button.textContent = "search";
    button.addEventListener('click', leSearch);
    nuDiv2.append(input, button);
    nuDiv.append(nuDiv2, searchResults, searchResults2, searchResults3);
    searchBox.append(nuDiv);
};
let searchRes = [];
let searchResMeanings = [];
let searchResKun = [];
let searchResOn = [];
function leSearch() {
    searchRes = [];
    searchResMeanings = [];
    searchResKun = [];
    searchResOn = [];
    let searchBox = document.querySelector('.searchBox');
    let searchResBox = document.querySelector('.searchRes');
    let searchResBox2 = document.querySelector('.searchRes2');
    let searchResBox3 = document.querySelector('.searchRes3');
    removeAllChildNodes(searchResBox);
    removeAllChildNodes(searchResBox2);
    removeAllChildNodes(searchResBox3);
    let searchTerm = searchBox.value.toLowerCase();
    console.log(searchTerm);
    for (let [key, value] of Object.entries(data5)) {
        if (key.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.meanings);
            searchResKun.push(value.readings_kun);
            searchResOn.push(value.readings_on);
        }
        if (String(value.meanings).toLowerCase().search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.meanings);
            searchResKun.push(value.readings_kun);
            searchResOn.push(value.readings_on);
        }
        if (String(value.readings_kun).search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.meanings);
            searchResKun.push(value.readings_kun);
            searchResOn.push(value.readings_on);
        }
        if (String(value.readings_on).search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.meanings);
            searchResKun.push(value.readings_kun);
            searchResOn.push(value.readings_on);
        }
    }
    for (let [key, value] of Object.entries(data4)) {
        if (key.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.meanings);
            searchResKun.push(value.readings_kun);
            searchResOn.push(value.readings_on);
        }
        if (String(value.meanings).toLowerCase().search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.meanings);
            searchResKun.push(value.readings_kun);
            searchResOn.push(value.readings_on);
        }
        if (String(value.readings_kun).search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.meanings);
            searchResKun.push(value.readings_kun);
            searchResOn.push(value.readings_on);
        }
        if (String(value.readings_on).search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.meanings);
            searchResKun.push(value.readings_kun);
            searchResOn.push(value.readings_on);
        }
    }
    for (let [key, value] of Object.entries(data3)) {
        if (key.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.meanings);
            searchResKun.push(value.readings_kun);
            searchResOn.push(value.readings_on);
        }
        if (String(value.meanings).toLowerCase().search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.meanings);
            searchResKun.push(value.readings_kun);
            searchResOn.push(value.readings_on);
        }
        if (String(value.readings_kun).search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.meanings);
            searchResKun.push(value.readings_kun);
            searchResOn.push(value.readings_on);
        }
        if (String(value.readings_on).search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.meanings);
            searchResKun.push(value.readings_kun);
            searchResOn.push(value.readings_on);
        }
    }
    for (let [key, value] of Object.entries(data2)) {
        if (key.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.meanings);
            searchResKun.push(value.readings_kun);
            searchResOn.push(value.readings_on);
        }
        if (String(value.meanings).toLowerCase().search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.meanings);
            searchResKun.push(value.readings_kun);
            searchResOn.push(value.readings_on);
        }
        if (String(value.readings_kun).search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.meanings);
            searchResKun.push(value.readings_kun);
            searchResOn.push(value.readings_on);
        }
        if (String(value.readings_on).search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.meanings);
            searchResKun.push(value.readings_kun);
            searchResOn.push(value.readings_on);
        }
    }
    for (let [key, value] of Object.entries(data1)) {
        if (key.search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.meanings);
            searchResKun.push(value.readings_kun);
            searchResOn.push(value.readings_on);
        }
        if (String(value.meanings).toLowerCase().search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.meanings);
            searchResKun.push(value.readings_kun);
            searchResOn.push(value.readings_on);
        }
        if (String(value.readings_kun).search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.meanings);
            searchResKun.push(value.readings_kun);
            searchResOn.push(value.readings_on);
        }
        if (String(value.readings_on).search(searchTerm) !== -1) {
            searchRes.push(" " + key);
            searchResMeanings.push(value.meanings);
            searchResKun.push(value.readings_kun);
            searchResOn.push(value.readings_on);
        }
    }

    searchRes.forEach((kanji, index) => {
        let nuDiv = document.createElement('div');
        let nuDivTit = document.createElement('h2');
        let nuTxt = document.createElement('p');
        let nuTxt2 = document.createElement('p');
        let nuTxt3 = document.createElement('p');
        nuDivTit.textContent = kanji;
        nuTxt.textContent = searchResKun[index];
        nuTxt3.textContent = searchResOn[index];
        nuTxt2.textContent = searchResMeanings[index];
        nuTxt2.classList.add('small');
        nuTxt3.classList.add('small');
        nuTxt.classList.add('opacity');
        nuTxt2.classList.add('opacity');
        nuDiv.classList.add('searchResBox');
        nuDiv.addEventListener('click', toggleEnglish);
        nuDiv.append(nuDivTit);
        nuDiv.append(nuTxt);
        nuDiv.append(nuTxt3);
        nuDiv.append(nuTxt2);
        function toggleEnglish() {
            nuTxt2.classList.toggle('opacity');
            nuTxt.classList.toggle('opacity');
        }
        searchResBox.append(nuDiv);
    })
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

function getN5() {
    kanjiArray = [];
    onArray = [];
    kunArray = [];
    meaningsArray = [];
    removeAllChildNodes(cardsBox);
    removeAllChildNodes(searchBox);
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
    removeAllChildNodes(searchBox);
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
    removeAllChildNodes(searchBox);
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
    removeAllChildNodes(searchBox);
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
    removeAllChildNodes(searchBox);
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
        newDiv.addEventListener('click', (e) => {
            handleClickStudyW(loadKeywordQuizW1, e)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('smaller');
        answersDiv.append(newDiv);
    })
}
function handleClickStudyW(timeoutFunction, event) {
    selectedAnswer = event.target.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('FUCK YES');
        mainKanji.append(" = ", trueAnswer);
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            timeoutFunction();
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
        newDiv.addEventListener('click', (e) => {
            handleClickStudyW(loadKeywordQuizW2, e)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('large');
        newDiv.classList.add('cursive');
        answersDiv.append(newDiv);
    })
};

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
        newDiv.addEventListener('click', (e) => {
            handleClickStudy(loadKeywordQuiz1, e)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('smaller');
        answersDiv.append(newDiv);
    })
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
        newDiv.addEventListener('click', (e) => {
            handleClickStudy(loadKeywordQuiz2, e)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('large');
        newDiv.classList.add('cursive');
        answersDiv.append(newDiv);
    })
};
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
        newDiv.addEventListener('click', (e) => {
            handleClickStudy(loadOnQuiz3, e)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('smaller');
        answersDiv.append(newDiv);
    })
};
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
    mainKanji.textContent = konoKanji;
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
        newDiv.addEventListener('click', (e) => {
            handleClickStudy(loadOnQuiz4, e)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('large');
        newDiv.classList.add('cursive');
        answersDiv.append(newDiv);
    })
};

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
        newDiv.addEventListener('click', (e) => {
            handleClickStudy(loadKunQuiz5, e)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('smaller');
        // newDiv.classList.add('cursive');
        answersDiv.append(newDiv);
    })
};

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
    mainKanji.textContent = konoKanji;
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
        newDiv.addEventListener('click', (e) => {
            handleClickStudy(loadKunQuiz6, e)
        })
        newDiv.classList.add('answer');
        newDiv.classList.add('cursive');
        newDiv.classList.add('large');
        answersDiv.append(newDiv);
    })
};


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
    mainBox.style.display = "flex";
    testBox.classList.add('hidden');
    flashButt.classList.add('hidden');
    removeAllChildNodes(cardsBox);
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

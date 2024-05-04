const terminiPrefissati = [
    "運動",
    "早睡",
    "早起",
    "電影",
    "音樂",
    "唱歌",
    "跳舞",
    "寫字",
    "旅行",
    "喝茶",
    "聞香",
    "插畫",
    "插花",
    "靜坐",
    "閲讀",
    "看戲",
    "喝茶",
    "畫畫",
    "聽曲",
    "寫詩",
    "寫信",
    "跳繩",
    "做飯",
    "拍片",
    "試穿",
    "打柴",
    "拔河",
    "擦窗",
    "穿梭",
    "爬山",
    "瞭望",
    "彩妝",
    "插花"
];

function generaTermineCasuale() {
    const randomIndex = Math.floor(Math.random() * terminiPrefissati.length);
    return terminiPrefissati[randomIndex];
}

const generateButton = document.getElementById('generateButton');
const randomTerm = document.getElementById('randomTerm');

generateButton.addEventListener('click', () => {
    const termineCasuale = generaTermineCasuale();
    randomTerm.textContent = termineCasuale;
});

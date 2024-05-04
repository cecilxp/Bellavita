const terminiPrefissati = [
    "cane",
    "gatto",
    "pesce",
    "uccello",
    "elefante"
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

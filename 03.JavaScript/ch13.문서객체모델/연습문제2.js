const inputString = "The quick brown fox jumped over the lazy dog. The dog barked, and then the fox ran away.";


function countTheOccurrences(inputString) {
    const wordToFind = 'the';
    const regex = new RegExp('\\b' + wordToFind + '\\b', 'g');
    const matches = inputString.toLowerCase().match(regex);

    return matches ? matches.length : 0;
}

const result = countTheOccurrences(inputString);
console.log(`'the'의 개수: ${result}`);0
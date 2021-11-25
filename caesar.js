function caesarCipher(string) {
    const alphabet = getAlphabet();
    const stringArr = [...string];
    const cipher = []; 
    for(let i = 0; i < stringArr.length; i++) {
        let index = alphabet.indexOf(stringArr[i]);
        if (index !== -1) {
            cipher.push(alphabet[index++ % alphabet.length]); 
        } else {
            cipher.push(stringArr[i]); 
        } 
    }
    return cipher.join('');
}

function getAlphabet() {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
    return alphabet; 
}

module.exports = {
    caesarCipher,
    getAlphabet
} 
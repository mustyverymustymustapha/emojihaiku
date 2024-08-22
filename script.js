const emojis = [
    '😀', '😂', '🤣', '😍', '🥰', '😎', '🤔', '🤯', '🥳', '😴',
    '🌈', '🌞', '🌙', '⭐', '🌍', '🌺', '🌴', '🍕', '🍦', '🎉',
    '🎈', '🎸', '🚀', '🦄', '🐳', '🦋', '🐠', '🌊', '🏔️', '🏖️'
];

const emojiMeanings = {
    '😀': 'smile', '😂': 'laugh', '🤣': 'roll', '😍': 'love', '🥰': 'adore',
    '😎': 'cool', '🤔': 'think', '🤯': 'mind-blown', '🥳': 'party', '😴': 'sleep',
    '🌈': 'rainbow', '🌞': 'sun', '🌙': 'moon', '⭐': 'star', '🌍': 'earth',
    '🌺': 'flower', '🌴': 'palm', '🍕': 'pizza', '🍦': 'ice cream', '🎉': 'celebrate',
    '🎈': 'balloon', '🎸': 'guitar', '🚀': 'rocket', '🦄': 'unicorn', '🐳': 'whale',
    '🦋': 'butterfly', '🐠': 'fish', '🌊': 'wave', '🏔️': 'mountain', '🏖️': 'beach'
};

function getRandomEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
}

function generateHaikuLine(syllables) {
    let line = '';
    for (let i = 0; i < syllables; i++) {
        line += getRandomEmoji();
    }
    return line;
}

function translateLine(line) {
    return Array.from(line).map(emoji => emojiMeanings[emoji]).join(' ');
}

function generateHaiku() {
    const line1 = generateHaikuLine(5);
    const line2 = generateHaikuLine(7);
    const line3 = generateHaikuLine(5);

    document.getElementById('line1').textContent = line1;
    document.getElementById('line2').textContent = line2;
    document.getElementById('line3').textContent = line3;

    document.getElementById('transLine1').textContent = translateLine(line1);
    document.getElementById('transLine2').textContent = translateLine(line2);
    document.getElementById('transLine3').textContent = translateLine(line3);
}

document.getElementById('generateBtn').addEventListener('click', generateHaiku);

generateHaiku();
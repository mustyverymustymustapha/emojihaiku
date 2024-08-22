const emojis = [
    '😀', '😂', '🤣', '😍', '🥰', '😎', '🤔', '🤯', '🥳', '😴',
    '🌈', '🌞', '🌙', '⭐', '🌍', '🌺', '🌴', '🍕', '🍦', '🎉',
    '🎈', '🎸', '🚀', '🦄', '🐳', '🦋', '🐠', '🌊', '🏔️', '🏖️'
];

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

function generateHaiku() {
    const line1 = generateHaikuLine(5);
    const line2 = generateHaikuLine(7);
    const line3 = generateHaikuLine(5);

    document.getElementById('line1').textContent = line1;
    document.getElementById('line2').textContent = line2;
    document.getElementById('line3').textContent = line3;
}

document.getElementById('generateBtn').addEventListener('click', generateHaiku);

generateHaiku();
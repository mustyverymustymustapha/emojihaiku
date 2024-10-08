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

const emojiColors = {
    '😀': '#FFD700', '😂': '#FF69B4', '🤣': '#FF6347', '😍': '#FF1493', '🥰': '#FF69B4',
    '😎': '#1E90FF', '🤔': '#808080', '🤯': '#FF4500', '🥳': '#00FF00', '😴': '#4B0082',
    '🌈': '#FF69B4', '🌞': '#FFD700', '🌙': '#4B0082', '⭐': '#FFD700', '🌍': '#1E90FF',
    '🌺': '#FF69B4', '🌴': '#008000', '🍕': '#FF4500', '🍦': '#F0E68C', '🎉': '#FF1493',
    '🎈': '#FF0000', '🎸': '#8B4513', '🚀': '#4B0082', '🦄': '#FF69B4', '🐳': '#1E90FF',
    '🦋': '#00BFFF', '🐠': '#00FFFF', '🌊': '#1E90FF', '🏔️': '#FFFFFF', '🏖️': '#F0E68C'
};

const emojiCategories = {
    '😀': 'happy', '😂': 'happy', '🤣': 'happy', '😍': 'love', '🥰': 'love',
    '😎': 'cool', '🤔': 'thoughtful', '🤯': 'surprised', '🥳': 'celebratory', '😴': 'sleepy',
    '🌈': 'nature', '🌞': 'nature', '🌙': 'nature', '⭐': 'nature', '🌍': 'nature',
    '🌺': 'nature', '🌴': 'nature', '🍕': 'food', '🍦': 'food', '🎉': 'celebratory',
    '🎈': 'celebratory', '🎸': 'music', '🚀': 'adventure', '🦄': 'fantasy', '🐳': 'animal',
    '🦋': 'animal', '🐠': 'animal', '🌊': 'nature', '🏔️': 'nature', '🏖️': 'nature'
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

function getAverageColor(emojis) {
    const colors = Array.from(emojis).map(emoji => emojiColors[emoji]);
    const r = colors.reduce((sum, color) => sum + parseInt(color.slice(1, 3), 16), 0) / colors.length;
    const g = colors.reduce((sum, color) => sum + parseInt(color.slice(3, 5), 16), 0) / colors.length;
    const b = colors.reduce((sum, color) => sum + parseInt(color.slice(5, 7), 16), 0) / colors.length;
    return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
}

function getMostFrequentEmoji(emojis) {
    const emojiCounts = {};
    let maxCount = 0;
    let mostFrequent = '';
    for (const emoji of emojis) {
        emojiCounts[emoji] = (emojiCounts[emoji] || 0) + 1;
        if (emojiCounts[emoji] > maxCount) {
            maxCount = emojiCounts[emoji];
            mostFrequent = emoji;
        }
    }
    return { emoji: mostFrequent, count: maxCount };
}

function getHaikuMood(emojis) {
    const categoryCount = {};
    for (const emoji of emojis) {
        const category = emojiCategories[emoji];
        categoryCount[category] = (categoryCount[category] || 0) + 1;
    }
    const dominantCategory = Object.entries(categoryCount).reduce((a, b) => a[1] > b[1] ? a : b)[0];
    return `The mood of this haiku appears to be ${dominantCategory}.`;
}

function generateHaikuTitle(emojis) {
    const uniqueEmojis = Array.from(new Set(emojis));
    const randomEmoji1 = uniqueEmojis[Math.floor(Math.random() * uniqueEmojis.length)];
    const randomEmoji2 = uniqueEmojis[Math.floor(Math.random() * uniqueEmojis.length)];
    const word1 = emojiMeanings[randomEmoji1];
    const word2 = emojiMeanings[randomEmoji2];
    return `${word1.charAt(0).toUpperCase() + word1.slice(1)} ${word2}`;
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

    const allEmojis = line1 + line2 + line3;
    const averageColor = getAverageColor(allEmojis);
    document.body.style.backgroundColor = averageColor;

    const characterCount = allEmojis.length;
    document.getElementById('characterCount').textContent = `Total characters: ${characterCount}`;

    const { emoji, count } = getMostFrequentEmoji(allEmojis);
    document.getElementById('frequentEmoji').textContent = `Most frequent emoji: ${emoji} (${count} times)`;

    const mood = getHaikuMood(allEmojis);
    document.getElementById('haikuMood').textContent = mood;

    const title = generateHaikuTitle(allEmojis);
    document.getElementById('haikuTitle').textContent = title;
}

document.getElementById('generateBtn').addEventListener('click', generateHaiku);

generateHaiku();
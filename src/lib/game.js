export default function buildGame(words = [], level = 0) {
  const playedWords = [];

  const checkAnswer = (id, doh) => {
    if (!playedWords.length) {
      return false;
    }
    const word = playedWords.find(w => w.id === id);
    return (word.doh === doh);
  }

  const getNextWord = () => {
    if (!words.length) {
      return;
    }
    playedWords.unshift(words.pop())
    return playedWords[0];
  }

  return {
    level,
    words,
    playedWords,


    checkAnswer,
    getNextWord,
  };

}
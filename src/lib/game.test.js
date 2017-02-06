import buildGame from './game';

import words from './words.json';

describe('init game without parameters', () => {
  let game;

  beforeEach(() => {
   // console.log('constructing new game object');
    game = buildGame();
  });

  afterEach(() => {
    game = undefined;
  });

  test('game level === 0', () => {
    expect(game.level).toBe(0);
  });

  test('empty words array', () => {
    expect(game.words).toEqual([]);
  });

  test('empty playedWords array', () => {
    expect(game.playedWords).toEqual([]);
  });

  describe('get next word when there are no words', () => {
    test('undefined is returned', () => {
      expect(game.getNextWord()).toBeUndefined;
    })

    test('number of played words to stay the same', () => {
      const numberOfPlayedWordsBeforeTest = game.playedWords.length;
      game.getNextWord();
      expect(numberOfPlayedWordsBeforeTest).toBe(game.playedWords.length);
    });
  });

  test('check answer should return false for any input', () => {
    expect(game.checkAnswer()).toBeFalsy;
  })
});

describe('game with parameters', () => {
  let game;
  
  beforeEach(() => {
    game = buildGame(words);
  });

  describe('check initial value', () => {
    test('word property should equal the initial words array', () => {
      expect(game.words).toBe(words);
    });

    test('shouldn\'t be any played words', () => {
      expect(game.playedWords.length).toBe(0);
    });
  });

  describe('call getNextWord', () => {
    test('returned value should be defined', () => {
      expect(game.getNextWord()).toBeDefined();
    });
  });

})






import buildGame from './game';

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
    beforeEach(() => {

    });

    test('undefined is returned', () => {
      expect(game.getNextWord()).toBeUndefined;
    })

    test('number of played words to stay the same', () => {
      const numberOfPlayedWordsBeforeTest = game.playedWords.length;
      game.getNextWord()
      expect(numberOfPlayedWordsBeforeTest).toBe(game.playedWords.length);
    })
  });
});






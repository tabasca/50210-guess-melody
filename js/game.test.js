import assert from 'assert';
import {setLives, checkIfAnswerIsCorrect} from './game';

describe('game engine', function () {
  describe('setLives', function () {
    it('should throw an error if lives < 0', function () {
      assert.throws(() => setLives({lives: 3}, -1));
    });
    it('should throw an error if lives > 3', function () {
      assert.throws(() => setLives({lives: 3}, 5));
    });
  });
  describe('checkIfAnswerIsCorrect', function () {
    it('should throw an error if value is not boolean', function () {
      assert.throws(() => checkIfAnswerIsCorrect({isCorrect: true}, 500));
    });

  });
});

import assert from 'assert';
import {setLives, checkIfAnswerIsCorrect, collectStats, calculateStats} from '../game';

describe('game engine', function () {
  describe('setLives', function () {
    it('should throw an error if lives < 0', function () {
      assert.throws(() => setLives({lives: -1}));
    });
    it('should throw an error if lives > 3', function () {
      assert.throws(() => setLives({lives: 5}));
    });
  });
  describe('checkIfAnswerIsCorrect', function () {
    it('should throw an error if value is not boolean', function () {
      assert.throws(() => checkIfAnswerIsCorrect({isCorrect: 500}));
    });

  });
  describe('collectStats', function () {
    it('should throw an error if currentStats is not an object', function () {
      assert.throws(() => collectStats(true));
    });
  });
  describe('calculateStats', function () {
    it('should throw an error if currentStats.time is not a number', function () {
      assert.throws(() => calculateStats(true));
    });
  });
});

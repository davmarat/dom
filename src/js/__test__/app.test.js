/**
 * @jest-environment jsdom
 */

import Game from '../Game';

test('Метод generateGameField должен корректно генерировать разметку', () => {
  const container = document.createElement('div');
  const game = new Game(container);
  game.generateGameField();
  expect(game.container.firstChild.children.length).toBe(16);
});

test('Метод showImage должен менять значение переменной index', () => {
  const container = document.createElement('div');
  const game = new Game(container);
  game.generateGameField();
  game.showImage();
  expect(game.index).not.toBe(0);
});

jest.useFakeTimers();


test('Метод init вызывает методы generateGameField и start', () => {
  const container = document.createElement('div');
  const game = new Game(container);
  game.generateGameField = jest.fn();
  game.start = jest.fn();
  game.init();
  expect(game.generateGameField).toBeCalled();
  expect(game.start).toBeCalled();
});

import getElementFromTemplate from './add-template';

const welcomeTemplate = getElementFromTemplate('<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>\n' +
    '<button class="main-play">Начать игру</button>\n' +
    '<h2 class="title main-title">Правила игры</h2>\n' +
    '<p class="text main-text">\n' +
      'Правила просты&nbsp;— за&nbsp;2 минуты дать\n' +
      'максимальное количество правильных ответов.<br>\n' +
      'На&nbsp;каждую мелодию всего 3 варианта ответа.<br>\n' +
      'Удачи!\n' +
    '</p>', 'main--welcome');

const artistTemplate = getElementFromTemplate('<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">\n' +
      '<circle\n' +
        'cx="390" cy="390" r="370"\n' +
        'class="timer-line"\n' +
        'style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>\n' +
      '<div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">\n' +
        '<span class="timer-value-mins">02</span><!--\n' +
        '--><span class="timer-value-dots">:</span><!--\n' +
        '--><span class="timer-value-secs">00</span>\n' +
      '</div>\n' +
    '</svg>\n' +
    '<div class="main-wrap">\n' +
      '<div class="main-timer"></div>\n' +
      '<h2 class="title main-title">Кто исполняет эту песню?</h2>\n' +
      '<div class="player-wrapper"></div>\n' +
      '<form class="main-list">\n' +
        '<div class="main-answer-wrapper">\n' +
          '<input class="main-answer-r" type="radio" id="answer-1" name="answer" value="val-1" />\n' +
          '<label class="main-answer" for="answer-1">\n' +
            '<img class="main-answer-preview" src="">\n' +
            'Пелагея\n' +
          '</label>\n' +
        '</div>\n' +
        '<div class="main-answer-wrapper">\n' +
          '<input class="main-answer-r" type="radio" id="answer-2" name="answer" value="val-1" />\n' +
          '<label class="main-answer" for="answer-2">\n' +
            '<img class="main-answer-preview" src="">\n' +
            'Краснознаменная дивизия имени моей бабушки\n' +
          '</label>\n' +
        '</div>\n' +
        '<div class="main-answer-wrapper">\n' +
          '<input class="main-answer-r" type="radio" id="answer-2" name="answer" value="val-1" />\n' +
          '<label class="main-answer" for="answer-2">\n' +
            '<img class="main-answer-preview" src="">\n' +
            'Lorde\n' +
          '</label>\n' +
        '</div>\n' +
      '</form>\n' +
    '</div>', 'main--level-artist', 'main--level');

const genreTemplate = getElementFromTemplate('<h2 class="title">Выберите инди-рок треки</h2>\n' +
    '<form class="genre">\n' +
      '<div class="genre-answer">\n' +
        '<div class="player-wrapper"></div>\n' +
        '<input type="checkbox" name="answer" value="answer-1" id="a-1">\n' +
        '<label class="genre-answer-check" for="a-1"></label>\n' +
      '</div>\n' +
      '<div class="genre-answer">\n' +
        '<div class="player-wrapper"></div>\n' +
        '<input type="checkbox" name="answer" value="answer-1" id="a-2">\n' +
        '<label class="genre-answer-check" for="a-2"></label>\n' +
      '</div>\n' +
      '<div class="genre-answer">\n' +
        '<div class="player-wrapper"></div>\n' +
        '<input type="checkbox" name="answer" value="answer-1" id="a-3">\n' +
        '<label class="genre-answer-check" for="a-3"></label>\n' +
      '</div>\n' +
      '<div class="genre-answer">\n' +
        '<div class="player-wrapper"></div>\n' +
        '<input type="checkbox" name="answer" value="answer-1" id="a-4">\n' +
        '<label class="genre-answer-check" for="a-4"></label>\n' +
      '</div>\n' +
      '<button class="genre-answer-send" type="submit">Ответить</button>\n' +
    '</form>', 'main--level', 'main--level-genre');


const resultTemplate = getElementFromTemplate('<section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>\n' +
    '<h2 class="title">Вы настоящий меломан!</h2>\n' +
    '<div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>\n' +
    '<span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>\n' +
    '<span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>', 'main--result');

export {welcomeTemplate, artistTemplate, genreTemplate, resultTemplate};

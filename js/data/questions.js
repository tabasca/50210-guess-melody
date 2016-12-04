const questions = [
  {
    type: 'artist',
    title: 'Кто исполняет эту песню?',
    answers: new Set([
      {image: '', text: 'Пелагея', isCorrect: true},
      {image: '', text: 'Краснознаменная дивизия имени моей бабушки', isCorrect: false},
      {image: '', text: 'Lorde', isCorrect: false}
    ])
  },
  {
    type: 'genre',
    title: 'Выберите инди-рок треки',
    answers: new Set([
      {value: 'answer-1', isCorrect: 'true'},
      {value: 'answer-2', isCorrect: 'false'},
      {value: 'answer-3', isCorrect: 'true'},
      {value: 'answer-4', isCorrect: 'false'}
    ])
  },
  {
    type: 'artist',
    title: 'Кто исполняет эту песню?',
    answers: new Set([
      {image: '', text: 'Noize MC', isCorrect: false},
      {image: '', text: 'Каста', isCorrect: true},
      {image: '', text: 'Валентин Стрыкало', isCorrect: false}
    ])
  },
  {
    type: 'artist',
    title: 'Кто исполняет эту песню?',
    answers: new Set([
      {image: '', text: 'Donna Summer', isCorrect: true},
      {image: '', text: 'Alizee', isCorrect: false},
      {image: '', text: 'Shaka Ponk', isCorrect: false}
    ])
  },
  {
    type: 'artist',
    title: 'Кто исполняет эту песню?',
    answers: new Set([
      {image: '', text: 'Paramore', isCorrect: 'false'},
      {image: '', text: 'Arctic Monkeys', isCorrect: 'true'},
      {image: '', text: 'Era', isCorrect: 'false'}
    ])
  },
  {
    type: 'artist',
    title: 'Кто исполняет эту песню?',
    answers: new Set([
      {image: '', text: 'KONGOS', isCorrect: 'false'},
      {image: '', text: 'Kosheen', isCorrect: 'true'},
      {image: '', text: 'Unkle', isCorrect: 'false'}
    ])
  },
  {
    type: 'artist',
    title: 'Кто исполняет эту песню?',
    answers: new Set([
      {image: '', text: 'Sia', isCorrect: 'false'},
      {image: '', text: 'Lady Gaga', isCorrect: 'false'},
      {image: '', text: 'Madonna', isCorrect: 'true'}
    ])
  },
  {
    type: 'artist',
    title: 'Кто исполняет эту песню?',
    answers: new Set([
      {image: '', text: 'Алла Пугачева', isCorrect: 'true'},
      {image: '', text: 'Кристина Орбакайте', isCorrect: 'false'},
      {image: '', text: 'Филипп Киркоров', isCorrect: 'false'}
    ])
  },
  {
    type: 'artist',
    title: 'Кто исполняет эту песню?',
    answers: new Set([
      {image: '', text: 'Greenday', isCorrect: false},
      {image: '', text: 'Perspektiva', isCorrect: true},
      {image: '', text: 'Okean Elzy', isCorrect: false}
    ])
  },
  {
    type: 'artist',
    title: 'Кто исполняет эту песню?',
    answers: new Set([
      {image: '', text: 'Britney Spears', isCorrect: 'false'},
      {image: '', text: 'Black Sabbath', isCorrect: 'false'},
      {image: '', text: 'Eminem', isCorrect: 'true'}
    ])
  }
];

export default questions;


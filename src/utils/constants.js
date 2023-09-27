import chezeecakesImage from '../images/techCards/cheezecakes.jpg';
import latteImage from '../images/techCards/latte.jpg';
import mangoImage from '../images/techCards/mango.jpg';
import snickersImage from '../images/techCards/snickers.jpg';
import napoleonImage from '../images/techCards/napoleon.jpg';
import passionFruitImage from '../images/techCards/passionFruit.jpg';

import reviewOneImage from '../images/reviews/review-one.jpg';
import reviewTwoImage from '../images/reviews/review-two.jpg';
import reviewThreeImage from '../images/reviews/review-three.jpg';
import reviewFourImage from '../images/reviews/review-four.jpg';
import reviewFiveImage from '../images/reviews/review-five.jpg';
import reviewSixImage from '../images/reviews/review-six.jpg';
import reviewSevenImage from '../images/reviews/review-seven.jpg';
import reviewEightImage from '../images/reviews/review-eight.jpg';
import reviewNineImage from '../images/reviews/review-nine.jpg';
import reviewTenImage from '../images/reviews/review-ten.jpg';


export const cardsArray = [
  {
    title: 'Чизкейк',
    text: 'Пирожное со сливочной начинкой и хрустящей корочкой на палочке',
    link: chezeecakesImage,
    alt: 'Десерт чизкейк',
    cost: '2000 р.',
    description: [
      'Сабле (песочная основа) - ванильная, шоколадная',
      'Сырный слой: клубничный, шоколадный, фисташковый',
      'Начинки: клубничное конфи, крем манго-маракуйя, малиновый мусс',
      'Шоколадная глазурь для покрытия',
      'Идеи для вдохновения от меня',
    ],
  },
  {
    title: 'Карамельно-ореховый латте',
    text: 'Идеальное сочетание карамели и арахиса создает ароматный и вкусный торт',
    link: latteImage,
    alt: 'Торт карамельно-ореховый латте',
    cost: '1000 р.',
    description: [
      'Ванильный бисквит',
      'Латте пропитка',
      'Латте мусс',
      'Сливочная карамель',
      'Фундучное пралине - крошка',
      'Сырный крем для выравнивания'
    ],
  },
  {
    title: 'Манго-черника',
    text: 'Сочный шоколадный бисквит, черничный и манговый конфитюр создают очень нежный и изысканный вкус.',
    link: mangoImage,
    alt: 'Торт манго-черника',
    cost: '1000 р.',
    description: [
      'Шоколадный бисквит',
      'Конфи манго',
      'Черничный конфитюр',
      'Взбитый ганаш на белом шоколаде',
      'Сырно-сливочный черничный крем',
      'Сырный крем для выравнивания'
    ],
  },
  {
    title: 'Сникерс',
    text: 'Нежный шоколадный бисквит с малиновым кремом, покрытый бархатной глазурью.',
    link: snickersImage,
    alt: 'Торт сникерс',
    cost: '1000 р.',
    description: [
      'Шоколадный бисквит',
      'Шоколадный взбитый ганаш',
      'Арахисовый взбитый ганаш',
      'Сливочная карамель',
      'Сырно-сливочный крем',
      'Шоколадный сырный крем'
    ],
  },
  {
    title: 'Наполеон',
    text: 'Нежный шоколадный бисквит с малиновым кремом, покрытый бархатной глазурью.',
    link: napoleonImage,
    alt: 'Торт наполеон',
    cost: '1000 р.',
    description: [
      'Слоеные хрустящие корки',
      'Сливочно-заварной крем',
      'Фруктово-ягодное конфи для начинки',
      'Сливочная карамель для начинки'
    ],
  },
  {
    title: 'Маракуйя-дорблю',
    text: 'Нежный шоколадный бисквит с малиновым кремом, покрытый бархатной глазурью.',
    link: passionFruitImage,
    alt: 'Торт Маракуйя-дорблю',
    cost: '1000 р.',
    description: [
      'Ванильный бисквит',
      'Конфи маракуйя',
      'Ганаш на белом шоколаде с дорблю',
      'Сырный крем для начинки',
      'Сырный крем для выравнивания',
    ],
  }
]

export const portfolioArray = [
  {
    link: reviewOneImage,
    alt: 'Отзыв 1'
  },
  {
    link: reviewTwoImage,
    alt: 'Отзыв 2'
  },
  {
    link: reviewThreeImage,
    alt: 'Отзыв 3'
  },
  {
    link: reviewFourImage,
    alt: 'Отзыв 4'
  },
  {
    link: reviewFiveImage,
    alt: 'Отзыв 5'
  },
  {
    link: reviewSixImage,
    alt: 'Отзыв 6'
  },
  {
    link: reviewSevenImage,
    alt: 'Отзыв 7'
  },
  {
    link: reviewEightImage,
    alt: 'Отзыв 8'
  },
  {
    link: reviewNineImage,
    alt: 'Отзыв 9'
  },
  {
    link: reviewTenImage,
    alt: 'Отзыв 10'
  }
]

export const questionsArray = [
  {
    question: 'Сколько стоит тех-карта?',
    answer: 'Стоимость тех-карты варьируется от 500 до 1000 рублей в зависимости от вида.',
    class: 'question__image_cost'
  },
  {
    question: 'Что входит в тех-карту?',
    answer: 'Тех-карта состоит из пошаговой инструкции по созданию десерта, рецепта, расписанного по граммам и 2 видео сборки этого продукта',
    class: 'question__image_techcard'
  },
  {
    question: 'Как производить оплату?',
    answer: 'После выбора понравившейся тех-карту, нажимаете на кнопку оформить заказ и выбираете удобный для вас способ оплаты.',
    class: 'question__image_order'
  },
  {
    question: 'Что важно знать?',
    answer: 'Если по какой-то причине вы не смогли оформить заказ, вы можете связать с нами в любой социальной сети и мы вышлем вам инструкцию.',
    class: 'question__image_important'
  },
  {
    question: 'Сколько стоит тех-карта?',
    answer: 'Стоимость тех-карты варьируется от 500 до 1000 рублей в зависимости от вида.',
    class: 'question__image_cost'
  },
  {
    question: 'Что входит в тех-карту?',
    answer: 'Тех-карта состоит из пошаговой инструкции по созданию десерта, рецепта, расписанного по граммам и 2 видео сборки этого продукта',
    class: 'question__image_techcard'
  },
  {
    question: 'Как производить оплату?',
    answer: 'После выбора понравившейся тех-карту, нажимаете на кнопку оформить заказ и выбираете удобный для вас способ оплаты.',
    class: 'question__image_order'
  },
  {
    question: 'Что важно знать?',
    answer: 'Если по какой-то причине вы не смогли оформить заказ, вы можете связать с нами в любой социальной сети и мы вышлем вам инструкцию.',
    class: 'question__image_important'
  },

]

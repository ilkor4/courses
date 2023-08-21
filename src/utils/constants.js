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
    text: 'Нежный шоколадный бисквит с малиновым кремом, покрытый бархатной глазурью.',
    link: chezeecakesImage,
    alt: 'Десерт чизкейк',
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
    title: 'Карамельно-ореховый латте',
    text: 'Нежный шоколадный бисквит с малиновым кремом, покрытый бархатной глазурью.',
    link: latteImage,
    alt: 'Торт карамельно-ореховый латте',
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
    title: 'Манго-черника',
    text: 'Нежный шоколадный бисквит с малиновым кремом, покрытый бархатной глазурью.',
    link: mangoImage,
    alt: 'Торт манго-черника',
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
    title: 'Сникерс',
    text: 'Нежный шоколадный бисквит с малиновым кремом, покрытый бархатной глазурью.',
    link: snickersImage,
    alt: 'Торт сникерс',
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
    title: 'Маракуйя-дорблю',
    text: 'Нежный шоколадный бисквит с малиновым кремом, покрытый бархатной глазурью.',
    link: passionFruitImage,
    alt: 'Торт Маракуйя-дорблю',
    description: [
      'Шоколадный бисквит',
      'Шоколадный взбитый ганаш',
      'Арахисовый взбитый ганаш',
      'Сливочная карамель',
      'Сырно-сливочный крем',
      'Шоколадный сырный крем'
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

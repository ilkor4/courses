import { useState } from 'react';
import '../Question/Question.css';

export default function Question(props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenQuestion = () => {
    setIsOpen(!isOpen);
  }

  return(
    <li onClick={handleOpenQuestion} className='question'>
      <p className='question__question'>
        <span className={'question__image ' +  props.question.class} ></span>
        {props.question.question}
        <span className={ !isOpen
          ? 'question__icon'
          : 'question__icon question__icon_opened'
          }>
        </span>
      </p>
      <p className={ !isOpen
        ? 'question__answer'
        : 'question__answer question__answer_active'}>
        {props.question.answer}
      </p>
    </li>
  )
}

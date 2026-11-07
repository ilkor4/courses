// Компонент вопроса с выдвижным ответом

import { useState } from 'react';
import '../Question/Question.css';

export default function Question(props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenQuestion = () => {
    setIsOpen(!isOpen);
  }
  const answerId = `question-answer-${props.index}`;

  return(
    <li className={isOpen ? 'question question_opened' : 'question'}>
      <button
        id={`question-trigger-${props.index}`}
        className='question__trigger'
        type='button'
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={handleOpenQuestion}>
        <span className='question__number'>{String(props.index + 1).padStart(2, '0')}</span>
        <span className='question__label'>{props.question.question}</span>
        <span className='question__toggle' aria-hidden='true'>{isOpen ? '−' : '+'}</span>
      </button>
      <div
        id={answerId}
        className={isOpen ? 'question__answer question__answer_active' : 'question__answer'}
        role='region'
        aria-labelledby={`question-trigger-${props.index}`}
        aria-hidden={!isOpen}>
        <p>{props.question.answer}</p>
      </div>
    </li>
  )
}

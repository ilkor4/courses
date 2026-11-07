// Секция частозадаваемые вопросы

import Question from '../Question/Question';
import { questionsArray } from '../../utils/constants';
import '../Questions/Questions.css';

export default function Questions() {

  return(
    <section className='questions-section' id='questions'>
      <header className='questions__header'>
        <div className='questions__eyebrow'>
          <span>ПЕРЕД ПОКУПКОЙ</span>
          <span>ВОПРОСЫ И ОТВЕТЫ</span>
        </div>
        <h2 className='questions__title'>Частые<br />вопросы</h2>
        <p className='questions__intro'>Коротко о тех-картах, оплате и поддержке.</p>
      </header>
      <ul className='questions__list'>
        { questionsArray.map((question, index) => <Question question={question} index={index} key={index} />)}
      </ul>
    </section>
  )
}

import Question from '../Question/Question';
import { questionsArray } from '../../utils/constants';
import '../Questions/Questions.css';

export default function Questions() {

  return(
    <section className='questions-section' id='questions'>
      <div className='contacts__decor'></div>
      <h2 className='section-title section-title_light'>Вопросы</h2>
      <ul className='questions'>
        { questionsArray.map((question, index) => <Question question={question} key={index} />)}
      </ul>
    </section>
  )
}

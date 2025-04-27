import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

const Form = ({ onSubmit }) => {
  const formHandle = event => {
    event.preventDefault();
    const form = event.target;
    const value = form.elements.search.value.trim();
    if (value) {
      onSubmit(value);
    }
    form.reset();
  };

  return (
    <form className={style.form} onSubmit={formHandle}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;

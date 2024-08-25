import "./style.css";

const Form = () => (
    <form className="form">
        <input
            placeholder="Co jest do zrobienia?"
            autofocus />
        <button
            className="section__button">
            Dodaj zadanie
        </button>
    </form>
);

export default Form;
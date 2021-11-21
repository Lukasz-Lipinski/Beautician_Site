import FormHOC from '../../../components/HOC-Sites/FormHOC';

function Form(props) {
  const {
    className,
    onSubmit,
    valueNameAndSurname,
    onChangeNameAndSurname,
    valueEmail,
    onChangeEmail,
    valueMsg,
    onChangeMsg,
    onFocusMsg,
    onClickSend,
    emailIsRequired,
    nameAndSurnameIsRequired,
    msgIsRequired } = props;

  return (
    <form className={className} onSubmit={onSubmit}>
      <div>
        <label htmlFor="nameAndSurname">Imię i nazwisko:</label>
        <input className={`isValid--${nameAndSurnameIsRequired}`} id="nameAndSurname" type="text" value={valueNameAndSurname} onChange={onChangeNameAndSurname} />
        {nameAndSurnameIsRequired ? null : <p>Wymagane pole</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input className={`isValid--${emailIsRequired}`} id="email" type="text" value={valueEmail} onChange={onChangeEmail} />
        {emailIsRequired ? null : <p>Wymagane pole</p>}
      </div>

      <div>
        <label htmlFor="message">Wiadomość:</label>
        <textarea className={`isValid--${msgIsRequired}`} value={valueMsg} onChange={onChangeMsg} onFocus={onFocusMsg}>Masz pytania? Napisz do nas, a postaramy się pomóc</textarea>
        {msgIsRequired ? null : <p>Wymagane pole</p>}
      </div>

      <span>
        <button type="submit" onClick={onClickSend}>Wyślij</button>
      </span>
    </form>
  )
};

export default FormHOC(Form);
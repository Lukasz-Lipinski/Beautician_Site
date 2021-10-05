export default function Form(props) {
  const {
    className,
    onSubmit,
    valueNameAndSurname,
    onChangeNameAndSurname,
    valueEmail,
    onChangeEmail,
    valueMsg,
    onChangeMsg,
    onClickSend
  } = props;

  return (
    <form className={className} onSubmit={onSubmit}>
      <div>
        <label htmlFor="nameAndSurname">Imię i nazwisko:</label>
        <input id="nameAndSurname" type="text" value={valueNameAndSurname} onChange={onChangeNameAndSurname} />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" value={valueEmail} onChange={onChangeEmail} />
      </div>

      <div>
        <label htmlFor="message">Wiadomość:</label>
        <textarea value={valueMsg} onChange={onChangeMsg}>Masz pytania? Napisz do nas, a postaramy się pomóc</textarea>
      </div>

      <button onClick={onClickSend}>Wyślij</button>
    </form>
  )
}
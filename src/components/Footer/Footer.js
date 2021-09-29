import '../../styles/footer.scss';

export default function Footer(props) {
  const { className } = props;

  return (
    <footer className={`${className}`}>
      <div className={`${className}__information`}>
        <div>Location</div>
        <div>hours of opening</div>
        <div>contact</div>
        <div>email</div>
      </div>
      <div className={`${className}__icons`}>
        <div>fb Icon</div>
        <div>instagram icon</div>
      </div>
    </footer>
  )
}
export default function Card(props) {
  const { className } = props;
  return (
    <div className={`${className}`}>
      <div className={`${className}__img`}>
        <img src="" alt="" />
      </div>
      <div className={`${className}--body`}>
        Content
      </div>

    </div>
  )
}
import React from "react";

class Card extends React.PureComponent {
  render() {
    const { index, title } = this.props;
    return (
      <div className={`cards--card__${index}`}>
        <div>{title}</div>
      </div>
    )
  }
}

export default Card;
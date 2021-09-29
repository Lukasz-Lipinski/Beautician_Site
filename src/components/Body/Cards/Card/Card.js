import React from "react";

class Card extends React.PureComponent {
  render() {
    const { name, title } = this.props;
    return (
      <div className={`cards--card--${name}`}>
        <div>{title}</div>
      </div>
    )
  }
}

export default Card;
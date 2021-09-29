import React from 'react';

export default class Cards extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <nav className={this.props.className}>
        {React.Children.map(children, child => child)}
      </nav>
    )
  }
}
import React, { Component } from 'react';
type State = {
    defaultColor: string;
    AccessColor: string;
}


export default class Ex2 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      defaultColor: '#000000',
      AccessColor: '',
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ defaultColor: e.target.value });
  };
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ AccessColor: this.state.defaultColor });
  };

  render() {
    return (
      <div>
        <h1>Color: {this.state.AccessColor}</h1>
        <form onSubmit={this.handleSubmit}>
          <h1>Form</h1>
          <label>Color:</label>
          <input
            type="color"
            value={this.state.defaultColor}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
import React, { Component } from 'react';
interface ComponentState {
  currentProgress: number;
  submittedProgress: number | null;
}

export default class ex4 extends Component<{}, ComponentState> {
  state = {
    currentProgress: 40,
    submittedProgress: null,
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentProgress: Number(e.target.value) });
  };
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ submittedProgress: this.state.currentProgress });
  };

  render() {
    return (
      <div>
        <h1>
          Tiến độ hoàn thành: {this.state.submittedProgress !== null ? this.state.submittedProgress : ''} %
        </h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="range"
            min="0"
            max="100"
            value={this.state.currentProgress}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
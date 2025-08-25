import { Component } from "react";
interface CounterState {
  count: number;
}
export default class Ex08 extends Component<{}, CounterState> {
   timerId: number = 0;
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState((prevState) => ({
        count: (prevState.count + 1) % 11,
      }));
    }, 1000);
  }
  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }
  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
      </div>
    );
  }
}
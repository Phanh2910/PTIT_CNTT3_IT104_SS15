import React, { Component } from 'react'
type stateType = {
  time: Date
}
export default class ex7 extends Component<object, stateType> {
  private timerId: ReturnType<typeof setInterval> | null = null;
    constructor ( props : object){
      super(props)
      this.state={
        time : new Date()
      }
    }

    componentDidMount(): void {
        this.timerId = setInterval(()=>{
          this.setState({time : new Date()})
        },1000)
    }

    componentWillUnmount(): void {
        if ( this.timerId !== null){
          clearInterval(this.timerId)
        }
    }
  render() {
    
    return (
      <div>Thoi gian hien tai: {this.state.time.toLocaleTimeString()}</div>
    )
  }
}
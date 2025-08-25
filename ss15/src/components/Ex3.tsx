import React, { Component } from 'react';

type State = {
    date: string;
    ChangeDate: string;
}

export default class Ex3 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            date: "",
            ChangeDate: "", 
        };
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ date: e.target.value });
    };

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.setState({ ChangeDate: this.state.date });
    };

    render() {
        return (
            <div>
                <h1>Date: {this.state.ChangeDate}</h1>
                <form onSubmit={this.handleSubmit}>
                    <h1>Form</h1>
                    <label>Date:</label>
                    <input
                        type="date"
                        value={this.state.date}
                        onChange={this.handleChange}
                    />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
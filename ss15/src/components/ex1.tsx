import React, { Component } from 'react'
type State = {
    user: {
        email: string
    }
}

export default class ex1 extends Component<{}, State> {
    State: State = {
        user: {
            email: ""
        }
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            user: {
                email: e.target.value
            }
        })
    }
    handleSubmit = () => {
        console.log("Email đã được submit:", this.state.user.email);
        alert(`Email submitted: ${this.state.user.email}`);
    }

    render() {
        return (
            <div>
                <h1>FORM</h1>
                <p>Email: {this.state.user.email}</p> 
                <input 
                    type='text' 
                    placeholder='nva@gmail.com'
                    value={this.state.user.email}
                    onChange={this.handleChange} 
                />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}
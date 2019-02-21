import React from 'react';
import './Login.scss';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = e => this.setState({ [e.target.placeholder]: e.target.value })

    login = e => {
        e.preventDefault();
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);
        window.location.reload();
    }

    render() {
        return (
            <article className="login">
                <div className="brand" />
                <h2>Sign up to see photos and videos from your friends.</h2>
                <form className="login-form" onSubmit={this.login}>
                    <input 
                        type="text"
                        className="login-input"
                        placeholder="username"
                        onChange={this.handleChange}
                        value={this.username}
                    />
                    <input
                        type="text"
                        className="login-input"
                        placeholder="password"
                        onChange={this.handleChange}
                        value={this.password}
                    />
                    <button className="login-button">Login</button>
                </form>
            </article>
        )
    }
}

export default Login;
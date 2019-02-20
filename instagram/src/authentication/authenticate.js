import React from 'react';

const authenticate = App => Login =>

    class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            let username = localStorage.getItem('username');
            let password = localStorage.getItem('password');
            if (username && password) this.setState({ loggedIn: true });
        }

        render() {
            return (
                <>
                    {
                        this.state.loggedIn ? <App /> : <Login />
                    }
                </>
            ) 
        }
    }

export default authenticate;
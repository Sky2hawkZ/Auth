import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null }

    /**
     * Called immediately before mounting occurs, and before Component#render. 
     * Avoid introducing any side-effects or subscriptions in this method.
     */
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyD2DR0HHqfzh_wGMZHgQW-aOEwdRKLtbEQ',
            authDomain: 'authentication-e5813.firebaseapp.com',
            databaseURL: 'https://authentication-e5813.firebaseio.com',
            projectId: 'authentication-e5813',
            storageBucket: 'authentication-e5813.appspot.com',
            messagingSenderId: '647768667951'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}> Log Out </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <CardSection>
                        <Spinner size="large" />
                    </CardSection>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View >
        );
    }
}

export default App;

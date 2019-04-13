import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyD2DR0HHqfzh_wGMZHgQW-aOEwdRKLtbEQ',
            authDomain: 'authentication-e5813.firebaseapp.com',
            databaseURL: 'https://authentication-e5813.firebaseio.com',
            projectId: 'authentication-e5813',
            storageBucket: 'authentication-e5813.appspot.com',
            messagingSenderId: '647768667951'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View >
        );
    }
}

export default App;

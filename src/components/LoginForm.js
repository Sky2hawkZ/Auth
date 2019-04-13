import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '' };

    /* Button Press*/
    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '' });

        /* Attempt login, handle errors */
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({ error: 'Authentication Failed.' });
                    });
            });
    }

    /* Render the Component */
    render() {
        return (
            <Card>
                {/* Email Field */}
                <CardSection>
                    <Input
                        placeholder="user@proton.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                {/* Password Field */}
                <CardSection>
                    <Input
                        isPassword
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>

                {/* Login Section */}
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)} >
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;

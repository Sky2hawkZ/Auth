import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { ButtonStyle, TextStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={ButtonStyle}>
            <Text style={TextStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    ButtonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#8BC34A',
        marginLeft: 5,
        marginRight: 5
    },
    TextStyle: {
        alignSelf: 'center',
        color: '#8BC34A',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};
export default Button;

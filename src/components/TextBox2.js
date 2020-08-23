import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextBox2 = ({ id, value, setValue, style }) => {
    return(
        <View>
            <TextInput 
            style={[{
            backgroundColor: '#222223',
            paddingHorizontal: 10,
            marginHorizontal: 40,
            marginTop: 10,
            height: 35,
            borderWidth: 1,
            borderColor: '#AACCFF',
            color: '#AACCFF'
            }, style]}
            value = {value}
            onChangeText = {(newValue) => setValue (newValue, id)}
            />
        </View>
    )
}

export default TextBox2;
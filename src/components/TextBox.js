import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextBox = ({vertical, ac, keyboardType, value, setValue, password}) => {
    return(
        <View>
            <TextInput 
            style={{
            paddingHorizontal: 10,
            marginHorizontal: 40,
            marginTop: parseFloat(vertical),
            borderWidth: 1,
            borderColor: '#AACCFF',
            color: '#AACCFF',
            }}
            secureTextEntry={password}
            autoCapitalize={ac}
            keyboardType={keyboardType}
            value = {value}
            onChangeText = {(newValue) => setValue (newValue)}
            />
        </View>
    )
}

export default TextBox;
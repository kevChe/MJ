import React, {useState, useEffect, useContext} from 'react'
import {View, TouchableOpacity, FlatList, Text, StyleSheet} from 'react-native'
import UserNames from '../context/UserNames'

const RadioButton2 = ({list, position, action}) => {

    const [checked, setChecked] = useState(position)
    const [names, setNames] = useContext(UserNames)

    useEffect(()=> {
        console.log(checked)
        action(checked)
    }, [checked])

    return (
        <View>
            <FlatList 
                data={list}
                renderItem={({ item, index }) => {
                    return(
                        <TouchableOpacity style={styles.container} onPress={() => { setChecked(index) }}>
                            <Text>{names[item].value}</Text>
                            <View style={styles.radioButton}>
                            {(checked == index) ? <View style={styles.checkedButton} /> : <View/>}
                            </View>
                        </TouchableOpacity> 
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    radioButton: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        height: 20,
        width: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkedButton: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
        height: 13,
        width: 13,
        backgroundColor: 'black'
    }
})

export default RadioButton2;
import React, {useContext, useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import UserContext from '../context/UserContext'
import UserNames from '../context/UserNames'
import PlayingContext from '../context/PlayingContext'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import FlipCard from 'react-native-flip-card'
import {Dropdown} from 'react-native-material-dropdown'

const Player = ({pos, onPress, loc}) => {
    const [userInfo, setUserInfo] = useContext(UserContext)
    const [names, setNames] = useContext(UserNames)
    const [playing, setPlaying] = useContext(PlayingContext)
    const [flip, setFlip] = useState(false)
    const position = playing[pos]

    const setName = (value) => {
        let newArray = [...names]
        newArray[position].value = value
        setNames(newArray)
    }

    const changePlayer = (index) => {
        let playingCopy = [...playing]
        playingCopy[pos] = index
        setPlaying(playingCopy)
    }

    return(
        <FlipCard flipHorizontal={true} flipVertical={false} flip={flip} clickable={false}>

            <TouchableOpacity style={styles.Container} onPress={()=>onPress(pos)}>
                <TouchableOpacity style={{marginTop: 10, alignItems:'flex-end', marginRight: 10}} onPress={()=>setFlip(true)}>
                    <MaterialCommunityIcons name="settings" size={24} color="black" />
                </TouchableOpacity>
                <Text style={[styles.text, {flex: 2}]}>{names[position].value}</Text>
                <Text style={[styles.text, {flex: 8}]}>{userInfo[userInfo.length - 1][position]}</Text>
            </TouchableOpacity>

            <View style={styles.Container}>
                <TouchableOpacity style={{marginTop: 10, alignItems:'flex-end', marginRight: 10}} onPress={()=>setFlip(false)}>
                    <AntDesign name="back" size={24} color="black" />
                </TouchableOpacity>
                <TextInput value={names[position].value} style={{flex: 2, fontSize: 20}} textAlign={"center"} onChangeText={(value) => setName(value)}></TextInput>
                <View style={{flex: 8}}>
                    <Dropdown data={names} onChangeText={(value, index) => changePlayer(index)}/>
                </View>
            </View>

        </FlipCard>
    )
}

const styles = StyleSheet.create({
    Container: {
        borderWidth: 1,
        borderColor: "black",
        flex: 1,
        margin: 5,
        borderRadius: 20, 
        padding: 10
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20
    }  
})

export default Player;
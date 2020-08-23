import React, {useContext, useState} from 'react'
import {View, Text} from 'react-native'
import UserNames from '../context/UserNames'
import TextBox from '../components/TextBox'
import CustomButton from '../components/Button'

const Settings = () => {
    const [names, setNames] = useContext(UserNames)
    const [newPlayer, setNewPlayer] = useState()
    const addPlayer = () => {
        setNames([...names, {value: newPlayer}])
    } 
    return (
        <View>
            <Text>{newPlayer}</Text>
            <TextBox value={newPlayer} setValue={(value) => setNewPlayer(value)} vertical={10}/>
            <CustomButton text={"新增玩家"} size={30} top={10} action={addPlayer}/>
        </View>
    )
}

export default Settings
import React, {useState, useContext} from 'react'
import {View, Text, StyleSheet, Modal} from 'react-native'
import UserContext from '../context/UserContext'
import Fan from '../context/Fan'
import Player from './../components/Player'
import Calculation from './../components/Calculation'
import PlayingContext from '../context/PlayingContext'
import UserNames from '../context/UserNames'

const Main = () => {

    const [userInfo, setUserInfo] = useContext(UserContext)
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState("");
    const [playing, setPlaying] = useContext(PlayingContext)
    const [names, setNames] = useContext(UserNames)

    const playerOnPress = (position) => {
        setModal(true);
        setModalData(position)
    }

    const calculations = (prey, predator, type, fan) => {
        prey = playing[prey]
        predator = playing[predator]
        console.log(prey, predator)
        let newScore = []
        if(type == 1){
            for(let i = 0; i < names.legnth; i ++){
                if(i == predator){
                    newScore[i] = parseInt(userInfo[userInfo.length - 1][i]) + parseInt(fan) * 1.5
                }else [
                    newScore[i] = parseInt(userInfo[userInfo.length - 1][i]) - parseInt(fan) / 2
                ]
            }
        }else{
            if(type == 2){
                fan *= 1.5
            }
            for(let i = 0; i < names.length; i ++){
                if(i == predator){
                    newScore[i] = userInfo[userInfo.length - 1][i] + fan
                }else if(i == prey){
                    newScore[i] = userInfo[userInfo.length - 1][i] - fan
                }else{
                    newScore[i] = userInfo[userInfo.length - 1][i]
                }
            }
        }
        setUserInfo([...userInfo, newScore])
        console.log(userInfo)
    }

    const modalConfirm = (prey, predator, type, fan) => {
        setModal(false);
        calculations(prey, predator, type, fan)
    }


    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <Player pos="0" onPress={(value)=>playerOnPress(value)} loc={0} setPlaying={(loc, player) => {setPlaying(loc, player)}}/>
                <Player pos="1" onPress={(value)=>playerOnPress(value)} loc={1} setPlaying={(loc, player) => {setPlaying(loc, player)}}/>
            </View>
            <View style={styles.row}>
                <Player pos="2" onPress={(value)=>playerOnPress(value)} loc={2} setPlaying={(loc, player) => {setPlaying(loc, player)}}/>
                <Player pos="3" onPress={(value)=>playerOnPress(value)} loc={3} setPlaying={(loc, player) => {setPlaying(loc, player)}}/>
            </View>
            <Calculation visible={modal} onPress={(prey, predator, type, fan)=>modalConfirm(prey, predator, type, fan)} modalData={modalData} names={names} close={()=>setModal(false)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    row:{
        flexDirection: 'row',
        flex: 1,
        zIndex: 1
    },
    finish:{
        borderWidth: 1,
        borderColor: 'red',
        zIndex: 5,
        height: 100,
        position: 'absolute',
        flex: 1
    }
})

export default Main;
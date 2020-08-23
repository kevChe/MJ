import React, {useState, useContext} from 'react'
import {View, Text, StyleSheet, Modal} from 'react-native'
import UserContext from '../context/UserContext'
import Fan from '../context/Fan'
import Player from './../components/Player'
import Calculation from './../components/Calculation'

const Main = () => {

    const [userInfo, setUserInfo] = useContext(UserContext)
    const [modal, setModal] = useState(false);
    const [modalData, setModalData] = useState("");
    const [names, setNames] = useState(["東", "南", "西", "北"])
    const fanArray = [{value: 2}, {value: 4}, {value: 8}, {value: 16}, {value: 24}, {value: 32}, {value: 48}, {value: 64}, {value: 96}, {value: 128}]
    const fanNameArray = [{value: "1番"}, {value: "2番"}, {value: "3番"}, {value: "4番"}, {value: "5番"}, {value: "6番"}, {value: "7番"}, {value: "8番"}, {value: "9番"}, {value: "10番"}]
    const [fan, setFan] = useContext(Fan)

    const playerOnPress = (data) => {
        setModal(true);
        setModalData(data)
    }


    const calculations = (prey, predator, type, fan) => {
        let newScore = []
        if(type == 1){
            for(let i = 0; i < 4; i ++){
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
            for(let i = 0; i < 4; i ++){
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
    }

    const modalConfirm = (prey, predator, type, fan) => {
        setModal(false);
        calculations(prey, predator, type, fan)
    }


    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <Player pos="0" onPress={(value)=>playerOnPress(value)} nameP={names[0]}/>
                <Player pos="1" onPress={(value)=>playerOnPress(value)} nameP={names[1]}/>
            </View>
            <View style={styles.row}>
                <Player pos="2" onPress={(value)=>playerOnPress(value)} nameP={names[2]}/>
                <Player pos="3" onPress={(value)=>playerOnPress(value)} nameP={names[3]}/>
            </View>
            <Calculation visible={modal} onPress={(prey, predator, type, fan)=>modalConfirm(prey, predator, type, fan)} modalData={modalData} names={names} fanArray={fanArray} close={()=>setModal(false)} fanNameArray={fanNameArray}/>
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
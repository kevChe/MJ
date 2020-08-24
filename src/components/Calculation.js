import React, {useState, useContext} from 'react'
import {View, Modal, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {Dropdown} from 'react-native-material-dropdown'
import RadioButton2 from './RadioButton2'
import RadioButton from './RadioButton'
import Fan from '../context/Fan'
import PlayingContext from '../context/PlayingContext'

const Calculation = ({visible, onPress, modalData, names, close }) => {
    const [predator, setPredator] = useState()
    const [prey, setPrey] = useState()
    const [type, setType] = useState()
    const [fanArray, setFanArray] = useContext(Fan)
    const [fan, setFan] = useState()
    const [playing, setPlaying] = useContext(PlayingContext)


    return(
        <Modal visible={visible} transparent={true} animationType={"fade"}>
            <View style={styles.container}> 
                <TouchableOpacity style={{height: 10, width: 10, borderRadius: 10, borderWidth: 1, alignSelf: 'flex-end'}} onPress={() => close()}/>
                <RadioButton2 list={playing} position={modalData} action={(predator) => setPredator(predator)} />
                <RadioButton list={["食", "自摸", "包自摸"]} action={(type) => setType(type)} position={0} />
                <Dropdown data={fanArray} onChangeText={(value) => setFan(value)}/>
                {(type != "1") ? <RadioButton2 list={playing} action={(prey) => setPrey(prey)} /> : <View/>}
                <TouchableOpacity onPress={() => {onPress(prey, predator, type, fan)}} style={styles.confirm}>
                    <Text style={styles.text}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#bce6cc',
        margin: 30,
        flex: 1,
        borderRadius: 20,
        justifyContent: 'space-between',
        paddingVertical: 30,
        padding: 15
    },
    confirm: {
        borderWidth: 1,
        borderRadius: 20,
        alignSelf: 'center',
        paddingHorizontal: 20
    },
    text: {
        fontSize: 30
    }
})

export default Calculation;
import React, {useContext} from 'react'
import {View, Text, FlatList, Dimensions, TouchableOpacity, StyleSheet} from 'react-native'
import UserContext from '../context/UserContext'
import UserNames from '../context/UserNames'


const Sum = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)
    const [names, setNames] = useContext(UserNames)
    const screenWidth = Math.round(Dimensions.get('window').width);
    const userWidth = screenWidth / userInfo[userInfo.length - 1].length
    
    return(
        <View>
            <FlatList
                data={userInfo}
                ListHeaderComponent={() => {
                    return(
                        <FlatList
                        scrollEnabled={false}
                        style={{borderWidth: 1}}
                        horizontal={true}
                        data={names}
                        renderItem={({item, index}) => {
                            return(
                                <View style={{width: userWidth, alignItems: 'center'}}>
                                    <Text>{item.value}</Text>
                                </View>
                            )
                        }}
                    />
                    )
                }}
                renderItem={({item, index}) => {
                    return (
                        <View>
                            <FlatList
                                scrollEnabled={false}
                                style={{borderWidth: 1}}
                                horizontal={true}
                                data={item}
                                renderItem={({item, index}) => {
                                    return(
                                        <View style={{width: userWidth, alignItems: 'center'}}>
                                            <Text>{item}</Text>
                                        </View>
                                    )
                                }}
                            />
                        </View>
                    )
                }} 
            />
        </View>
    )
}



export default Sum;
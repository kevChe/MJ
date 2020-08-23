import React, {useContext} from 'react'
import {View, Text, FlatList, Dimensions, TouchableOpacity, StyleSheet} from 'react-native'
import UserContext from '../context/UserContext'



const Sum = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)
    const screenWidth = Math.round(Dimensions.get('window').width);
    const userWidth = screenWidth / userInfo[0].length
    
    return(
        <View>
            <FlatList
                data={userInfo}
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
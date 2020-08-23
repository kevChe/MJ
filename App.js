import React, {useState} from 'react';
import {View} from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator} from 'react-navigation-tabs'
import Main from './src/screens/Main'
import Sum from './src/screens/Sum'
import Settings from './src/screens/Settings'
import UserContext from './src/context/UserContext'
import UserNames from './src/context/UserNames'
import Fan from './src/context/Fan';



const mainScreen = createMaterialTopTabNavigator(
  {
    "記分": {screen : Main },
    "總數": { screen: Sum},
    "設定": {screen: Settings},
  },
  {
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '',
      inactiveTintColor: '',
      style: {
        backgroundColor: ''
      },
      labelStyle: {
        textAlign: 'center'
      },
      indicatorStyle: {
        borderBottomColor: '',
        borderBottomWidth: 3,
      }
    }
  }
)

const navigator = createStackNavigator(
  {
    MainScreen: mainScreen,
  },
  {
    initialRouteName: 'MainScreen',
    defaultNavigationOptions: {
      title: '麻雀計分',
      headerShown: true
    }
  }
);

//export default createAppContainer(navigator);
const AppContainer = createAppContainer(navigator);

export default function App() {
  const [userInfo, setUserInfo] = useState([[0,0,0,0]])
  const [names, setNames] = useState([{value: "東"}, {value: "南"}, {value: "西"}, {value: "北"}])
  const [fan, setFan] = useState([{value: 2, label: '1'}, {value: 4, label: '2'}, {value: 8, label: '3'}, {value: 16, label: '4'}, {value: 24, label: '5'}, {value: 32, label: '6'}, 
                                  {value: 48, label: '7'}, {value: 64, label: '8'}, {value: 96, label: '9'}, {value: 128, label: '10'}, {value: 192, label: '11'}, {value: 256, label: '12'}, {value: 384, label: '13'}])
  return(
    <Fan.Provider value={[fan, setFan]}>
      <UserNames.Provider value={[names, setNames]}>
        <UserContext.Provider value={[userInfo, setUserInfo]}>       
          <AppContainer />
        </UserContext.Provider>
      </UserNames.Provider>
    </Fan.Provider>
    )
  }
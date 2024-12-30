import { StyleSheet, Text, View,Pressable } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Card from './screens/Card';
import {createContext, useState} from 'react'


const Context = createContext();


const Stack = createNativeStackNavigator();

export default function App() {
  const [list, setlist] = useState([{id: 1, title:"one", content:"Sample Note"}]);
  return (
      <Context.Provider value={{list, setlist}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{
            backgroundColor:'#6a51ae',
            color:'white',
          },
          headerTintColor:'#fff',
          headerTitleStyle:{fontWeight:'bold'},
          headerTitleAlign:'center',
        }}>
          <Stack.Screen name ='HomeScreen' component={HomeScreen}
            options={{
              title:'Notes'
            }}
          />
          <Stack.Screen name= 'Card' component={Card}
            options={
              {title:'Write Here...'}
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
      </Context.Provider>
  );
}

export {Context}
import { View, Text,StyleSheet} from 'react-native'
import React from 'react'

export default function Preview({id, title, content}) {
    const color = ["yellow", "lightgreen", "lightblue"]
    const randomNumber = Number.parseInt(Math.random() * 3)
    const colorStyles = {
        backgroundColor: color[randomNumber]
    };

    return (
    <View style = {[styles.container, colorStyles]}>
      <Text style={styles.titletext}><Text style={{fontSize:24}}>{id}.  </Text>{title}</Text>
      <Text>  _________________________</Text>
      <Text style={styles.text}> {content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        margin:10,
        borderWidth: 0.25,
        borderRadius: 7,
        borderColor:'grey',
        height: 200,
        width: 220,
    },
    titletext:{
        paddingLeft:10,
        paddingTop:10,
        fontSize:30
    },
    text:{
        padding:10,
        fontSize: 15
    }
})
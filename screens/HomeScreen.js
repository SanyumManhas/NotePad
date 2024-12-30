import {View, Text, Button, Pressable, FlatList, StyleSheet, ScrollView, TextInput} from 'react-native';
import { Context } from '../App';
import { useContext, useState } from 'react';
import Preview from './Preview';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import { useIsFocused } from '@react-navigation/native';


const HomeScreen = ({navigation})=>{
    const obj_list = useContext(Context);
    const list = obj_list.list;
    const setlist = obj_list.setlist;
    const [key,setkey] = useState(0);

    const isFocused = useIsFocused();
    const [filter, setfilter] = useState(false);
    
    const [filtered, setfiltered] = useState([]);

    const filterData = (obj)=>{
        const filter = list.filter((el)=>{
            return el.title == obj;
        });
        setfiltered(filter);

        if(filtered.length > 0)
        {
            setfilter(true);
        }
    }
    

    return(
        <View style = {{flex:5}}>
            <View style={{flex:2, padding:10,  flexDirection:'row'}}>
            
                <TextInput placeholder= "Search title here" style={{
                    width:"90%",height:"75%", paddingLeft:10,  borderWidth:1, fontSize: 17, borderRadius:20, borderColor: "grey"
                }}  onChangeText={(value)=>{filterData(value);}}></TextInput>
                <Pressable onPress={()=>setfilter(false)}>
                    <Ionicons style={{ fontSize:15}} name="close-circle-outline"/>
                </Pressable>
            
            </View>
            
            <View style={{flex: 30, flexDirection:'row',padding:10, margin:10}}>
                <FlatList style={styles.list}
                    data = {filter? filtered: list}
                    renderItem={({item})=>(
                        <Pressable onPress={()=>{
                            navigation.navigate("Card", {id: item.id, title: item.title, content: item.content})
                        }}>
                        <Preview {...item}/>
                        </Pressable>
                    )}
                />
                <View style={{ flexDirection: 'column-reverse', padding:10}}>
                    <Pressable  onPress={()=>navigation.navigate("Card")}>
                      <Ionicons name='add-circle' style={{fontSize: 34, color: 'white', backgroundColor:'black', borderRadius: 70, }}/>
                    </Pressable>
                </View>  
            </View>  
        </View>
    );
}


const styles = StyleSheet.create({
    list:{
        padding:10,
    }
})

export default HomeScreen;
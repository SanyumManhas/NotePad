import {View, TextInput, Button} from 'react-native';
import { ScrollView } from 'react-native';
import { Context } from '../App';
import { useContext, useState } from 'react';


const Card = ({navigation, route})=>{
    const obj_list = useContext(Context);
    const list = obj_list.list;
    const setlist = obj_list.setlist;

    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");

    const SaveinList = ()=>{
        if(route.params?.id)
        {
            console.log("inside id block")
            const id = route.params.id;
            list[id - 1] = {
                id: id,
                title:title.length > 0 ? title: route.params.title,
                content:content.length > 0 ? content: route.params.content,
            }
            setlist(list);
            navigation.goBack("HomeScreen");
        }
        else{
            console.log("inside else block")
            const newPreview = {
                id:list.length + 1,
                title: title,
                content: content
            }
    
            setlist([...list, newPreview]);
            navigation.goBack("HomeScreen");
        }

    }

    const deletePrevSave = ()=>{
        if(route.params?.id)
        {
            const id = route.params.id;
            list.splice(id - 1, 1);
            setlist(list);
            navigation.goBack("HomeScreen");
        }
        navigation.goBack("HomeScreen");
    }

    return(
        <ScrollView style={{padding:10}}>
        <View >
            <TextInput defaultValue = {route.params?.title} style={{fontWeight:"bold", fontSize:50}} placeholder='Title' onChangeText={value=>settitle(value)}/>
            <TextInput defaultValue={route.params?.content} style={{fontSize:17}} multiline = {true} placeholder='Write Text here' onChangeText={value=>{setcontent(value)}}/>
        </View>
        <View>
            <Button title="Save Note" onPress={SaveinList}/>
            <Button title="Delete Note" onPress={deletePrevSave}/>
        </View>
        </ScrollView>
        
    );
}

export default Card;
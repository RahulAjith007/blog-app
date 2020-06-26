import React, { useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native';
import { Context } from '../context/BlogContext';
import {Feather} from '@expo/vector-icons'; 
import { getOrientationAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';

const IndexScreen = ({ navigation }) => {
    const { state, getBlogPosts, deleteBlogPosts } = useContext(Context);

 useEffect(() =>{
     
    getBlogPosts(); 
    navigation.addListener('didFocus',() =>{
        getBlogPosts();
    })
 

 },[])

  return(
      
         <View>
         <FlatList
             data = {state}
             keyExtractor = {blogPost => blogPost.id}
             renderItem ={({item}) =>{
                return (
                <TouchableOpacity onPress = {() =>navigation.navigate('Blogs',{ID:item.id}) }>
                <View style = {styles.container}>
                <Text style = {styles.blogTitle}>{item.title}    ID:{item.id}</Text>
                <TouchableOpacity onPress = {() => deleteBlogPosts(item.id)}>
                <Feather name = 'trash' style = {styles.featherIcon}/>
                </TouchableOpacity>
                </View></TouchableOpacity>
                )
             }}
         />
         </View>



         
     )
}


const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingVertical:10,
        borderColor:'#adadad',
        borderTopWidth:1,
        
    
    },blogTitle:{
        fontSize:18
    },
    featherIcon:{
        fontSize:24
    }
})

export default IndexScreen
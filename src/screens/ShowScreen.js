import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import {MaterialIcons} from '@expo/vector-icons'; 

const ShowScreen = ({ navigation,route }) => {
  const { state } = useContext(Context);
  const {ID} = route.params

  const blogPost = state.find(
    blogPost => blogPost.id === ID
  );


  React.useLayoutEffect (() =>{
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress = {() => navigation.navigate('Edit',{i:ID})} >
          <MaterialIcons style={styles.materialIconStyle} name='edit' size ={30}/></TouchableOpacity>
      )
    }

    )
  }
)

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
  
};


const styles = StyleSheet.create({});

export default ShowScreen;

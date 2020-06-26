import React, {useState,useContext} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import { Context } from '../context/BlogContext';
import {  CommonActions  } from '@react-navigation/native';
import BlogPostFrom from '../components/BlogPostForm';

const EditScreen = ({navigation,route}) => {
    console.log(navigation);
    
    const {state,editBlogPosts} =useContext(Context)
    const {i} = route.params
    console.log(i);
    const blogpost = state.find((blogpost) => blogpost.id === i )
    
    
   
    return (
    <BlogPostFrom
    onSubmit={(title, content) => {
        editBlogPosts(i,title,content , () => navigation.pop())
    }}
    initialValues = {{title:blogpost.title, content:blogpost.content}}
     />
    );
};

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:8,
        marginBottom:10
    },
    contentStyle:{
        borderWidth:0.8,
        marginBottom:30,
        paddingHorizontal:10,
        marginHorizontal:8
        
    }
})

export default EditScreen
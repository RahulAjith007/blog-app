import React, {useContext,useState} from 'react';
import {
View,
Text,
StyleSheet,
Button,
TextInput
}from 'react-native'

const BlogPostForm = ({onSubmit, initialValues}) => {
   
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)
    return(
        <View>
        <Text style={styles.titleStyle}>Enter Title: </Text>
        <TextInput 
        style={styles.contentStyle}
        value ={title}
        onChangeText = {(text)=> setTitle(text)}
        />
        <Text style={styles.titleStyle}>Enter Content: </Text>
        <TextInput style={styles.contentStyle}
            value ={content}
        onChangeText = {(text)=> setContent(text)}
        />
        <Button title ='Save Blog Post'
            onPress ={() => onSubmit(title,content)}
        />
    </View>
    )  
}

BlogPostForm.defaultProps = {
    initialValues:{
        title: '',
        content: '' 
       }
}

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


export default BlogPostForm
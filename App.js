import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { NavigationContainer, CommonActions  } from '@react-navigation/native';
import { createStackNavigator,  } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import {Provider} from './src/context/BlogContext';
import ShowScreen,{helper} from './src/screens/ShowScreen';
import {Feather} from '@expo/vector-icons'; 
import {MaterialIcons} from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen';
import { Context } from './src/context/BlogContext';
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();


function App() {
 const ID = helper

  return (
  
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Index" 
        component={IndexScreen} 
        options={({ navigation, route }) => ({
          headerRight: () => (
          <TouchableOpacity onPress = {() => navigation.navigate('Create Blogs')} >
          <Feather style={styles.plusIconStyle} name='plus' size ={30}/></TouchableOpacity>
                )
        })}
        />
        <Stack.Screen name="Blogs" component={ShowScreen} />
        <Stack.Screen name="Create Blogs" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
   
  );
}

const styles = StyleSheet.create({
  plusIconStyle:{
    paddingRight:15
  },
  materialIconStyle:{
    paddingRight:15
  }
})

export default () => {
  return <Provider>
            <App />
          </Provider>
}


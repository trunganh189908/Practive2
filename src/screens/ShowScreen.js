import React, {useContext} from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {Context} from '../context/BlogContext'
import {EvilIcons} from 'react-native-vector-icons/EvilIcons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    
    const blogPost = state.find(
      blogPost => blogPost.id === navigation.getParam('id')
      );
    return (
      
        <View>
          <Text>{blogPost.title}</Text>
          <Text>{blogPost.content}</Text>
        </View>
    
    );
  }

  ShowScreen.navigationOptions = () => {
    return {
      headerRight:
       <TouchableOpacity 
       onPress={() => navigation.navigate('Edit' , {id: navigation.getParam('id')} )}>
        <EvilIcons name="pencil" size={30} />
        </TouchableOpacity>
    }
  }
  
  
  const styles = StyleSheet.create({

  });
  export default ShowScreen;
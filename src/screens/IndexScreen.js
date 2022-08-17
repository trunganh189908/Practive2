import React, {useContext} from "react";
import {Text, View, Button, StyleSheet, FlatList, SafeAreaView, TouchableOpacity} from 'react-native'
import { Context } from "../context/BlogContext";
import Feather from 'react-native-vector-icons/Feather';


const IndexScreen = ({navigation}) => {
  
    const {state, addBlogPost, deleteBlogPost} = useContext(Context);


    return (
      
        <View >
        <Button title="add Blog Post" onPress={addBlogPost}
        />
        <FlatList
          data={state}
          keyExtractor={(blogPost) => blogPost.title}
          renderItem={({item})  => {
            return (<TouchableOpacity
             onPress={() => navigation.navigate('Show', {id: item.id})}>
             <View style={styles.row}>
             <Text style={styles.title}>
              {item.title} - {item.id}
            </Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
            <Feather name="trash" style={styles.icon}/>
            </TouchableOpacity>
            </View>
            </TouchableOpacity>);
           
          }}
        />   
      </View>

    
    );
  }

  const styles = StyleSheet.create({
  
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 20,
      paddingHorizontal: 10,
      borderTopWidth: 1,
      borderColor: 'gray'
    },
    title: {
      fontSize: 15,
    },
    icon: {
      fontSize: 15
    }
  });
  export default IndexScreen;
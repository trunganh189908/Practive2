import React from "react";
import {Text, View, Button, StyleSheet, Image, SafeAreaView} from 'react-native';

function EditScreen({ navigation }) {
    return (
      <SafeAreaView >
        <View style={styles.containt }>
        <Button
          title="Go to Player List"
          onPress={() => navigation.navigate('List')}
        />
        
         </View>
      </SafeAreaView>
    
    );
  }

  const styles = StyleSheet.create({
  
    containt: {
      marginVertical: 20,
      alignContent: 'space-around',
    },
  });
  export default EditScreen;
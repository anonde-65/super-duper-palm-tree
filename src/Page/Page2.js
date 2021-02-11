import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native'

const HomePage = () => {
  return  (
    <View style={styles.container}>
        <TouchableHighlight onPress={console.log("A")}>
            <Text style={styles.text}>Welcome</Text>
        </TouchableHighlight>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
      alignItems: 'center',
      marginBottom:10
  },
  text:{
    fontSize: 50,
    color: 'blue',
  }
})
export default HomePage;
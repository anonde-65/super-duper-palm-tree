import React from 'react'
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native'

const Header = () => {
  return  (
    <View style={styles.container}>
      <Text style={styles.text}>Twice</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: '#999ff3',
    paddingTop: 40,
    alignItems: 'center',
    marginBottom: 10
  },
  text:{
      fontSize: 40
  }
})
export default Header;
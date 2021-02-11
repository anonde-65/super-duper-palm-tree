import React from 'react'
import {View,StyleSheet} from 'react-native'
import Navigation from './src/navigation/stackNavigation'
import HomePage from './src/component/HomePage'
import Header from './src/component/Header'
import Login from './src/component/Login'
const App = () => {
  return  (
    /*<View style={styles.container}>
        <Header/>
        <View style={{flex:1,marginTop:250 }}>
          <HomePage/>
          <Login/>
        </View>
    </View>*/
    <View>
      <Navigation/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'pink'
  }
})
export default App;
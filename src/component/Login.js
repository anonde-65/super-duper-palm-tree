import React,{useState} from 'react'
import {View,Text ,StyleSheet, TextInput, Alert, TouchableHighlight} from 'react-native'
//Consts
//second_line
const Login = () => {
    const [count,setCount] = useState(0);
    const [name,setName] = useState("Login");
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const touch = () =>{
        setCount(count+1)
    }
    function chkLogin() {
        if (username === 'anonde65' && password === ''){
            setName('Success')
        }else{
            Alert.alert('Incorrect')
            setName('Login')
        }
        
    }
  return  (
    <View style={styles.container}>
        <View style={{flexDirection:'row',marginBottom:20}}>
            <Text style={{padding:7}}>Username : </Text>
            <TextInput style={styles.inputBox} onChangeText={text => setUsername(text)} placeholder="enter username."></TextInput>
        </View>
        <View style={{flexDirection:'row',marginBottom:20}}>
            <Text style={{padding:7}}>Password : </Text>
            <TextInput style={styles.inputBox} onChangeText={text => setPassword(text)} placeholder="enter password."></TextInput>
        </View>
        <TouchableHighlight underlayColor="#fff" style={styles.button}  onPress={chkLogin}>
            <Text style={styles.text}>{name}</Text>
        </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      alignItems: 'center'
  },
  inputBox:{
      backgroundColor: 'white',
      padding: 5,
      width: 300,
      borderRadius: 5,
      height: 34
  },
  text:{
      fontSize:26,
      padding: 5
  },
  button:{
      backgroundColor: "green",
      borderRadius: 5,
      width: 150,
      alignItems: 'center',
  }

})
export default Login;
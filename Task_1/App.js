import React,{useState} from 'react'
import {View,TextInput,Button,StyleSheet,Text} from 'react-native'

export default function App(){
  const [ipcolor,setInputColor]=useState('');
  const [bgcolor,setbgColor]=useState('white');
  const new_bg=()=>{
    if (!ipcolor.trim()){
      setbgColor('white');
    }
    else{
      setbgColor(ipcolor);
    }
  };

  return(
    <View style={[styles.container,{backgroundColor:bgcolor}]} >
      <Text style={styles.label}>Enter a color:</Text>
      <TextInput
        style={styles.input}
        placeholder=""
        value={ipcolor}
        onChangeText={setInputColor}
      />
      <View style={styles.buttonContainer}>
        <Button title="Change Bg" onPress={new_bg}/>
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,justifyContent:'center',alignItems:'center',
  },
  label:{
    fontSize:30,fontWeight:'bold',marginBottom:10,
  },
  buttonContainer:{
    transform:[{scale:1.5}],marginTop:20,
  },
  input:{
    height:50,fontSize:20,width:200,borderWidth:2,padding:10,
  },
});
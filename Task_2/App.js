import React,{useState} from 'react'
import {Text,View,StyleSheet,TextInput} from 'react-native'

export default function App(){
  const fruits=['Apple','Banana','Orange','Mango','Watermelon','Grapes'];
  const [IpVal,setIpVal]=useState('');

  return(
    <View style={styles.container}>
      <Text style={styles.heading}>Fruits are as follows:</Text>

      {fruits.map((fruit,ind)=>(
        <View key={ind}>
          <Text style={styles.fruitName}>{fruit}</Text>
        </View> 
      ))}

      <TextInput
        style={styles.input}
        placeholder="Type a fruit name"
        value={IpVal}
        onChangeText={setIpVal}
      />
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,backgroundColor:'lightblue',alignItems:'center',justifyContent:'center',
  },
  heading:{
    fontSize:30,fontWeight:'bold',marginBottom:10,
  },
  fruitName:{
    fontSize:25,
  },
  input:{
    borderWidth:2,height:50,width:250,marginTop:10,marginVertical:10,fontSize:25,textAlignVertical:'center',
  },
})
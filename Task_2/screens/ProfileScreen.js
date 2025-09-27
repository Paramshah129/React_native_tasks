import React,{useContext} from "react";
import {View,Text,Image,TouchableOpacity,StyleSheet} from "react-native";
import {UserContext} from "../context/UserContext";
import {LinearGradient} from "expo-linear-gradient";

export default function ProfileScreen({navigation}) {
  const {user}= useContext(UserContext);

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={{color:"#B0FFB0"}}>No user data</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        {user.profilePic && (
          <Image source={{uri:user.profilePic}} style={styles.profileImage}/>
        )}
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("EditProfile")}>
          <LinearGradient
            colors={["#39FF39","#00CC00"]}
            start={{x:0,y:0}}
            end={{x:1,y:0}}
            style={styles.gradient}
          >
            <Text style={styles.LoginText}>Edit Profile</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000104",
  },
  box:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(11, 26, 11, 0.8)",
    borderColor: "#1C6E1C",
    borderRadius: 10,
    borderWidth: 1,
    width: "80%",
    padding: 20,
  },
  profileImage:{
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#B0FFB0",
    marginBottom: 10,
  },
  email:{
    fontSize: 16,
    color: "#B0FFB0",
    marginBottom: 20,
  },
  button:{
    width: "100%",
    borderRadius: 5,
    marginVertical: 10,
    overflow: "hidden",
  },
  gradient:{
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 5,
  },
  LoginText:{
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
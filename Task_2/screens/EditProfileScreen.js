import React,{useContext,useState} from "react";
import {View,TextInput,Image,TouchableOpacity,StyleSheet,Text} from "react-native";
import * as ImagePicker from "expo-image-picker";
import {UserContext} from "../context/UserContext";
import {LinearGradient} from "expo-linear-gradient";

export default function EditProfileScreen({navigation}){
  const {user,updateProfile} = useContext(UserContext);
  const [name,setName] = useState(user.name);
  const [profilePic,setProfilePic] = useState(user.profilePic);

  const pickImage = async() => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      alert("Permission to access gallery is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1,1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePic(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    if (!name.trim()) {
      alert("Name cannot be empty");
      return;
    }

    updateProfile({name,profilePic});

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity onPress={pickImage}>
          {profilePic? (
            <Image source={{uri:profilePic}} style={styles.profileImage}/>
          ):(
            <View style={styles.placeholder}>
              <Text style={{ color: "#B0FFB0" }}>Pick Image</Text>
            </View>
          )}
        </TouchableOpacity>

        <TextInput value={name} placeholder="Enter Name" placeholderTextColor="#B0FFB0" style={styles.input} onChangeText={setName}/>

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <LinearGradient
            colors={["#39FF39","#00CC00"]}
            start={{x:0,y:0}}
            end={{x:1,y:0}}
            style={styles.gradient}
          >
            <Text style={styles.LoginText}>Save Changes</Text>
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
  placeholder:{
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#1C6E1C44",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  input:{
    borderColor: "#1C6E1C",
    borderWidth: 1,
    color: "#B0FFB0",
    padding: 10,
    width: "100%",
    margin: 10,
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
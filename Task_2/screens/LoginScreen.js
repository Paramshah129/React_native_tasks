import React,{useState,useContext} from "react";
import {View,TextInput,TouchableOpacity,Text,StyleSheet} from "react-native";
import {UserContext} from "../context/UserContext";
import {LinearGradient} from "expo-linear-gradient";

export default function LoginScreen({navigation}) {
  const {login}=useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = () => {
    if (!email.trim()) {
      alert("Enter Email");
      return;
    }

    if (!password.trim()) {
      alert("Enter Password");
      return;
    }

    if (login(email, password)) {
      navigation.replace("HomeTabs");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#B0FFB0"
          style={styles.input}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#B0FFB0"
          secureTextEntry
          style={styles.input}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <LinearGradient
            colors={["#39FF39","#00CC00"]}
            start={{x:0,y:0}}
            end={{x:1,y:0}}
            style={styles.gradient}
          >
            <Text style={styles.LoginText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={{color:"#39FF39",marginTop:15}}>
            Don’t have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000104",
  },
  input: {
    borderColor: "#1C6E1C",
    borderWidth: 1,
    color: "#B0FFB0",
    padding: 10,
    width: "100%",
    margin: 10,
  },
  button: {
    width: "100%",
    borderRadius: 5,
    marginVertical: 10,
    overflow: "hidden",
  },
  gradient: {
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 5,
  },
  LoginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(11, 26, 11, 0.8)",
    borderColor: "#1C6E1C",
    borderRadius: 10,
    borderWidth: 1,
    width: "80%",
    padding: 20,
  },
});
import {View,TouchableOpacity,Button,Image,Text,StyleSheet,TextInput} from "react-native";
import React,{useState,useContext} from "react";
import * as ImagePicker from "expo-image-picker";
import {UserContext} from "../context/UserContext";
import {LinearGradient} from 'expo-linear-gradient';

export default function SignupScreen({navigation}){
    const {signup} = useContext(UserContext);
    const [Form,setForm] = useState({
        name:"",
        email:"",
        password:"",  
        confirmPassword:"",
        profilePic:null,
        contactNo:""
    });

    const pickImage=async()=>{
        const {granted}=await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted) return alert('kindly grant persmission to gallery to pick an image\n');

        const res=await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1,1],
            quality:1,
        });

        if (!res.canceled){
            setForm({...Form,profilePic:res.assets[0].uri});
        }
    }

    const handleSignup=()=>{
        if (!Form.name.trim()){
            alert('Enter Name');
            return;
        }

        if(!Form.email.trim()){
            alert('Enter Email');
            return;
        }

        if (Form.password.length<6){
            alert('Password should be of atleast 6 characters');
            return;
        }

        if (Form.password!=Form.confirmPassword){
            alert('Passwords do not match');
            return;
        }

        if (Form.contactNo.length<10){
            alert('Enter a valid contact number');
        }
        signup(Form);
        navigation.navigate("Login");
    };

    return(
        <View style={styles.container}>
            <View style={styles.box}>
                {Form.profilePic && (<Image source={{uri:Form.profilePic}} style={styles.Image}/>)}

            <TouchableOpacity style={styles.button} onPress={pickImage}>
                <LinearGradient
                    colors={['#39FF39','#00CC00']}
                    start={{x:0,y:0}}
                    end={{x:1,y:0}}
                    style={styles.gradient}
                >
                    <Text style={styles.LoginText}>Pick Image</Text>
                </LinearGradient>
            </TouchableOpacity>

            <TextInput placeholder="Name" placeholderTextColor="#B0FFB0" style={styles.input} onChangeText={(text) => setForm({ ...Form,name:text})}/>
            <TextInput placeholder="Email" placeholderTextColor="#B0FFB0" style={styles.input} onChangeText={(text) => setForm({ ...Form,email:text})}/>
            <TextInput placeholder="Password" placeholderTextColor="#B0FFB0"secureTextEntry style={styles.input} onChangeText={(text) => setForm({...Form,password:text})}/>
            <TextInput placeholder="Confirm Password" placeholderTextColor="#B0FFB0" secureTextEntry style={styles.input} onChangeText={(text) => setForm({...Form,confirmPassword:text})}/>
            <TextInput placeholder="Contact Number" placeholderTextColor="#B0FFB0" style={styles.input} onChangeText={(text) => setForm({ ...Form,contactNo:text})}/>

            <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <LinearGradient
                    colors={['#39FF39','#00CC00']}
                    start={{x:0,y:0}}
                    end={{x:1,y:0}}
                    style={styles.gradient}
                >
                    <Text style={styles.LoginText}>Sign Up</Text>
                </LinearGradient>
             </TouchableOpacity>
            </View>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000104',
    },
    input:{
        borderColor:'#1C6E1C',
        borderWidth:1,
        color:'#B0FFB0',
        padding:10,
        width: '100%',
        margin: 10,
    },
    button:{
        width: '100%',
        borderRadius: 5,
        marginVertical: 10,
        overflow: 'hidden',
    },
    gradient:{
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 5,
    },
    Image:{
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom:20,
    },
    LoginText:{
        color:'white',
        fontWeight:'bold',
        fontSize:16,
    },
    box:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgba(11, 26, 11, 0.8)',
        borderColor: '#1C6E1C',
        borderRadius:10,
        borderWidth: 1,
        width:'80%',
        padding: 20,
    },
});
import {useState} from 'react';
import {View,TouchableOpacity,StyleSheet,Alert,TextInput,Text} from 'react-native';
import {auth} from './firebase.js';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {LinearGradient} from 'expo-linear-gradient';

export default function SignUpScreen({navigation}){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const SignUp = async() => {
        try{
            const userInfo = await createUserWithEmailAndPassword(auth,email,password);
            Alert.alert('Sign Up Successful');
            navigation.navigate('Login'); 
        } catch (error){
            if (error.code === 'auth/email-already-in-use'){
                Alert.alert('User already exists');
            } else {
                Alert.alert('Sign Up failed');
            }      
        }
    };

    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>Welcome!</Text>
                <TextInput style={styles.input} placeholderTextColor="#B0FFB0" placeholder="Email" value={email} onChangeText={setEmail}></TextInput>
                <TextInput style={styles.input} placeholderTextColor="#B0FFB0" placeholder="Password" secureTextEntry value={password} onChangeText={setPassword}></TextInput>
                <TouchableOpacity style={styles.button} onPress={SignUp}>
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
    title:{
        color: 'white',
        fontSize: 30,
        fontWeight:'bold',
        marginBottom: 20,
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
    LoginText:{
        color:'white',
        fontWeight:'bold',
        fontSize:16,
    },
    footer:{
        color:'white',
        fontSize:12,
    },
    link:{
        color:'#1C6E1C',
    },
});
import {useState} from 'react';
import {View,StyleSheet,TextInput,Alert,Text,TouchableOpacity} from 'react-native';
import {auth} from './firebase.js';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {LinearGradient} from 'expo-linear-gradient';


export default function LoginScreen({navigation}){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const Login = async() => {
        try {
            await signInWithEmailAndPassword(auth,email,password);
            Alert.alert('Login Successful');
            navigation.navigate('Home');
        } catch (error) {
            if (error.code === 'auth/user-not-found'){
                Alert.alert('Account not found');
            } else if (error.code === 'auth/wrong-password'){
                Alert.alert('Incorrect Password');
            } else {
                Alert.alert('Login failed');
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>Welcome!</Text>
                <TextInput style={styles.input} placeholderTextColor="#B0FFB0" placeholder="Email" value={email} onChangeText={setEmail}></TextInput>
                <TextInput style={styles.input} placeholderTextColor="#B0FFB0" placeholder="Password" value={password} onChangeText={setPassword}></TextInput>
                <TouchableOpacity style={styles.button} onPress={Login}>
                    <LinearGradient
                        colors={['#39FF39','#00CC00']}
                        start={{x:0,y:0}}
                        end={{x:1,y:0}}
                        style={styles.gradient}
                    >
                        <Text style={styles.LoginText}>Login</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <Text style={styles.footer}>
                    Don't have an account? <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
                </Text>
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
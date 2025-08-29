import {View,Text,Button,StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useFonts,Lobster_400Regular,Lobster_700Bold} from '@expo-google-fonts/lobster';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.subtitle}>This is the home screen</Text>
            <Button title="Navigate" onPress={() => {
                navigation.navigate("Second")
            }}></Button>
        </View>
    );
}

function SecondScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.subtitle}>This is the second screen</Text>
        </View>
    );
}

export default function App(){
    const [] = useFonts({Lobster_400Regular,Lobster_700Bold});

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Second" component={SecondScreen}/>
            </Stack.Navigator> 
        </NavigationContainer>
    );
}

const styles=StyleSheet.create({
    container:{
        flex: 1,justifyContent: 'center',alignItems: 'center',
    },
    title:{
        fontFamily: 'Lobster_700Bold',fontSize: 20,
    },
    subtitle:{
        fontFamily: 'Lobster_400Regular',fontSize: 15,marginTop: 10,marginBottom: 10,
    },
});
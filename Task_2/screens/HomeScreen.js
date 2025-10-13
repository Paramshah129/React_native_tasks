import React,{useEffect,useState,useContext} from 'react';
import {View,Text,FlatList,Image,ActivityIndicator,TouchableOpacity,StyleSheet} from 'react-native';
import axios from 'axios';
import {FavoritesContext} from '../context/FavoritesContext';
import {Ionicons} from '@expo/vector-icons';

export default function HomeScreen() {
  const [events,setEvents] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

  const {addFavorite,removeFavorite,isFavorite} = useContext(FavoritesContext);

  useEffect(() => {
    const fetchEvents = async () => {
      try{
        const response=await axios.get(
          'https://68ce624a6dc3f350777ed8ae.mockapi.io/api/events'
        );
        setEvents(response.data);
      } 
      catch(err){
        setError('Failed to fetch events.Please try again.');
      } 
      finally{
        setLoading(false);
      }
    };
    fetchEvents();
  },[]);

  if (loading) {
    return(
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#39FF39" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  const toggleFavorite = (event) => {
    if (isFavorite(event.id)) removeFavorite(event.id);
    else addFavorite(event);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.details}>{item.date}</Text>
        <Text style={styles.details}>{item.location}</Text>
      </View>
      <TouchableOpacity onPress={() => toggleFavorite(item)} style={styles.heartButton}>
        <Ionicons
          name={isFavorite(item.id) ? 'heart' : 'heart-outline'}
          size={24}
          color="#39FF39"
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#000104',
  },
  center: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  errorText: {
    color: '#FF4C4C',
    fontSize:16,
  },
  card: {
    backgroundColor: 'rgba(11, 26, 11, 0.8)',
    borderRadius:10,
    borderWidth:1,
    borderColor: '#1C6E1C',
    marginVertical:8,
    overflow:'hidden',
    padding:10,
  },
  image: {
    width:'100%',
    height:180,
    borderRadius:10,
  },
  info: {
    marginTop:10,
  },
  title: {
    color:'#B0FFB0',
    fontSize:18,
    fontWeight:'bold',
  },
  details: {
    color: '#B0FFB0',
    fontSize:14,
  },
  heartButton: {
    position: 'absolute',
    top:10,
    right:10,
  },
});

import React,{useContext} from 'react';
import {View,Text,FlatList,Image,TouchableOpacity,StyleSheet} from 'react-native';
import {FavoritesContext} from '../context/FavoritesContext';
import {Ionicons} from '@expo/vector-icons';

export default function FavoritesScreen() {
  const {favorites,removeFavorite} = useContext(FavoritesContext);

  if (favorites.length===0) {
    return (
      <View style={styles.center}>
        <Text style={styles.emptyText}>No favorite events yet.</Text>
      </View>
    );
  }

  const renderItem=({item}) => (
    <View style={styles.card}>
      <Image source={{uri:item.image}} style={styles.image}/>
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.details}>{item.date}</Text>
        <Text style={styles.details}>{item.location}</Text>
      </View>
      <TouchableOpacity onPress={() => removeFavorite(item.id)} style={styles.heartButton}>
        <Ionicons name="heart" size={24} color="#39FF39"/>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{padding:10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor:'#000104', 
  },
  center: {
    backgroundColor:'#000104',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color:'#B0FFB0',
    fontSize:18, 
  },
  card: {
    backgroundColor: 'rgba(11, 26, 11, 0.8)',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1C6E1C',
    marginVertical: 8,
    overflow: 'hidden',
    padding: 10,
  },
  image: {
    width:'100%',
    height: 180,
    borderRadius: 10,
  },
  info: {
    marginTop:10,
  },
  title: {
    color:'#B0FFB0',
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    color:'#B0FFB0',
    fontSize: 14,
  },
  heartButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
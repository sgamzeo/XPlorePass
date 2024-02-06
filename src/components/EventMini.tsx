import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import EventDetails from '../screens/EventDetails';

const EventMini = () => {
  return (
    <TouchableOpacity>
       <View style={styles.card}>
      <Image
        source={{ uri: 'https://www.biletix.com/static/images/live/event/eventimages/0PP14_marylaneyeni.jpg' }}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.date}>01 Ocak 2024</Text>
        <Text style={styles.title}>Mary Jane @6:45 KK Ankara</Text>
        
        <Text style={styles.location}>Konum: İstanbul, Türkiye</Text>
      </View>
    </View>
    </TouchableOpacity>
   
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    
    marginBottom: 5,
    flex:1,
    marginHorizontal: 5,
    
    
    flexDirection: 'row'
  },
  image: {
    objectFit:'fill',
    borderRadius: 8,
    width: '40%',
    backgroundColor: 'black'
    
  },
  detailsContainer: {
    padding: 16,
    flex: 1
    
    
    
    
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    flex: 1
    
  },
  date: {
    fontSize: 10,
    
    marginBottom: 4,
    color: '#d55638'
  },
  location: {
    fontSize: 14,
    color: '#555',
  },
});

export default EventMini;

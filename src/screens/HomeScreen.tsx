import React from 'react';
import { View, FlatList, Text } from 'react-native';
import EventMini from '../components/EventMini';

const HomeScreen = () => {
  // Statik etkinlik verileri
  const eventList = Array.from({ length: 20 }, (_, index) => ({
    id: index.toString(),
    name: `Etkinlik ${index + 1}`,
    date: '01 Ocak 2024',
    location: 'İstanbul, Türkiye',
    imageURL: 'https://example.com/event-image.jpg',
  }));

  const renderEventItem = ({ item }) => (
    <EventMini
      key={item.id}
      name={item.name}
      date={item.date}
      location={item.location}
      imageURL={item.imageURL}
      onPressFollow={() => {
        // Takip etme işlemleri
      }}
    />
  );

  return (
    <View>
      <View style={{ padding: 10, backgroundColor: '#fff', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>XPlorePass</Text>
      </View>
      <FlatList
        data={eventList}
        keyExtractor={(item) => item.id}
        renderItem={renderEventItem}
      />

      <Text>HomeScreen</Text>
      <Text>logo</Text>
      <Text>search</Text>
      <Text>kategoriler</Text>
      <Text>konum basınca yakındaki etkinlikler çıkıyo</Text>
      <Text>kategoriler</Text>
      <Text> hesabım sekmesi</Text>
    </View>
  )
    
    
  
};

export default HomeScreen;

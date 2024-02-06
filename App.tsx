import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import EventDetails from './src/screens/EventDetails';
import ArtistScreen from './src/screens/ArtistScreen';
import VenueScreen from './src/screens/VenueScreen';
import EventMini from './src/components/EventMini';
import HomeScreen from './src/screens/HomeScreen';


const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  
});

export default App;

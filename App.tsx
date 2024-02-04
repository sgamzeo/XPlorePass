import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import EventDetails from './src/screens/EventDetails';


const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <EventDetails />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  
});

export default App;

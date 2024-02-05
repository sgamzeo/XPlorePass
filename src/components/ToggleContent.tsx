import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ToggleContent = ({ textInfo, title }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAbout = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleAbout}>
        <View style={styles.toggleWrapper}>
          <Text style={styles.toggleText}>
            {title}
          </Text>
          <Text style={styles.toggleAction}>
            {isOpen ? '-' : '+'}
          </Text>
        </View>
      </TouchableOpacity>

      {isOpen && (
        <View>
          <Text>
            {textInfo}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  toggleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  toggleText: {
    fontSize: 20,
  },
  toggleAction: {
    fontSize: 30,
    color: 'gray'
  },
});

export default ToggleContent;

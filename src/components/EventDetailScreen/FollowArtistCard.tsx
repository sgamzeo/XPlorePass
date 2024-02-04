// components/FollowArtistCard.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FollowArtistCard = ({ name, followerCount, onPressFollow }:any) => {
  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.followerCount}>{`${followerCount} Takipçi`}</Text>
        </View>

        <TouchableOpacity onPress={onPressFollow} style={styles.followButton}>
          <Text style={styles.followButtonText}>Takip Et</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#d55638',
   
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  followerCount: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  followButton: {
    backgroundColor: '#d55638',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  followButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FollowArtistCard;

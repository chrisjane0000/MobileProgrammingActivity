import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('C:/Users/hi/Desktop/MobileProgramming_Activity/assets/HerbalXchange.png')}
        style={styles.image}
      />
      <Text style={styles.text}>HerbalXchange</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Profile;

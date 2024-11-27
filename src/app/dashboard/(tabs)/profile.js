import { Entypo, FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
  
      <Image
        source={require('C:/Users/hi/Desktop/MobileProgramming_Activity/assets/HerbalXchange.png')}
        style={styles.profileImage}
      />
      
      
      <Text style={styles.username}>HerbalXchange</Text>

  
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit</Text>
      </TouchableOpacity>

      
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Ionicons name="person-sharp" size={24} color="green" />
          <Text style={styles.infoText}>HerbalXchange</Text>
        </View>
        <View style={styles.infoItem}>
          <MaterialCommunityIcons  name="cellphone-check" size={24} color="green" />
          <Text style={styles.infoText}>0936 393 2542</Text>
        </View>
        <View style={styles.infoItem}>
          <Entypo  name="location" size={24} color="green" />
          <Text style={styles.infoText}>CDOC, MIS. OR.</Text>
        </View>
      </View>

  
      <View style={styles.navButtons}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="cart-sharp" size={24} color="green" />
          <Text style={styles.navButtonText}>My Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome5  name='grin-stars' size={24} color="green" />
          <Text style={styles.navButtonText}>Rating</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <MaterialIcons name="chat" size={24} color="green" />
          <Text style={styles.navButtonText}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <FontAwesome name="handshake-o" size={24} color="green" />
          <Text style={styles.navButtonText}>Sell</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  editButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  infoContainer: {
    marginBottom: 20,
    alignItems: 'flex-start',
    width: '100%',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  navButton: {
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 20,
    width: '22%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
});

export default Profile;

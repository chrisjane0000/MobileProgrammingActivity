import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [username, setUsername] = useState('');
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const handleDarkModeToggle = () => setIsDarkMode((prev) => !prev);
  const handleNotificationsToggle = () => setIsNotificationsEnabled((prev) => !prev);

  return (
    <View style={[styles.container, isDarkMode && styles.darkMode]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>Settings</Text>

      <View style={styles.settingRow}>
        <Text style={[styles.settingLabel, isDarkMode && styles.darkText]}>Dark Mode</Text>
        <TouchableOpacity onPress={handleDarkModeToggle} style={styles.iconButton}>
          <MaterialCommunityIcons
            name={isDarkMode ? 'weather-night' : 'weather-sunny'}
            size={30}
            color={isDarkMode ? '#fff' : '#004225'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.settingRow}>
        <Text style={[styles.settingLabel, isDarkMode && styles.darkText]}>Username</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Enter new username"
          placeholderTextColor={isDarkMode ? '#aaa' : '#888'}
          style={[styles.input, isDarkMode && styles.darkInput]}
        />
      </View>

      <View style={styles.settingRow}>
        <Text style={[styles.settingLabel, isDarkMode && styles.darkText]}>Notifications</Text>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={handleNotificationsToggle}
          trackColor={{ true: '#004225', false: '#ccc' }}
          thumbColor={isNotificationsEnabled ? '#fff' : '#004225'}
        />
      </View>

      <TouchableOpacity 
        style={[styles.saveButton, isDarkMode && styles.darkSaveButton]} 
        onPress={() => alert('Settings saved!')}
      >
        <Text style={[styles.saveButtonText, isDarkMode && styles.darkText]}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  darkMode: {
    backgroundColor: '#333',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 30,
    textAlign: 'center',
    color: '#004225',
  },
  darkText: {
    color: '#fff',
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  settingLabel: {
    flex: 1,
    fontSize: 18,
    color: '#004225',
  },
  input: {
    flex: 2,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
  },
  darkInput: {
    backgroundColor: '#444',
    color: '#fff',
    borderColor: '#666',
  },
  saveButton: {
    backgroundColor: '#004225',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 30,
  },
  darkSaveButton: {
    backgroundColor: '#555',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  iconButton: {
    padding: 8,
  },
});

export default Settings;

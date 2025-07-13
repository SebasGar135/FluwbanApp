import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import MapView from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';


export default function MapScreen() {
  const [activeTab, setActiveTab] = useState('Mapa');
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapa</Text>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -0.220164,
            longitude: -78.512327,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        />

        <TextInput
          style={styles.searchBar}
          placeholder="¿A dónde vamos?"
          placeholderTextColor="#bdbdbd"
          value={search}
          onChangeText={setSearch}
        />

        <TouchableOpacity style={styles.circleButton}>
          <Ionicons name="bus" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  title: {
    color: '#E65100',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 6,
  },
  mapContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 0,
    marginBottom: 0,
  },
  map: {
    width: '92%',
    height: '85%',
    borderRadius: 18,
    marginTop: 10,
    alignSelf: 'center',
  },
  searchBar: {
    position: 'absolute',
    bottom: 140,
    left: '4%',
    width: '92%',
    backgroundColor: '#fff',
    borderRadius: 24,
    borderColor: '#E65100',
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontSize: 16,
    elevation: 4,
    borderWidth: 1,
    zIndex: 2,
  },
  circleButton: {
    position: 'absolute',
    bottom: 200,
    left: '50%',
    marginLeft: -27,
    backgroundColor: '#E65100',
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3,
    elevation: 6,
  },
});
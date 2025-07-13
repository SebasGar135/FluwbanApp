import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function RouteSetupScreen({ setRouteConfigured }) {
  const [routeName, setRouteName] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [marker, setMarker] = useState({
    latitude: 4.710989,
    longitude: -74.072090,
  });

  const handleMapPress = (e) => {
    setMarker(e.nativeEvent.coordinate);
  };

  const handleSubmit = () => {
    setRouteConfigured(true);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Text style={styles.title}>Configura tu primera ruta</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Nombre de la Ruta</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa el nombre de la ruta"
          value={routeName}
          onChangeText={setRouteName}
        />
        <Text style={styles.label}>Lugar de Salida</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu dirección"
          value={origin}
          onChangeText={setOrigin}
        />
        <Text style={styles.label}>Destino</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa la dirección del destino"
          value={destination}
          onChangeText={setDestination}
        />
        <Text style={styles.label}>Hora de salida</Text>
        <TextInput
          style={styles.input}
          placeholder="00:00"
          value={departureTime}
          onChangeText={setDepartureTime}
        />
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: marker.latitude,
            longitude: marker.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          onPress={handleMapPress}
        >
          <Marker coordinate={marker} />
        </MapView>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Establecer Ruta</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00665A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginTop: 32,
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    width: '90%',
    alignItems: 'center',
    elevation: 4,
    marginBottom: 30,
  },
  label: {
    alignSelf: 'flex-start',
    color: '#E65100',
    fontSize: 15,
    marginTop: 12,
    marginBottom: 4,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E65100',
    borderRadius: 24,
    padding: 10,
    marginBottom: 8,
    fontSize: 15,
    backgroundColor: '#fff',
  },
  map: {
    width: '100%',
    height: 140,
    borderRadius: 12,
    marginVertical: 12,
  },
  button: {
    backgroundColor: '#E65100',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
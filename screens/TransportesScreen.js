import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const transportes = [
  {
    id: '1',
    nombre: 'Trole',
    imagen: require('../assets/trole.jpg'),
    screen: 'TroleScreen',
  },
  {
    id: '2',
    nombre: 'Autobús',
    imagen: require('../assets/autobus.jpg'),
    screen: 'AutobusScreen',
  },
  {
    id: '3',
    nombre: 'Metro',
    imagen: require('../assets/metro.jpg'),
    screen: 'MetroScreen',
  },
  {
    id: '4',
    nombre: 'Metrobús',
    imagen: require('../assets/metrobus.jpg'),
    screen: 'MetrobusScreen',
  },
  {
    id: '5',
    nombre: 'Ecovía',
    imagen: require('../assets/ecovia.jpg'),
    screen: 'EcoviaScreen',
  },
];

export default function TransportesScreen() {
  const navigation = useNavigation(); // <-- Esto te faltaba

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transportes</Text>
      <FlatList
        data={transportes}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate(item.screen)}
            activeOpacity={0.8}
          >
            <Image source={item.imagen} style={styles.image} />
            <Text style={styles.label}>{item.nombre}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00665A',
    paddingTop: 24,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: 150,
    height: 130,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 85,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  label: {
    color: '#E65100',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    paddingVertical: 14,
  },
});
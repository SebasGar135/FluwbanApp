import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const recentStops = [
  {
    id: '1',
    name: 'El Ejido',
    type: 'Ecovía',
    distance: 'Aprox. 200mts.',
    image: require('../assets/ejido.jpg'),
  },
  {
    id: '2',
    name: 'Colón',
    type: 'Trole',
    distance: 'Aprox. 500mts.',
    image: require('../assets/colon.jpg'),
  },
  {
    id: '3',
    name: 'Ajaví',
    type: 'Metro',
    distance: 'Aprox. 1Km.',
    image: require('../assets/ajavi.jpg'),
  },
];

const transportTypes = [
  { id: '1', name: 'Autobús', icon: <Ionicons name="bus" size={36} color="#fff" />, color: '#E65100' },
  { id: '2', name: 'Metro', icon: <MaterialCommunityIcons name="subway" size={36} color="#fff" />, color: '#E65100' },
  { id: '3', name: 'Trole', icon: <MaterialCommunityIcons name="train" size={36} color="#fff" />, color: '#E65100' },
  { id: '4', name: 'Tranvía', icon: <MaterialCommunityIcons name="tram" size={36} color="#fff" />, color: '#E65100' },
  { id: '5', name: 'Bici', icon: <FontAwesome5 name="bicycle" size={36} color="#fff" />, color: '#E65100' },
];

const news = [
  {
    id: '1',
    title: 'Nuevas vías cerradas',
    description: 'Nuevas vías cerradas por reconstrucción en el centro de la ciudad.',
    image: require('../assets/news1.jpg'),
  },
  {
    id: '2',
    title: 'Descuentos en transporte',
    description: 'Descuentos especiales para estudiantes en el mes de julio.',
    image: require('../assets/news2.jpg'),
  },
  {
    id: '3',
    title: 'Ampliación de rutas',
    description: 'Se amplían rutas de autobús hacia el norte de la ciudad.',
    image: require('../assets/news3.jpg'),
  },
];

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('Inicio');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
      </View>

<ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.routeCard}>
    <Text style={styles.routeTitle}>Mis rutas</Text>
    <View style={styles.routeRow}>
    <View style={styles.routeName}>
      <Text style={styles.routeNameText}>Casa/universidad</Text>
    </View>
    <TouchableOpacity style={styles.createRouteButton}>
      <Text style={styles.createRouteButtonText}>Crear ruta</Text>
    </TouchableOpacity>
  </View>
</View>

<Text style={styles.sectionTitle}>Paradas recientes</Text>
    <FlatList
          data={recentStops}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 10 }}
          renderItem={({ item }) => (
            <View style={styles.stopCard}>
              <Image source={item.image} style={styles.stopImage} />
              <View style={{ padding: 8 }}>
                <Text style={styles.stopName}>{item.name}</Text>
                <Text style={styles.stopInfo}>Tipo: {item.type}</Text>
                <Text style={styles.stopInfo}>Distancia: {item.distance}</Text>
              </View>
            </View>
          )}
    />

<Text style={styles.sectionTitle}>Tipos de transporte</Text>
    <FlatList
          data={transportTypes}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={[styles.transportIcon, { backgroundColor: item.color }]}>
              {item.icon}
              <Text style={styles.transportText}>{item.name}</Text>
            </View>
          )}
    />

<Text style={styles.sectionTitle}>Últimas noticias</Text>
  <FlatList
    data={news}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    scrollEnabled={false}
    renderItem={({ item }) => (
  <View style={styles.newsCard}>
    <Image source={item.image} style={styles.newsImage} />
    <View style={styles.newsTextContainer}>
      <Text style={styles.newsTitle}>{item.title}</Text>
      <Text style={styles.newsDesc}>{item.description}</Text>
    </View>
  </View>
)}
        />
        <View style={{ height: 80 }} />
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
    backgroundColor: '#00665A'
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  logo: {
    width: 135, 
    height: 45,
  },
  routeCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    width: '95%',
    alignSelf: 'center',
    marginBottom: 16,
    marginTop: 8,
    elevation: 4,
  },
  routeTitle: {
    color: '#E65100',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
  },
  routeRow: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  routeName: {
    backgroundColor: '#757575',
    borderRadius: 32,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginBottom: 18,
    width: '90%',
    alignItems: 'center',
  },
  routeNameText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  createRouteButton: {
    backgroundColor: '#E65100',
    borderRadius: 32,
    paddingVertical: 14,
    paddingHorizontal: 32,
    width: '70%',
    alignItems: 'center',
  },
   createRouteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 8,
    marginTop: 12
  },
  stopCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: 160,
    marginHorizontal: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  stopImage: { width: '100%', height: 80 },
  stopName: { color: '#E65100', fontWeight: 'bold', fontSize: 15 },
  stopInfo: { color: '#757575', fontSize: 13 },
  transportIcon: {
    backgroundColor: '#E65100',
    borderRadius: 40,
    width: 80,
    height: 80,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  transportText: { color: '#fff', fontSize: 13, marginTop: 4 },
  newsCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: "95%",
    alignSelf: 'center',
    elevation: 4,
    marginBottom: 16,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  newsImage: {
   width: 130,
  height: 130,
  borderRadius: 8,
  marginRight: 12,
  },
  newsTextContainer: {
  flex: 1,
  justifyContent: 'center',
  minWidth: 0,
  paddingRight: 110,
},
newsTitle: {
  color: '#E65100',
  fontWeight: 'bold',
  fontSize: 15,
  marginBottom: 4,
},
newsDesc: {
  color: '#757575',
  fontSize: 13,
},
});
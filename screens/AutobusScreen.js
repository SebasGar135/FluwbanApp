import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AutobusScreen() {
  const navigation = useNavigation();
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://mock.apidog.com/m2/988210-973885-default/18778290')
      .then(res => res.json())
      .then(data => {
        setBuses(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Transportes</Text>
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/autobus.jpg')} style={styles.image} />
        <Text style={styles.transportName}>Autobuses</Text>
        <Text style={styles.transportDesc}>La Ecovía conecta el sur y norte de la ciudad de Quito de manera rápida y eficiente.</Text>
        <View style={styles.divider} />
        <View style={styles.tarifasRow}>
          <Text style={styles.tarifasTitle}>General</Text>
          <Text style={styles.tarifasTitle}>Estudiantes</Text>
          <Text style={styles.tarifasTitle}>3ra edad</Text>
          <Text style={styles.tarifasTitle}>Discapacidad</Text>
        </View>
        <View style={styles.tarifasRow}>
          <Text style={styles.tarifasValue}>$0,35</Text>
          <Text style={styles.tarifasValue}>$0,12</Text>
          <Text style={styles.tarifasValue}>$0,12</Text>
          <Text style={styles.tarifasValue}>$0,10</Text>
        </View>
      </View>

      <View style={styles.listSection}>
        <Text style={styles.listTitle}>{buses.length} tipos</Text>
        {loading ? (
          <ActivityIndicator color="#E65100" />
        ) : (
          <FlatList
            data={buses}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.tipoRow}>
                <Image source={{ uri: item.imagen }} style={styles.tipoImage} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={styles.tipoName}>{item.nombre}</Text>
                  <Text style={styles.tipoDesc}>{item.parada}</Text>
                </View>
                <TouchableOpacity style={styles.rutasButton}>
                  <Text style={styles.rutasButtonText}>Rutas</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#00665A' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  backButton: {
    marginRight: 10,
    padding: 4,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    marginRight: 38,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    marginHorizontal: 10,
    alignItems: 'center',
    marginBottom: 18,
    width: '95%',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 170,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    marginBottom: 12,
    marginTop: 0,
  },
  transportName: {
    color: '#E65100',
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 2,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  transportDesc: {
    color: '#757575',
    fontSize: 14,
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginRight: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    width: '75%',
    marginVertical: 10,
  },
  tarifasRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  tarifasTitle: {
    color: '#E65100',
    fontWeight: 'bold',
    fontSize: 12,
    flex: 1,
    textAlign: 'center',
    marginBottom: 7,
    marginRight: 11,
  },
  tarifasValue: {
    color: '#757575',
    fontSize: 13,
    flex: 1,
    textAlign: 'center',
    marginBottom: 15,
    marginRight: 14,
  },
  listSection: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 18,
    marginTop: 0,
  },
  listTitle: {
    color: '#E65100',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 12,
  },
  tipoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 4,
    elevation: 1,
  },
  tipoImage: {
    width: 48,
    height: 48,
    borderRadius: 10,
  },
  tipoName: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 15,
  },
  tipoDesc: {
    color: '#757575',
    fontSize: 13,
  },
  rutasButton: {
    backgroundColor: '#E65100',
    borderRadius: 18,
    paddingVertical: 7,
    paddingHorizontal: 18,
    marginLeft: 10,
  },
  rutasButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
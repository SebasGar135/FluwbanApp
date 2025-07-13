import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default function AjustesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.title}>Ajustes</Text>

      <View style={styles.section}>
        <SettingsItem icon={<Ionicons name="person-circle" size={26} color="#bdbdbd" />} text="Datos Personales" />
        <SettingsItem icon={<Feather name="smartphone" size={24} color="#bdbdbd" />} text="Número celular" />
        <SettingsItem icon={<MaterialCommunityIcons name="email-outline" size={24} color="#bdbdbd" />} text="E-mail" />
      </View>

      <View style={styles.section}>
        <SettingsItem icon={<Ionicons name="location-outline" size={24} color="#bdbdbd" />} text="Direcciones" />
        <SettingsItem icon={<Ionicons name="notifications-outline" size={24} color="#bdbdbd" />} text="Notificaciones" />
      </View>

      <View style={styles.section}>
        <SettingsItem icon={<Ionicons name="exit-outline" size={24} color="#bdbdbd" />} text="Cerrar sesión" />
        <SettingsItem icon={<Ionicons name="alert-circle-outline" size={24} color="#bdbdbd" />} text="Informar un problema" />
      </View>

      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Eliminar cuenta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function SettingsItem({ icon, text }) {
  return (
    <TouchableOpacity style={styles.itemButton} activeOpacity={0.7}>
      <View style={styles.itemLeft}>
        {icon}
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <Ionicons name="chevron-forward" size={22} color="#bdbdbd" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 0,
  },
  title: {
    color: '#00665A',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 24,
  },
  section: {
    marginBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingHorizontal: 20,
    paddingTop: 0,
    paddingBottom: 6,
  },
  itemButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    color: '#444',
    fontSize: 16,
    marginLeft: 14,
  },
  deleteButton: {
    marginTop: 130,
    alignSelf: 'center',
  },
  deleteButtonText: {
    color: '#00665A',
    fontSize: 15,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});
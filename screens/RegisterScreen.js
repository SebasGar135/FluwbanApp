import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu usuario"
          placeholderTextColor="#bdbdbd"
        />
        <Text style={styles.label}>Correo</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu correo"
          placeholderTextColor="#bdbdbd"
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Crea una contraseña"
          placeholderTextColor="#bdbdbd"
          secureTextEntry
        />
        <Text style={styles.label}>Confirmar contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Repite tu contraseña"
          placeholderTextColor="#bdbdbd"
          secureTextEntry
        />
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Registrarse</Text>
        </TouchableOpacity>
        <View style={styles.dividerRow}>
          <View style={styles.divider} />
          <Text style={styles.dividerCircle}>o</Text>
          <View style={styles.divider} />
        </View>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Continuar con Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Continuar con Facebook</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.version}>Versión 1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00665A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    width: '90%',
    alignItems: 'center',
    elevation: 4,
  },
  label: {
    alignSelf: 'flex-start',
    color: '#E65100',
    fontSize: 16,
    marginTop: 12,
    marginBottom: 4,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E65100',
    borderRadius: 24,
    padding: 12,
    marginBottom: 8,
    fontSize: 15,
    backgroundColor: '#fff',
  },
  registerButton: {
    backgroundColor: '#E65100',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    width: '100%',
    justifyContent: 'center',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#bdbdbd',
  },
  dividerCircle: {
    marginHorizontal: 8,
    color: '#bdbdbd',
    fontSize: 16,
  },
  socialButton: {
    backgroundColor: '#757575',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 12,
    width: '100%',
    alignItems: 'center',
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 15,
  },
  version: {
    color: '#fff',
    fontSize: 12,
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
  },
});

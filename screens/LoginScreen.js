import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu correo o usuario"
          placeholderTextColor="#bdbdbd"
        />
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu contraseña"
          placeholderTextColor="#bdbdbd"
          secureTextEntry
        />
        <TouchableOpacity>
          <Text style={styles.forgot}>Olvidé mi contraseña</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Iniciar sesión</Text>
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
  forgot: {
    color: '#404040',
    alignSelf: 'flex-end',
    marginBottom: 16,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#E65100',
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
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

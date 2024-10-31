import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EstilosDiferentesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla con Estilos Diferentes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50', // Cambiamos el color de fondo
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF', // Cambiamos el color del texto
  },
});

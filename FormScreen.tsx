import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FormScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <Text style={styles.subtitle}>Please Modify the values</Text>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Weight (kg)</Text>
        <Text style={styles.value}>65</Text>
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Age</Text>
        <Text style={styles.value}>26</Text>
      </View>

      <Image source={require('../imagens/scale.png')} style={styles.scaleImage} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Resultado')}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#4caf50' },
  subtitle: { fontSize: 16, marginVertical: 10 },
  inputBox: { backgroundColor: '#f2f2f2', padding: 20, borderRadius: 10, width: '100%', marginBottom: 15 },
  label: { fontSize: 14, color: '#555' },
  value: { fontSize: 18, fontWeight: 'bold' },
  scaleImage: { width: 300, height: 60, resizeMode: 'contain', marginVertical: 20 },
  button: { backgroundColor: '#4caf50', paddingVertical: 15, paddingHorizontal: 50, borderRadius: 10 },
  buttonText: { color: 'white', fontSize: 16 },
});

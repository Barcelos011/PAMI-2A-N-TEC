import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GenderScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>
      <Text style={styles.subtitle}>Please choose your gender</Text>

      <View style={styles.genderBox}>
        <TouchableOpacity style={styles.genderCard}>
          <Image source={require('../imagens/male.png')} style={styles.genderIcon} />
          <Text style={styles.genderText}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.genderCard}>
          <Image source={require('../imagens/female.png')} style={styles.genderIcon} />
          <Text style={styles.genderText}>Female</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Formulario')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#4caf50' },
  subtitle: { fontSize: 16, marginVertical: 10 },
  genderBox: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginVertical: 20 },
  genderCard: { alignItems: 'center', backgroundColor: '#eee', padding: 20, borderRadius: 10, width: 130 },
  genderIcon: { width: 60, height: 60, marginBottom: 10 },
  genderText: { fontSize: 16, fontWeight: 'bold' },
  button: { backgroundColor: '#4caf50', paddingVertical: 15, paddingHorizontal: 50, borderRadius: 10 },
  buttonText: { color: 'white', fontSize: 16 },
});

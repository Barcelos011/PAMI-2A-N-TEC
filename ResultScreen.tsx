import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ResultScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your BMI:</Text>
      <Text style={styles.bmiValue}>22.5</Text>

      <View style={styles.resultBox}>
        <Text style={styles.resultText}>65 kg   |   170 cm   |   26 yrs   |   Male</Text>
        <Text style={styles.healthyText}>Healthy weight for the height: 53.5 kg - 72.3 kg</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  bmiValue: { fontSize: 48, fontWeight: 'bold', color: '#4caf50', marginBottom: 20 },
  resultBox: { alignItems: 'center', marginBottom: 20 },
  resultText: { fontSize: 16, marginBottom: 5 },
  healthyText: { fontSize: 14, color: '#888' },
  button: { backgroundColor: '#4caf50', paddingVertical: 15, paddingHorizontal: 50, borderRadius: 10 },
  buttonText: { color: 'white', fontSize: 16 },
});

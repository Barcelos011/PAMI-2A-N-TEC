import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GenderScreen from '../../screens/GenderScreen';
import FormScreen from '../../screens/FormScreen';
import ResultScreen from '../../screens/ResultScreen';
import { RootStackParamList } from '../../types';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={GenderScreen} />
      <Stack.Screen name="Formulario" component={FormScreen} />
      <Stack.Screen name="Resultado" component={ResultScreen} />
    </Stack.Navigator>
  );
}


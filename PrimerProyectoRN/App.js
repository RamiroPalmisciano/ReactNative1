import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HolaMundoScreen from './screens/HolaMundoScreen';
import EstilosDiferentesScreen from './screens/EstilosDiferentesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Hola Mundo" component={HolaMundoScreen} />
        <Tab.Screen name="Estilo Diferente" component={EstilosDiferentesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

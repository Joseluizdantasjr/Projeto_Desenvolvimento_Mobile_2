import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import CardFilme from './src/components/CardFilme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesPage from './src/pages/MoviesPage';
import MovieDetailsPage from './src/pages/MovieDetailsPage';

const Stack = createNativeStackNavigator();

export default function App() {
  
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'MoviesPage' component={MoviesPage} options={{headerShown: false}}/>
        <Stack.Screen name= 'MovieDetailsPage' component={MovieDetailsPage} />

      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}


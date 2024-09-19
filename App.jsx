import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Products from './src/pages/Products';
import Detail from './src/pages/Detail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            title: 'Mağaza',
            headerStyle: {backgroundColor: '#64b5f6'},
            headerTitleStyle: {color: 'white'},
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: 'Detay',
            headerStyle: {backgroundColor: '#64b5f6'},
            headerTitleStyle: {color: 'white'},
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;

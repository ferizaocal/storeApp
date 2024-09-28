import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import Products from './src/pages/Products';
import Detail from './src/pages/Detail';
import Login from './src/pages/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {AuthActions} from './src/store/features/authReducers';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';

const Stack = createStackNavigator();

function App() {
  const {token} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    checkAuth();
  }, []);
  const checkAuth = () => {
    AsyncStorage.getItem('TOKEN').then(res => {
      const parseToken = JSON.parse(res);
      dispatch(AuthActions.setToken(parseToken));
    });
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token == null ? (
          <Stack.Screen
            name="LoginPage"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <>
            <Stack.Screen
              name="ProductsPage"
              component={Products}
              options={{
                title: 'Mağaza',
                headerStyle: {backgroundColor: '#64b5f6'},
                headerTitleStyle: {color: 'white'},
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => dispatch(AuthActions.setLogout())}
                    style={{marginRight: 10}}>
                    <FontAwesomeIcon
                      icon={faArrowRightFromBracket}
                      color="white"
                      size={20}
                    />
                  </TouchableOpacity>
                ),
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;

import React, {useEffect} from 'react';
import {Alert, Image, SafeAreaView, StyleSheet, View} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import {Formik} from 'formik';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import usePost from '../hooks/usePost';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {AuthActions} from '../store/features/authReducers';

export default function Login({navigation}) {
  const {data, loading, error, post} = usePost();
  const dispatch = useDispatch();

  function handleLogin(values) {
    post(Config.API_AUTH_URL + '/login', values);
  }

  useEffect(() => {
    if (data) {
      if (data.status == 'Error') {
        Alert.alert('Hata', 'Kullanıcı Bulunamadı!');
      } else {
        const token = data.token;

        AsyncStorage.setItem('TOKEN', JSON.stringify(token))
          .then(() => {
            dispatch(AuthActions.setToken(token));
          })
          .catch(e => {
            console.log('kaydedilemedi' + e);
          });
      }
    }
  }, [data, navigation, dispatch]);

  useEffect(() => {
    if (error) {
      Alert.alert('Hata', 'Kullanıcı Bulunamadı!');
    }
  }, [error]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../assets/login-logo.jpeg')}
        />
      </View>
      <Formik
        initialValues={{username: 'johnd', password: 'm38rmF$'}}
        onSubmit={handleLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanıcı adını giriniz"
              value={values.username}
              onType={handleChange('username')}
              iconName={faUser}
            />
            <Input
              placeholder="Şifrenizi giriniz"
              value={values.password}
              onType={handleChange('password')}
              iconName={faLock}
              isSecure
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  logo_container: {
    alignItems: 'center',
  },
  logo: {},
  body_container: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
  },
});

const user = {
  address: {
    geolocation: {lat: '-37.3159', long: '81.1496'},
    city: 'kilcoole',
    street: 'new road',
    number: 7682,
    zipcode: '12926-3874',
  },
  id: 1,
  email: 'john@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {firstname: 'john', lastname: 'doe'},
  phone: '1-570-236-7033',
  __v: 0,
};

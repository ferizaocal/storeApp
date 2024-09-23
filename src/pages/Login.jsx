import React from 'react';
import {Alert, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import {Formik} from 'formik';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import usePost from '../hooks/usePost';
import Config from 'react-native-config';

export default function Login() {
  const {data, loading, error, post} = usePost();

  function handleLogin(values) {
    post(Config.API_AUTH_URL + '/Login', values);
  }
  if (error) {
    Alert.alert('Hata', 'Kullanıcı Bulanamadı!');
  }
  console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../assets/login-logo.jpeg')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
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

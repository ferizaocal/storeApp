import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import useFetch from '../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../components/Loading';
import Error from '../components/Error';

const deviceSize = Dimensions.get('window');

export default function Detail({route}) {
  const {id} = route.params;
  const {loading, error, data} = useFetch(`${Config.API_URL}/${id}`);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: data.image}} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price} TL</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
  },
  body_container: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#333',
    marginBottom: 10,
  },
  desc: {
    fontStyle: 'italic',
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#4CAF50',
    textAlign: 'right',
  },
});

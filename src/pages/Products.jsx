import React, {useEffect, useState} from 'react';
import Config from 'react-native-config';
import ProductCard from '../components/ProductCard';
import useFetch from '../hooks/useFetch';
import Loading from '../components/Loading';
import Error from '../components/Error';
import {Button, FlatList, SafeAreaView, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {AuthActions} from '../store/features/authReducers';

export default function Products({navigation}) {
  const {loading, data, error} = useFetch(Config.API_PRODUCT_URL);
  const dispatch = useDispatch();
  const token = data.token;
  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View>
      <FlatList data={data} renderItem={renderProduct} />
    </View>
  );
}

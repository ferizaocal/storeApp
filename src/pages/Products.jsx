import React, {useEffect, useState} from 'react';
import Config from 'react-native-config';
import ProductCard from '../components/ProductCard';
import useFetch from '../hooks/useFetch';
import Loading from '../components/Loading';
import Error from '../components/Error';
import {FlatList, SafeAreaView} from 'react-native';

export default function Products() {
  const {loading, data, error} = useFetch(Config.API_URL);

  const renderProduct = ({item}) => <ProductCard product={item} />;

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );
}

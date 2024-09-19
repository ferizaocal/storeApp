import axios from 'axios';
import React, {useEffect, useState} from 'react';

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      //data'yı productData adıyla parçalara ayırdık.
      const {data: responseData} = await axios.get(url);
      setData(responseData);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return {error, loading, data};
}

import axios, {AxiosError} from 'axios';
import {useEffect, useState} from 'react';

export default function usePost() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = async (url, apiData) => {
    try {
      setLoading(true);
      const response = await axios.post(url, apiData);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {error, loading, data, post};
}

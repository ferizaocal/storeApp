import axios from 'axios';
import {useState} from 'react';

export default function usePost() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const post = async (url, apiData) => {
    try {
      setLoading(true);
      const {data: responseData} = await axios.post(url, apiData);
      setData(responseData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {error, loading, data, post};
}

import { useState, useCallback } from "react";
import axios from "axios";

const useApi = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const baseUrl = process.env.REACT_APP_API_URL;
  const url = `${baseUrl}${endpoint}`;

  const fetchData = async (method, body = null) => {
    setLoading(true);
    try {
      const options = {
        method,
        url,
        data: body,
      };
      const response = await axios(options);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data : err.message);
    }
    setLoading(false);
  };

  const get = useCallback(() => fetchData('GET'), [url]);
  const post = useCallback((body) => fetchData('POST', body), [url]);
  const put = useCallback((body) => fetchData('PUT', body), [url]);
  const del = useCallback(() => fetchData('DELETE'), [url]);

  const cloudinaryFetch = async (url, method, data) => {
    const token = axios.defaults.headers.common['Authorization'];
    delete axios.defaults.headers.common['Authorization'];

    try {
      const response = await axios({ url, method, data });
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      axios.defaults.headers.common['Authorization'] = token;
    }
  };

  return { data, loading, error, get, post, put, del, cloudinaryFetch };
};

export default useApi;

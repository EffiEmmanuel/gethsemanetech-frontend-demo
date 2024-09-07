// useFetch.js
import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Cancel token to cancel the request if the component is unmounted
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios({
          url,
          cancelToken: source.token,
          ...options,
        });
        setData(response.data);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request canceled:", err.message);
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function to cancel the request if the component unmounts
    return () => {
      source.cancel("Request canceled due to component unmounting.");
    };
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch;

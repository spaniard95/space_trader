import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [error , setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    try{
      const response = await fetch(url, options);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch(error) {
      setError(error);
    }
  }, []);
  return { data, loading, error };
};

export default useFetch;
import { useEffect } from 'react';
import { useState } from 'react'

const useGet = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (err) {
      setError(`Erro no GET: ${err.message}`);
    } finally {
      setLoading(false)
    }
  }

  return ({data, loading, error, fetchData});
}

export default useGet

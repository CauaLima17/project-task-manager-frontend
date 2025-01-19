import { useState, useCallback } from 'react'

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async ({ url, method = 'GET', body = null, headers = {} }) => {
    setLoading(true);
    setError(null);

    const fetchOptions = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      body: body ? JSON.stringify(body) : null
    }

    try {
      const response = await fetch(url, fetchOptions);
      const data = await response.json();
      setData(data);
    } catch (err) {
      setError(`Erro no GET: ${err.message}`);
    } finally {
      setLoading(false)
    }
  }, [])

  return ({data, loading, error, fetchData});
}

export default useFetch

import { useState, useEffect } from 'react';

export function useFetch(fetchFn, initialValue) {
  const [fetchedData, setFetchedData] = useState(initialValue);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);

      try {
        const data = await fetchFn();

        setFetchedData(data);
      } catch (error) {
        setError({
          message: error.message || 'Field to fetch data.',
        });
      } finally {
        setIsFetching(false);
      }
    }

    fetchData();
  }, [fetchFn]);

  return {
    fetchedData,
    isFetching,
    setFetchedData,
    error,
  };
}

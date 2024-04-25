import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Fetching data from API
  useEffect(() => {
    // using mount to prevent memory leaks/hydration errors
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
        );

        if (isMounted) {
          setData(res.data);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(true);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, loading, error };
};

export default useFetch;

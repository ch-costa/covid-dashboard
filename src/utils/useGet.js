import { useEffect, useState } from "react";
import api from "../services/api";

function useGet(resource) {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    console.log("resource ", resource);
    async function fetchData() {
      setLoading(true);
      setError();
      const data = await api
        .get(resource)
        .then((res) => res)
        .catch((err) => {
          setError(err);
        });
      setStats(data);
      setLoading(false);
    }
    fetchData();
  }, [resource]);
  return {
    stats,
    loading,
    error,
  };
}
export default useGet;

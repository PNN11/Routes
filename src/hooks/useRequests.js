import { useState, useEffect } from "react";

const useRequests = (asyncRequestFunctions) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    Promise.all(asyncRequestFunctions.map((func) => func()))
      .then((data) => setData(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [asyncRequestFunctions]);
  return { data, loading, error };
};

export default useRequests;

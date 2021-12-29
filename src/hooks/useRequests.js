import { useState, useEffect, useMemo } from "react";

const useRequests = (asyncRequestFunctions) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const functions = useMemo(
    () => asyncRequestFunctions.map((func) => func()),
    [asyncRequestFunctions]
  );

  useEffect(() => {
    setLoading(true);

    Promise.all(functions)
      .then((data) => setData(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [functions]);
  return { data, loading, error };
};

export default useRequests;

import { useState } from "react";
import { fetchCandidate } from "../api/jobs";

export function useCandidate() {
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const lookup = async (email) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCandidate(email);
      setCandidate(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { candidate, loading, error, lookup };
}
import { useState, useEffect } from "react";
import { FlightOffersType } from "../constant/fightType";

const baseUrl = "http://localhost:8000/data";

export const useFlightOffers = () => {
  const [data, setData] = useState<FlightOffersType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  const [shouldFetch, setShouldFetch] = useState(false); // Flag for controlled fetching

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.status}`);
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    // Fetch data only if shouldFetch flag is true
    if (shouldFetch) {
      fetchData();
      setShouldFetch(false); // Reset flag after fetching
    }
  }, [shouldFetch]); // Dependency on shouldFetch flag

  return { data, isLoading, error, fetchFlights: () => setShouldFetch(true) };
};

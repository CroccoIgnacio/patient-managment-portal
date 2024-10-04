import { useEffect, useState } from 'react';

import { Patient } from '../types/index';
import { fetchPatients } from '../utils/api';

const usePatients = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPatients = async () => {
      try {
        const data = await fetchPatients();
        setPatients(data);
      } catch (err) {
        setError('Failed to fetch patients');
      } finally {
        setLoading(false);
      }
    };

    getPatients();
  }, []);

  return { patients, loading, error };
};

export default usePatients;

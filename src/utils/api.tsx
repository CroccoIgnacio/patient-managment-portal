import axios from 'axios';
import { Patient } from '../types/index';

const API_BASE_URL = 'https://63bedcf7f5cfc0949b634fc8.mockapi.io';

export const fetchPatients = async (): Promise<Patient[]> => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

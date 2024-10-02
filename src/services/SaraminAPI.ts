import axios from 'axios';
import type { Saramin } from '@/types/saramin.ts';

class SaraminAPI {
  private static baseURL = `${import.meta.env.VITE_SERVER_URL}/saramin`;
  static async getJobSearch<T = { job: Saramin[] }>(): Promise<T> {
    const response = await axios.get<T>(this.baseURL);
    return response.data;
  }
}

export default SaraminAPI;

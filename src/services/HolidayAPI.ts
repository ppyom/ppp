import axios from 'axios';
import type { HolidayResponse } from '@/types/holiday.ts';

class HolidayAPI {
  private static baseURL = `${import.meta.env.VITE_SERVER_URL}/holiday`;
  static async getHolidays<T = HolidayResponse>(year: string): Promise<T> {
    const response = await axios.get<T>(`${this.baseURL}/holiday?year=${year}`);
    return response.data;
  }
}

export default HolidayAPI;

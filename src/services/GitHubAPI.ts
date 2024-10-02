import moment from 'moment';
import axios from 'axios';
import type { GitHub } from '@/types/github.ts';

class GitHubAPI {
  private static baseURL = `${import.meta.env.VITE_SERVER_URL}/github`;
  static async getRepositories<T = { data: GitHub[] }>(): Promise<T> {
    const response = await axios.get<T>(
      `${this.baseURL}/repositories?date=${moment().subtract(2, 'month').format('YYYY-MM-DD')}`,
    );
    return response.data;
  }
}

export default GitHubAPI;

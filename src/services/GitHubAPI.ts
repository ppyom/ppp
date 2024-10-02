import axios from 'axios';
import { GitHub } from '@/types/github.ts';
import moment from 'moment';

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

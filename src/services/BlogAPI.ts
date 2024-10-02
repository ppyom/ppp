import axios from 'axios';
import { Blog } from '@/types/blog.ts';

class BlogAPI {
  private static baseURL = `${import.meta.env.VITE_SERVER_URL}/blog`;
  static async getArticles<T = { data: Blog[] }>(): Promise<T> {
    const response = await axios.get<T>(`${this.baseURL}/articles`);
    return response.data;
  }
}

export default BlogAPI;

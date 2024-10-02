import { useQuery } from '@tanstack/react-query';
import SaraminAPI from '@/services/SaraminAPI.ts';
import BlogAPI from '@/services/BlogAPI.ts';
import GitHubAPI from '@/services/GitHubAPI.ts';
import type { Saramin } from '@/types/saramin.ts';
import type { Blog } from '@/types/blog.ts';
import type { GitHub } from '@/types/github.ts';

type FetchResult = [{ job: Saramin[] }, { data: Blog[] }, { data: GitHub[] }];

const fetchNewsData = (): Promise<FetchResult> => {
  return Promise.all<
    Awaited<{ job: Saramin[] } | { data: Blog[] } | { data: GitHub[] }>
  >([
    SaraminAPI.getJobSearch(),
    BlogAPI.getArticles(),
    GitHubAPI.getRepositories(),
  ]);
};

const useNewsData = () => {
  const { data } = useQuery<FetchResult, undefined, FetchResult>({
    queryKey: ['newsData'],
    queryFn: fetchNewsData,
    staleTime: 60 * 60 * 24 * 1000,
    gcTime: Infinity,
  });
  return {
    data: {
      saramin: data ? data[0].job : [],
      blog: data ? data[1].data : [],
      github: data ? data[2].data : [],
    },
  };
};

export default useNewsData;

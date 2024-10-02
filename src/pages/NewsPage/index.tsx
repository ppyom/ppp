import { useEffect, useState } from 'react';
import SaraminAPI from '@/services/SaraminAPI.ts';
import PageLayout from '@/components/layout/PageLayout';
import NewsSection from '@/components/common/NewsSection';
import SaraminCard from '@/components/features/SaraminCard';
import BlogCard from '@/components/features/BlogCard';
import GitHubCard from '@/components/features/GitHubCard';
import type { Saramin } from '@/types/saramin.ts';
import type { Blog } from '@/types/blog.ts';
import type { GitHub } from '@/types/github.ts';
import styles from './styles.module.css';

const NewsPage = () => {
  const [saramin, setSaramin] = useState<Saramin[]>([]);
  const [blog] = useState<Blog[]>([]);
  const [github] = useState<GitHub[]>([]);

  useEffect(() => {
    SaraminAPI.getJobSearch().then(({ job }) => setSaramin(job));
  }, []);

  return (
    <PageLayout title="새로운 뉴스" hideTitle className={styles.page}>
      <NewsSection<Saramin>
        id="saramin"
        title="어머, 이건 꼭 봐야돼! 채용 정보"
        items={saramin}
        Card={SaraminCard}
      />
      <NewsSection<Blog>
        id="blog"
        title="MZ세대를 홀린 인기 포스팅"
        items={blog}
        Card={BlogCard}
      />
      <NewsSection<GitHub>
        id="github"
        title="매력적인 리포지토리"
        items={github}
        Card={GitHubCard}
      />
    </PageLayout>
  );
};

export default NewsPage;

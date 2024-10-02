import { useState } from 'react';
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
  const [saramin] = useState<Saramin[]>([
    {
      url: 'http://www.saramin.co.kr/zf_user/jobs/relay/view?rec_idx=49110796&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api',
      active: 1,
      company: {
        detail: {
          href: 'http://www.saramin.co.kr/zf_user/company-info/view?csn=7658803121&utm_source=job-search-api&utm_medium=api&utm_campaign=saramin-job-search-api',
          name: '버티컬바',
        },
      },
      position: {
        title: '프론트엔드 개발자 모집(5년차 이상)',
        industry: {
          code: '301',
          name: '솔루션·SI·ERP·CRM',
        },
        location: {
          code: '101010',
          name: '서울 &gt; 강남구',
        },
        'job-type': {
          code: '1',
          name: '정규직',
        },
        'job-mid-code': {
          code: '2',
          name: 'IT개발·데이터',
        },
        'job-code': {
          code: '92,89,92,118,136,149,164,2249,201,221,236,259,277,302,304',
          name: 'DataMining,ERP,소프트웨어개발,프론트엔드,유지보수,솔루션,클라우드,RDBMS,클라이언트,AWS,GCP,Javascript,NoSQL,React,TypeScript,Unity',
        },
        'experience-level': {
          code: 2,
          min: 5,
          max: 10,
          name: '경력 5~10년',
        },
        'required-education-level': {
          code: '0',
          name: '학력무관',
        },
      },
      keyword: 'DataMining,ERP,소프트웨어개발',
      salary: {
        code: '99',
        name: '면접후 결정',
      },
      id: '49110796',
      'posting-timestamp': '1727696136',
      'modification-timestamp': '1727696136',
      'opening-timestamp': '1727694000',
      'expiration-timestamp': '1730300399',
      'close-type': {
        code: '1',
        name: '접수마감일',
      },
    },
  ]);
  const [blog] = useState<Blog[]>([
    {
      type_of: 'article',
      id: 2015165,
      title: '12 Essential Web APIs Every Developer Should Know',
      description:
        "Mastering various Web APIs can significantly enhance your web application's functionality and user...",
      readable_publish_date: 'Sep 26',
      slug: '12-essential-web-apis-every-developer-should-know-1m28',
      path: '/vyan/12-essential-web-apis-every-developer-should-know-1m28',
      url: 'https://dev.to/vyan/12-essential-web-apis-every-developer-should-know-1m28',
      comments_count: 22,
      public_reactions_count: 725,
      collection_id: null,
      published_timestamp: '2024-09-26T03:06:52Z',
      positive_reactions_count: 725,
      cover_image:
        'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffq943c6ufzm592mcvg0y.jpg',
      social_image:
        'https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ffq943c6ufzm592mcvg0y.jpg',
      canonical_url:
        'https://dev.to/vyan/12-essential-web-apis-every-developer-should-know-1m28',
      created_at: '2024-09-26T03:06:53Z',
      edited_at: '2024-09-27T04:24:52Z',
      crossposted_at: null,
      published_at: '2024-09-26T03:06:52Z',
      last_comment_at: '2024-10-01T03:03:22Z',
      reading_time_minutes: 4,
      tag_list: ['webdev', 'javascript', 'react', 'api'],
      tags: 'webdev, javascript, react, api',
      user: {
        name: 'Vishal Yadav',
        username: 'vyan',
        twitter_username: null,
        github_username: null,
        user_id: 1466448,
        website_url: 'https://buymeacoffee.com/vshall',
        profile_image:
          'https://media.dev.to/cdn-cgi/image/width=640,height=640,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1466448%2F432d8d0b-a7a7-492f-af27-b9a01b764688.png',
        profile_image_90:
          'https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F1466448%2F432d8d0b-a7a7-492f-af27-b9a01b764688.png',
      },
    },
  ]);
  const [github] = useState<GitHub[]>([
    {
      id: 851556706,
      node_id: 'R_kgDOMsG5Yg',
      name: 'llm-course-basic',
      full_name: 'RealKai42/llm-course-basic',
      private: false,
      owner: {
        login: 'RealKai42',
        id: 44634134,
        node_id: 'MDQ6VXNlcjQ0NjM0MTM0',
        avatar_url: 'https://avatars.githubusercontent.com/u/44634134?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/RealKai42',
        html_url: 'https://github.com/RealKai42',
        followers_url: 'https://api.github.com/users/RealKai42/followers',
        following_url:
          'https://api.github.com/users/RealKai42/following{/other_user}',
        gists_url: 'https://api.github.com/users/RealKai42/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/RealKai42/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/RealKai42/subscriptions',
        organizations_url: 'https://api.github.com/users/RealKai42/orgs',
        repos_url: 'https://api.github.com/users/RealKai42/repos',
        events_url: 'https://api.github.com/users/RealKai42/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/RealKai42/received_events',
        type: 'User',
        site_admin: false,
      },
      html_url: 'https://github.com/RealKai42/llm-course-basic',
      description: '大模型的基础入门课配套代码',
      fork: false,
      url: 'https://api.github.com/repos/RealKai42/llm-course-basic',
      forks_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/forks',
      keys_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/teams',
      hooks_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/hooks',
      issue_events_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/events',
      assignees_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/branches{/branch}',
      tags_url: 'https://api.github.com/repos/RealKai42/llm-course-basic/tags',
      blobs_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/languages',
      stargazers_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/stargazers',
      contributors_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/contributors',
      subscribers_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/subscribers',
      subscription_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/subscription',
      commits_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/merges',
      archive_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/downloads',
      issues_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/labels{/name}',
      releases_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/RealKai42/llm-course-basic/deployments',
      created_at: '2024-09-03T10:05:47Z',
      updated_at: '2024-09-25T02:48:18Z',
      pushed_at: '2024-09-04T14:48:33Z',
      git_url: 'git://github.com/RealKai42/llm-course-basic.git',
      ssh_url: 'git@github.com:RealKai42/llm-course-basic.git',
      clone_url: 'https://github.com/RealKai42/llm-course-basic.git',
      svn_url: 'https://github.com/RealKai42/llm-course-basic',
      homepage: null,
      size: 6140,
      stargazers_count: 125,
      watchers_count: 125,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 9,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 9,
      open_issues: 0,
      watchers: 125,
      default_branch: 'main',
      score: 1.0,
    },
  ]);
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

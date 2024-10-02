const namedTags = ['javascript', 'react', 'html', 'css'] as const;
type Tag = (typeof namedTags)[number] | string;

interface Blog {
  id: number;
  title: string;
  cover_image: string | null;
  url: string;
  tag_list: Tag[];
  published_at: string;
  user: {
    name: string;
    profile_image: string;
  };
}

export { namedTags };
export type { Blog, Tag };

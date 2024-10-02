interface GitHub {
  id: number;
  name: string;
  owner: {
    avatar_url: string;
    login: string;
  };
  html_url: string;
  description: string | null;
  created_at: string;
}

export type { GitHub };

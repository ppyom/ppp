interface Schedule {
  id: string;
  title: string;
  start: string;
  end?: string;
  hasTime?: boolean;
  isHoliday?: boolean;
}

export type { Schedule };

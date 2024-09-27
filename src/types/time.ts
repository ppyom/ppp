const hours = Array.from({ length: 24 }).map((_, i) =>
  i.toString().padStart(2, '0'),
) as const;
const minutes = Array.from({ length: 60 }).map((_, i) =>
  i.toString().padStart(2, '0'),
) as const;

type Hour = (typeof hours)[number];
type Minute = (typeof minutes)[number];

export { hours, minutes };
export type { Hour, Minute };

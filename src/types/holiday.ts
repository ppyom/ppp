interface Holiday {
  dateKind: string;
  dateName: string;
  isHoliday: string; // Y N
  locdate: number;
  seq: number;
}

interface HolidayResponse {
  items: {
    item: Holiday[];
  };
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}

export type { HolidayResponse, Holiday };

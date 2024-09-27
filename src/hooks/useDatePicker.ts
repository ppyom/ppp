import { useState } from 'react';

const useDatePicker = (defaultDate: string) => {
  const [selected, setSelected] = useState<string>(defaultDate);
  const updateDate = (date: string) => {
    setSelected(date);
  };
  return { selected, updateDate };
};

export default useDatePicker;

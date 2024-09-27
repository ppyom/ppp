import { useState } from 'react';
import { Hour, Minute } from '@/types/time.ts';

const useTimeSelect = (initialHour: Hour, initialMinute: Minute) => {
  const [hour, setHour] = useState<Hour>(initialHour);
  const [minute, setMinute] = useState<Minute>(initialMinute);
  const makeOption = (target: Hour | Minute) => {
    return { label: target, value: target };
  };
  return { hour, minute, makeOption, setHour, setMinute };
};

export default useTimeSelect;

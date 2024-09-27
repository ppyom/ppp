import { useState } from 'react';
import { Hour, Minute } from '@/types/time.ts';

const useTimeSelect = (defaultTime: string) => {
  const [hour, setHour] = useState<Hour>(defaultTime.split(':')[0]);
  const [minute, setMinute] = useState<Minute>(defaultTime.split(':')[1]);
  const makeOption = (target: Hour | Minute) => {
    return { label: target, value: target };
  };
  return { hour, minute, makeOption, setHour, setMinute };
};

export default useTimeSelect;

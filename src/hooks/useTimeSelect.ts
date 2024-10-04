import { useState } from 'react';
import type { Hour, Minute } from '@/types/time.ts';
import { PropsValue } from 'react-select';

interface Option<T> {
  label: T;
  value: T;
}

const useTimeSelect = (defaultHour: Hour, defaultMinute: Minute) => {
  const [hour, setHour] = useState<Hour>(defaultHour);
  const [minute, setMinute] = useState<Minute>(defaultMinute);
  // ReactSelect에서 사용되는 옵션 형태로 만들어주는 함수
  const makeOption = <T extends Hour | Minute>(
    target: T,
  ): PropsValue<Option<T>> => {
    return { label: target, value: target };
  };
  return { hour, minute, makeOption, setHour, setMinute };
};

export default useTimeSelect;

import { useState } from 'react';

const useCheckbox = (initialChecked: boolean) => {
  const [checked, setChecked] = useState(initialChecked);
  return { checked, setChecked };
};

export default useCheckbox;

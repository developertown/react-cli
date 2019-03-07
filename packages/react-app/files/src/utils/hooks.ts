import { useState, useContext } from 'react';
import { __RouterContext } from 'react-router';

export function useToggle(defaultValue: boolean = false) {
  const [value, setValue] = useState(defaultValue);

  return [value, () => setValue(!value)];
}

export function useRouter() {
  return useContext(__RouterContext);
}

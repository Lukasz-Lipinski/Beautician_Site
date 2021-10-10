import { useState } from 'react';

export const useChange = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChange];
};
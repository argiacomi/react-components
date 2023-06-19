import React from 'react';

const RadioGroupContext = React.createContext();

if (!import.meta.env.PROD) {
  RadioGroupContext.displayName = 'RadioGroupContext';
}

export default RadioGroupContext;

export function useRadioGroup() {
  return React.useContext(RadioGroupContext);
}

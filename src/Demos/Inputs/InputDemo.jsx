import { InputBase as Input } from '@components';
import React from 'react';
import styled from '@styles';

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return <Input slots={{ input: StyledInputElement }} {...props} ref={ref} />;
});

export default function UnstyledInputBasic() {
  return <CustomInput aria-label='Demo input' placeholder='Shutup a you face' />;
}

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5'
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027'
};

const StyledInputElement = styled.input`
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px;
  color: ${grey[900]};
  background: #fff;
  border: 1px solid ${grey[200]};
  box-shadow: 0px 2px 2px ${grey[50]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }

  @media (prefers-color-scheme: dark) {
    color: ${grey[300]};
    background: ${grey[900]};
    border: 1px solid ${grey[700]};
    box-shadow: 0px 2px 2px ${grey[900]};

    &:focus {
      box-shadow: 0 0 0 3px ${blue[500]};
    }
  }
`;

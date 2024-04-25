import { PropsWithChildren } from 'react';
import { FormControl, InputLabel, Select, SelectProps } from '@mui/material';

const SelectBox = ({ children, ...props }: PropsWithChildren<SelectProps>) => {
  return (
    <FormControl fullWidth sx={{ marginTop: 1 }}>
      <InputLabel id={props.labelId}>{props.label}</InputLabel>
      <Select {...props}>{children}</Select>
    </FormControl>
  );
};

export default SelectBox;

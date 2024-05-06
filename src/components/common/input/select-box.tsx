import { PropsWithChildren } from 'react';
import { FormControl, InputLabel, Select, SelectProps } from '@mui/material';

interface SelectBoxProps extends Omit<SelectProps, 'labelId'> {
  labelId: string;
}

const SelectBox = ({ children, ...props }: PropsWithChildren<SelectBoxProps>) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={props.labelId}>{props.label}</InputLabel>
      <Select {...props}>{children}</Select>
    </FormControl>
  );
};

export default SelectBox;

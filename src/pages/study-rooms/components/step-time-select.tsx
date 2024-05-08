import { PropsWithChildren } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectProps } from '@mui/material';

interface StepTimeSelectProps extends Omit<SelectProps, 'labelId'> {
  labelId: string;
  optionValues: number[];
}

const StepTimeSelect = ({
  optionValues,
  label,
  labelId,
  ...restProps
}: PropsWithChildren<StepTimeSelectProps>) => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={labelId}>{label}</InputLabel>
      <Select label={label} inputProps={{ id: labelId }} {...restProps}>
        {optionValues.map((value) => (
          <MenuItem key={value} value={value}>
            {value}분
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default StepTimeSelect;

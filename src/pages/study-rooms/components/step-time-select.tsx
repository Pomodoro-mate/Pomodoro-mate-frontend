import { FormControl, InputLabel, MenuItem, Select, SelectProps } from '@mui/material';

interface StepTimeSelectProps extends Omit<SelectProps, 'labelId'> {
  labelId: string;
  stepTimeValues: number[];
}

const StepTimeSelect = ({ stepTimeValues, label, labelId, ...restProps }: StepTimeSelectProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={labelId}>{label}</InputLabel>
      <Select label={label} inputProps={{ id: labelId }} {...restProps}>
        {stepTimeValues.map((value) => (
          <MenuItem key={value} value={value}>
            {value}분
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default StepTimeSelect;

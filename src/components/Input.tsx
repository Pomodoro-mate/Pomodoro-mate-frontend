import { TextField, TextFieldProps } from '@mui/material';
import { FieldPath, FieldValues, UseControllerProps, useController } from 'react-hook-form';
import styled from 'styled-components';

interface MuiProps {
  textFieldProps?: TextFieldProps;
}

const Input = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  textFieldProps,
  control,
  name,
}: MuiProps & UseControllerProps<TFieldValues, TName>) => {
  const {
    field,
    // fieldState: { invalid, isTouched, isDirty },
    // formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: true },
  });
  return (
    <>
      <StyledTextField
        {...textFieldProps}
        onChange={field.onChange} // send value to hook form
        onBlur={field.onBlur} // notify when input is touched/blur
        // value={field.value} // input value
        name={field.name} // send down the input name
        inputRef={field.ref} // send input re
      />
      {/* <ErrorMessage
        errors={errors}
        name="multipleErrorInput"
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        }
      /> */}
      {/* <p>{invalid ? '유효' : '무효'}</p> */}
    </>
  );
};

const StyledTextField = styled(TextField)`
  background: ${(props) => props.theme.background};
`;
export default Input;

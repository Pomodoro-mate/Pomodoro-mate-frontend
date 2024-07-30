import { Input, Label } from '@/components/ui';
import { ChangeEvent } from 'react';

interface TextFieldProps {
  label?: string;
  labelId?: string;
  name: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({ label, labelId, name, placeholder, onChange }: TextFieldProps) => {
  return (
    <>
      {label && (
        <Label htmlFor={labelId} className="text-left">
          {label}
        </Label>
      )}
      <Input
        id={labelId}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="col-span-3"
      />
    </>
  );
};

export default TextField;

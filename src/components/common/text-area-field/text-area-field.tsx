import { Label, Textarea } from '@/components/ui';
import { ChangeEvent } from 'react';

interface TextFieldAreaProps {
  label: string;
  labelId?: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaField = ({ label, labelId, name, onChange }: TextFieldAreaProps) => {
  return (
    <>
      <Label htmlFor={labelId} className="text-left">
        {label}
      </Label>
      <Textarea id={labelId} name={name} onChange={onChange} />
    </>
  );
};

export default TextAreaField;

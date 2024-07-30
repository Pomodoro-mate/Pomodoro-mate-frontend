import {
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';

type SelectStudyTimeProps = {
  option: number[];
  selected?: string;
  label: string;
  name: string;
  onChange: (name: string, selected: string) => void;
};

const SelectStudyTime = ({ option, selected, label, name, onChange }: SelectStudyTimeProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label className="text-left">{label}</Label>
      <Select onValueChange={(value) => onChange(name, value)} value={selected}>
        <SelectTrigger className="w-[212px]">
          <SelectValue placeholder="시간을 선택해주세요" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {option.map((item, idx) => (
              <SelectItem key={idx} value={String(item)}>
                {`${item}분`}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectStudyTime;

import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Textarea,
} from '@/components/ui';
import StepTimeSelectField from './stpe-time-select-field';

import { useNavigate } from 'react-router-dom';

import { createStudyRoom as createStudyRoomApi } from '@/apis/study-room/create-study-room';
import { ROUTE_PATH } from '@/constant/routes';
import { participantIdStorage } from '@/utils/storage';
import useCreateStudyRoomForm from '../hooks/useCreateStudyRoomForm';

const CreateStudyRoomDialog = () => {
  const navigate = useNavigate();

  const {
    timeSet,
    textFields: { name, intro },
    handleChangeTextFieldArea,
    handleChangeTextField,
    handleChangeSelect,
  } = useCreateStudyRoomForm();

  const createStudyRoom = async () => {
    try {
      const { id, participantId } = await createStudyRoomApi({ name, intro, timeSet });
      participantIdStorage.setItem(participantId);
      navigate(`${ROUTE_PATH.STUDY_ROOMS}/${id}`, { state: { title: name } });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Dialog modal={true}>
      <DialogTrigger asChild>
        <Button>스터디룸 만들러 가기</Button>
      </DialogTrigger>
      <DialogContent className="xl:max-w-[510px]">
        <DialogHeader>
          <DialogTitle>스터디룸 만들기</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title" className="text-left">
              제목
            </Label>
            <Input
              id="title"
              className="col-span-3"
              name="name"
              placeholder="사용할 닉네임 입력"
              onChange={handleChangeTextField}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description" className="text-left">
              설명
            </Label>
            <Textarea id="description" name="intro" onChange={handleChangeTextFieldArea} />
          </div>
        </div>
        <div className="mb-6">
          <Label>단계별 시간</Label>
          <StepTimeSelectField timeSet={timeSet} onChange={handleChangeSelect} />
        </div>
        <DialogFooter className="sm:flex-col-reverse">
          <Button type="submit" onClick={createStudyRoom}>
            방 만들기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default CreateStudyRoomDialog;

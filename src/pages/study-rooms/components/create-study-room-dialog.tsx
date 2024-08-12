import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Label,
} from '@/components/ui';
import TextField from '@/components/common/text-field/text-field';
import TextAreaField from '@/components/common/text-area-field/text-area-field';

import StepTimeSelectField from './stpe-time-select-field';

import { useNavigate } from 'react-router-dom';

import { ROUTE_PATH } from '@/constant/routes';
import { participantIdStorage } from '@/utils/storage';
import useCreateStudyRoomForm from '../hooks/useCreateStudyRoomForm';
import { createStudyRoom as createStudyRoomApi } from '@/apis/study-room/create-study-room';

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
            <TextField
              label="제목"
              labelId="title"
              name="name"
              placeholder="2자 이상 30자 이하"
              onChange={handleChangeTextField}
            />
          </div>
          <div className="flex flex-col gap-2">
            <TextAreaField
              label="설명"
              labelId="description"
              name="intro"
              onChange={handleChangeTextFieldArea}
            />
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

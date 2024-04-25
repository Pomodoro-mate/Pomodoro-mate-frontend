import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, MenuItem, SelectChangeEvent, TextField } from '@mui/material';
import { createStudyRoom } from '@/apis/study-room/create-study-room';
import generateTimeValues from '@/utils/study-room/generate-time-values';
import { STUDY_ROOM_STEP_PROGRESS_TIME } from '@/constant/study-room';
import { ROUTE_PATH } from '@/constant/routes';
import { MODAL_KEYS } from '@/constant/modal';
import { TimeSet } from '@/types/study-room.types';
import useModal from '@/hooks/useModal';
import Modal from '@/components/common/modal/modal';
import SelectBox from '@/components/common/input/select-box';

const CreateStudyRoomModal = () => {
  const navigate = useNavigate();

  const { isOpen, onClose } = useModal(MODAL_KEYS.CREATE_STUDY_ROOM);

  const [name, setName] = useState('');
  const [intro, setIntro] = useState('');
  const [timeSet, setTimeSet] = useState<TimeSet>({
    planningTime: STUDY_ROOM_STEP_PROGRESS_TIME.PLANNING.MIN,
    studyingTime: STUDY_ROOM_STEP_PROGRESS_TIME.STUDYING.MIN,
    retrospectTime: STUDY_ROOM_STEP_PROGRESS_TIME.RETROSPECT.MIN,
    restingTime: STUDY_ROOM_STEP_PROGRESS_TIME.RESTING.MIN,
  });

  const planningStepValues = generateTimeValues(
    STUDY_ROOM_STEP_PROGRESS_TIME.PLANNING.MIN,
    STUDY_ROOM_STEP_PROGRESS_TIME.PLANNING.MAX,
  );

  const studyingStepValues = generateTimeValues(
    STUDY_ROOM_STEP_PROGRESS_TIME.STUDYING.MIN,
    STUDY_ROOM_STEP_PROGRESS_TIME.STUDYING.MAX,
  );

  const retrospectStepValues = generateTimeValues(
    STUDY_ROOM_STEP_PROGRESS_TIME.RETROSPECT.MIN,
    STUDY_ROOM_STEP_PROGRESS_TIME.RETROSPECT.MAX,
  );

  const restingStepValues = generateTimeValues(
    STUDY_ROOM_STEP_PROGRESS_TIME.RESTING.MIN,
    STUDY_ROOM_STEP_PROGRESS_TIME.RESTING.MAX,
  );

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setName(value);
  };

  const handleChangeIntro = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setIntro(value);
  };

  const handleChangePlanningTime = (event: SelectChangeEvent<unknown>) => {
    const { value } = event.target;

    setTimeSet({ ...timeSet, planningTime: Number(value) });
  };

  const handleChangeStudyingTime = (event: SelectChangeEvent<unknown>) => {
    const { value } = event.target;

    setTimeSet({ ...timeSet, studyingTime: Number(value) });
  };

  const handleChangeRetrospectTime = (event: SelectChangeEvent<unknown>) => {
    const { value } = event.target;

    setTimeSet({ ...timeSet, retrospectTime: Number(value) });
  };

  const handleChangeRestingTime = (event: SelectChangeEvent<unknown>) => {
    const { value } = event.target;

    setTimeSet({ ...timeSet, restingTime: Number(value) });
  };

  const handleClickActionBtn = async () => {
    try {
      const { id } = await createStudyRoom({ name, intro, timeSet });

      onClose();

      navigate(`${ROUTE_PATH.STUDY_ROOMS}/${id}`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      title="스터디룸 생성"
      closeBtn="취소"
      actionBtn="방 만들기"
      onClickActionBtn={handleClickActionBtn}
      onClose={onClose}
    >
      <Container sx={{ paddingBlock: '10px' }}>
        <TextField
          fullWidth
          label="방 제목"
          variant="outlined"
          margin="normal"
          onChange={handleChangeName}
        />
        <TextField
          fullWidth
          label="설명"
          variant="outlined"
          multiline
          rows={3}
          onChange={handleChangeIntro}
        />
        <SelectBox
          labelId="planning-time-select"
          value={String(timeSet.planningTime)}
          label="계획 시간"
          onChange={handleChangePlanningTime}
        >
          {planningStepValues.map((timeValue) => (
            <MenuItem key={timeValue} value={timeValue}>
              {timeValue}분
            </MenuItem>
          ))}
        </SelectBox>
        <SelectBox
          labelId="studying-time-select"
          value={String(timeSet.studyingTime)}
          label="스터디 시간"
          onChange={handleChangeStudyingTime}
        >
          {studyingStepValues.map((timeValue) => (
            <MenuItem key={timeValue} value={timeValue}>
              {timeValue}분
            </MenuItem>
          ))}
        </SelectBox>
        <SelectBox
          labelId="retrospect-time-select"
          value={String(timeSet.retrospectTime)}
          label="회고 시간"
          onChange={handleChangeRetrospectTime}
        >
          {retrospectStepValues.map((timeValue) => (
            <MenuItem key={timeValue} value={timeValue}>
              {timeValue}분
            </MenuItem>
          ))}
        </SelectBox>
        <SelectBox
          labelId="resting-time-select"
          value={String(timeSet.restingTime)}
          label="휴식 시간"
          onChange={handleChangeRestingTime}
        >
          {restingStepValues.map((timeValue) => (
            <MenuItem key={timeValue} value={timeValue}>
              {timeValue}분
            </MenuItem>
          ))}
        </SelectBox>
      </Container>
    </Modal>
  );
};

export default CreateStudyRoomModal;

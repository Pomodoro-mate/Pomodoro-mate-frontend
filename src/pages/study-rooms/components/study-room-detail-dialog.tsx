import {
  Avatar,
  AvatarImage,
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Label,
} from '@/components/ui';

import book from '../../../assets/icons/book-outline.png';
import bulb from '../../../assets/icons/bulb-outline.png';
import receipt from '../../../assets/icons/receipt-outline.png';
import headset from '../../../assets/icons/headset-outline.png';

import { StudyRoomInfo } from '@/types/study-room.types';

interface StudyRoomDetailDialogType {
  isOpen: boolean;
  studyRoomInfo: StudyRoomInfo;
  toggle: () => void;
  joinStudyRoom: (studyRoomId: number) => void;
}

const StudyRoomDetailDialog = ({
  isOpen,
  studyRoomInfo,
  toggle,
  joinStudyRoom,
}: StudyRoomDetailDialogType) => {
  const { id, intro, name, participantSummaries, timeSet, updateAt } = studyRoomInfo;
  const { planningTime, restingTime, retrospectTime, studyingTime } = timeSet;

  return (
    <Dialog modal={true} open={isOpen} onOpenChange={toggle}>
      <DialogContent className="xl:max-w-[794px]">
        <DialogHeader>
          <DialogTitle>스터디룸 상세</DialogTitle>
        </DialogHeader>
        <Label>제목</Label>
        <DialogDescription>{name}</DialogDescription>
        <Label>설명</Label>
        <DialogDescription>{intro}</DialogDescription>

        <div className="flex gap-5">
          <div>
            <Label>단계별 시간</Label>
            <div className="flex xl:max-w-[200px] flex-wrap items-center">
              <div>
                <div className="flex flex-col items-center border-r py-2 px-6">
                  <img src={receipt} />
                  <span>계획</span>
                  <span>{`${planningTime} 분`}</span>
                </div>
                <div className="flex flex-col items-center border-t border-r  py-2 px-6">
                  <img src={bulb} />
                  <span>회고</span>
                  <span>{`${restingTime} 분`}</span>
                </div>
              </div>

              <div>
                <div className="flex flex-col items-center border-b  py-2 px-6">
                  <img src={book} />
                  <span>스터디</span>
                  <span>{`${studyingTime} 분`}</span>
                </div>

                <div className="flex flex-col items-center py-2 px-6">
                  <img src={headset} />
                  <span>휴식</span>
                  <span>{`${retrospectTime} 분`}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Label>참여별 목록</Label>
            <div className="bg-gray-200 xl:h-[200px] xl:w-[500px] rounded-lg p-3">
              {participantSummaries.map((item) => {
                const { id, nickname } = item;
                return (
                  <div key={id} className="flex flex-row items-center gap-2">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                    </Avatar>
                    <span>{nickname}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <DialogFooter className="sm:flex-col-reverse">
          <Button
            type="submit"
            onClick={() => {
              joinStudyRoom(id);
            }}
          >
            참가하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default StudyRoomDetailDialog;

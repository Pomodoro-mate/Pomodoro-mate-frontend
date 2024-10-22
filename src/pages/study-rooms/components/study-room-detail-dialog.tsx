import { Book, Bulb, Crown, Headset, Receipt } from '@/components/icons';

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

import { StudyRoomInfo } from '@/types/study-room.types';

interface StudyRoomDetailDialogType {
  isOpen: boolean;
  studyRoomInfo: StudyRoomInfo;
  toggle: (status: boolean) => void;
  joinStudyRoom: (studyRoomId: number) => void;
}

const StudyRoomDetailDialog = ({
  isOpen,
  studyRoomInfo,
  toggle,
  joinStudyRoom,
}: StudyRoomDetailDialogType) => {
  const {
    id,
    intro,
    name,
    participantSummaries,
    timeSet,
    //updateAt
  } = studyRoomInfo;
  const { planningTime, restingTime, retrospectTime, studyingTime } = timeSet;

  return (
    <Dialog modal={true} open={isOpen} onOpenChange={toggle}>
      <DialogContent className="xl:max-w-[794px]">
        <DialogHeader>
          <DialogTitle>스터디룸 상세</DialogTitle>
        </DialogHeader>
        <Label className="text-lg">제목</Label>
        <DialogDescription>{name}</DialogDescription>
        <Label className="text-lg">설명</Label>
        <DialogDescription>{intro}</DialogDescription>

        <div className="flex gap-5">
          <div className="flex flex-col">
            <Label className="text-lg mb-3">단계별 시간</Label>
            <div className="flex xl:max-w-[200px] flex-wrap items-center">
              <div>
                <div className="flex flex-col items-center border-r py-2 px-6">
                  <Receipt width={32} height={32} stroke="#4A4A4A" />
                  <span className="font-medium text-main-80">계획</span>
                  <span className="font-medium text-main-80">{`${planningTime}분`}</span>
                </div>
                <div className="flex flex-col items-center border-t border-r  py-2 px-6">
                  <Bulb width={32} height={32} stroke="#4A4A4A" />
                  <span className="font-medium text-main-80">회고</span>
                  <span className="font-medium text-main-80">{`${restingTime}분`}</span>
                </div>
              </div>
              <div>
                <div className="flex flex-col items-center border-b  py-2 px-6">
                  <Book width={32} height={32} stroke="#4A4A4A" />
                  <span className="font-medium text-main-80">스터디</span>
                  <span className="font-medium text-main-80">{`${studyingTime}분`}</span>
                </div>

                <div className="flex flex-col items-center py-2 px-6">
                  <Headset width={32} height={32} stroke="#4A4A4A" />
                  <span className="font-medium text-main-80">휴식</span>
                  <span className="font-medium text-main-80">{`${retrospectTime}분`}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <Label className="text-lg mb-3">참여자 목록</Label>
            <div className="bg-gray-200 xl:h-[200px] xl:w-[500px] rounded-lg p-3">
              {participantSummaries.map((item) => {
                const { id, nickname, isHost } = item;
                return (
                  <div key={id} className="flex flex-row items-center gap-2">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                    </Avatar>
                    {isHost && <Crown width={16} height={16} fill="#FFD953" />}
                    <span>{nickname}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <DialogFooter className="sm:flex-col-reverse">
          <Button type="submit" onClick={() => joinStudyRoom(id)}>
            참가하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default StudyRoomDetailDialog;

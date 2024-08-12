import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';

export interface ModalProps extends React.PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  actionBtn?: string;
  closeBtn?: string;
  onClickActionBtn?: () => void;
  activeClose?: boolean;
  variant?: 'default' | 'disabled' | 'ghost' | 'link' | 'outline' | 'secondary';
}

const Modal = ({
  isOpen,
  onClose,
  title,
  actionBtn,
  activeClose = true,
  closeBtn = '닫기',
  onClickActionBtn,
  children,
  variant = 'default',
}: ModalProps) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle onClick={onClose}>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>{children}</DialogDescription>
        <DialogFooter>
          {activeClose && <Button onClick={onClose}>{closeBtn}</Button>}
          {actionBtn && (
            <Button variant={variant} onClick={onClickActionBtn}>
              {actionBtn}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;

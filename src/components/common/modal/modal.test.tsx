import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material';
import Modal from './modal';

const context = describe;

const theme = createTheme();

const modalProps = {
  isOpen: true,
  onClose: jest.fn(),
  title: 'title',
};

const content = 'content';

const renderModal = (children: React.ReactNode) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

describe('Modal', () => {
  it('render modal', () => {
    renderModal(
      <Modal {...modalProps}>
        <div>{content}</div>
      </Modal>,
    );

    screen.getByText(modalProps.title);
    screen.getByText(content);
  });

  context('isOpen is false', () => {
    it('not rendering modal', () => {
      renderModal(
        <Modal {...modalProps} isOpen={false}>
          <div>{content}</div>
        </Modal>,
      );

      expect(screen.queryByText(modalProps.title)).not.toBeInTheDocument();
    });
  });

  describe('about close button', () => {
    context('not input closeBtn', () => {
      it('render "닫기" button', () => {
        renderModal(
          <Modal {...modalProps} closeBtn={undefined}>
            <div>{content}</div>
          </Modal>,
        );

        screen.getByRole('button', { name: '닫기' });
      });
    });

    context('input closeBtn', () => {
      const closeBtn = '취소';

      it('render closeBtn you typed', () => {
        renderModal(
          <Modal {...modalProps} closeBtn={closeBtn}>
            <div>{content}</div>
          </Modal>,
        );

        screen.getByRole('button', { name: closeBtn });
      });
    });

    context('when click closeBtn', () => {
      it('execute onClose function', () => {
        renderModal(
          <Modal {...modalProps}>
            <div>{content}</div>
          </Modal>,
        );

        const button = screen.getByRole('button', { name: '닫기' });

        fireEvent.click(button);

        expect(modalProps.onClose).toHaveBeenCalled();
      });
    });
  });

  describe('about action button', () => {
    context('not input actionBtn', () => {
      it('not render action button', () => {
        renderModal(
          <Modal {...modalProps} actionBtn={undefined}>
            <div>{content}</div>
          </Modal>,
        );

        const buttons = screen.getAllByRole('button');

        expect(buttons).toHaveLength(1); // '닫기' 버튼만 존재
      });
    });

    describe('input actionBtn', () => {
      const actionBtn = 'actionBtn';
      const onClickActionBtn = jest.fn();

      it('render actionBtn you typed', () => {
        renderModal(
          <Modal {...modalProps} actionBtn={actionBtn} onClickActionBtn={onClickActionBtn}>
            <div>{content}</div>
          </Modal>,
        );

        screen.getByRole('button', { name: actionBtn });
      });

      context('when click actionBtn', () => {
        it('execute onClickActionBtn function', () => {
          renderModal(
            <Modal {...modalProps} actionBtn={actionBtn} onClickActionBtn={onClickActionBtn}>
              <div>{content}</div>
            </Modal>,
          );

          const button = screen.getByRole('button', { name: actionBtn });

          fireEvent.click(button);

          expect(onClickActionBtn).toHaveBeenCalled();
        });
      });
    });
  });
});

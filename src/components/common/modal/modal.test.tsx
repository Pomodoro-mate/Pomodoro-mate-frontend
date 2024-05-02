import { fireEvent, screen } from '@testing-library/react';
import { render } from '@/test-helper';
import Modal from './modal';

const context = describe;

const modalProps = {
  isOpen: true,
  onClose: jest.fn(),
  title: 'title',
};

const content = 'content';

describe('Modal', () => {
  it('render modal', () => {
    render(
      <Modal {...modalProps}>
        <div>{content}</div>
      </Modal>,
    );

    screen.getByText(modalProps.title);
    screen.getByText(content);
  });

  context('isOpen is false', () => {
    it('not rendering modal', () => {
      render(
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
        render(
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
        render(
          <Modal {...modalProps} closeBtn={closeBtn}>
            <div>{content}</div>
          </Modal>,
        );

        screen.getByRole('button', { name: closeBtn });
      });
    });

    context('when click closeBtn', () => {
      it('execute onClose function', () => {
        render(
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
        render(
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
        render(
          <Modal {...modalProps} actionBtn={actionBtn} onClickActionBtn={onClickActionBtn}>
            <div>{content}</div>
          </Modal>,
        );

        screen.getByRole('button', { name: actionBtn });
      });

      context('when click actionBtn', () => {
        it('execute onClickActionBtn function', () => {
          render(
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

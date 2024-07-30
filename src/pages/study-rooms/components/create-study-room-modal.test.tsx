// import { fireEvent, screen } from '@testing-library/react';
// import { render } from '@/test-helper';
// import fixtures from '@/fixtures';
// import CreateStudyRoomModal from './create-study-room-modal';

// const { studyRoom } = fixtures;

// const context = describe;

// jest.mock('react-router-dom', () => ({
//   useNavigate: jest.fn(),
// }));

// jest.mock('@/hooks/useModal', () => () => ({
//   isOpen: true,
//   onClose: jest.fn(),
// }));

// const createStudyRoom = jest.fn();

// jest.mock('@/apis/study-room/create-study-room', () => ({
//   createStudyRoom: () => createStudyRoom({}),
// }));

// const mockUseCreateStudyRoomForm = {
//   textFields: { name: studyRoom.name, intro: studyRoom.intro },
//   timeSet: studyRoom.timeSet,
//   handleChangeTextField: jest.fn(),
//   handleChangeSelect: jest.fn(),
// };

// jest.mock('../hooks/useCreateStudyRoomForm', () => () => mockUseCreateStudyRoomForm);

// describe('CreateStudyRoomModal', () => {
//   it('renders CreateStudyRoomModal', () => {
//     render(<CreateStudyRoomModal />);

//     screen.getByLabelText(/제목/);
//     screen.getByLabelText(/설명/);
//   });

//   context('when text field changes', () => {
//     it('execute handler function', () => {
//       const { handleChangeTextField } = mockUseCreateStudyRoomForm;

//       render(<CreateStudyRoomModal />);

//       const nameTextField = screen.getByLabelText(/제목/);

//       fireEvent.change(nameTextField, { target: { value: 'new text' } });

//       expect(handleChangeTextField).toHaveBeenCalled();
//     });
//   });

//   context('when click "방 만들기" button', () => {
//     it('execute createStudyRoom function', () => {
//       render(<CreateStudyRoomModal />);

//       const button = screen.getByRole('button', { name: /방 만들기/ });

//       fireEvent.click(button);

//       expect(createStudyRoom).toHaveBeenCalled();
//     });
//   });
// });

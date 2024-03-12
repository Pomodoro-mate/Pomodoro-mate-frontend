export const studyStep = (type: string) => {
  switch (type) {
    case 'PLANNING':
      return 'STUDYING';
    case 'STUDYING':
      return 'RETROSPECT';
    case 'RETROSPECT':
      return 'RESTING';
    case 'RESTING':
      return 'COMPLETED';
    case 'COMPLETED':
      return 'PLANNING';
    default:
      return 'ERROR';
  }
};

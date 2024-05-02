import { http } from '../api';

export const logout = async () => {
  return await http.delete('/logout');
};

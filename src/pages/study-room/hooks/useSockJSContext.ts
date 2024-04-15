import { useContext } from 'react';
import { SockJSContext } from '@/provider/sockjs-provider';

const useSockJSContext = () => {
  const context = useContext(SockJSContext);

  if (!context) {
    throw new Error('Cannot find SockJSContext');
  }

  return context;
};

export default useSockJSContext;

import { MODAL_KEYS } from '@/constant/modal';

export type ModalKey = (typeof MODAL_KEYS)[keyof typeof MODAL_KEYS];

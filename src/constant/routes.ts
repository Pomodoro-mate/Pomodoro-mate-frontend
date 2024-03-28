export const ROUTE_PATH = {
  HOME: '/',
  LOGIN: '/login',
  STUDY_ROOM: (id: number) => `/study-rooms/${id}`,
  STUDY_ROOMS: '/study-rooms',
} as const;

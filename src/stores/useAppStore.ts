import { create, StoreApi, UseBoundStore } from 'zustand';

type AppState = {
  page: string;
};

type AppActions = {
  setPage: (page: string) => void;
};

const initialState: AppState = {
  page: 'info',
};

const useAppStore: UseBoundStore<StoreApi<AppState & AppActions>> = create<
  AppState & AppActions
>(set => ({
  ...initialState,
  setPage: (setPage: string) =>
    set((state: AppState & AppActions) => ({ ...state, page: setPage })),
}));

export default useAppStore;

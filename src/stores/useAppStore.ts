import { create, StoreApi, UseBoundStore } from 'zustand';

type AppState = {
  page: string;
  tabsOrder: string[]; // slugs in render order
  draggingSlug: string | null; // null when not dragging
};

type AppActions = {
  setPage: (page: string) => void;
  setTabsOrder: (order: string[]) => void;
  beginDrag: (slug: string) => void;
  endDrag: () => void;
};

const initialState: AppState = {
  page: 'info',
  tabsOrder: [],
  draggingSlug: null,
};

const useAppStore: UseBoundStore<StoreApi<AppState & AppActions>> = create<
  AppState & AppActions
>(set => ({
  ...initialState,
  setPage: (setPage: string) =>
    set((state: AppState & AppActions) => ({ ...state, page: setPage })),
  setTabsOrder: (order: string[]) =>
    set((state: AppState & AppActions) => ({ ...state, tabsOrder: order })),
  beginDrag: (slug: string) =>
    set((state: AppState & AppActions) => ({ ...state, draggingSlug: slug })),
  endDrag: () =>
    set((state: AppState & AppActions) => ({ ...state, draggingSlug: null })),
}));

export default useAppStore;

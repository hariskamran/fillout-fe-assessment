import { create, StoreApi, UseBoundStore } from 'zustand';

import { Page } from '@/types';

type AppState = {
  page: string;
  tabsOrder: string[]; // slugs in render order
  draggingSlug: string | null; // null when not dragging
  dynamicPages: Record<string, Page>; // pages created at runtime
};

type AppActions = {
  setPage: (page: string) => void;
  setTabsOrder: (order: string[]) => void;
  beginDrag: (slug: string) => void;
  endDrag: () => void;
  addPageAt: (index: number) => string;
  addPageToEnd: () => string;
};

const initialState: AppState = {
  page: 'info',
  tabsOrder: [],
  draggingSlug: null,
  dynamicPages: {},
};

function generateUniqueSlug(
  existingSlugs: Set<string>,
  base: string = 'untitled',
): string {
  let attempt = base;
  let i = 2;
  while (existingSlugs.has(attempt)) {
    attempt = `${base}-${i++}`;
  }
  return attempt;
}

const useAppStore: UseBoundStore<StoreApi<AppState & AppActions>> = create<
  AppState & AppActions
>((set, get) => ({
  ...initialState,
  setPage: (setPage: string) =>
    set((state: AppState & AppActions) => ({ ...state, page: setPage })),
  setTabsOrder: (order: string[]) =>
    set((state: AppState & AppActions) => ({ ...state, tabsOrder: order })),
  beginDrag: (slug: string) =>
    set((state: AppState & AppActions) => ({ ...state, draggingSlug: slug })),
  endDrag: () =>
    set((state: AppState & AppActions) => ({ ...state, draggingSlug: null })),

  addPageAt: (index: number) => {
    const { tabsOrder, dynamicPages } = get();
    const existing = new Set<string>(tabsOrder);
    // also include dynamic page slugs in case not yet in order
    Object.keys(dynamicPages).forEach(s => existing.add(s));
    const slug = generateUniqueSlug(existing, 'untitled');
    const name = `Untitled ${tabsOrder.length + 1}`;
    const newPage: Page = { slug, name, icon: 'document' };
    const newOrder = tabsOrder.slice();
    const clamped = Math.max(0, Math.min(index, newOrder.length));
    newOrder.splice(clamped, 0, slug);
    set((state: AppState & AppActions) => ({
      ...state,
      dynamicPages: { ...state.dynamicPages, [slug]: newPage },
      tabsOrder: newOrder,
      page: slug,
    }));
    return slug;
  },

  addPageToEnd: () => {
    const { tabsOrder } = get();
    const slug = generateUniqueSlug(new Set(tabsOrder), 'untitled');
    const name = `Untitled ${tabsOrder.length + 1}`;
    const newPage: Page = { slug, name, icon: 'document' };
    set((state: AppState & AppActions) => ({
      ...state,
      dynamicPages: { ...state.dynamicPages, [slug]: newPage },
      tabsOrder: [...state.tabsOrder, slug],
      page: slug,
    }));
    return slug;
  },
}));

export default useAppStore;

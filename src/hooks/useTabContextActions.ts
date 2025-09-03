import { PAGES } from '@/components/data';
import useAppStore from '@/stores/useAppStore';

function useTabContextActions() {
  const { tabsOrder, setTabsOrder } = useAppStore();

  const setFirstPage = (slug: string) => {
    const currentOrder =
      tabsOrder && tabsOrder.length > 0 ? tabsOrder : PAGES.map(p => p.slug);

    const rest = currentOrder.filter(s => s !== slug);
    const nextOrder = [slug, ...rest];
    setTabsOrder(nextOrder);
  };

  return { setFirstPage };
}

export default useTabContextActions;

import _ from 'lodash';

export interface IFCmn {
  setLoading: (f: boolean) => void;
  setHeader: (o: IFHeader) => void;
  getImageUrl: (p: string) => string;
}

export const useCmn = (): IFCmn => {
  const loadingStore = useLoadingStore();
  const headerStore = useHeaderStore();
  return {
    setLoading: (f: boolean) => {
      loadingStore.setPageLoading(f);
    },
    setHeader: (o: IFHeader) => {
      headerStore.setHeaderInfo(_.omitBy(o, _.isUndefined));
    },
    getImageUrl: (p: string) => {
      return p ? new URL(`/assets/image/${p}`, import.meta.url).href : '';
    },
  };
};

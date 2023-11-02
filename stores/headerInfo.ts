import { defineStore } from 'pinia';

export interface IFHeader {
  title?: string;
  hideHeader?: boolean;
  hideBack?: boolean;
  hideHome?: boolean;
}

export interface IFHeaderModule {
  headerInfo: IFHeader;
}

export const useHeaderStore = defineStore('headerInfo', {
  state: (): IFHeaderModule => ({
    headerInfo : {
        title: '',
        hideHeader: false,
        hideBack: false,
        hideHome: false,
    }
  }),
  getters: {
    getHeaderInfo: (state) => state.headerInfo,
  },
  actions: {
    setHeaderInfo(headerInfo: IFHeader) {
      this.headerInfo = {
        ...this.headerInfo,
        ...headerInfo,
      };
    },
  }
});
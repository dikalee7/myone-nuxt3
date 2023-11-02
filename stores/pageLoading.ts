import { defineStore } from 'pinia';

export interface IFLoadingModule {
  pageLoading: boolean;
}

export const useHeaderStore = defineStore('pageLoading', {
  state: (): IFLoadingModule => ({
    pageLoading: false,
  }),
  getters: {
    isLoading: (state) => state.pageLoading,
  },
  actions: {
    setPageLoading(pageLoading: boolean) {
      this.pageLoading = pageLoading;
    },
  }
});
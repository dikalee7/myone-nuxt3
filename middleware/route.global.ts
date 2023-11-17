export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to);
  const cmn = useCmn();

  cmn.setLoading(to.meta.continueLoading as boolean);
  cmn.setHeader({
    title: '',
    hideHeader: false,
    hideBack: false,
    hideHome: false,
  });

  const headerInfo: IFHeader = {
    title: to.meta.title as string,
    hideHeader: (to.meta.hideHeader ?? false) as boolean,
    hideBack: (to.meta.hideBack ?? false) as boolean,
    hideHome: (to.meta.hideHome ?? false) as boolean,
  };

  cmn.setHeader(headerInfo);
});

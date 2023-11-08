
export default defineNuxtRouteMiddleware((to, from) => {
    const headerInfo: IFHeader = {
        title: to.meta.title as string,
        hideHeader: (to.meta.hideHeader ?? false) as boolean,
        hideBack: (to.meta.hideBack ?? false) as boolean,
        hideHome: (to.meta.hideHome ?? false) as boolean,
    };
})
export interface IFConfirmOptions {
  color?: string;
  width?: number;
  zIndex?: number;
  noconfirm?: boolean;
}

export interface IFConfirmRequset {
  title: string;
  message: string;
  options?: IFConfirmOptions;
}

export interface IFMo {
  /** Description : Page Loading */
  alert: (o: IFConfirmRequset) => Promise<boolean>;
  confirm: (o: IFConfirmRequset) => Promise<boolean>;
}

export const useMo = (): IFMo => {
  const { $bus } = useNuxtApp();
  const reset = () => {
    $bus.$off('returnAlert');
  };

  const callback = () => {
    return new Promise((resolve) => {
      reset();
      ($bus as any).on('returnAlert', (f: boolean) => {
        reset();
        resolve(f);
      });
    });
  };

  const alert = (o: IFConfirmRequset) => {
    o.options = o.options ?? {};
    o.options = Object.assign(o.options, { noconfirm: true });
    $bus.$emit('showAlert', o);
    return callback() as Promise<boolean>;
  };

  const confirm = (o: IFConfirmRequset) => {
    o.options = o.options ?? {};
    o.options = Object.assign(o.options, { noconfirm: false });
    $bus.$emit('showAlert', o);
    return callback() as Promise<boolean>;
  };

  return { alert, confirm };
};

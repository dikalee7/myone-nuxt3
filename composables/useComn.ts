export interface IFCmn {
  setLoading: (f: boolean) => void;
  setHeader: (o: IFHeader) => void;
}

export interface IFMo {
  /** Description : Page Loading */
  alert: (o: IFConfirmRequset) => Promise<boolean>;
  confirm: (o: IFConfirmRequset) => Promise<boolean>;
}

export interface IFUtils {
  cmn: IFCmn;
  mo: IFMo;
}

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

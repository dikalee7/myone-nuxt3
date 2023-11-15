export interface IFActions {
  name: string;
  emnm: string;
  empr: object;
}

export interface IFCtInfo {
  id: number;
  title: string;
  subtitle: string;
  text: string;
  image?: string;
  gradient?: string;
  actions?: IFActions[];
}

export const useMainCt = () => {
  const mainCont: IFCtInfo[] = [
    {
      id: 1,
      title: '공통 가이드',
      subtitle: '',
      text: '공통 가이드 및 샘플',
      image: 'back-service.jpg',
      gradient: 'to top right, rgba(68, 69, 8,.8), rgba(244, 245, 203,.8)',
      actions: [
        {
          name: 'Coding Conventions',
          emnm: 'goPage',
          empr: { name: 'guide-CodingConventions', params: {} },
        },
        {
          name: 'useMo(alert, confirm)',
          emnm: 'goPage',
          empr: { name: 'guide-MoSample', params: {} },
        },
      ],
    },
    {
      id: 2,
      title: '',
      subtitle: 'MINE',
      text: `It's mine!!`,
      image: 'back-traffic.jpg',
      gradient: 'to top right, rgba(125, 46, 9,.8), rgba(250, 115, 52,.8)',
      actions: [
        {
          name: 'QR',
          emnm: 'goPage',
          empr: { name: 'qrView', params: {} },
        },
      ],
    },
    {
      id: 3,
      title: '',
      subtitle: 'STOCK',
      text: '주식 정보',
      image: 'back-travel.jpg',
      gradient: 'to top right, rgba(3, 5, 33,.8), rgba(100, 108, 227,.8)',
      actions: [
        {
          name: '기업정보',
          emnm: 'goPage',
          empr: { name: 'main', params: {} },
        },
      ],
    },
  ];

  const actArr = mainCont.map((m) => m.actions);

  return { mainCont, actArr };
};

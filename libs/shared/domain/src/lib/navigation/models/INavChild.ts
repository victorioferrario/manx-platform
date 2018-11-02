export interface INavChild {
  navId: string;
  sequence: number;
  navName: string;
  iconUri?: any;
  count: number;
  filterId: string;
  navChilds?: INavChild[];
}

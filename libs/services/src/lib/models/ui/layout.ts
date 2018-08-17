import { LoadProps, ILoadProps } from './load.props';
import { ISideNavProps, SideNavProps } from '../sidenav/sidenav.props';
export interface ILayoutProps {
    load: ILoadProps;
    props: ISideNavProps;
}
export class Layout implements ILayoutProps {     
        //@property: loadState 
        public load: ILoadProps;
        //@property: props = ISideNavProps;
        public props: ISideNavProps;
        //@constructor: optional:autobind;    
        constructor(autobind: boolean = true) {               
            this.load = new LoadProps();
            this.props = new SideNavProps(autobind);
        }
        //@method: none;
}

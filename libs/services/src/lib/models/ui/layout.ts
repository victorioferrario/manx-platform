import { LoadProps, ILoadProps } from './load.props';
import { ISideNavProps, SideNavProps } from '../sidenav/sidenav.props';
import { ISubHeaderProps, SubHeaderProps } from '../subheader';
export interface ILayoutProps {
    load: ILoadProps;
    props: ISideNavProps;
    childProps: ISubHeaderProps;
}
export class Layout implements ILayoutProps {
    subProps
    /**         
    * @property: load
    * @type: ILoadProps
    */
    public load: ILoadProps;
    /**
     * @property: props
     * @type: ISideNavProps         
     */
    public props: ISideNavProps;
    /**
     * @property: childProps
     * @type: ISubHeaderProps         
     */
    public childProps: ISubHeaderProps;
    /**
     * Creates an instance of layout.
     * @param [autobind] 
     */
    constructor(autobind: boolean = true) {
        this.load = new LoadProps();
        this.props = new SideNavProps(autobind);
        this.childProps = new SubHeaderProps(autobind);
    }
}

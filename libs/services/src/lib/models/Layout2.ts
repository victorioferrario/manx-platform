import { ILayout2, ISideNavProps, SideNavType, SideNavEnum, SideNavConfiguration, Size, SizeEnum } from './ILayout2';
import { MenuState } from './LayoutActions';
export class SideNavProps {
    css: string;
    size: Size;
    mode: SideNavType;
    opened: boolean;
    fixedTopGap: number;
    fixedBottomGap: number;
    fixedInViewport: boolean;
    constructor() { }
    public initialize(
        opened: boolean,
        mode: SideNavType,
        fixedTopGap?: number,
        fixedBottomGap?: number,
        fixedInViewport?: boolean) {
        const self = this;
        self.css = 
        self.mode = mode;
        self.opened = opened;
        self.fixedTopGap = fixedTopGap;
        self.fixedBottomGap = fixedBottomGap;
        self.fixedInViewport = fixedInViewport;
        return true;
    }
    resize(toSize: SizeEnum) {
        this.size = toSize;
        this.css = SideNavConfiguration.configCssClass + this.size;
        // switch (toSize) {
        //     case SizeEnum.small:
        //      this.css = SideNavConfiguration.configCssClass + this.size;
        //         break;
        //     case SizeEnum.medium:
        //     this.css = SideNavConfiguration.configCssClass + this.size;
        //         break;
        //     case SizeEnum.large:
        //     this.css = SideNavConfiguration.configCssClass + this.size;
        //         break;
        // }
    }
}
export class Layout2 implements ILayout2 {
    public state: MenuState;
    public loading: boolean;
    public props: ISideNavProps;
    constructor(state: boolean = true) {
        this.props = new SideNavProps();
        this.props.initialize(
            state,
            SideNavEnum.side,
            SideNavConfiguration.configFixedTopGap,
            SideNavConfiguration.configFixedBottomGap,
            SideNavConfiguration.configFixedInViewPort
        )
        this.props.size = SizeEnum.large;
        this.state = state ? MenuState.Open : MenuState.Closed;
        console.log(this.state);
        console.log(state ? MenuState.Open : MenuState.Closed);
    }
}
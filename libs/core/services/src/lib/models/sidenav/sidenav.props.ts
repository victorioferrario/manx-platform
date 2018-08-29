import { Size, SizeEnum, Mode, ModeEnum } from './sidenav.types';
import { SideNavConfiguration as Config } from './sidenav.config';
export interface ISideNavProps {
    size: Size;
    mode: Mode;
    opened: boolean;
    cssClass: string;
    defaultCssClass: string;
    fixedTopGap: number;
    fixedBottomGap: number;
    fixedInViewport: boolean;
    initialize(
        mode: Mode,
        size: Size,
        open: boolean,
        cssClass: string,
        fixedTopGap?: number,
        fixedBottomGap?: number,
        fixedInViewport?: boolean): boolean;
    resize(toSize: SizeEnum): boolean;
    changeOpenedState():void;
}
export class SideNavProps implements ISideNavProps {
    size: Size;
    mode: Mode;
    cssClass: string;
    defaultCssClass: string;
    opened: boolean;
    fixedTopGap: number;
    fixedBottomGap: number;
    fixedInViewport: boolean;
    constructor(autobind?: boolean) {
        if (autobind) {
            this.initialize(
                ModeEnum.side,
                SizeEnum.large,
                Config.Opened,
                Config.CssClass,
                Config.FixedTopGap,
                Config.FixedBottomGap,
                Config.FixedInViewPort);
        }
    }
    public initialize(        
        mode: Mode,
        size: Size,
        opened: boolean,
        cssclass: string,
        fixedTopGap?: number,
        fixedBottomGap?: number,
        fixedInViewport?: boolean): boolean {
        const self = this;
        self.mode = mode;  
        self.size = size;      
        self.opened = opened;
        self.cssClass = cssclass;
        self.fixedTopGap = fixedTopGap;
        self.fixedBottomGap = fixedBottomGap;
        self.fixedInViewport = fixedInViewport;return true;
    }
    public resize(toSize: SizeEnum) {
        //ToDo: Implement
        this.size = toSize;
        this.cssClass = Config.CssClass + this.size;      
        return true;
    }
    public changeOpenedState(){
        const self =this;
        self.opened = self.mode === ModeEnum.push || self.mode === ModeEnum.over ? false : true;  
    }
}

// { ISideNavProps, ISubHeaderProps }
export type Size = SizeEnum.small | SizeEnum.medium |SizeEnum.large;
export enum SizeEnum {
    small = "small",
    medium = "medium",
    large = "large"
}

export type SideNavType = SideNavEnum.side | SideNavEnum.push | SideNavEnum.over;
export enum SideNavEnum {
    side = "side",
    push = "push",
    over = "over"
}
export class SideNavConfiguration {    
    public static configFixedTopGap = 148;
    public static configFixedBottomGap = 0;
    public static configFixedInViewPort = true;
    public static configCssClass="fabric-sidenav-nav";
}
export interface ISideNavProps {
    css : string;
    size: Size;
    mode: SideNavType;
    opened: boolean;
    fixedTopGap: number;
    fixedBottomGap: number;
    fixedInViewport: boolean;
    initialize(opened: boolean,
        mode: SideNavType,
        fixedTopGap?: number,
        fixedBottomGap?: number,
        fixedInViewport?: boolean): boolean;
}
export interface ILayout2 {
    loading: boolean;
    props: ISideNavProps;
}

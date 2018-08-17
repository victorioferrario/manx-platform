export interface ISideNavConfiguration {
    Opened:boolean;
    CssClass:string;
    FixedTopGap:number;
    FixedBottomGap:number;
    FixedInViewPort:boolean;   
}
export class SideNavConfiguration {    
    public static Opened = true;    
    public static FixedTopGap = 148;
    public static FixedBottomGap = 0;
    public static FixedInViewPort = true;
    public static CssClass="sidenav-root-large";
}

// ISideNavConfiguration, SideNavConfiguration
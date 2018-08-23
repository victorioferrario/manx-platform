import { SubHeaderConfiguration as Config } from './sub.config';
export interface ISubHeaderProps {
    cssClass:string;
    initialize(cssClass:string):boolean;
}
export class SubHeaderProps implements ISubHeaderProps {
    cssClass:string;    
    constructor(autobind?: boolean) {    
        if(autobind) {
            this.initialize(
                Config.CssClass);
        }    
    }
    public initialize (cssClass:string){
        const self = this;
        self.cssClass = cssClass;return true;
    }
}
//{ SideNavProps, SubHeaderProps }
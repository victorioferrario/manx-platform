import { LoadStateEnum, VisibleEnum } from '../enums';
export interface ILoadProps {    
    target?: string; 
    message?: string;    
    state?:LoadStateEnum;
    display?: VisibleEnum;
}
export class LoadProps implements ILoadProps {
    target:string;
    message:string;
    state:LoadStateEnum;
    display: VisibleEnum;
    constructor(){
        const self = this;
        self.state = LoadStateEnum.Loading;
        self.display = VisibleEnum.None;
    }
    

}
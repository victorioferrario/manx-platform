export interface ILookupItem {
    code: string;
    value: string;
}
export interface ILookupMain {
    id?: string;
    name?: string;
    values?: ILookupItem[];
}

export interface ITemplateUpdateItemRequest {
    id: string;
    name: string;
    path?: string;
    datemodified?: Date;
    modifiedById?: string; 
}
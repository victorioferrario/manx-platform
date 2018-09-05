import { IValidationFailure } from './IValidationFailure';

export interface ILoadValidationError {
    lineNumber?: number;
    errors?: IValidationFailure[];
}
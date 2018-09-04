import { IValidationFailure } from './IValidationFailure';

export interface ILoadValidationError {
    lineNumber?: number;
    errors?: IValidationFailure[];
}
// import { ILoadValidationError } from './ILoadValidationError';
// export { ILoadValidationError } from './ILoadValidationError';
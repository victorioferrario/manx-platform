export interface IValidationFailure {
    propertyName?: string;
    errorMessage?: string;
    attemptedValue?: string;
    customState?: any; // no custom object on swagger
    severity?: number;
    errorCode?: string;
    formattedMessageArgumented?: any[]; // no custom object on swagger
    formattedMessagePlaceholderValues?: any[]; // no custom object on swagger
    resourceName?: string;
}
export function useFieldErrorHandler<T>(errObj: T): {formHavingError: boolean} {
    let formHavingError: boolean = false;

    if (Object.keys(errObj)) {
        for (let err in errObj) {
            // If fields inside errObj are not null, then it means it
            // has some error message
            if (errObj[err] !== null) {
                formHavingError = true;
            }         
        }
    }

    return {formHavingError};
}
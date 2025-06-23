export type TRequestError = {
    code?: string;
    response?: {
        data?: {
            message?: string;
        };
    };
};

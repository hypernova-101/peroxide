export interface Social {
    name: string,
    platform: string,
    createdAt?: Date
}

export enum Response { 
    SUCCESS,
    FAIL
}
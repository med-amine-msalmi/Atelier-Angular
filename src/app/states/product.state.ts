export enum DataState{
    LOADING,
    LOADED,
    ERROR
}

export interface AppDataState<Type>{
    dataState:DataState,
    data?:Type,
    errorMessage?:string
}
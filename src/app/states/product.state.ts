export enum DataState{
    LOADING,
    LOADED,
    ERROR
}

export enum FilteredValue{
    All,
    Selected,
    available
}

export interface AppDataState<Type>{
    dataState:DataState,
    data?:Type,
    errorMessage?:string
}
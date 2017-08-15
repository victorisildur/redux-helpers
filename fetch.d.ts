import { Reducer } from 'redux';
import { FluxStandardAction } from 'flux-standard-action';
import { Map } from 'immutable';

interface FetchState {
    stage: string;
    data: any;
    error: Error;
}

export enum FetchStage {
    Pending,
    Fetching,
    Done,
    Failed,
}

export function generateFetchReducer({ actionType, initialData }: {
    actionType: string;
    initialData?: any;
}): Reducer<Map<any, any>>

export function generateFetchActionCreators({ actionType }: {
    actionType: string
}): {
        start: () => FluxStandardAction<any, any>,
        done: (data: any) => FluxStandardAction<any, any>,
        update: (data: any) => FluxStandardAction<any, any>,
        reset: () => FluxStandardAction<any, any>,
        fail: (err: any) => FluxStandardAction<any, any>,
    }

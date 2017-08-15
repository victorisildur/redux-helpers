import { Reducer } from 'redux';
import { FluxStandardAction } from 'flux-standard-action';
import { Map } from 'immutable';

export enum WorkflowStage {
    Pending,
    Started,
    Performing,
    Done,
    Failed
}

export function getWorkflowActions(actionType: string): {
    Start: string,
    Perform: string,
    Cancel: string,
    Success: string,
    Error: string,
    Reset: string,
}

export function generateWorkflowReducer({ actionType }: {
    actionType: string
}): Reducer<Map<any, any>>

export function generateWorkflowActionCreators({ actionType }: {
    actionType: string
}): {
        start: (param?: any) => FluxStandardAction<any, any>,
        perform: (target?: any) => FluxStandardAction<any, any>,
        done: (target: any) => FluxStandardAction<any, any>,
        fail: (error?: any) => FluxStandardAction<any, any>,
        cancel: () => FluxStandardAction<any, any>
    }
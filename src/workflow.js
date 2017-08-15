/**
 * Workflow helper
 */
import { Map } from 'immutable';
import { FluxStandardAction } from 'flux-standard-action';

export const WorkflowStage = {
  Pending: 'Pending',
  Started: 'Started',
  Performing: 'Performing',
  Done: 'Done',
  Failed: 'Failed'
}

export const getWorkflowActions = (actionType) => ({
  Start: actionType + '_START',
  Perform: actionType + '_PERFORM',
  Cancel: actionType + '_CANCEL',
  Success: actionType + '_SUCCESS',
  Error: actionType + '_ERROR',
  Reset: actionType + '_RESET'
})

export const generateWorkflowReducer = ({ actionType }) => {
  const Actions = getWorkflowActions(actionType);
  const initialState = Map({
    stage: WorkflowStage.Pending,
    target: null,
    param: null,
    error: null
  })
  return (state = initialState, action) => {
    switch (action.type) {
      case Actions.Start:
        return state
          .set('stage', WorkflowStage.Started)
          .set('param', action.payload)
      case Actions.Perform:
        return state
          .set('stage', WorkflowStage.Performing)
          .set('target', action.payload)
      case Actions.Cancel:
        return state.set('stage', WorkflowStage.Pending)
      case Actions.Success:
        return state.set('stage', WorkflowStage.Done)
      case Actions.Error:
        return state
          .set('stage', WorkflowStage.Failed)
          .set('error', action.error)
      default:
        return state;
    }
  }
}

export const generateWorkflowActionCreators = ({ actionType }) => {
  const Actions = getWorkflowActions(actionType);
  const start = (param) => ({
    type: Actions.Start,
    payload: param
  })
  const perform = (target) => ({
    type: Actions.Perform,
    payload: target
  })
  const done = (target) => ({
    type: Actions.Success,
    payload: target
  })
  const fail = (e) => ({
    type: Actions.Error,
    error: e
  })
  const cancel = () => ({
    type: Actions.Cancel
  })
  return {
    start,
    perform,
    done,
    fail,
    cancel
  }
}

/**
 * 抽象Fetch动作的reducer generator, action creator generator
 */
import { Map, fromJS } from 'immutable'

export const FetchStage = {
  Pending: 'Pending',
  Fetching: 'Fetching',
  Done: 'Done',
  Failed: 'Failed'
}

export const getFetchActions = (actionType) => ({
  Start: actionType + '_START',
  Done: actionType + '_DONE',
  Fail: actionType + '_FAIL',
  Update: actionType + '_UPDATE',
  Reset: actionType + '_RESET'
})

export const generateFetchReducer = ({ actionType, initialData }) => {
  const Actions = getFetchActions(actionType);
  initialData = initialData || null;
  const initialState = Map({
    stage: FetchStage.Pending,
    data: initialData,
    error: null
  });
  return (state = initialState, action) => {
    switch (action.type) {
      case Actions.Start:
        return state
          .set('stage', FetchStage.Fetching)
          .set('data', initialData)
          .set('error', null)
      case Actions.Done:
        return state
          .set('stage', FetchStage.Done)
          .set('data', fromJS(action.payload))
          .set('error', null)
      case Actions.Update:
        return state
          .set('stage', FetchStage.Done)
          .set('data', fromJS(action.payload))
          .set('error', null)
      case Actions.Fail:
        return state
          .set('stage', FetchStage.Failed)
          .set('error', action.error)
      case Actions.Reset:
        return state
          .set('stage', FetchStage.Pending)
          .set('data', initialData)
          .set('error', null)
      default:
        return state;
    }
  }
}

export const generateFetchActionCreators = ({ actionType }) => {
  const Actions = getFetchActions(actionType);
  return {
    start: () => ({
      type: Actions.Start
    }),
    done: (data) => ({
      type: Actions.Done,
      payload: data
    }),
    update: (data) => ({
      type: Actions.Update,
      payload: data
    }),
    reset: () => ({
      type: Actions.Reset
    }),
    fail: (err) => ({
      type: Actions.Fail,
      error: err
    })
  }
}

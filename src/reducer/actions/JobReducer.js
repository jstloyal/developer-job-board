import { ACTIONS } from './MyActions';

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return {
        loading: true, jobs: []
      }
    case ACTIONS.GET_DATA:
      return {
        ...state, loading: false, jobs: action.payload.jobs
      }
    case ACTIONS.ERROR:
      return {
        ...state, loading: false, error: action.payload.error, jobs: []
      }
  }
}

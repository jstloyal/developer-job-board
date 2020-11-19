// import { ACTIONS } from '../actions/JobAction'

const InitialState = {
  loading: false,
  data: [],
  errorMsg: ''
}

export default function JobListReducer(state = InitialState, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return {
        ...state, loading: true, jobs: []
      }
    case ACTIONS.GET_DATA:
        return { 
          ...state, loading: false, jobs: action.payload.jobs 
        }
    case ACTIONS.ERROR:
      return {
        ...state, loading: false, error: action.payload.error, jobs: []
      }
    default:
      return state
  }
}

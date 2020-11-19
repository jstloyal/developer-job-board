const InitialState = {
  loading: false,
  jobs: [],
  error: ''
}

export default function JobListReducer(state = InitialState, action) {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
        jobs: [],
        error: '',
      }
    default:
      return state;
  }
}

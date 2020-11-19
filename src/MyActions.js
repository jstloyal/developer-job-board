const MAKE_REQUEST = 'MAKE_REQUEST';
const GET_DATA = 'GET_DATA';
const ERROR = 'error',

export default function JobListLoad(){
  return {type: MAKE_REQUEST,}
}

// export const ACTIONS = {
//   MAKE_REQUEST: 'make-request',
//   GET_DATA: 'get-data',
//   ERROR: 'error',
// }

// export default function reducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.MAKE_REQUEST:
//       return {
//         loading: true, jobs: []
//       }
//     case ACTIONS.GET_DATA:
//       return {
//         ...state, loading: false, jobs: action.payload.jobs
//       }
//     case ACTIONS.ERROR:
//       return {
//         ...state, loading: false, error: action.payload.error, jobs: []
//       }
//   }
// }
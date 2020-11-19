import axios from 'axios';

const JOB_LIST_LOADING = 'JOB_LIST_LOADING';
const JOB_LIST_SUCCESS = 'JOB_LIST_SUCCESS';
const JOB_LIST_FAIL = 'JOB_LIST_FAIL';

export const JobListLoading = () => ({
  type: JOB_LIST_LOADING,
});

export const JobListSuccess = jobs => ({
  type: JOB_LIST_SUCCESS,
  payload: jobs,
});
export const JobListFailure = error => ({
  type: JOB_LIST_FAIL,
  payload: error,
});

export const GetJobList = () => async dispatch => {
  try {
    dispatch(JobListLoading());

    const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?';

    const result = await axios.get(BASE_URL);
    const jobs = result.data;
    dispatch(JobListSuccess(jobs));
  } catch (e) {
    dispatch(JobListFailure(e));
  }
};

const JOB_LOADING = 'JOB_LOADING';
const JOB_FAIL = 'JOB_FAIL';

export const JobLoading = () => ({
  type: JOB_LOADING,
});

export const JobFailure = error => ({
  type: JOB_FAIL,
  payload: error,
});

export const GetJob = job => async dispatch => {
  try {
    dispatch(JobLoading());

    const BASE_URL = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${job}.json?`;

    const result = await axios.get(BASE_URL);

    dispatch({

      type: 'JOB_SUCCESS',
      payload: result.data,
      jobId: job,
    });
  } catch (e) {
    dispatch(JobFailure(e));
  }
};

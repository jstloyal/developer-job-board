import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { GetJob } from '../redux/actions/JobAction';
import Loading from '../components/Loading';
import JobResults from '../components/JobResults';

const Job = ({ match }) => {
  const jobId = match.params.job;
  const dispatch = useDispatch();
  const jobState = useSelector(state => state.Job);

  React.useEffect(() => {
    dispatch(GetJob(jobId));
  }, []);

  const ShowData = () => {
    if (!_.isEmpty(jobState.data[jobId])) {
      const jobData = jobState.data[jobId];
      return <JobResults jobData={jobData} />;
    }

    if (jobState.loading) {
      return (
        <div>
          <p>Loading...</p>
          <Loading />
        </div>
      );
    }

    if (jobState.errorMsg !== '') {
      return (
        <p>
          {jobState.errorMsg}
        </p>
      );
    }

    return <p>Unable to get job data</p>;
  };

  return (
    <Container>
      {ShowData()}
    </Container>
  );
};

export default Job;

Job.propTypes = {

  match: PropTypes.shape({
    params: PropTypes.shape({
      job: PropTypes.string.isRequired,
    }),
  }),
};

Job.defaultProps = {
  match: () => {},
};

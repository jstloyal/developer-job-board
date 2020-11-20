import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Container, Card, Badge, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { GetJob } from '../redux/actions/JobAction';

const Job = ({match}) => {
  const jobId = match.params.job;
  const dispatch = useDispatch();
  const jobState = useSelector(state => state.Job);

  React.useEffect(() => {
    dispatch(GetJob(jobId));
  }, []);

  console.log(jobState);

  const ShowData = () => {
    if (!_.isEmpty(jobState.data[jobId])) {
      const jobData = jobState.data[jobId];
      return (
        <Card style={{width: 80%}}>
          <Card.Img 
            variant="top" 
            src={jobData.company_logo} 
            alt={jobData.company} 
            style={{maxHeight: 200, maxWidth: 800}}
          />
          <Card.Body>
            <Card.Title>
              <h3>{jobData.title}</h3>
            </Card.Title>
            <Card.Subtitle>
              <h5>{jobData.location}</h5>
            </Card.Subtitle>
            <Card.Text>
              <p>{jobData.description}</p>
              <Button variant="primary">
                Apply
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }

    if (jobState.loading) {
      return <p>Loading...</p>
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
}

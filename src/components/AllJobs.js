import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Badge, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';

const AllJobs = ({ jobList }) => {
  if (!jobList) {
    return null;
  }
  return (
    <div>
      <h2>
        Showing
        {jobList.data.length}
        {' '}
        jobs
      </h2>
      <div>
        {jobList.data.map(job => (
          <Card key={job.id} className="mb-3">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <Card.Title>
                    {job.title}
                    {' '}
                    -
                    <span className="text-muted font-weight-light">{job.company}</span>
                  </Card.Title>
                  <Card.Subtitle className="text-muted mb-2">
                    {new Date(job.create_at).toLocaleDateString}
                  </Card.Subtitle>
                  <Badge variant="secondary" className="mr-2">{job.type}</Badge>
                  <Badge variant="secondary">{job.location}</Badge>
                  <div style={{ wordBreak: 'break-all' }}>
                    {Parser(job.how_to_apply)}
                  </div>
                </div>
                <img src={job.company_logo} alt={job.company} className="d-sm-none d-md-block" height="50" />
              </div>
              <Card.Text>
                <Button variant="primary">
                  <Link to={`/job/${job.id}`}>Open Details</Link>
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;

AllJobs.propTypes = {
  jobList: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

AllJobs.defaultProps = {
  jobList: [],
};

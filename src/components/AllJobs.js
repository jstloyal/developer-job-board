import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Badge, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AllJobs = ({ jobList }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {jobList.title} - <span className="text-muted font-weight-light">{jobList.company}</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new Date(jobList.create_at).toLocaleDateString}
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2">{jobList.type}</Badge>
            <Badge variant="secondary">{jobList.location}</Badge>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

AllJobs.propTypes = {
  jobList: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

AllJobs.defaultProps = {
  jobList: [],
};

export default AllJobs;

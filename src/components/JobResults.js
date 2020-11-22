import React from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';
import { Card, Button } from 'react-bootstrap';

const JobResults = ({ jobData }) => (
  <div>
    <Card style={{width: '100%'}} className="d-flex align-items-center p-5 mb-4 mt-5">
      <a href={jobData.company_url}>
        <Card.Img 
          variant="top" 
          src={jobData.company_logo} 
          alt={jobData.company} 
          style={{maxHeight: 200, maxWidth: 200}}
        />
      </a>
      <Card.Body>
        <Card.Title>
          <h3>{jobData.title}</h3>
        </Card.Title>
        <Card.Subtitle>
          <h5>{jobData.location} {jobData.type}</h5>
          <small>Posted on: {new Date(jobData.created_at).toLocaleDateString()}</small>
        </Card.Subtitle>
        <Card.Text className="mt-2">
          <p>{Parser(jobData.description)}</p>
          <p>{Parser(jobData.how_to_apply)}</p>
          <Button variant="primary">
            Apply 
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
);

export default JobResults;

JobResults.propTypes = {
  jobData: PropTypes.shape({
    company_url: PropTypes.string.isRequired,
    company_logo: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    how_to_apply: PropTypes.string.isRequired,
  }),
};
JobResults.defaultProps = {
  jobData: [],
};

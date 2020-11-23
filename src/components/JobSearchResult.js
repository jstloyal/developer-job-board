import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Badge, Button } from 'react-bootstrap';
import Parser from 'html-react-parser';

const JobSearchResult = ({ search }) => {
  if (!search) {
    return null;
  }
  return (
    <div>
      <h2>
        Showing
        {search.length}
        {' '}
        jobs
      </h2>
      <div>
        {search.map(searchItem => (
          <Card key={searchItem.id} className="mb-3">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <Card.Title>
                    {searchItem.title}
                    {' '}
                    -
                    <span className="text-muted font-weight-light">{searchItem.company}</span>
                  </Card.Title>
                  <Card.Subtitle>
                    {new Date(searchItem.create_at).toLocaleDateString}
                  </Card.Subtitle>
                  <Badge variant="secondary" className="mr-2">{searchItem.type}</Badge>
                  <Badge variant="secondary">{searchItem.location}</Badge>
                  <div style={{ wordBreak: 'break-all' }}>
                    {Parser(searchItem.how_to_apply)}
                  </div>
                </div>
                <img src={searchItem.company_logo} alt={searchItem.company} className="d-sm-none d-md-block" height="50" />
              </div>
              <Card.Text>
                <Button variant="primary">
                  <Link to={`/job/${searchItem.id}`} className="text-white">Open Details</Link>
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobSearchResult;

JobSearchResult.propTypes = {
  search: PropTypes.arrayOf(
    PropTypes.shape({
      0: PropTypes.objectOf(
        PropTypes.shape({
          id: PropTypes.string,
          backdrop_path: PropTypes.string,
          name: PropTypes.string,
        }),
      ),
    }),
  ),
};

JobSearchResult.defaultProps = {
  search: [],
};

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const JobSearchResult = ({ search }) => {
  if (!search) {
    return null;
  }
  return (
    <Card>
      <h2>Showing {search.length} jobs</h2>
      <div>
        {search.map(searchItem => (
          <Card.Body>
            <div className="d-flex justify-content-between">
              <div>
                <Card.Title>
                  {searchItem.title} - <span className="text-muted font-weight-light">{searchItem.company}</span>
                </Card.Title>
                <Card.Subtitle>
                  {new Date(searchItem.create_at).toLocaleDateString}
                </Card.Subtitle>
                <Badge variant="secondary" className="mr-2">{searchItem.type}</Badge>
                <Badge variant="secondary">{searchItem.location}</Badge>
                <div style={{wordBreak: 'break-all'}}>
                  <ReactMarkdown source={searchItem.how_to_apply} />
                </div>
              </div>
              <img src={searchItem.company_logo} alt={searchItem.company} className="d-sm-none d-md-block" height="50" />
            </div>
            <Card.Text>
              <Button variant="primary">
                <Link to={`/job/${searchItem.id}`}>Open Details</Link>
              </Button>
            </Card.Text>
          </Card.Body>
        ))}
      </div>
    </Card>
  );
};

export default JobSearchResult;

JobSearchResult.propTypes = {
  search: PropTypes.arrayOf(
    PropTypes.shape({
      0: PropTypes.objectOf(
        Proptypes.shape({
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
}

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { GetJobList } from '../redux/actions/JobAction';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { Container, Card, Badge, Button, Form, Col } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown'
import JobSearchResult from '../components/JobSearchResult';

const JobList = () => {
  const dispatch = useDispatch();
  const jobList = useSelector(state => state.JobList);
  const [search, setSearch] = useState([]);
  const [isSearchActive, setSearchActive] = useState(false);

  const handleSearch = e => {
    if (e.target.value === '') {
      setSearch([]);
      setSearchActive(false);
      return;
    }
    setSearchActive(true);
    setSearch(
      jobList.data.filter(jobFilter => {
        const jobItem = jobFilter.description || jobFilter.location;
        return jobItem.toLowerCase().includes(e.target.value.toLowerCase());
      }),
    );
  };

  const FetchData = page => {
    dispatch(GetJobList(page));
  };
  console.log('job', jobList.data)

  console.log('search', search);
  React.useEffect(() => {
    FetchData(1)
  }, []);

  const ShowData = () => {
    if (jobList.loading) {
      return (
        <div>
          <h1>Loading...</h1>
          <Loading />
        </div>
      );
    }

    if (isSearchActive) {
      return (
        <JobSearchResult search={search} />
      );
    }

    if (!_.isEmpty(jobList.data)) {
      return (
        <div>
          <h2>
            Showing {jobList.data.length} jobs per page.
          </h2>
          <div>
            {jobList.data.map(job => (
              <Card className="mb-3">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <div>
                      <Card.Title>
                        {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
                      </Card.Title>
                      <Card.Subtitle>
                        {new Date(job.create_at).toLocaleDateString}
                      </Card.Subtitle>
                      <Badge variant="secondary" className="mr-2">{job.type}</Badge>
                      <Badge variant="secondary">{job.location}</Badge>
                      <div style={{wordBreak: 'break-all'}}>
                        <ReactMarkdown source={job.how_to_apply} />
                      </div>
                    </div>
                    <img src={job.company_logo} alt={job.company} className="d-sm-none d-md-block" height="50" />
                  </div>
                  <Card.Text>
                    <Button variant="primary">
                      <Link to={`/job/${job.id}`} className="text-white">Open Details</Link>
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      );
    }

    if (jobList.errorMsg !== '') {
      return (
        <p>
          {' '}
          {jobList.errorMsg}
        </p>
      );
    }
    return <p>Unable to get data</p>;
  };
  return (
    <div>
      <Container>
        <Form className="mb-4">
          <Form.Row className="align-items-end">
            <Form.Group as={Col}>
              <Form.Label>Description</Form.Label>
              <Form.Control onChange={handleSearch} name="description" type="text" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Location</Form.Label>
              <Form.Control onChange={handleSearch} name="location" type="text" />
            </Form.Group>
          </Form.Row>
        </Form>
        {ShowData()}
      </Container>
    </div>
  );
};

export default JobList;

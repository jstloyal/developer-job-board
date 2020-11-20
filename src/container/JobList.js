import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import AllJobs from '../components/AllJobs';
import { GetJobList } from '../redux/actions/JobAction';
import Loading from '../components/Loading';

const JobList = () => {
  // const dispatch = useDispatch()

  // const jobList = useSelector(state => state.JobList);
  // const [search, setSearch] = useState([]);

  // const FetchData = () => {
  //   dispatch(GetJobList());
  // };

  // React.useEffect(() => {
  //   FetchData(2);
  // }, []);

  // const ShowData = () => {
  //   // if (jobList.loading) {
  //   //   return (
  //   //     <div>
  //   //       <h2>Loading...</h2>
  //   //       <Loading />
  //   //     </div>
  //   //   );
  //   // }

  //   return (
  //     <div>
  //       <h1>Hello world</h1>
  //       <AllJobs jobList={jobList} />
  //     </div>
      
  //   )
  // }

  return (
    <Container>
      <AllJobs />
      {/* {ShowData()} */}
    </Container>
  );
};

export default JobList;

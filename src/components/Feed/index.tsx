import React from 'react';

// import components
import Tweet from '../Tweet';

// import styles
import { Container, Tab, Tweets } from './styles';

/* Define component */
const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
};

export default Feed;

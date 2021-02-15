import React from 'react';

// import styled components
import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  SearchIcon,
  HomeIcon,
  BellIcon,
  EmailIcon,
} from './styles';

// import component
import ProfilePage from '../ProfilePage';

/* component */
const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Agustin Gimenez</strong>
          <span>500 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />
      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;

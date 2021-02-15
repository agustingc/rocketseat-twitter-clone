import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Edit Profile</EditButton>
        <h1>Agustin Gimenez</h1>
        <h2>@a_gimenez</h2>
        <p>React Developer</p>
        <ul>
          <li>
            <LocationIcon />
            Montreal, QC
          </li>
          <li>
            <CakeIcon />
            January 1st, 2021
          </li>
        </ul>
      </ProfileData>

      <Followage>
        <span>
          Following <strong> 100</strong>
        </span>
        <span>
          <strong>50 </strong> followers
        </span>
      </Followage>

      <Feed />
    </Container>
  );
};

export default ProfilePage;

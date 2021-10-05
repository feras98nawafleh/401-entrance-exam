import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div style={{ textAlign: 'center' }}>
        <img src={user.picture} alt={user.name} />
        <h2> Your Name is {user.name}</h2>
        <p> Your Email is : {user.email}</p>
      </div>
    )
  );
};

export default Profile;

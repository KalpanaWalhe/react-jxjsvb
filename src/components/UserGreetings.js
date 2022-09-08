import React from 'react';

export const UserGreetings = () => {
  const isLoggedIn = true;

  return (
    <div>
      <h1>Welcome {isLoggedIn && 'Atos'}</h1>
    </div>
  );
};

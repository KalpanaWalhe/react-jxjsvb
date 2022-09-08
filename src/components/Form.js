import React, { useState } from 'react';

export const Form = () => {
  const [username, setUsername] = useState('');
  const submitHandler = (event) => {
    event.preventDefault();
    alert(`${username}`);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

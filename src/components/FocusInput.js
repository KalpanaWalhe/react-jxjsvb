import React, { useRef, useEffect } from 'react';

export const FocusInput = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const submitHandler = () => {
    alert(`${inputRef.current.value}`);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <input type="text" ref={inputRef} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

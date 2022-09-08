import React from 'react';
export const NameList = () => {
  const names = ['abc', 'pqr', 'xyz', 'ffs'];
  return (
    <div>
      <ol>
        {names.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ol>
    </div>
  );
};

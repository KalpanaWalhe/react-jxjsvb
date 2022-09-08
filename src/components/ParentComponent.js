import React from 'react';

import { ChildComponent } from './ChildComponent';
export const ParentComponent = () => {
  const greetParent = (childArgument) => {
    alert(`Hello Parent ${childArgument}`);
  };
  return (
    <div>
      <ChildComponent greetHandler={greetParent} />
    </div>
  );
};

/**
 * DummyControl
 *
 * Renders an information field mentioning that this property can't be generated.
 */

import React from 'react';

const FunctionControl = ({ label, secondaryLabel }) => (
  <div>
    {label} - {secondaryLabel} - function
  </div>
);

FunctionControl.randomValue = () => () => {
  console.log('executed') // eslint-disable-line
};

export default FunctionControl;

import React, { FunctionComponent } from 'react';

const name = process.env.REACT_APP_NAME as string;
const version = process.env.REACT_APP_VERSION as string;
const environment = process.env.REACT_APP_ENVIRONMENT as string;

export const ModePlatform: FunctionComponent = () => {
  return (
    <div>
      <div>Platform</div>
      <div>{`name: ${name}`}</div>
      <div>{`version: ${version}`}</div>
      <div>{`environment: ${environment}`}</div>
    </div>
  );
};

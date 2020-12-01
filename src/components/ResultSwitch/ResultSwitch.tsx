import React, { FunctionComponent, ReactNode } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { DataResult, DataStatus } from 'models';

export interface ResultSwitchProps {
  result?: DataResult;
  children?: ReactNode;
}

export const ResultSwitch: FunctionComponent<ResultSwitchProps> = ({
  result, children,
}: ResultSwitchProps) => {
  if (!result){
    return <div>no result</div>;
  }
  switch (result.status) {
    case DataStatus.Success:
      return <div>{children}</div>;
    case DataStatus.Pending:
      return <CircularProgress />;  
    case DataStatus.Failure:
      return <div>{result.message}</div>;
  }
  return <div>unknown status</div>;
};
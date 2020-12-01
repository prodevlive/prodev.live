/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { ContentNode } from 'components/Content/ContentNode';
import { ContentIndex } from 'components/Content/ContentIndex';
import { ContentSwitch } from 'components/Content/ContentSwitch';
import { TextViewer } from 'components/Text/TextViewer';
import { TextPaths } from '../TextEnum';
import Overview from '!raw-loader!./Overview.md';
import Deployment from '!raw-loader!./Deployment/Deployment.md';
import DeploymentAmplify from '!raw-loader!./Deployment/Amplify.md';
import AmplifyInit from './Deployment/AmplifyInit.png';
import AmplifyConfigure from './Deployment/AmplifyConfigure.png';

const assets = new Map<string, string>();
assets.set('AmplifyInit', AmplifyInit);
assets.set('AmplifyConfigure', AmplifyConfigure);

const overview = ContentNode.fromPath('Overview', TextPaths.Overview, <TextViewer md={Overview} assets={assets} />);
const deployment = ContentNode.fromPath('Deployment', TextPaths.Deployment, <TextViewer md={Deployment} assets={assets} />);
deployment.contents = [ContentNode.fromPath('Amplify', TextPaths.DeploymentAmplify, <TextViewer md={DeploymentAmplify} assets={assets} />)];
const content = ContentNode.fromContents('text-content', [overview, deployment]);
export const TextContent = ContentNode.fromContents('text-container', [
  ContentNode.fromGroup('text-index-group', 15, [
    ContentNode.fromPath(
      'text-index',
      'text-index',
      <ContentIndex
        content={content}
      />,
    ),
  ]),
  ContentNode.fromGroup('text-switch-group', 85, [
    ContentNode.fromPath(
      'text-switch',
      'text-switch',
      <ContentSwitch
        content={content}
      />,
    ),
  ]),
]);

 
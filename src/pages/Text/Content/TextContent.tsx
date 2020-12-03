/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { ContentNode } from 'components/Content/ContentNode';
import { ContentIndex } from 'components/Content/ContentIndex';
import { ContentSwitch } from 'components/Content/ContentSwitch';
import { TextViewer } from 'components/Text/TextViewer';
import { ContentType } from 'components/Content';
import { TextNames, TextPaths } from '../TextEnum';
import Overview from '!raw-loader!./Overview.md';
import Deployment from '!raw-loader!./Deployment/Deployment.md';
import AmplifySetup from '!raw-loader!./Deployment/AmplifySetup.md';
import AmplifySetupUser1 from './Deployment/AmplifySetupUser1.png';
import AmplifySetupUser2 from './Deployment/AmplifySetupUser2.png';
import AmplifySetupUser3 from './Deployment/AmplifySetupUser3.png';
import AmplifySetupUser4 from './Deployment/AmplifySetupUser4.png';
import AmplifySetupUser5 from './Deployment/AmplifySetupUser5.png';
import AmplifySetupCli from './Deployment/AmplifySetupCli.png';
import AmplifyProject from '!raw-loader!./Deployment/AmplifyProject.md';
import AmplifyProjectCli from './Deployment/AmplifyProjectCli.png';
import Development from '!raw-loader!./Development/Development.md';

const assets = new Map<string, string>();
assets.set('AmplifySetupUser1', AmplifySetupUser1);
assets.set('AmplifySetupUser2', AmplifySetupUser2);
assets.set('AmplifySetupUser3', AmplifySetupUser3);
assets.set('AmplifySetupUser4', AmplifySetupUser4);
assets.set('AmplifySetupUser5', AmplifySetupUser5);
assets.set('AmplifySetupCli', AmplifySetupCli);
assets.set('AmplifyProjectCli', AmplifyProjectCli);

const overview = ContentNode.fromPath('text-overview', ContentType.Node, TextNames.Overview, TextPaths.Overview, <TextViewer md={Overview} assets={assets} />);
const deployment = ContentNode.fromPath('text-deployment', ContentType.Node, TextNames.Deployment, TextPaths.Deployment, <TextViewer md={Deployment} assets={assets} />);
deployment.contents = [
  ContentNode.fromPath('text-amplify-setup', ContentType.Text, TextNames.DeploymentAmplifySetup, TextPaths.DeploymentAmplifySetup, <TextViewer md={AmplifySetup} assets={assets} />),
  ContentNode.fromPath('text-amplify-project', ContentType.Text, TextNames.DeploymentAmplifyProject, TextPaths.DeploymentAmplifyProject, <TextViewer md={AmplifyProject} assets={assets} />),
];
const development = ContentNode.fromPath('text-development', ContentType.Node, TextNames.Development, TextPaths.Development, <TextViewer md={Development} assets={assets} />);
const content = ContentNode.fromContents('text-content', [overview, deployment, development]);
export const TextContent = ContentNode.fromContents('text-container', [
  ContentNode.fromGroup('text-index-group', 15, [
    ContentNode.fromPath(
      'text-index',
      ContentType.Node,
      'index',
      'text-index',
      <ContentIndex
        content={content}
      />,
    ),
  ]),
  ContentNode.fromGroup('text-switch-group', 85, [
    ContentNode.fromPath(
      'text-switch',
      ContentType.Node,
      'content',
      'text-switch',
      <ContentSwitch
        content={content}
      />,
    ),
  ]),
]);

 
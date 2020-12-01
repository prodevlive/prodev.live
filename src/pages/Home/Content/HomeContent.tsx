/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import { ContentNode } from 'components/Content/ContentNode';
import { TextViewer } from 'components/Text/TextViewer';
import Creators from '!raw-loader!./Creators.md';
import Developers from '!raw-loader!./Developers.md';
import { HomePaths } from '../HomeEnum';

export const HomeContent = ContentNode.fromGroup('home-content', 15, [
  ContentNode.fromPath('Creators', HomePaths.Creators, <TextViewer md={Creators} />),
  ContentNode.fromPath('Developers', HomePaths.Developers, <TextViewer md={Developers} />),
]);
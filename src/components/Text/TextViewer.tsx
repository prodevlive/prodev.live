import React, { FunctionComponent } from 'react';
import { FileEx } from 'hooks/useModule/FileModule/FileEx';
import Markdown from 'markdown-to-jsx';
import { TextImage } from './TextImage';
import { TextLink } from './TextLink';
import './TextViewer.css';

export interface TextViewerProps {
  md?: string;
  file?: FileEx;
  assets?: Map<string, string>;
}

export const TextViewer: FunctionComponent<TextViewerProps> = ({
  md,
  file,
  assets,
}: TextViewerProps) => {
  const overrides = {
    TextLink,
    TextImage: {
      component: TextImage,
      props: {
        assets,
      },
    },
  };
  if (md) {
    return (
      <Markdown
        options={{ overrides }}
      >{md}
      </Markdown>);
  }
  return <pre>no text</pre>;
};

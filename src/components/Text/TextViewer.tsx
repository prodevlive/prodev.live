import React, { FunctionComponent } from 'react';
import { FileEx } from 'hooks/useModule/FileModule/FileEx';
import Markdown from 'markdown-to-jsx';
import { InlineImageViewer } from '../Image';

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
  if (md) {
    return (
      <Markdown
        options={{
          overrides: {
            InlineImage: {
              component: InlineImageViewer,
              props: {
                assets,
              },
            },
          },
        }}
      >{md}
      </Markdown>);
  }
  return <pre>no text</pre>;
};

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
    
  //   if (md) {
  //     return <ReactMarkdown source={md} />;
  //   }
  //   const ImageRenderer = (props: {
  //     alt: string | undefined; src: string | undefined;
  //   }) => {
  //     const [fullSize, setFullSize] = useState(false);
  //     const handleClick = () => {
  //       setFullSize(!fullSize);
  //     };
  //     const style = {
  //       width: '300px',
  //       transition: 'width 0.5s',
  //     };
  //     if (fullSize){
  //       style.width = '150px';
  //     }
  //     // eslint-disable-next-line no-debugger
  //     debugger;
  //     return (
  //       <div>
  //         <div>{props.src}</div>
  //         <img
  //           style={style}
  //           alt={props.alt}
  //           src={props.src}
  //           onClick={handleClick}
  //           onKeyDown={handleClick}
  //         />
  //       </div>
  //     );
  //   };  
  //   const renderers = {
  //     image: ImageRenderer,
  //   };
  //   const renderers = {
  //     // This custom renderer changes how images are rendered
  //     // we use it to constrain the max width of an image to its container
  //     image: ({
  //       alt,
  //       src,
  //       title,
  //     }: {
  //       alt?: string;
  //       src?: string;
  //       title?: string;
  //     }) => (
  //       <img 
  //         alt={alt} 
  //         src={src} 
  //         title={title} 
  //         style={{ maxWidth: 475 }}
  //       />
  //     ),
  //   };
  //   if (file){
  //     if (file.url.toLowerCase().endsWith('.md')) {
  //       const text = !file.text ? '' : file.text;
  //       return <ReactMarkdown source={text} renderers={renderers} />;
  //     }
  //     return <pre>{file.text}</pre>;
  //   }
  return <pre>no text</pre>;
};

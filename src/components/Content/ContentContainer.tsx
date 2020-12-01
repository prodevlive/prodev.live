import React, { useState, useEffect } from 'react';
import { DockLayout, LayoutBase, TabBase } from 'rc-dock';
import { Tab, Paper } from '@material-ui/core';
import 'rc-dock/dist/rc-dock.css';
import './styles.css';
import { useHistory } from 'react-router-dom';
import { ContentNode } from './ContentNode';
import { ContentType } from './ContentType';

interface TabContainerProp {
  content: ContentNode;
}

export function ContentContainer({ content }: TabContainerProp) {
  const history = useHistory();
  const [key, setKey] = useState(`content-container-${history.location.pathname.replace('/', '-')}`);
  useEffect(()=>{
    setKey(`content-container-${history.location.pathname.replace('/', '-')}`);
  }, [history.location.pathname]);
  const [top, left, right, bottom] = [64, 55, 0, 56];
  const [layout, setLayout] = useState<LayoutBase>({
    dockbox: {
      mode: 'horizontal',
      children: [],
    },
  });
  useEffect(() => {        
    const newLayout: LayoutBase = {
      dockbox: {
        mode: 'horizontal',
        children: [],
      },
    };
    const getTabIds = (node: ContentNode) => {
      const tabIds: { id: string }[] = [];
      if (node.contents) {
        node.contents.forEach(c => {
          tabIds.push({ id: c.id });
        });
      }
      return tabIds;
    };
    const { contents } = content;
    if (contents) {
      contents.forEach(c => {
        if (c.type === ContentType.Node) {
          newLayout.dockbox.children.push({
            size: c.size,
            tabs: getTabIds(c),
          });
        }
      });
    }
    setLayout(newLayout);
  }, [content]);
  const loadTab = (data: TabBase) => {
    const { id } = data;
    if (!id){
      return { id: '', title: '', content: <></> };    
    }
    const active = content.find(id);
    if (!active) {
      return { id: '', title: '', content: <></> };    
    }
    return {
      id: active.id,
      title: <Tab label={active.name} />,
      content: (
        <Paper style={{ overflow: 'auto' }}>
          {active.element}
        </Paper>
      ),
      closable: true,
      size: active.size,
    };
  };
  return (
    <DockLayout
      key={key}
      layout={layout}
      loadTab={loadTab}
      onLayoutChange={newLayout => {
        setLayout(newLayout);
      }}
      style={{
        position: 'absolute',
        left,
        top,
        right,
        bottom,
      }}
    />
  );
}

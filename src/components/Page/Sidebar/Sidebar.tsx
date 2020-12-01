import React, { FunctionComponent } from 'react';
import List from '@material-ui/core/List';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import { PageNames, PagePaths } from 'pages/PageEnum';
import { SidebarItem } from './SidebarItem';

export const Sidebar: FunctionComponent = () => {
  return (
    <List>
      <SidebarItem
        key="sidebar-item-home"
        name={PageNames.Home}
        path={PagePaths.Home}
        icon={<HomeOutlinedIcon />}
        iconSelected={<HomeTwoToneIcon />}
      />
      <SidebarItem
        key="sidebar-item-text"
        name={PageNames.Text}
        path={PagePaths.Text}
        icon={<MenuBookOutlinedIcon />}
        iconSelected={<MenuBookTwoToneIcon />}
      />
      <SidebarItem
        key="sidebar-item-file"
        name={PageNames.File}
        path={PagePaths.File}
        icon={<DescriptionOutlinedIcon />}
        iconSelected={<DescriptionTwoToneIcon />}
      />
      <SidebarItem
        key="sidebar-item-mode"
        name={PageNames.Mode}
        path={PagePaths.Mode}
        icon={<SettingsOutlinedIcon />}
        iconSelected={<SettingsTwoToneIcon />}
      />      
    </List>
  );
};

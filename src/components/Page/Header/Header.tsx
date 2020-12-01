import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router-dom';
import { Theme, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
// import CloseIcon from '@material-ui/icons/Close';
import AccountCircle from '@material-ui/icons/AccountCircle';
import clsx from 'clsx';
import { PagePaths } from 'pages/PageEnum';

export const Header: FunctionComponent = () => {
  // const context = useContext(AppContext);
  // const userContext = context.contexts[AppContextName.User] as UserContext;
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState<
  Element | ((element: Element) => Element) | null | undefined
  >(null);
  const open = Boolean(anchorEl);
  function onMenu(event: React.MouseEvent) {
    // context.mode.item.drawer = !context.mode.item.drawer;
    // context.save();
  }
  function onUser(event: React.MouseEvent) {
    setAnchorEl(event.currentTarget);
  }
  function onClose() {
    setAnchorEl(null);
  }
  const onSignIn = () => {
    // userContext.signIn();
    setAnchorEl(null);
  };
  const onSignOut = () => {
    // userContext.signOut();
    setAnchorEl(null);
  };
  const onProfile = () => {
    history.push(PagePaths.User);
    setAnchorEl(null);
  };
  const display = 'prodev.live';
  const name = 'name'; // userContext.item;
  const useStyles = makeStyles((theme: Theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      // marginLeft: context.mode.item.drawerOpenWidth,
      // width: `calc(100% - ${context.mode.item.drawerOpenWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    link: {
      color: 'white',
      cursor: 'pointer',
    },
  }));
  const classes = useStyles();
  const menuitems = [];
  if (!name) {
    menuitems.push(
      <MenuItem key="menu_sign_in" onClick={onSignIn}>
        sign in
      </MenuItem>,
    );
  } else {
    menuitems.push(
      <MenuItem key="menu_profile" onClick={onProfile}>
        profile
      </MenuItem>,
    );
    menuitems.push(
      <MenuItem key="menu_sign_out" onClick={onSignOut}>
        sign out
      </MenuItem>,
    );
  }
  return (
    <AppBar
      position="sticky"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: false,
      })}
    >
      <Toolbar>
        <Tooltip title="open" aria-label="menu">
          <IconButton
            onClick={onMenu}
            className={classes.menuButton}
            edge="start"
            color="inherit"
          >
            <MenuIcon />
            {/* {!context.mode.item.drawer ? (
                            <MenuIcon />
                        ) : (
                            <CloseIcon />
                        )} */}
          </IconButton>
        </Tooltip>
        <Typography variant="h6" className={classes.title}>
          <Link
            className={classes.link}
            onClick={() => {
              history.push('/home');
            }}
            data-test="home-link"
          >
            {display}
          </Link>
          {' - '}
          {!name ? (
            ' visitor '
          ) : (
            <Link
              className={classes.link}
              onClick={() => {
                history.push('/user');
              }}
            >
              {name}
            </Link>
          )}
        </Typography>
        <Tooltip title="options" aria-label="options">
          <IconButton
            onClick={onUser}
            color="inherit"
            aria-label="options"
            aria-controls="menu-appbar"
            aria-haspopup="true"
          >
            <AccountCircle />
          </IconButton>
        </Tooltip>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={onClose}
        >
          {menuitems}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

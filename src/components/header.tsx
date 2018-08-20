import * as React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import {
  default as withStyles,
  WithStyles
} from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchBar from './search_bar';

const styles = createStyles({
  root: {

  },
  flex: {
    flex: 1
  },
  list: {
    width: 300
  },
});

export interface HeaderProps extends WithStyles<typeof styles> {
  brand: string;
}

export interface HeaderState {
  open: boolean;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = { open: false };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  }

  handleDrawerClose = () => {
    this.setState({ open: false });
  }

  render() {
    const { classes, brand } = this.props;
    return (
      <header className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='Menu'
              onClick={this.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.flex}>
              <Hidden smDown implementation='css'>
                <Typography color='inherit' variant='title'>
                  {brand}
                </Typography>
              </Hidden>
            </div>
            <SearchBar />
          </Toolbar>
        </AppBar>
        <Drawer
          anchor='left'
          open={this.state.open}
          onClose={this.handleDrawerClose}
        >
          <List className={classes.list} component='nav'>
            <ListItem
              button
              component='a'
              href='#/'
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={brand} />
            </ListItem>
            <Divider />
            <ListItem
              button
              component='a'
              href='#/about'
            >
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary='关于' />
            </ListItem>
          </List>
        </Drawer>
      </header >
    );
  }
}

export default withStyles(styles)(Header);

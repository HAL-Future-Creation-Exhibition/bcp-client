import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarIcon from '@material-ui/icons/Star';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
  grow: {
    flexGrow: 1
  },
  list: {
    width: 250,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
}

interface IProps {
  classes: any;
}

interface IState {
  drawerOpen: boolean;
}

class App extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);

    this.state = {
      drawerOpen: false
    }
  }

  public render() {
    const { classes } = this.props;
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.grow}>Brain Cloud Platform</Typography>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.drawerOpen} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
          >
            <div className={classes.list}>
              <List>
                <ListItem button={true}>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" secondary="sub text"/>
                </ListItem>
                <ListItem button={true}>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox"/>
                </ListItem>
                <ListItem button={true}>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox"/>
                </ListItem>
                <ListItem button={true}>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox"/>
                </ListItem>
              </List>
            </div>
          </div>
        </Drawer>
      </>
    );
  }

  private toggleDrawer = (open: boolean) => () => {
    this.setState({
      drawerOpen: open
    })
  }
}

export default withStyles(styles)(App);

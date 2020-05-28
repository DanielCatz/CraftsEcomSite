import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import ContentContainer from './pages/ContentContainer';

// css definition here
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  base: {
    background: '#FFF9F9'
  },
  appBar: {
    background: 'transparent',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    background: 'transparent',
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    color: 'black'
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    overflowX: 'hidden'
  },
  drawerHeader: {
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    position: 'fixed',
    minHeight: 128,
    background: 'white',
    overflowY: 'hidden',
    zIndex: '1000'
  },
  drawerHeaderBlock: {
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    minHeight: 120,
    background: 'white',
    overflowY: 'hidden'
  },
  content: {
    flexGrow: 1,
    minHeight: '60vh',
    background: '#FFF9F9',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

const App = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [isBarOpen, setOpen] = React.useState(false);

  const closeBar = () => {
    setOpen(false);
  };

  const openBar = () => {
    setOpen(true);
  };

  return (
    <Router>
      <link
        href="https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2&family=Bellota:ital,wght@0,400;0,700;1,700&display=swap"
        rel="stylesheet"
      />

      <Route
        render={props => (
          <ContentContainer
            classes={classes}
            theme={theme}
            isBarOpen={isBarOpen}
            closeBar={closeBar}
            openBar={openBar}
            {...props}
          />
        )}
      />
    </Router>
  );
};

export default App;

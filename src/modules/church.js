import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {loadable} from '../utils';

const ChurchList = loadable({
  loader: () => import('components/church_list'),
});

const styles = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing.unit,
  },
});

@withStyles(styles)
export default class ChurchModule extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <ChurchList />
      </div>
    );
  }
}

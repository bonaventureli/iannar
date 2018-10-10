import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import MassList from 'components/mass_list';
import SetLiturgicalYear from 'components/forms/set_liturgical_year';
import Sidebar from 'components/sidebar';

const styles = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing.unit,
  },
});

@withStyles(styles)
export default class HomeModule extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    onSearch: PropTypes.func,
    onClear: PropTypes.func,
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <MassList />
        <Sidebar>
          <SetLiturgicalYear />
        </Sidebar>
      </div>
    );
  }
}

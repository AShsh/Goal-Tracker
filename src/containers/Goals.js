import React, { Component } from 'react';

import { i18n } from '../i18n/lang';

import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as goalsActions from '../actions/goals';

import GoalsList from '../components/GoalsList';
import AddNewGoal from '../components/AddNewGoal';

import Calendar from './Calendar';

import RaisedButton from 'material-ui/RaisedButton';



class Goals extends Component {

  state = {
    openAddGoal: false
  };

  handleOpenNewGoal = () => {
    this.setState({ openAddGoal: true });
  };

  handleCloseNewGoal = () => {
    this.setState({ openAddGoal: false });
  };

  handleRequestChange = (event, index) => {
    this.props.actions.changeCurrentGoal(this.props.goals.goalsList[index].id);
  };

  render() {
    return (
      <div>
        <GoalsList
          goalsList={this.props.goals.goalsList}
          handleRequestChange={this.handleRequestChange} />

        <RaisedButton
          onClick={this.handleOpenNewGoal}
          label={i18n.t('calendar_addNewGoal')}
          primary={true} />

        <AddNewGoal
          openAddGoal={this.state.openAddGoal}
          addNewGoal={this.props.actions.addNewGoal}
          handleCloseNewGoal={this.handleCloseNewGoal} />

        <Calendar className='calendar' />
      </div>
    )
  }
}

Goals.propTypes = {
  goals: PropTypes.shape({
    goalsList: PropTypes.array.isRequired
  }),
  actions: PropTypes.shape({
    addNewGoal: PropTypes.func.isRequired,
    changeCurrentGoal: PropTypes.func
  }),
}

Goals.defaultProps = {
  goals: {
    goalsList: []
  }
};

function mapStateToProps(state) {
  return {
    goals: state.goals
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(goalsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Goals);

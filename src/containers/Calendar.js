import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as userActions from '../actions/user';

import moment from 'moment';

import PropTypes from 'prop-types';

import { FORMAT_DATE_DAY } from '../constants/calendar';

import Checkbox from 'material-ui/Checkbox';

class Calendar extends Component {

  generateCalendar() {
    const selectedIndex = this.props.goals.selectedIndex;
    const currGoal = this.props.goals.goalsList[selectedIndex];

    if (this.props.goals.goalsList.length > 0 && selectedIndex >= 0) {
      const calendarTemplate =
        <div className='calendar-block'>
          <p className='calendar-title'>
            {currGoal.name}
          </p>
          <ul className='calendar-list'>
            {currGoal.targetDates.map((item, i) => (
              <li key={i}>
                <span>{moment(item.date).format(FORMAT_DATE_DAY)}</span>
                <Checkbox />
              </li>
            ))}
          </ul>
        </div>;
      return calendarTemplate;
    }
  }

  render() {
    return (
      <div>
        {this.generateCalendar()}
      </div>
    )
  }
}

Calendar.propTypes = {
  goals: PropTypes.shape({
    goalsList: PropTypes.array.isRequired
  }),
}

Calendar.defaultProps = {
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
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);

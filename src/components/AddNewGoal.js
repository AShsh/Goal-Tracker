import React, { Component } from 'react';

import { i18n } from '../i18n/lang';
import { FORMAT_DATE } from '../constants/calendar';

import moment from 'moment';

import PropTypes from 'prop-types';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class AddNewGoal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            name: '',
            minDate: new Date(),
            maxDate: new Date(),
            selectDays: [],
            targetDates: []
        };
    }

    handleChangeMinDate = (event, date) => { this.setState({ minDate: moment(date), }) };

    handleChangeMaxDate = (event, date) => { this.setState({ maxDate: moment(date), }) };

    handleChangeName = (event, name) => { this.setState({ name: name, }) };

    handleChangeSelect = (event, index, selectDays) => this.setState({ selectDays });

    targetDate() {
        const selectDays = this.state.selectDays;
        let min = moment(this.state.minDate);
        let max = moment(this.state.maxDate);

        for (let i = min; min <= max; i.add('days', 1)) {
            selectDays.forEach((element) => {

                if (i.day() === element) {
                    this.state.targetDates.push({
                        date: i.format(FORMAT_DATE),
                        isDone: false
                    });
                }
            });
        }
    }

    handleSubmit = (event, id) => {
        let submitValidation = false;
        this.targetDate();

        for (var key in this.state) {
            if (typeof (this.state[key]) === 'object') {
                if (this.state[key].length) {
                    submitValidation = true;
                } else if (this.state[key] instanceof Date) {
                    submitValidation = true;
                } else {
                    submitValidation = false;
                }
            } else if (!!this.state[key]) {
                submitValidation = true;
            } else {
                submitValidation = false;
            }
        }

        if (submitValidation) {
            this.props.addNewGoal(this.state);
            this.setState({
                id: this.state.id + 1,
                name: '',
                minDate: {},
                maxDate: {},
                selectDays: [],
                targetDates: []
            });
            this.props.handleCloseNewGoal();
        }
    }

    selectWeek(selectDays) {
        const daysWeek = i18n.t('daysWeek', { returnObjects: true });
        return daysWeek.map((name, i) => (
            <MenuItem
                key={name}
                insetChildren={true}
                checked={selectDays && selectDays.indexOf(name) > -1}
                value={i}
                primaryText={name}
            />
        ));
    }

    render() {
        const { selectDays } = this.state;
        return (
            <Dialog
                title={i18n.t('calendar_addNewGoal')}
                modal={false}
                open={this.props.openAddGoal}
                onRequestClose={this.handleClose}
            >
                <form name='newGoal'>
                    <TextField
                        name='goalName'
                        hintText={i18n.t('goal')}
                        onChange={this.handleChangeName}
                    />
                    <DatePicker
                        onChange={this.handleChangeMinDate}
                        floatingLabelText={i18n.t('min_date')}
                        name='minDate'
                    />
                    <DatePicker
                        onChange={this.handleChangeMaxDate}
                        floatingLabelText={i18n.t('max_date')}
                        name='maxDate'
                    />
                    <SelectField
                        name='selectDays'
                        multiple={true}
                        hintText={i18n.t('select_weekdays')}
                        value={selectDays}
                        onChange={this.handleChangeSelect}

                    >
                        {this.selectWeek(selectDays)}
                    </SelectField>
                    <div className='button-block'>
                        <RaisedButton
                            label={i18n.t('userSetting_cancel')}
                            primary={true}
                            onClick={this.props.handleCloseNewGoal}
                        />
                        <RaisedButton
                            label={i18n.t('userSetting_submit')}
                            primary={true}
                            keyboardFocused={true}
                            onClick={this.handleSubmit}
                        />
                    </div>
                </form>
            </Dialog>
        )
    }
}

AddNewGoal.propTypes = {
    addNewGoal: PropTypes.func.isRequired,
    handleCloseNewGoal: PropTypes.func,
    openAddGoal: PropTypes.bool.isRequired
}

AddNewGoal.defaultProps = {
    openAddGoal: true
};

export default AddNewGoal;

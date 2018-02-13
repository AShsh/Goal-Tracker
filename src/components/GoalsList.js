import React, { Component } from 'react';

import { List, ListItem, makeSelectable } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import { i18n } from '../i18n/lang';

import PropTypes from 'prop-types';

let SelectableList = makeSelectable(List);

class GoalsList extends Component {

    render() {
        return (
            <SelectableList
                className='goalList'
                onChange={this.props.handleRequestChange} >
                <Subheader className='goalListTitle'>{i18n.t('gloals_list')}</Subheader>

                {this.props.goalsList.map((item, i) => (
                    <ListItem
                        value={item.id}
                        key={i}
                        primaryText={item.name}
                    />
                ))}
            </SelectableList>
        );
    }
};

GoalsList.propTypes = {
    goalsList: PropTypes.array.isRequired,
    handleRequestChange: PropTypes.func
}

GoalsList.defaultProps = {
    goalsList: []
};


export default GoalsList;
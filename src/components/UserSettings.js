import React, { Component } from 'react';

import { i18n } from '../i18n/lang';

import PropTypes from 'prop-types';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class UserSettings extends Component {

    handleSubmit(e) {
        const userName = e.target.userName.value;
        e.preventDefault();
        this.props.handleSubmitSettings(userName);
    }

    render() {
        return (
            <Dialog
                title={i18n.t('userSetting_title')}
                open={this.props.openSettings} >
                <form className='form-w-button' onSubmit={(e) => this.handleSubmit(e)}>
                    <TextField
                        name='userName'
                        hintText={i18n.t('userSetting_name')}
                        floatingLabelText={i18n.t('userSetting_name-label')} />

                    <div className='button-block'>
                        <RaisedButton
                            label={i18n.t('userSetting_cancel')}
                            primary={true}
                            onClick={this.props.handleCloseSettings} />

                        <RaisedButton
                            label={i18n.t('userSetting_submit')}
                            primary={true}
                            type='submit' />
                    </div>
                </form>
            </Dialog>
        )
    }
}

UserSettings.propTypes = {
    handleCloseSettings: PropTypes.func,
    handleSubmitSettings: PropTypes.func.isRequired,
    openSettings: PropTypes.bool.isRequired,

}

UserSettings.defaultProps = {
    openSettings: true
};

export default UserSettings;

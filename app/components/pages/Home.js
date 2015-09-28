import React from 'react';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            phoneErrorText: ''
        };

    }
     

    _handlePhoneInputChange(e){
        if(e.target.value=='0411789776') {
            this.setState({
                disabled: false,
                phoneErrorText: ''
            });
        }
        else
        {
            this.setState({
                disabled: true,
                phoneErrorText: 'Invalid Number'
            });
        }        
    }    

    _handleClickSubmit(e) {
        this.props.history.pushState(null, '/verify');
    }


    render() {
        var TextField = this._reactInternalInstance._context.mui.TextField;
        var RaisedButton = this._reactInternalInstance._context.mui.RaisedButton;
        var DropDownMenu = this._reactInternalInstance._context.mui.DropDownMenu;


        var buttonStyle = {
            width: '200px'
        };

        var countryStyle = {
            width: '100%'
        };

        let menuItems = [
           { payload: '+61', text: 'Australia (+61)' },
           { payload: '+44', text: 'UK (+44)' },
           { payload: '+1', text: 'USA (+1)' },
           { payload: '+46', text: 'Sweden (+46)' }
        ];        

        return (
            <div className="form">
            <h1>Welcome</h1>
                            <div className="fields">
                                <div className="country-label">Country</div>
                                <DropDownMenu style={countryStyle} menuItems={menuItems} autoWidth={false}/><br/>
                                <TextField
                                  floatingLabelText="Mobile"
                                    ref="phone"
                                    errorText={this.state.phoneErrorText}
                                    onChange={::this._handlePhoneInputChange} />
                            </div>                              
                            <div className="cta">
                              <RaisedButton 
                                style={buttonStyle} 
                                label="CONTINUE" 
                                primary={true}  
                                onTouchTap={::this._handleClickSubmit}
                                disabled={this.state.disabled} />
                                <div className="info">
                                By continuing you agree to <a href="http://www.homepass.com/terms/agent/" target="_blank">terms</a> & <a href="http://homepass.com/terms/privacy/agent"  target="_blank">privacy policy</a>.
                                </div>
                            </div>

            </div>
        );
    }
}

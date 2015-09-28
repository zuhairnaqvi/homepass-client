import React from 'react';
import { Link } from 'react-router'

export default class Verify extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }
     

    _handleCodeInputChange(e){
    }    

    _handleClickVerify(e){
        
        if(this.refs.code.getValue() == '5502') {
            this.setState({
                message: 'Verification Successful!'
            });
        }
        else {
            this.setState({
                message: 'Verification Failed!'
            });            
        }
        this.refs.snackbar.show();
    }
    
    _handleMessageClose() {
      this.refs.snackbar.dismiss();
    };    



    render() {
        var TextField = this._reactInternalInstance._context.mui.TextField;
        var RaisedButton = this._reactInternalInstance._context.mui.RaisedButton;
        var Snackbar = this._reactInternalInstance._context.mui.Snackbar;


        var buttonStyle = {
            width: '200px'
        };    

        return (
            <div className="form">
            <h1>Verify your Mobile</h1>
                            <div className="fields">
                                <TextField
                                  floatingLabelText="Verification code"
                                    ref="code"
                                    onChange={::this._handleCodeInputChange} />
                            </div>                             
                            <div className="cta">
                              <RaisedButton 
                                style={buttonStyle} 
                                label="CONTINUE" 
                                primary={true}  
                                onTouchTap={::this._handleClickVerify} />
                                <div className="info">
                                A verification code was sent to <Link to="/">+61 411 789 776</Link><br/>
                                <strong>RESEND CODE</strong>
                                </div>
                            </div>

                            <Snackbar
                              ref="snackbar"
                              message={this.state.message}
                              action="close"
                              autoHideDuration={3000}
                              onActionTouchTap={::this._handleMessageClose}/>   
            </div>
        );
    }
}

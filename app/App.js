import React from 'react';
import Home from './components/pages/Home';
import Verify from './components/pages/Verify';
import { Router, Route, IndexRoute, Link } from 'react-router';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

import './styles/main.css';
import AppTheme from './styles/AppTheme';

import mui from 'material-ui';
let ThemeManager         = new mui.Styles.ThemeManager(),
    Colors               = mui.Styles.Colors,
    Spacing              = mui.Styles.Spacing,
    Typography           = mui.Styles.Typography,
    AppBar               = mui.AppBar,
    LeftNav              = mui.LeftNav,
    MenuItem             = mui.MenuItem,
    SvgIcon              = mui.SvgIcon,
    FlatButton           = mui.FlatButton,
    IconButton           = mui.IconButton,
    FloatingActionButton = mui.FloatingActionButton,
    FontIcon             = mui.FontIcon;

let injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default class App extends React.Component {

    constructor(props) {
        super(props);
        ThemeManager.setTheme(AppTheme);
    }
    
    render() {
        var key = this.props.location.pathname;
        var themeVariables = ThemeManager.getCurrentTheme().component.appBar;          

        var logoImage = require('./images/BlackLogoFull.png');
        var heroImage = require('./images/Homepass-people-inspection-blue.jpg');

        var rightPanelStyle = {
            background: 'url('+heroImage+') no-repeat #F0F0F0',
            backgroundSize: 'cover'
        };

        return (
            <div className="grid-container"> 
                <div className="grid">               
                    <div className="grid-cell">
                    <img src={logoImage} className="logo" />
                        <div className="left-panel">
                            <ReactCSSTransitionReplace component="div" transitionName="page">
                               {React.cloneElement(this.props.children || <div />, { key: key })}
                            </ReactCSSTransitionReplace>
                        </div>
                    </div>
                    <div className="grid-cell">
                        <div className="right-panel" style={rightPanelStyle}>
                            <div className="chat-icon">
                                <FloatingActionButton mini={true}>
                                    <FontIcon className="material-icons">sms</FontIcon>
                                </FloatingActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class AppContainer extends React.Component {

    static childContextTypes = {
        muiTheme: React.PropTypes.object.isRequired,
        mui: React.PropTypes.object.isRequired
    };    

    getChildContext() {
        return {
          muiTheme: ThemeManager.getCurrentTheme(),
          mui: mui
        };
    }      

    render() {
        return (
          <Router>
            <Route path="/" component={App}>
              <IndexRoute component={Home}/>
              <Route path="verify" component={Verify} />
            </Route>
          </Router>
        );
    }
}


React.render(<AppContainer />, document.getElementById('app'));
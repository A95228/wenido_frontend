import React from 'react'
import SocialLogin from 'react-social-login'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGooglePlusG} from "@fortawesome/fontawesome-free-brands";

class FacebookSocialButton extends React.Component {

    render() {
        return (
            <button onClick={this.props.triggerLogin} {...this.props}
                    className="text-white  rounded-lg shadow-lg" style={{borderWidth:0,outline:"none"}}>
                <FacebookIcon className="mr-1"/>
                { this.props.children }
            </button>
        );
    }
}
class InstegramSocialButton extends React.Component {

    render() {
        return (
            <button onClick={this.props.triggerLogin} {...this.props}
                    className="text-white  rounded-lg shadow-lg" style={{borderWidth:0,outline:"none"}}>
                <InstagramIcon className="mr-1"/>
                { this.props.children }
            </button>
        );
    }
}
class GoogleSocialButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.triggerLogin} {...this.props}
                    className="text-white  rounded-lg shadow-lg pt-1" style={{borderWidth:0,outline:"none"}}>
                <FontAwesomeIcon icon={faGooglePlusG} className="text-2xl" />
                { this.props.children }
            </button>
        );
    }
}

export const FacebookButton = SocialLogin(FacebookSocialButton);
export const InstegramButton = SocialLogin(InstegramSocialButton);
export const GoogleButton = SocialLogin(GoogleSocialButton);

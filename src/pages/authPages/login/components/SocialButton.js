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
                    className="bg-blue-800 hover:bg-blue-900 text-white mt-10 rounded-lg w-full h-8 shadow-lg py-5 flex justify-center items-center">
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
                    className="bg-indigo-700 hover:bg-indigo-800 text-white mt-2 rounded-lg w-full h-8 shadow-lg py-5 flex justify-center items-center">
                <InstagramIcon className="mr-1"/>
                { this.props.children }
            </button>
        );
    }
}
class GoogleSocialButton extends React.Component {
    constructor(props) {
        super(props);
        console.log("this is ",props.triggerLogin)
    }
    render() {
        return (
            <button onClick={this.props.triggerLogin} {...this.props}
                    className="bg-red-600 hover:bg-red-700 text-white mt-2 rounded-lg w-full h-8 shadow-lg py-5 flex justify-center items-center">
                <FontAwesomeIcon icon={faGooglePlusG} className="text-2xl mr-1" />
                { this.props.children }
            </button>
        );
    }
}

export const FacebookButton = SocialLogin(FacebookSocialButton);
export const InstegramButton = SocialLogin(InstegramSocialButton);
export const GoogleButton = SocialLogin(GoogleSocialButton);

import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import {Link} from 'react-router-dom'
function Footer(props) {
    return (
        <div className="w-full">
            <div className="w-full relative bottom-0 ">
                <div className="bg-gray-200 pt-8 mt-32 flex">
                    <div>
                        <img src={"http://"+window.location.host+"/media/logo.png"} alt="logo png" width={250}
                             className="pl-8" />
                        <p className="pt-3 px-10 font-bold text-gray-700">Contact</p>
                        <p className="pt-1 px-10 text-gray-700 text-sm">office@wenido.com</p>
                        <div className="p-5">
                            <a href="http://facebook.com/"><FacebookIcon className="text-blue-800 mx-4" /></a>
                            <a href="http://twitter.com/"><TwitterIcon className="text-blue-500 mx-4"/></a>
                            <a href="http://instegram.com/"><InstagramIcon className="text-orange-700 mx-4" /></a>
                        </div>
                    </div>
                    <div className="ml-48">
                        <p className="font-bold  text-gray-700">About Wendio</p>
                        <a href="/"><p className="pt-5 text-gray-700 hover:text-blue-500 text-sm">How it works</p></a>
                        <a href="/"><p className="pt-1 text-gray-700 hover:text-blue-500 text-sm">Contact</p></a>
                        <a href="/"><p className="pt-1 text-gray-700 hover:text-blue-500 text-sm">About us</p></a>
                        <a href="/"><p className="pt-1 text-gray-700 hover:text-blue-500 text-sm">Blog</p></a>
                        <a href="/"><p className="pt-1 text-gray-700 hover:text-blue-500 text-sm">Press</p></a>
                    </div>
                    <div className="ml-32">
                        <p className="font-bold  text-gray-700">Additional</p>
                        <a href="/"><p className="pt-5 text-gray-700 hover:text-blue-500 text-sm">Jobs</p></a>
                        <a href="/"><p className="pt-1 text-gray-700 hover:text-blue-500 text-sm">Exchange clubs</p></a>
                        <a href="/"><p className="pt-1 text-gray-700 hover:text-blue-500 text-sm">GDPR</p></a>
                        <a href="/"><p className="pt-1 text-gray-700 hover:text-blue-500 text-sm">Conditions</p></a>
                        <a href="/"><p className="pt-1 text-gray-700 hover:text-blue-500 text-sm">imprint</p></a>
                    </div>
                    <div className="ml-32">
                        <p className="font-bold  text-gray-700">Account</p>
                        <a href="/"><p className="pt-6 text-gray-700 hover:text-blue-500 text-sm">To register</p></a>
                        <a href="/"><p className="pt-1 text-gray-700 hover:text-blue-500 text-sm">Log in</p></a>
                    </div>
                </div>
                <div className="h-10">
                    <p className="bg-gray-400 h-full pl-6 flex items-center"><p className="font-bold">&copy; Wenido </p>&nbsp;- All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
import React, {Component, useEffect} from 'react';
import {FacebookButton, GoogleButton, InstegramButton} from "./SocialButton";
import {useDispatch, useSelector} from "react-redux";
import {login, register} from "../../../../redux/actions/authActions";

function SocialButtonsContainer(props) {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    useEffect(()=>{
        setLogged(isAuthenticated)
        console.log("this is authenticated",isAuthenticated)
    })
    var nodes={}
    const [logged,setLogged] = React.useState(null)
    const [user,setUser] = React.useState({})
    const [currentProvider,setCurrentProvider] = React.useState({})
    const setNodeRef= function(provider, node){
        console.log("this is provider",provider)
        if (node) {
            console.log("this is provider",provider)
            nodes[ provider ] = node
        }
    }

    const onLoginSuccess =(user)=> {
        console.log(user)
        var email = user.profile.email;
        var first_name = user.profile.firstName;
        var last_name = user.profile.lastName;
        var password = user.profile.id
        // dispatch(login({phone_number_or_email:email,password,first_name,last_name}));
        dispatch(register({email,password,first_name,last_name}));
        //------------------dispatch login

        setLogged(true)
        setCurrentProvider(user._provider)
        setUser(user)
        logout();
    }

    const onLoginFailure = (err) =>{
        console.error(err)

        setLogged(false)
        setCurrentProvider('')
        setUser({})

    }

    const onLogoutSuccess =()=> {

        setLogged(false)
        setCurrentProvider('')
        setUser({})
    }

    const onLogoutFailure =(err)=> {
        console.error(err)
    }

    const logout =()=> {
        if (logged && currentProvider) {
            nodes[currentProvider].props.triggerLogout()
        }
    }

    return (
        <div className="flex w-full rounded-lg justify-around py-5 mt-3 items-center" style={{background:'#e91e63'}}>
            <GoogleButton
                provider='google'
                appId='1004416048196-s0j8sriob9bjo9v60qb45b0jgkk7l7s4.apps.googleusercontent.com'
                onLoginSuccess={onLoginSuccess}
                onLoginFailure={onLoginFailure}
                onLogoutSuccess={onLogoutSuccess}
                onLogoutFailure={onLogoutFailure}
                getInstance={setNodeRef(this, 'google')}
                key={'google'}
                scope={'https://www.googleapis.com/auth/user.gender.read'}
            />
            <FacebookButton
                provider='facebook'
                appId={880254119122626}
                onLoginSuccess={onLoginSuccess}
                onLoginFailure={onLoginFailure}
                onLogoutSuccess={onLogoutSuccess}
                getInstance={setNodeRef(this, 'facebook')}
                key={'facebook'}
            />
            <InstegramButton
                autoCleanUri
                provider='instagram'
                appId='afdf675d26214280ac9a792afea5651c'
                redirect={"http://localhost:3000"}
                onLoginSuccess={onLoginSuccess}
                onLoginFailure={onLoginFailure}
                onLogoutSuccess={onLogoutSuccess}
                getInstance={setNodeRef(this, 'instagram')}
                key={'instagram'}
            />
        </div>


    );
}

export default SocialButtonsContainer;
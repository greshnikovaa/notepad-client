import React from 'react'
import styles from './Login.module.css'
import {Instagram, Discord, Facebook, PenFill} from 'react-bootstrap-icons'

const Login = () => {
    return (
        <div className='mein_login'>
            <div></div>
            <div>
                <h1>Welcome to <span className="span">Notepad Web</span></h1>
                <div className="btn">
                    <PenFill/>
                    <p>New Note</p>
                </div>
            </div>
            <div className="footer">
                <p className="develop">developed by <span className="span">Natanael Oliveira Martins</span></p>
                <div>
                    <Instagram className='i'/>
                    <Discord className='i'/>
                    <Facebook className='i'/>
                </div>
            </div>
        </div>
    );
};
export default Login
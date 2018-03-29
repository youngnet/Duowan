import React from 'react'
import PropTypes from "prop-types"
import Profile from "../profile/Profile";
import './Register.less'

class Register extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div className="profile">
            <div>
                <h2>账号注册</h2>
            </div>
            <div>
                <div>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    }
}


export default Register;
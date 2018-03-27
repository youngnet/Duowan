import React from 'react'
import PropTypes from "prop-types"
import './Login and registration.less'

class SignIn extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className="sign">
            <span className="iconfont icon-guanbi arrow">
            </span>
            <div className="singin">
                        <img src={require("../../common/img/105628v3943kuuzudkekdk.png")} alt =""/>
                <div>
                    <input type="text" placeholder='手机号/YY通行证'/>
                    <input type="text" placeholder='登录密码'/>
                    <i>___________________________</i>
                    <i>___________________________</i>
                </div>
            </div>
        </div>
    }
}

export default SignIn;
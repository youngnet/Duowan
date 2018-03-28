import React from 'react'
import PropTypes from "prop-types"
import './Login and registration.less'

class SignIn extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className="sign">
            <div className="singin">
                <span className="iconfont icon-guanbi arrow">X</span>
                        <img className="xxx" src={require("../../common/img/105628v3943kuuzudkekdk.png")} alt =""/>
                <div className="current">
                    <div className="current-one">
                    <input className="current-two" type="text" placeholder='手机号/YY通行证'/>
                    <input className="current-two" type="text" placeholder='登录密码'/>
                    </div>
                    <p><i>登录</i></p>
                    <p><i>忘记密码</i></p>
                </div>
            </div>






        </div>
    }
}

export default SignIn;
import React from 'react'
import PropTypes from "prop-types"
import './Register.less'

class Register extends React.Component{
    constructor(){
        super()
    }
    componentDidMount(){
        let h=document.documentElement.clientHeight;
        this.sing.style.height=h+'px'
    }
    render(){
        return <div ref={s=>{this.sing=s}} className="sing">
            <div className="singin">
                <span className="iconfont icon-guanbi arrow"></span>
                <img className="xxx" src={require("../../common/img/105628v3943kuuzudkekdk.png")} alt =""/>
                <div className="current">
                    <div className="current-one">
                        <input className="current-two" type="text" placeholder='   手机号/YY通行证'/>
                        <input className="current-two" type="text" placeholder='   登录密码'/>
                        <input className="current-two" type="text" placeholder='   确认密码'/>
                    </div>
                </div>
            </div>
            <div className="password">
                <p className="password-one"><span>立即注册</span></p>
            </div>
        </div>
    }
}

export default Register;